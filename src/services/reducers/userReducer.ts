import {
  UserTypes,
  IGetUserFail,
  IGetUserOk,
  IGetUserReq,
  ILoginFail,
  ILoginOk,
  ILoginReq,
  ILogoutFail,
  ILogoutOk,
  ILogoutReq,
  INewUserFail,
  INewUserOk,
  INewUserReq,
  IPatchUserFail,
  IPatchUserOk,
  IPatchUserReq,
  ITokenFail,
  ITokenOk,
  ITokenReq,
} from "../../utils/types/user_types";

interface IUserState {
  email: string | null;
  name: string | null;
  password: string | null;
  token: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  request: boolean;
  fail: boolean;
  isLoggedIn: boolean;
}

export type TUserAction =
  | IGetUserFail
  | IGetUserOk
  | IGetUserReq
  | ILoginFail
  | ILoginOk
  | ILoginReq
  | ILogoutFail
  | ILogoutOk
  | ILogoutReq
  | INewUserFail
  | INewUserOk
  | INewUserReq
  | IPatchUserFail
  | IPatchUserOk
  | IPatchUserReq
  | ITokenFail
  | ITokenOk
  | ITokenReq;

const initialState: IUserState = {
  email: "",
  name: "",
  password: "",
  token: "",
  accessToken: "",
  refreshToken: "",
  request: false,
  fail: false,
  isLoggedIn: false,
};

export const userReducer = (
  state = initialState,
  action: TUserAction
): IUserState => {
  switch (action.type) {
    case UserTypes.NEW_USER_OK:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case UserTypes.NEW_USER_REQUEST:
      return {
        ...state,
        email: action.email,
        name: action.name,
        request: true,
        fail: false,
      };
    case UserTypes.NEW_USER_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    case UserTypes.LOGIN_OK:
      return {
        ...state,
        email: action.email,
        name: action.name,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        isLoggedIn: true,
        request: true,
        fail: false,
      };
    case UserTypes.LOGIN_REQUEST:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case UserTypes.LOGIN_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    case UserTypes.TOKEN_OK:
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        request: true,
        fail: false,
      };
    case UserTypes.TOKEN_REQUEST:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case UserTypes.TOKEN_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    case UserTypes.LOGOUT_OK:
      return {
        ...state,
        email: null,
        name: null,
        isLoggedIn: false,
        accessToken: null,
        refreshToken: null,
        request: true,
        fail: false,
      };
    case UserTypes.LOGOUT_REQUEST:
      return {
        ...state,
        token: action.token,
        request: true,
        fail: false,
      };
    case UserTypes.LOGOUT_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    case UserTypes.GET_USER_INFO_REQUEST:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case UserTypes.GET_USER_INFO_OK:
      return {
        ...state,
        email: action.email,
        name: action.name,
        isLoggedIn: true,
        request: true,
        fail: false,
      };
    case UserTypes.GET_USER_INFO_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    case UserTypes.PATCH_USER_INFO_REQUEST:
      return {
        ...state,
        email: action.email,
        name: action.name,
        request: true,
        fail: false,
      };
    case UserTypes.PATCH_USER_INFO_OK:
      return {
        ...state,
        email: action.email,
        name: action.name,
        request: true,
        fail: false,
      };
    case UserTypes.PATCH_USER_INFO_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    default:
      return state;
  }
};
