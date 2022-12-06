export const addBun = (item) => {
  return {
    type: "ADD_BUN",
    payload: {
      bun: item,
    },
  };
};

export const updateBun = (item) => {
  return {
    type: "UPDATE_BUN",
    payload: {
      bun: item,
    },
  };
};

export const addIngredient = (item) => {
  return {
    type: "ADD_INGREDIENT",
    payload: {
      item: item,
      _id: item._id,
    },
  };
};

export const removeIngredient = (id) => {
  return {
    type: "REMOVE_INGREDIENT",
    id: id,
  };
};

export const sortIngredients = (newArray) => {
  return {
    type: "MOVE_INGREDIENTS",
    payload: {
      sortedArray: newArray,
    },
  };
};

export const incrementPrice = (item) => {
  return {
    type: "INCREMENT",
    payload: {
      item: item,
      price: item.price,
    },
  };
};

export const decrementPrice = (item) => {
  return {
    type: "DECREMENT",
    payload: {
      item: item,
      price: item.price,
    },
  };
};
