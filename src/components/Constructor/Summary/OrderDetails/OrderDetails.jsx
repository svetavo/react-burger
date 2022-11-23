import orderDetailsStyles from "./OrderDetails.module.css";
import done from "../../../../images/done.svg";
import PropTypes from "prop-types";

export default function OrderDetails({ orderNumber }) {
  
 return (
    <div className={orderDetailsStyles.order__content}>
      <p
        className={`${orderDetailsStyles.order__number} text text_type_digits-large mb-8`}
      >
        {orderNumber}
      </p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img
        src={done}
        alt="готово!"
        className={`${orderDetailsStyles.order__pic} mb-15`}
      />
      <p className="text text_type_main-small mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};
