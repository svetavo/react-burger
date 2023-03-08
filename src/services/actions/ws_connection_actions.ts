import {
  WsTypes,
  IWsConnectionClosed,
  IWsConnectionErr,
  IWsConnectionOpen,
  IWsConnectionSuccess,
  IWsGetOrders,
  IWsSendData,
} from "../../utils/types/ws_connection_types";
import { TWsOrders } from "../../utils/types/types";

// для всех заказов

export const wsActions = {
  wsInit: WsTypes.WS_CONNECTION_SUCCESS,
  onOpen: WsTypes.WS_CONNECTION_OPEN,
  onError: WsTypes.WS_CONNECTION_ERROR,
  onClose: WsTypes.WS_CONNECTION_CLOSED,
  onMessage: WsTypes.WS_GET_ORDERS,
  wsSendData: WsTypes.WS_SEND_DATA,
};

export const wsConnectionInit = (): IWsConnectionSuccess => {
  return {
    type: WsTypes.WS_CONNECTION_SUCCESS,
  };
};

export const wsConnectionOpen = (): IWsConnectionOpen => {
  return {
    type: WsTypes.WS_CONNECTION_OPEN,
  };
};

export const wsConnectionClose = (): IWsConnectionClosed => {
  return {
    type: WsTypes.WS_CONNECTION_CLOSED,
  };
};

export const wsConnectionError = (error: string): IWsConnectionErr => {
  return {
    type: WsTypes.WS_CONNECTION_ERROR,
    payload: error,
  };
};

// DATA TYPES!!!!
export const wsGetOrders = (data: TWsOrders): IWsGetOrders => {
  return {
    type: WsTypes.WS_GET_ORDERS,
    payload: data,
  };
};

export const wsSendData = (data: object): IWsSendData => {
  return {
    type: WsTypes.WS_SEND_DATA,
    payload: data,
  };
};
