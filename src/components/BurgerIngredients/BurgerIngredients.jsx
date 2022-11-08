import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "./BurgerIngredients.module.css";
import { ingredientTypes } from "../../utils/types";

function IngridientsItem({ingredient}) {
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

export default function BurgerIngredients({ ingredientList }) {
  const buns = ingredientList.filter((ingredient) => ingredient.type === "bun");
  const sauces = ingredientList.filter(
    (ingredient) => ingredient.type === "sauce"
  );
  const ingredients = ingredientList.filter(
    (ingredient) => ingredient.type === "main"
  );

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
              ingredient={bun}
              key={bun._id}
              image={bun.image}
              image_large={bun.image_large}
              alt={bun.name}
              price={bun.price}
              name={bun.name}
              calories={bun.calories}
              fat={bun.fat}
              carbohydrates={bun.carbohydrates}
              proteins={bun.proteins}
            />
          ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-10">Соусы</p>
        <div className={`${ingredientsStyles.ingredients__container}`}>
          {sauces.map((sauce) => (
            <IngridientsItem
              ingredient={sauce}
              key={sauce._id}
              image={sauce.image}
              image_large={sauce.image_large}
              alt={sauce.name}
              price={sauce.price}
              name={sauce.name}
              calories={sauce.calories}
              fat={sauce.fat}
              carbohydrates={sauce.carbohydrates}
              proteins={sauce.proteins}
            />
          ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-10">Начинки</p>
        <div className={`${ingredientsStyles.ingredients__container}`}>
          {ingredients.map((item) => (
            <IngridientsItem
              ingredient={item}
              key={item._id}
              image={item.image}
              image_large={item.image_large}
              alt={item.name}
              price={item.price}
              name={item.name}
              calories={item.calories}
              fat={item.fat}
              carbohydrates={item.carbohydrates}
              proteins={item.proteins}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

IngridientsItem.propTypes = {
  ingredient: ingredientTypes.isRequired,
};

BurgerIngredients.propTypes = {
  ingredientList: PropTypes.arrayOf(ingredientTypes.isRequired).isRequired,
};
