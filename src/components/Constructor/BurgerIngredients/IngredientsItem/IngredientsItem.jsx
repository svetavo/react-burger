import { useState } from "react";
import Modal from "../../../Modal/Modal";
import IngredientDetails from "../../IngredientDetails/IngredientDetails";
import { ingredientTypes } from "../../../../utils/types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "../BurgerIngredients.module.css";
import { useDispatch } from "react-redux";
import {
  addCurrent,
  removeCurrent,
} from "../../../../services/actions/currentIngredientActions";
import { useDrag } from "react-dnd";

export default function IngridientsItem({ ingredient }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  const clickHandler = (ingredient) => {
    dispatch(addCurrent(ingredient));
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    dispatch(removeCurrent());
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className={`${ingredientsStyles.ingredients__item} pl-4 mb-8`}
        onClick={() => clickHandler(ingredient)}
        ref={dragRef}
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
          <Counter count={""} size="default" />
        </div>
      </div>
      <Modal handleClose={() => handleCloseModal()} isOpen={isOpen}>
        <IngredientDetails />
      </Modal>
    </div>
  );
}

IngridientsItem.propTypes = {
  ingredient: ingredientTypes.isRequired,
};
