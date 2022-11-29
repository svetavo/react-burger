const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFail: false,
  isLoaded: false,
  error: null
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INGREDIENTS_OK":
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFail: false,
        isLoaded: true,
      };
    case "FETCH_INGREDIENTS_REQUEST":
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFail: false,
      };
    case "FETCH_INGREDIENTS_FAIL":
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFail: true,
        error: action.error
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
