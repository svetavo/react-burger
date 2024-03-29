import orderDetailsStyles from "./OrderDetails.module.css";
import done from "../../../../images/done.png";
import React from "react";
import { useSelector } from "../../../../utils/hooks";

export const OrderDetails: React.FC = () => {
  const { orderNumber } = useSelector((store) => store.orderNumber);

  return (
    <div className={orderDetailsStyles.order__content}>
      {orderNumber ? (
        <p
          className={`${orderDetailsStyles.order__number} text text_type_digits-large mb-8`}
        >
          {orderNumber}
        </p>
      ) : (
        <div className={orderDetailsStyles.loaderContainer}>
          <div className={`${orderDetailsStyles.loader} mb-6`}></div>
        </div>
      )}

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
};
