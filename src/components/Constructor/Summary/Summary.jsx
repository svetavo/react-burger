import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../Modal/Modal";
import OrderDetails from "./OrderDetails/OrderDetails";
import summaryStyles from "./Summary.module.css";
import { getOrderNumber } from "../../../services/actions/orderActions";

export default function Summary() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const buns = useSelector((store) => store.addedIngredients.buns);
  const ingredients = useSelector(
    (store) => store.addedIngredients.ingredients
  );
  const addedIngredients = [...buns, ...ingredients];

  const total = useSelector((store) => store.total.total);

  const handleOrder = () => {
    dispatch(getOrderNumber(addedIngredients));
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
        <OrderDetails />
      </Modal>
    </div>
  );
}
