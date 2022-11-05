import PropTypes from "prop-types";
import { useState } from "react";
import constructorStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";

function Summary() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={constructorStyles.burger__summary}>
      <div className={constructorStyles.burger__totalprice}>
        <p
          className={`${constructorStyles.burger__summarytext} text text_type_digits-medium`}
        >
          610
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={() => setIsOpen(true)}
      >
        Оформить заказ
      </Button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <OrderDetails />
      </Modal>
    </div>
  );
}

export default function BurgerConstructor({ data }) {
  const ingredients = data.filter((ingredient) => ingredient.type !== "bun");
  const bun = data.find((ingredient) => ingredient.type === "bun");
  const bunTopName = `${bun.name} (верх)`;
  const bunBottomName = `${bun.name} (низ)`;

  return (
    <section className={constructorStyles.burger__section}>
      <ul className={constructorStyles.burger__list}>
        <li className={constructorStyles.burger__item}>
          <div className={constructorStyles.burger__dragdrop}></div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bunTopName}
            price={bun.price}
            thumbnail={bun.image}
            alt={bun.text}
          />
        </li>
        <div
          className={`${constructorStyles.burger__scroll} ${constructorStyles.burger__list}`}
        >
          {ingredients.map((item) => (
            <li className={constructorStyles.burger__item} key={item._id}>
              <div className={constructorStyles.burger__dragdrop}>
                <DragIcon />
              </div>
              <ConstructorElement
                type={item.type}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                alt={item.name}
              />
            </li>
          ))}
        </div>

        <li className={constructorStyles.burger__item}>
          <div className={constructorStyles.burger__dragdrop}></div>
          <ConstructorElement
            type="bottom"
            key={bun._id}
            isLocked={true}
            text={bunBottomName}
            price={bun.price}
            thumbnail={bun.image}
            alt={bun.text}
          />
        </li>
      </ul>
      <Summary />
    </section>
  );
}

ConstructorElement.propTypes = {
  type: PropTypes.string.isRequired,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
};
