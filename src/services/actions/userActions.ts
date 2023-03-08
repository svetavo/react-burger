import {
  newUserReg,
  login,
  tokenRefresh,
  logout,
  userGetInfo,
  userPatchInfo,
} from "../../utils/api";
import { setCookie, deleteCookie } from "../../utils/cookie";
import { AppThunk } from "../../services/store";
import { UserTypes } from "../../utils/types/user_types";
import { AppDispatch } from "../store";

export const newUser: AppThunk = (
  email: string,
  password: string,
  name: string
) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UserTypes.NEW_USER_REQUEST,
      email: email,
      password: password,
      name: name,
    });
    newUserReg({ email, password, name })
      .then((res) => {
        dispatch({
          type: UserTypes.NEW_USER_OK,
          email: res.user.email,
          password: res.user.password,
          name: res.user.name,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      })
      .catch(() =>
        dispatch({
          type: UserTypes.NEW_USER_FAIL,
        })
      );
  };
};

export const userLogin: AppThunk = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UserTypes.LOGIN_REQUEST,
      email: email,
      password: password,
    });
    login(email, password)
      .then((res) => {
        dispatch({
          type: UserTypes.LOGIN_OK,
          email: res.user.email,
          name: res.user.name,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
      })
      .catch(() => {
        dispatch({
          type: UserTypes.LOGIN_FAIL,
        });
        alert("Упс, вы ввели неправильный логин или пароль");
      });
  };
};

export const refreshToken = (token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UserTypes.TOKEN_REQUEST,
    });
    tokenRefresh()
      .then((res) => {
        const accessToken = res.accessToken.split("Bearer ")[1];
        setCookie("token", accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch({
          type: UserTypes.TOKEN_OK,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      })
      .catch(() =>
        dispatch({
          type: UserTypes.TOKEN_FAIL,
        })
      );
  };
};

export const userLogout: AppThunk = (token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UserTypes.LOGOUT_REQUEST,
      token: token,
    });
    logout(token)
      .then((res) => {
        if (res.success) {
          window.localStorage.removeItem("accessToken");
          window.localStorage.removeItem("refreshToken");
          deleteCookie("token");
        }
        dispatch({
          type: UserTypes.LOGOUT_OK,
        });
      })
      .catch(() =>
        dispatch({
          type: UserTypes.LOGOUT_FAIL,
        })
      );
  };
};

export const getUser: AppThunk = (token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UserTypes.GET_USER_INFO_REQUEST,
      token: token,
    });
    // userGetInfo(token)
    userGetInfo()
      .then((res) => {
        dispatch({
          type: UserTypes.GET_USER_INFO_OK,
          email: res.user.email,
          name: res.user.name,
        });
      })
      .catch(() => dispatch({ type: UserTypes.GET_USER_INFO_FAIL }));
  };
};

export const patchUser: AppThunk = (
  email: string,
  name: string,
  password: string
) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UserTypes.PATCH_USER_INFO_REQUEST,
      email: email,
      name: name,
    });
    userPatchInfo(email, name, password)
      .then((res) => {
        dispatch({
          type: UserTypes.PATCH_USER_INFO_OK,
          email: res.user.email,
          name: res.user.name,
        });
      })
      .catch(() => dispatch({ type: UserTypes.PATCH_USER_INFO_FAIL }));
  };
};
