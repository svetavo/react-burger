import styles from "./orderList.module.css";
import OrderItem from "../OrderItem/OrderItem";

const OrderList = () => {
  const orders = "";

  return (
    <section>
      <h2 className="pt-10 pb-5 text text_type_main-large">Лента заказов</h2>
      <div className={styles.list}>
        {orders.map((item) => (
          <OrderItem key={item._id} item={item}/>
        ))}
      </div>
      ;
    </section>
  );
};

export default OrderList;
