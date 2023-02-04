import {
  ADD_BUN,
  ADD_INGREDIENT,
  DECREMENT,
  INCREMENT,
  REMOVE_INGREDIENT,
  SORT_INGREDIENTS,
  CLEAR_INGREDIENTS,
  CLEAR_TOTAL,
} from "../actions/constructorActions";

const initialState = {
  buns: [],
  ingredients: [],
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BUN: {
      return {
        ...state,
        buns: [action.bun],
      };
    }

    case ADD_INGREDIENT: {
      const newArr = [...state.ingredients];
      const newIngredient = { ...action.ingredient };
      newIngredient.uuid = action.uuid;
      newArr.push(newIngredient);
      return {
        ...state,
        ingredients: newArr,
      };
    }

    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.uuid !== action.uuid
        ),
      };

    case SORT_INGREDIENTS: {
      return { ...state, ingredients: [...action.sortedArray] };
    }

    case CLEAR_INGREDIENTS: {
      return { buns: [], ingredients: [] };
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
    case INCREMENT:
      return { ...state, total: state.total + action.payload.item };
    case DECREMENT:
      return { ...state, total: state.total - action.payload.item };
      case CLEAR_TOTAL:
        return { ...state, total: 0 };
  
    default:
      return state;
  }
};
