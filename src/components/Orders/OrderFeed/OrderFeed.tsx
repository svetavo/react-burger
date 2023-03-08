import styles from "./orderFeed.module.css";
import OrderItem from "../OrderItem/OrderItem";
import React from "react";
import { useSelector } from "../../../utils/hooks";

const OrderFeed: React.FC = (): JSX.Element => {
  const orders = useSelector((store) => store.orders.orders);

  return (
    <div className={styles.feed}>
      {orders!.orders.map((order) => (
        <OrderItem key={order._id} order={order} path={`/feed/${order._id}`} />
      ))}
    </div>
  );
};

export default OrderFeed;
