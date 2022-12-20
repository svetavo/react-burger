import {
  NEW_USER_REQUEST,
  NEW_USER_OK,
  NEW_USER_FAIL,
} from "../actions/userActions";

const initialState = {
  email: null,
  password: null,
  name: null,
  newUserRequest: false,
  newUserFail: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER_REQUEST:
      return {
        ...state,
        email: action.email,
        password: action.password,
        name: action.name,
        newUserRequest: false,
        newUserFail: false,
      };
    case NEW_USER_OK:
      return {
        ...state,
        newUserRequest: true,
        newUserFail: false,
      };
    case NEW_USER_FAIL:
      return {
        ...state,
        newUserRequest: false,
        newUserFail: true,
      };
    default:
      return state;
  }
};

export default userReducer;
