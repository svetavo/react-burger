import { combineReducers } from "redux";
import ingredientsReducer from "./ingredientsReducer";
import { orderNumberReducer } from "./orderReducer";
import { constructorReducer, totalPriceReducer } from "./constructorReducer";
import currentReducer from "./currentIngredientReducer";
import { passwordReducer } from "./passwordReducer";
import { userReducer } from "./userReducer";
import { wsReducer } from "./ws_connection_reducer";
import { wsReducerAuth } from "./ws_connection_reducer_auth";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  orders: wsReducer,
  ordersAuth: wsReducerAuth,
  addedIngredients: constructorReducer,
  orderNumber: orderNumberReducer,
  total: totalPriceReducer,
  current: currentReducer,
  user: userReducer,
  password: passwordReducer,
});

export default rootReducer;
