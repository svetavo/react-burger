import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import orderNumberReducer from "./orderReducer";
import { constructorReducer, totalPriceReducer } from "./constructorReducer";
import currentIngredientReducer from "./currentIngredientReducer";
import {passwordReducer} from "./passwordReducer";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  addedIngredients: constructorReducer,
  orderNumber: orderNumberReducer,
  total: totalPriceReducer,
  current: currentIngredientReducer,
  user: userReducer,
  password: passwordReducer
});

export default rootReducer;
