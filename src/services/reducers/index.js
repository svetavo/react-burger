import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import orderNumberReducer from "./orderReducer";
import {constructorReducer, totalPriceReducer} from "./constructorReducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  addedIngredients: constructorReducer,
  orderNumber: orderNumberReducer,
  total: totalPriceReducer
});

export default rootReducer;
