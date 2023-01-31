import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers";
import { socketMiddleware } from "../utils/socketMiddleware";
import { wsActions } from "./actions/ws_connection_actions";
import { wsAuthActions } from "./actions/ws_connection_actions_auth";
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

export default store;
