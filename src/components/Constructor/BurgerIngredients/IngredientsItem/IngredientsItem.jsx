import { useState } from "react";
import Modal from "../../../Modal/Modal";
import IngredientDetails from "../../IngredientDetails/IngredientDetails";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ingredientsStyles from "../BurgerIngredients.module.css";

export default function IngridientsItem({ ingredient }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`${ingredientsStyles.ingredients__item} pl-4 mb-8`}
        onClick={() => setIsOpen(true)}
      >
        <img
          className={`${ingredientsStyles.ingredients__image} mb-1`}
          src={ingredient.image}
          alt={ingredient.name}
        />
        <div className={`${ingredientsStyles.ingredients__price} mb-1`}>
          <p className="text text_type_main-default mr-2">{ingredient.price}</p>
          <CurrencyIcon />
        </div>
        <p className="text text_type_main-default">{ingredient.name}</p>
        <div className={ingredientsStyles.ingredients__quantity}>
          <Counter count={1} size="default" />
        </div>
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <IngredientDetails item={ingredient} />
      </Modal>
    </div>
  );
}

IngridientsItem.propTypes = {
  ingredient: PropTypes.object.isRequired,
};
