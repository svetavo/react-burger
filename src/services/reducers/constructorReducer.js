const initialState = {
  buns: [],
  ingredients: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BUN": {
      return {
        ...state,
        buns: [action.bun],
      };
    }

    case "ADD_INGREDIENT": {
      const newArr = [...state.ingredients];
      const newIngredient = { ...action.ingredient };
      newIngredient.id = action.id;
      newArr.push(newIngredient);
      return {
        ...state,
        ingredients: newArr,
      };
    }

    // case "REMOVE_INGREDIENT":
    //   return {
    //     ...state,
    //     ingredients: state.ingredients.filter(
    //       (ingredient) => ingredient._id !== action._id
    //     ),
    //   };

    case "MOVE_INGREDIENTS": {
      return {
        ...state,
        ingredients: [...action.sortedArray],
      };
    }
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
      return { ...state, total: state.total + action.payload.item };
    case "DECREMENT":
      return { ...state, total: state.total - action.payload.item };
    default:
      return state;
  }
};
