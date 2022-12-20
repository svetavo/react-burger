import {
  NEW_USER_REQUEST,
  NEW_USER_OK,
  NEW_USER_FAIL,
  LOGIN_REQUEST,
  LOGIN_OK,
  LOGIN_FAIL,
  TOKEN_REQUEST,
  TOKEN_OK,
  TOKEN_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_OK,
  LOGOUT_FAIL,
} from "../actions/authorisationActions";

const initialState = {
  email: null,
  password: null,
  name: null,
  accessToken: null,
  refreshToken: null,
  request: false,
  fail: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER_OK:
      return {
        ...state,
        email: action.email,
        password: action.password,
        name: action.name,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        request: true,
        fail: false,
      };
    case NEW_USER_REQUEST:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case NEW_USER_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    default:
      return state;
  }
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_OK:
      return {
        ...state,
        email: action.email,
        name: action.name,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        request: true,
        fail: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    default:
      return state;
  }
};

export const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_OK:
      return {
        ...state,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        request: true,
        fail: false,
      };
    case TOKEN_REQUEST:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case TOKEN_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    default:
      return state;
  }
};

export const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_OK:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        request: true,
        fail: false,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        request: false,
        fail: true,
      };
    default:
      return state;
  }
};
