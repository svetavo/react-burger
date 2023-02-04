export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const ADD_BUN = "ADD_BUN";
export const UPDATE_BUN = "UPDATE_BUN";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SORT_INGREDIENTS = "SORT_INGREDIENTS";
export const CLEAR_INGREDIENTS = "CLEAR_INGREDIENTS";
export const CLEAR_TOTAL = "CLEAR_TOTAL";

export const addBun = (item) => {
  return {
    type: ADD_BUN,
    payload: {
      bun: item,
    },
  };
};

export const addIngredient = (item) => {
  return {
    type: ADD_INGREDIENT,
    payload: {
      item: item,
      _id: item._id,
    },
  };
};

export const removeIngredient = (id) => {
  return {
    type: REMOVE_INGREDIENT,
    id: id,
  };
};

export const clearIngredients = () => {
  return {
    type: CLEAR_INGREDIENTS,
  };
};

export const incrementPrice = (item) => {
  return {
    type: INCREMENT,
    payload: {
      item: item,
      price: item.price,
    },
  };
};

export const decrementPrice = (item) => {
  return {
    type: DECREMENT,
    payload: {
      item: item,
      price: item.price,
    },
  };
};

export const clearTotal = () => {
  return {
    type: CLEAR_TOTAL,
  };
};

