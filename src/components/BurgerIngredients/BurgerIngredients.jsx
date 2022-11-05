import React from "react";
import PropTypes from 'prop-types';

import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "./BurgerIngredients.module.css";
import data from "../../utils/data";

function IngridientsItem(props) {
  return (
    <div>
      <div className={`${ingredientsStyles.ingredients__item} pl-4 mb-8`}>
        <img
          className={`${ingredientsStyles.ingredients__image} mb-1`}
          src={props.image}
          alt={props.name}
        />
        <div className={`${ingredientsStyles.ingredients__price} mb-1`}>
          <p className="text text_type_main-default mr-2">{props.price}</p>
          <CurrencyIcon />
        </div>
        <p className="text text_type_main-default">{props.name}</p>
        <div className={ingredientsStyles.ingredients__quantity}>
          <Counter count={1} size="default" />
        </div>
      </div>
    </div>
  );
}

export default function BurgerIngredients() {
  const buns = data.filter((ingredient) => ingredient.type === "bun");
  const sauces = data.filter((ingredient) => ingredient.type === "sauce");
  const ingredients = data.filter((ingredient) => ingredient.type === "main");

  return (
    <div>
      <p className="pt-10 pb-5 text text_type_main-large">Соберите бургер</p>
      <section className={ingredientsStyles.ingredients__menu}>
        <Tab value="Булки">Булки</Tab>
        <Tab value="Соусы">Соусы </Tab>
        <Tab value="Начинка">Начинка </Tab>
      </section>
      <section className={`${ingredientsStyles.ingredients__section} mb-10`}>
        <p className="text text_type_main-medium mb-6 mt-10">Булки</p>
        <div className={`${ingredientsStyles.ingredients__container}`}>
          {buns.map((bun) => (
            <IngridientsItem
              key={bun._id}
              image={bun.image}
              alt={bun.name}
              price={bun.price}
              name={bun.name}
            />
          ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-10">Соусы</p>
        <div className={`${ingredientsStyles.ingredients__container}`}>
          {sauces.map((sauce) => (
            <IngridientsItem
              key={sauce._id}
              image={sauce.image}
              alt={sauce.name}
              price={sauce.price}
              name={sauce.name}
            />
          ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-10">Начинки</p>
        <div className={`${ingredientsStyles.ingredients__container}`}>
          {ingredients.map((item) => (
            <IngridientsItem
              key={item._id}
              image={item.image}
              alt={item.name}
              price={item.price}
              name={item.name}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

IngridientsItem.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string
};
