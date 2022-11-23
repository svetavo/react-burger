import { useState } from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../Modal/Modal";
import OrderDetails from "./OrderDetails/OrderDetails";
import summaryStyles from "./Summary.module.css";
import { getOrder } from "../../../utils/api";

export default function Summary({ total, addedIngredients }) {
  const [isOpen, setIsOpen] = useState(false);
  const [orderId, setOrderId] = useState(0);

  const handleOrder = () => {
    getOrder(addedIngredients).then((res) => {
      setOrderId(res.order.number);
    });
    setIsOpen(true);
  };

  return (
    <div className={summaryStyles.burger__summary}>
      <div className={summaryStyles.burger__totalprice}>
        <p
          className={`${summaryStyles.burger__summarytext} text text_type_digits-medium`}
        >
          {total}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={() => handleOrder()}
      >
        Оформить заказ
      </Button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <OrderDetails orderNumber={orderId} />
      </Modal>
    </div>
  );
}
