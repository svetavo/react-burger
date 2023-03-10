import { useState } from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../../Modal/Modal";
import React from "react";
import { OrderDetails } from "./OrderDetails/OrderDetails";
import summaryStyles from "./Summary.module.css";
import { getOrderNumber } from "../../../services/actions/orderActions";
import { useHistory } from "react-router-dom";
import { clearIngredients } from "../../../services/actions/constructorActions";
import { clearTotal } from "../../../services/actions/constructorActions";
import { useDispatch, useSelector } from "../../../utils/hooks";
import { TItem } from "../../../utils/types/types";

export const Summary: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const buns = useSelector((store) => store.addedIngredients.buns);
  const ingredients = useSelector(
    (store) => store.addedIngredients.ingredients
  );
  const addedIngredients: TItem[] = [...buns, ...ingredients];

  const total = useSelector((store) => store.total.total);
  const user = useSelector((store) => store.user.isLoggedIn);

  const handleOrder = (): void => {
    if (user) {
      dispatch(getOrderNumber(addedIngredients));
      setIsOpen(true);
      dispatch(clearIngredients());
      dispatch(clearTotal());
    } else {
      history.replace({ pathname: "/login" });
    }
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
      {addedIngredients.length ? (
        <Button
          type="primary"
          size="large"
          htmlType="button"
          onClick={() => handleOrder()}
        >
          Оформить заказ
        </Button>
      ) : null}
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen} title=''>
        <OrderDetails />
      </Modal>
    </div>
  );
};
 