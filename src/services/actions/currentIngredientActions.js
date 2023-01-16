export const ADD_CURRENT = "ADD_CURRENT";
export const REMOVE_CURRENT = "REMOVE_CURRENT";

export const addCurrent = (item) => {
  return function (dispatch) {
    dispatch({ type: ADD_CURRENT, item: item });
    // history.replace({ pathname: `/ingredients/${item._id}` });
  };
};

export const removeCurrent = () => {
  return {
    type: REMOVE_CURRENT,
  };
};
