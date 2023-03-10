import styles from "./ordersSummary.module.css";
import React from "react";
import { useSelector } from "../../../utils/hooks";
import { TWsOrders } from "../../../utils/types/types";

const OrdersSummary: React.FC = () => {
  const data: TWsOrders | null = useSelector((store) => store.orders.orders);

  return (
    <section>
      <div className={styles.orders}>
        <div className={styles.orders__ready}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <div className={styles.orders__readyItems}>
            {data!.orders.map((order, index) =>
              order.status === "done" && index < 10 ? (
                <p
                  className={`${styles.orders__readyItem} mb-2 text text_type_digits-default`}
                  key={order._id}
                >
                  {order.number}
                </p>
              ) : null
            )}
          </div>
        </div>
        <div className={styles.orders__inProcess}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <div className={styles.orders__inProcessItems}>
            {data!.orders.map((order, index) =>
              order.status !== "done" && index < 10 ? (
                <p
                  className={`${styles.orders__inProcessItem} mb-2 text text_type_digits-default`}
                  key={order._id}
                >
                  {order.number}
                </p>
              ) : null
            )}
          </div>
        </div>
      </div>
      <div className={styles.orders__summary}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p
          className={`${styles.orders__summaryText} text text_type_digits-large mb-15`}
        >
          {data!.total}
        </p>
      </div>
      <div className={styles.orders__summary}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p
          className={`${styles.orders__summaryText} text text_type_digits-large`}
        >
          {data!.totalToday}
        </p>
      </div>
    </section>
  );
};

export default OrdersSummary;
