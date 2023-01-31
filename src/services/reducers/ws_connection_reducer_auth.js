import {
  WS_AUTH_CONNECTION_SUCCESS,
  WS_AUTH_CONNECTION_ERROR,
  WS_AUTH_CONNECTION_CLOSED,
  WS_AUTH_GET_ORDERS,
} from "../actions/ws_connection_actions_auth";

const initialState = {
  wsConnected: false,
  ordersAuth: null,
  error: undefined,
};

export const wsReducerAuth = (state = initialState, action) => {
  switch (action.type) {
    case WS_AUTH_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WS_AUTH_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WS_AUTH_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case WS_AUTH_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        ordersAuth: action.payload,
      };
    default:
      return state;
  }
};
