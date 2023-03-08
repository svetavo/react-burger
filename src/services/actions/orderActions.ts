import { getOrder } from "../../utils/api";
import { OrderTypes } from "../../utils/types/order_types";
import { AppThunk } from "../../services/store";
import { AppDispatch } from "../store";

export const getOrderNumber: AppThunk = (addedIngredients: any[]) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: OrderTypes.GET_ORDER_REQUEST,
    });
    getOrder(addedIngredients)
      .then((res) => {
        dispatch({
          type: OrderTypes.GET_ORDER_OK,
          orderNumber: res.order.number,
        });
      })
      .catch(() =>
        dispatch({
          type: OrderTypes.GET_ORDER_ERROR,
        })
      );
  };
};
 