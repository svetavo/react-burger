import { getOrder } from "../../utils/api";
const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
const GET_ORDER_OK = "GET_ORDER_OK";
const GET_ORDER_ERROR = "GET_ORDER_ERROR";

export const getOrderNumber = (addedIngredients) => {
  return function (dispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    getOrder(addedIngredients)
      .then((res) => {
        dispatch({
          type: GET_ORDER_OK,
          orderNumber: res.order.number,
        });
      })
      .catch(() =>
        dispatch({
          type: GET_ORDER_ERROR,
        })
      );
  };
};
