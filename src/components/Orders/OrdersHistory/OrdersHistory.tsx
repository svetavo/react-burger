import OrderItem from "../OrderItem/OrderItem";
import { useEffect } from "react";
import styles from "./ordersHistory.module.css";
import {
  wsConnectionInitAuth,
  wsConnectionCloseAuth,
} from "../../../services/actions/ws_connection_actions_auth";
import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "../../../utils/hooks";
import { TOrder } from "../../../utils/types/types";

const OrdersHistory : React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.ordersAuth.ordersAuth);
  const [ordersReverse, setOrdersReverse] = useState<any[]>([]);

  useEffect(() => {
    if (orders) {
      const reverse = orders.orders.reverse();
      setOrdersReverse(reverse);
    }
  }, [orders]);

  useEffect(() => {
    dispatch(wsConnectionInitAuth());
    return () => {
      dispatch(wsConnectionCloseAuth());
    };
  }, [dispatch]);

  return (
    <div className={styles.profileFeedContainer}>
      {orders ? (
        <>
          {ordersReverse.map((order: TOrder) => (
            <OrderItem
              order={order}
              path={`/profile/orders/${order._id}`}
              key={order._id}
            />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default OrdersHistory;
