import { useEffect } from "react";
import OrderFeed from "../components/Orders/OrderFeed/OrderFeed";
import OrdersSummary from "../components/Orders/OrdersSummary/OrdersSummary";
import styles from "./pagesStyles.module.css";
import {
  wsConnectionInit,
  wsConnectionClose,
} from "../services/actions/ws_connection_actions";
import { useDispatch, useSelector } from "../utils/hooks";

const OrdersPage: React.FC = (): JSX.Element | null => {
  const orders = useSelector((store) => store.orders.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionInit());
    return () => {
      dispatch(wsConnectionClose());
    };
  }, [dispatch]);

  return orders ? (
    <div>
      <h2 className="text text_type_main-large mt-10 mb-5 pl-4">
        Лента заказов
      </h2>
      <div className={styles.columns}>
        <OrderFeed />
        <OrdersSummary />
      </div>
    </div>
  ) : null;
};

export default OrdersPage;
