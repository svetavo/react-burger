import { useSelector } from "react-redux";
import OrderFeed from "../components/Orders/OrderFeed/OrderFeed";
import OrdersSummary from "../components/Orders/OrdersSummary/OrdersSummary";
import styles from "./pagesStyles.module.css";

const OrdersPage = () => {
  const orders = useSelector((store) => store.orders.orders);

  return (
    !!orders && (
      <div>
        <h2 className="text text_type_main-large mt-10 mb-5 pl-4">
          Лента заказов
        </h2>
        <div className={styles.columns}>
          <OrderFeed />
          <OrdersSummary />
        </div>
      </div>
    )
  );
};

export default OrdersPage;
