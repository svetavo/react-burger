import {
  ADD_CURRENT_ING,
  REMOVE_CURRENT_ING,
  ADD_CURRENT_ORDER,
  REMOVE_CURRENT_ORDER,
} from "../actions/currentIngredientActions";

const initialState = {
  currentIngredient: "",
  currentOrder: "",
};

export const currentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_ING:
      return { ...state, currentIngredient: action.item };
    case REMOVE_CURRENT_ING:
      return { ...state, currentIngredient: "" };
    case ADD_CURRENT_ORDER:
      return { ...state, currentOrder: action.item };
    case REMOVE_CURRENT_ORDER:
      return { ...state, currentOrder: "" };
    default:
      return state;
  }
};

export default currentReducer;
