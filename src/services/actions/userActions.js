import { newUserReg } from "../../utils/api";
export const NEW_USER_REQUEST = "NEW_USER_REQUEST";
export const NEW_USER_OK = "NEW_USER_OK";
export const NEW_USER_FAIL = "NEW_USER_FAIL";

export const newUser = () => {
  return function (dispatch) {
    dispatch({
      type: NEW_USER_REQUEST,
    });
    newUserReg()
      .then((res) => {
        dispatch({
          type: NEW_USER_OK,
          email: res.email,
          password: res.password,
          name: res.name,
        });
      })
      .catch(() =>
        dispatch({
          type: NEW_USER_FAIL,
        })
      );
  };
};
