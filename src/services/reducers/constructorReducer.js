const initialState = {
  addedBuns: [],
  addedIngredients: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BUN":
      return { ...state, addedBuns: action.item };
    case "ADD_INGREDIENT":
      return { ...state, addedIngredients: action.item };
    case "REMOVE_INGREDIENT":
      return {
        addedingredients: state.addedIngredients.filter(
          (item, id) => id !== action.id
        ),
      };
    default:
      return state;
  }
};

const initialPrice = {
  total: 0,
};

export const totalPriceReducer = (state = initialPrice, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, price: state.price + action.price };
    case "DECREMENT":
      return { ...state, price: state.price - action.price };
    default:
      return state;
  }
};


