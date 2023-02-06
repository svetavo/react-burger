import OrderItem from "../OrderItem/OrderItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./ordersHistory.module.css";
import {
  wsConnectionInitAuth,
  wsConnectionCloseAuth,
} from "../../../services/actions/ws_connection_actions_auth";
import { useState } from "react";

const OrdersHistory = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.ordersAuth.ordersAuth);
  const [ordersReverse, setOrdersReverse] = useState([]);

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
          {ordersReverse.map((order) => (
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
