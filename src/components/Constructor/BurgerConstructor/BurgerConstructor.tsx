import { useDispatch, useSelector } from "../../../utils/hooks";
import constructorStyles from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { Summary } from "../Summary/Summary";
import React from "react";
import { useDrop } from "react-dnd";
import {
  incrementPrice,
  incrementBunPrice,
  decrementPrice,
  removeIngredient,
  addBun,
  addIngredient,
} from "../../../services/actions/constructorActions";
import { ConstructorTypes } from "../../../utils/types/constructor_types";
import { v4 as uuidv4 } from "uuid";
import { TItem } from "../../../utils/types/types";
import { BurgerConstructorItem } from "./BurgerConstructorItem/BurgerConstructorItem";

export const BurgerConstructor: React.FC = () => {
  const buns = useSelector((store) => store.addedIngredients.buns);
  const ingredients = useSelector(
    (store) => store.addedIngredients.ingredients
  );

  const allIngredients: any[] = [...buns, ...ingredients];
  const dispatch = useDispatch();

  const priceDecrement = (item: TItem) => {
    dispatch(decrementPrice(item));
  };

  const priceIncerement = (item: TItem) => {
    if (item.type !== "bun") {
      dispatch(incrementPrice(item));
    } else {
      dispatch(incrementBunPrice(item));
    }
  };

  const handleDelete = (item: TItem, index: number) => {
    dispatch(removeIngredient(index));
    priceDecrement(item);
  };

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredient",
    drop(ingredient: TItem) {
      handleDropIngr(ingredient);
      priceIncerement(ingredient);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDropIngr = (ingredient: TItem) => {
    ingredient.uuid = uuidv4()
    if (ingredient.type === "bun") {
      dispatch(addBun(ingredient));
    } else {
      dispatch(addIngredient(ingredient));
    }
  };

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const dragIngredient = ingredients[dragIndex];
    if (dragIngredient) {
      const newIngredients = [...ingredients];
      newIngredients.splice(dragIndex, 1);
      newIngredients.splice(hoverIndex, 0, dragIngredient);
      dispatch({
        type: ConstructorTypes.SORT_INGREDIENTS,
        sortedArray: newIngredients,
      });
    }
  };

  return (
    <section className={constructorStyles.burger__section} ref={dropRef}>
      {allIngredients?.length ? (
        <ul className={constructorStyles.burger__list}>
          {buns.map((bun) => (
            <li className={constructorStyles.burger__item} key={bun._id}>
              <div className={constructorStyles.burger__dragdrop}></div>
              <ConstructorElement
                type="top"
                key={bun.uuid}
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          ))}
          <div
            className={`${constructorStyles.burger__scroll} ${constructorStyles.burger__list}`}
          >
            {ingredients.map((item, index) => (
              <BurgerConstructorItem
                item={item}
                index={index}
                handleDelete={handleDelete}
                key={item.uuid}
                moveCard={moveCard}
              />
            ))}
          </div>

          {buns.map((bun) => (
            <li className={constructorStyles.burger__item} key={bun._id}>
              <div className={constructorStyles.burger__dragdrop}></div>
              <ConstructorElement
                type="bottom"
                key={bun.uuid}
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div
          className={`${constructorStyles.hint} text text_type_main-large text_color_inactive`}
        >
          Перетащите ингредиенты сюда
        </div>
      )}
      <Summary />
    </section>
  );
};
