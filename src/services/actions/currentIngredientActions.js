const ADD_CURRENT = "ADD_CURRENT";
const REMOVE_CURRENT = "REMOVE_CURRENT";

export const addCurrent = (item) => {
  return {
    type: ADD_CURRENT,
    item: item,
  };
};

export const removeCurrent = () => {
  return {
    type: REMOVE_CURRENT,
  };
};
