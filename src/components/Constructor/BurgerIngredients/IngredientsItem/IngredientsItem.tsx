import { useState } from "react";
import { TItem } from "../../../../utils/types/types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "../BurgerIngredients.module.css";
import { addCurrentIng } from "../../../../services/actions/currentIngredientActions";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../../../utils/hooks";
import { TLocation } from "../../../../utils/types/types";
import React from "react";

interface IProps {
  ingredient: TItem;
}

export const IngridientsItem: React.FC<IProps> = ({ ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation<TLocation>();

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  const buns = useSelector((store) => store.addedIngredients.buns);
  const ingredients = useSelector(
    (store) => store.addedIngredients.ingredients
  );

  const addedIngredients: TItem[] = [...buns, ...ingredients];

  const clickHandler = (ingredient: TItem) => {
    dispatch(addCurrentIng(ingredient));
    setIsOpen(true);
  };

  const counter: number = addedIngredients.filter(
    (item: TItem) => item._id === ingredient._id
  ).length;

  return (
    <>
      <div
        className={`${ingredientsStyles.ingredients__item} pl-4 mb-8`}
        ref={dragRef}
      >
        <Link
          className={ingredientsStyles.link}
          to={{
            pathname: `/ingredients/${ingredient._id}`,
            state: { background: location },
          }}
          onClick={() => clickHandler(ingredient)}
        >
          <img
            className={`${ingredientsStyles.ingredients__image} mb-1`}
            src={ingredient.image}
            alt={ingredient.name}
          />
          <div className={`${ingredientsStyles.ingredients__price} mb-1`}>
            <p className="text text_type_main-default mr-2">
              {ingredient.price}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <p className="text text_type_main-default">{ingredient.name}</p>
          <div className={ingredientsStyles.ingredients__quantity}>
            {counter !== 0 ? <Counter count={counter} size="default" /> : <></>}
          </div>
        </Link>
      </div>
    </>
  );
};
