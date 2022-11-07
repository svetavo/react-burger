import orderDetailsStyles from "./OrderDetails.module.css";
import done from "../../images/done.svg";

export default function OrderDetails() {
  return (
    <div className={orderDetailsStyles.order__content}>
      <p
        className={`${orderDetailsStyles.order__number} text text_type_digits-large mb-8`}
      >
        034536
      </p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={done} className={`${orderDetailsStyles.order__pic} mb-15`} />
      <p className="text text_type_main-small mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
