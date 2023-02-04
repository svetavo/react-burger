import OrderItem from "../OrderItem/OrderItem";
import { useSelector } from "react-redux";
import styles from "./ordersHistory.module.css";

const OrdersHistory = () => {
  const { orders } = useSelector((store) => store.ordersAuth.ordersAuth);
  const ordersReverse = orders.reverse();

  return (
    !!orders && (
      <div className={styles.profileFeedContainer}>
        {ordersReverse.map((order) => (
          <OrderItem order={order} path={`/profile/orders/${order._id}`} key={order._id} />
        ))}
      </div>
    )
  );
};

export default OrdersHistory;
