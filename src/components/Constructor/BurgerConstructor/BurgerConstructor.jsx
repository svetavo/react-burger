import { useSelector, useDispatch } from "react-redux";
import constructorStyles from "./BurgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import Summary from "../Summary/Summary";
import { useDrop } from "react-dnd";
import {
  incrementPrice,
  decrementPrice,
  ADD_BUN,
  ADD_INGREDIENT,
  SORT_INGREDIENTS,
  REMOVE_INGREDIENT,
} from "../../../services/actions/constructorActions";
import { v4 as uuidv4 } from "uuid";
import BurgerConstructorItem from "./BurgerConstructorItem/BurgerConstructorItem";

export default function BurgerConstructor() {
  const buns = useSelector((store) => store.addedIngredients.buns);
  const ingredients = useSelector(
    (store) => store.addedIngredients.ingredients
  );

  const dispatch = useDispatch();

  const priceDecrement = (item) => {
    dispatch(decrementPrice(item.price));
  };

  const priceIncerement = (item) => {
    if (item.type !== "bun") {
      dispatch(incrementPrice(item.price));
    } else {
      dispatch(incrementPrice(item.price * 2));
    }
  };

  const handleDelete = (item) => {
    dispatch({
      type: REMOVE_INGREDIENT,
      uuid: item.uuid,
    });
    priceDecrement(item);
  };

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredient",
    drop(ingredient) {
      handleDropIngr(ingredient);
      priceIncerement(ingredient);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDropIngr = (ingredient) => {
    if (ingredient.type === "bun") {
      dispatch({
        type: ADD_BUN,
        bun: ingredient,
        uuid: uuidv4(),
      });
    } else {
      dispatch({
        type: ADD_INGREDIENT,
        ingredient: ingredient,
        uuid: uuidv4(),
      });
    }
  };

  const moveCard = (dragIndex, hoverIndex) => {
    const dragIngredient = ingredients[dragIndex];
    if (dragIngredient) {
      const newIngredients = [...ingredients];
      newIngredients.splice(dragIndex, 1);
      newIngredients.splice(hoverIndex, 0, dragIngredient);
      dispatch({ type: SORT_INGREDIENTS, sortedArray: newIngredients });
    }
  };

  return (
    <section className={constructorStyles.burger__section}>
      <ul className={constructorStyles.burger__list}>
        {buns.map((bun) => (
          <li className={constructorStyles.burger__item} key={bun._id}>
            <div className={constructorStyles.burger__dragdrop}></div>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
              alt={bun.text}
            />
          </li>
        ))}
        <div
          className={`${constructorStyles.burger__scroll} ${constructorStyles.burger__list}`}
          ref={dropRef}
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
              key={bun._id}
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
              alt={bun.text}
            />
          </li>
        ))}
      </ul>
      <Summary />
    </section>
  );
}
