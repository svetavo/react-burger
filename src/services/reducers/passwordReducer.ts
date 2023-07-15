import {
  PasswordTypes,
  IForgotPassReq,
  IForgotPassFail,
  IForgotPassOk,
  INewPassFail,
  INewPassOk,
  INewPassReq,
} from "../../utils/types/password_types";

interface IPasswordState {
  email: null | string;
  password: string;
  token: string;
  passRequest: boolean;
  passFail: boolean;
  newPassRequest: boolean;
  newPassFail: boolean;
}

export type TPasswordAction =
  | IForgotPassFail
  | IForgotPassOk
  | IForgotPassReq
  | INewPassFail
  | INewPassOk
  | INewPassReq;

const initialState: IPasswordState = {
  email: null,
  password: "",
  token: "",
  passRequest: false,
  passFail: false,
  newPassRequest: false,
  newPassFail: false,
};

export const passwordReducer = (
  state = initialState,
  action: TPasswordAction
): IPasswordState => {
  switch (action.type) {
    case PasswordTypes.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        email: action.email,
        passRequest: false,
        passFail: false,
      };
    case PasswordTypes.FORGOT_PASSWORD_OK:
      return {
        ...state,
        passRequest: true,
        passFail: false,
      };
    case PasswordTypes.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        passRequest: false,
        passFail: true,
      };

    case PasswordTypes.NEW_PASSWORD_REQUEST:
      return {
        ...state,
        password: action.password,
        token: action.token,
        newPassRequest: false,
        newPassFail: false,
      };
    case PasswordTypes.NEW_PASSWORD_OK:
      return {
        ...state,
        newPassRequest: true,
        newPassFail: false,
      };
    case PasswordTypes.NEW_PASSWORD_FAIL:
      return {
        ...state,
        newPassRequest: false,
        newPassFail: true,
      };
    default:
      return state;
  }
};
