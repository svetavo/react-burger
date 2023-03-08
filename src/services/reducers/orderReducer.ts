import {
  OrderTypes,
  IGetOrderErr,
  IGetOrderOk,
  IGetOrderReq,
} from "../../utils/types/order_types";

interface IOrderState {
  orderNumber: number;
  orderRequest: boolean;
  orderFail: boolean;
}

export type TOrderAction = IGetOrderErr | IGetOrderOk | IGetOrderReq;

const initialStateNumber: IOrderState = {
  orderNumber: 0,
  orderRequest: false,
  orderFail: false,
};

export const orderNumberReducer = (
  state = initialStateNumber,
  action: TOrderAction
): IOrderState => {
  switch (action.type) {
    case OrderTypes.GET_ORDER_OK:
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderRequest: false,
        orderFail: false,
      };
    case OrderTypes.GET_ORDER_REQUEST:
      return {
        ...state,
        orderRequest: true,
        orderFail: false,
      };
    case OrderTypes.GET_ORDER_ERROR:
      return {
        ...state,
        orderRequest: false,
        orderFail: true,
      };
    default:
      return state;
  }
};
