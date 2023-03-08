import { passwordReset, newPass } from "../../utils/api";
import { AppDispatch } from "../store";
import { PasswordTypes } from "../../utils/types/password_types";
import { AppThunk } from "../../services/store"

export const resetPassword: AppThunk = (email: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: PasswordTypes.FORGOT_PASSWORD_REQUEST,
      email: email,
    });
    passwordReset(email)
      .then((res) => {
        if (res.success) {
          dispatch({
            type: PasswordTypes.FORGOT_PASSWORD_OK,
          });
        }
      })
      .catch(() =>
        dispatch({
          type: PasswordTypes.FORGOT_PASSWORD_FAIL,
        })
      );
  };
};

export const newPassword: AppThunk = (password: string, token: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: PasswordTypes.NEW_PASSWORD_REQUEST,
      password: password,
      token: token,
    });
    newPass(password, token)
      .then((res) => {
        dispatch({
          type: PasswordTypes.NEW_PASSWORD_OK,
        });
      })
      .catch(() =>
        dispatch({
          type: PasswordTypes.NEW_PASSWORD_FAIL,
        })
      );
  };
};
