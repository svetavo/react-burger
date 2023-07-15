import { TWsOrders } from "../../utils/types/types";
import {
  WsTypes,
  IWsConnectionClosed,
  IWsConnectionErr,
  IWsConnectionOpen,
  IWsConnectionSuccess,
  IWsGetOrders,
  IWsSendData,
} from "../../utils/types/ws_connection_types";

interface IWsState {
  wsConnected: boolean;
  orders: TWsOrders | null;
  error: undefined | string;
}

export type TWsActions =
  | IWsConnectionClosed
  | IWsConnectionErr
  | IWsConnectionOpen
  | IWsConnectionSuccess
  | IWsGetOrders
  | IWsSendData;

const initialState: IWsState = {
  wsConnected: false,
  orders: null,
  error: undefined,
};

export const wsReducer = (
  state = initialState,
  action: TWsActions
): IWsState => {
  switch (action.type) {
    case WsTypes.WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WsTypes.WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WsTypes.WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };

    case WsTypes.WS_GET_ORDERS:
      return {
        ...state,
        error: undefined,
        orders: action.payload,
      };
    default:
      return state;
  }
};
