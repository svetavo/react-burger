import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers";
import { socketMiddleware } from "../utils/socketMiddleware";
import { wsActions } from "./actions/ws_connection_actions";
import { wsAuthActions } from "./actions/ws_connection_actions_auth";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { TConstructorAction } from "../services/reducers/constructorReducer";
import { TCurrentAction } from "../services/reducers/currentIngredientReducer";
import { TIngredientsAction } from "../services/reducers/ingredientsReducer";
import { TOrderAction } from "../services/reducers/orderReducer";
import { TPasswordAction } from "../services/reducers/passwordReducer";
import { TUserAction } from "../services/reducers/userReducer";
import { TWsAuthActions } from "../services/reducers/ws_connection_reducer_auth";
import { TWsActions } from "../services/reducers/ws_connection_reducer";

const initialState = {};
const wsUrl = "wss://norma.nomoreparties.space/orders/all";
const wsUrlAuth = "wss://norma.nomoreparties.space/orders";

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      socketMiddleware(wsUrl, wsActions, false),
      socketMiddleware(wsUrlAuth, wsAuthActions, true)
    )
  )
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 

type TApplicationActions =
  | TConstructorAction
  | TCurrentAction
  | TIngredientsAction
  | TOrderAction
  | TPasswordAction
  | TUserAction
  | TWsAuthActions
  | TWsActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export default store;
