import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import orderNumberReducer from "./orderReducer";
import { constructorReducer, totalPriceReducer } from "./constructorReducer";
import currentIngredientReducer from "./currentIngredientReducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  addedIngredients: constructorReducer,
  orderNumber: orderNumberReducer,
  total: totalPriceReducer,
  current: currentIngredientReducer,
});

export default rootReducer;
