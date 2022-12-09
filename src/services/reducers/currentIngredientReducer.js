import {
  ADD_CURRENT,
  REMOVE_CURRENT,
} from "../actions/currentIngredientActions";

const initialState = {
  currentIngredient: null,
};

export const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT:
      return { ...state, currentIngredient: action.item };
    case REMOVE_CURRENT:
      return { ...state, currentIngredient: null };
    default:
      return state;
  }
};

export default currentIngredientReducer;
