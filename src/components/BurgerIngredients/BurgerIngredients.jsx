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

function IngridientsItem(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`${ingredientsStyles.ingredients__item} pl-4 mb-8`}
        onClick={() => setIsOpen(true)}
      >
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
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <IngredientDetails item={props} />
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
  image: PropTypes.string,
  image_large: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  calories: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  proteins: PropTypes.number,
};
