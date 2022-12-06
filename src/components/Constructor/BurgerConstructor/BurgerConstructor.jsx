import { useSelector, useDispatch } from "react-redux";
import constructorStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Summary from "../Summary/Summary";
import { useDrop } from "react-dnd";
import { incrementPrice } from "../../../services/actions/constructorActions";
import { v4 as uuidv4 } from "uuid";

export default function BurgerConstructor() {
  const buns = useSelector((store) => store.addedIngredients.buns);
  const ingredients = useSelector(
    (store) => store.addedIngredients.ingredients
  );

  const dispatch = useDispatch();

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredient",
    drop(ingredient) {
      handleDropIngr(ingredient);
      dispatch(incrementPrice(ingredient.price));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const handleDropIngr = (ingredient) => {
    if (ingredient.type === "bun") {
      dispatch({
        type: "ADD_BUN",
        bun: ingredient,
      });
    } else {
      dispatch({
        type: "ADD_INGREDIENT",
        ingredient: ingredient,
        _id: uuidv4(),
      });
    }
  };

  const handleMove = (dragIndex, hoverIndex) => {
    const dragIngredient = ingredients[dragIndex];
    if (dragIngredient) {
      const newArray = [...ingredients];
      newArray.splice(dragIndex, 1);
      newArray.splice(hoverIndex, 0, dragIngredient);
      dispatch({ type: "MOVE_INGREDIENTS", sortedArray: newArray });
    }
  };

  return (
    <section className={constructorStyles.burger__section} ref={dropRef}>
      <ul className={constructorStyles.burger__list}>
        <li className={constructorStyles.burger__item}>
          <div className={constructorStyles.burger__dragdrop}></div>
          {buns.map((bun) => (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
              alt={bun.text}
            />
          ))}
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
                id={item.id}
                handleMove={handleMove}
              />
            </li>
          ))}
        </div>
        {buns.map((bun) => (
          <li className={constructorStyles.burger__item}>
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
