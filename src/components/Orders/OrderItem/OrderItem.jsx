import styles from "./orderItem.module.css";
import { formattedDate } from "../../../utils/formattedDate";

const OrderItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.info}>
        <h3 className="text text_type_digits-default">{item.number}</h3>
        <p>{item.createdAt}</p>
      </div>
      <h3 className="text text_type_main-medium">name</h3>
      <div className={styles.pictos}>
        {ingredients.map((ingredient) => (
          <img className={styles.picto} key={ingredient._id}/>
        ))}
      </div>
      <p className="text text_type_digits-default">
        price
        <CurrencyIcon type="primary" />
      </p>
    </div>
  );
};

export default OrderItem;
