import { newUserReg, login, tokenRefresh, logout } from "../../utils/api";

export const NEW_USER_REQUEST = "NEW_USER_REQUEST";
export const NEW_USER_OK = "NEW_USER_OK";
export const NEW_USER_FAIL = "NEW_USER_FAIL";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_OK = "LOGIN_OK";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const TOKEN_REQUEST = "TOKEN_REQUEST";
export const TOKEN_OK = "TOKEN_OK";
export const TOKEN_FAIL = "TOKEN_FAIL";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_OK = "LOGOUT_OK";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

export const newUser = () => {
  return function (dispatch) {
    dispatch({
      type: NEW_USER_REQUEST,
    });
    newUserReg()
      .then((res) => {
        dispatch({
          type: NEW_USER_OK,
          email: res.user.email,
          password: res.user.password,
          name: res.user.name,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      })
      .catch(() =>
        dispatch({
          type: NEW_USER_FAIL,
        })
      );
  };
};

export const userLogin = () => {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    });
    login()
      .then((res) => {
        dispatch({
          type: LOGIN_OK,
          email: res.user.email,
          name: res.user.name,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      })
      .catch(() =>
        dispatch({
          type: LOGIN_FAIL,
        })
      );
  };
};

export const token = () => {
  return function (dispatch) {
    dispatch({
      type: TOKEN_REQUEST,
    });
    tokenRefresh()
      .then((res) => {
        dispatch({
          type: TOKEN_OK,
          accessToken: res.accessToken,
          refreshToken: res.refreshToken,
        });
      })
      .catch(() =>
        dispatch({
          type: TOKEN_FAIL,
        })
      );
  };
};

export const userLogout = () => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    logout()
      .then((res) => {
        dispatch({
          type: LOGOUT_OK,
          message: res.message,
        });
      })
      .catch(() =>
        dispatch({
          type: LOGOUT_FAIL,
        })
      );
  };
};
