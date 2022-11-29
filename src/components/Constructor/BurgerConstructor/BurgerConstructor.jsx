import PropTypes from "prop-types";
import { useContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import constructorStyles from "./BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorContext from "../../../utils/context/BurgerContext";
import Summary from "../Summary/Summary";

export default function BurgerConstructor() {

  const ingredientsArr = useSelector((store) => store.ingredients.ingredients);
  console.log(ingredientsArr)
  const  {addedIngredients} = useSelector((store) => store.addedIngredients);

  const ingredients = ingredientsArr.filter((ingredient) => ingredient.type !== "bun");
  const bun = ingredientsArr.find((ingredient) => ingredient.type === "bun");
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
      <Summary  addedIngredients={addedIngredients} />
    </section>
  );
}

// ConstructorElement.propTypes = {
//   type: PropTypes.string.isRequired,
//   isLocked: PropTypes.bool,
//   text: PropTypes.string,
//   price: PropTypes.number,
//   thumbnail: PropTypes.string,
// };

// BurgerConstructor.propTypes = {
//   total: PropTypes.number,
// };
