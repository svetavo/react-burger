export const ADD_CURRENT_ING = "ADD_CURRENT_ING";
export const REMOVE_CURRENT_ING = "REMOVE_CURRENT_ING";
export const ADD_CURRENT_ORDER = "ADD_CURRENT_ORDER";
export const REMOVE_CURRENT_ORDER = "REMOVE_CURRENT_ORDER";


export const addCurrentIng = (item) => {
  return function (dispatch) {
    dispatch({ type: ADD_CURRENT_ING, item: item });
  };
};

export const removeCurrentIng = () => {
  return {
    type: REMOVE_CURRENT_ING,
  };
};

export const addCurrentOrder = (item) => {
  return function (dispatch) {
    dispatch({ type: ADD_CURRENT_ORDER, item: item });
  };
};

export const removeCurrentOrder = () => {
  return {
    type: REMOVE_CURRENT_ORDER,
  };
};

