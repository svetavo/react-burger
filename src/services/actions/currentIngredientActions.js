export const addCurrent = (item) => {
  return {
    type: "ADD_CURRENT",
    item: item,
  };
};

export const removeCurrent = () => {
  return {
    type: "REMOVE_CURRENT",
  };
};
