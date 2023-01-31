import OrderItem from "../OrderItem/OrderItem";
import { useSelector } from "react-redux";
import styles from "./ordersHistory.module.css";

const OrdersHistory = () => {
  const {orders} = useSelector((store) => store.ordersAuth.ordersAuth);

  return (
    !!orders && (
      <div className={styles.profileFeedContainer}>
        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
    )
  );
};

export default OrdersHistory;
