import {
  ADD_CURRENT,
  REMOVE_CURRENT,
} from "../actions/currentIngredientActions";

const initialState = {
  currentIngredient: '',
};

export const currentIngredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT:
      return { ...state, currentIngredient: action.item };
    case REMOVE_CURRENT:
      return { ...state, currentIngredient: '' };
    default:
      return state;
  }
};

export default currentIngredientReducer;
