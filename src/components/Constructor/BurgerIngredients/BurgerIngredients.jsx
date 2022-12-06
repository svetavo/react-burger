import { useState, useRef } from "react";
import {  useSelector } from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "./BurgerIngredients.module.css";
import IngridientsItem from "./IngredientsItem/IngredientsItem";
import { ingredientTypes } from "../../../utils/types";

export default function BurgerIngredients() {
  const [current, setCurrent] = useState("Булки");
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const ingRef = useRef(null);

  const ingredientList = useSelector((store) => store.ingredients.ingredients);

  const buns = ingredientList.filter((ingredient) => ingredient.type === "bun");
  const sauces = ingredientList.filter(
    (ingredient) => ingredient.type === "sauce"
  );
  const ingredients = ingredientList.filter(
    (ingredient) => ingredient.type === "main"
  );

  const handleTabClick = (value, ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setCurrent(value);
  };

  return (
    <div id="section">
      <p className="pt-10 pb-5 text text_type_main-large">Соберите бургер</p>
      <section className={ingredientsStyles.ingredients__menu}>
        <Tab
          value="Булки"
          active={current === "Булки"}
          onClick={(value) => handleTabClick(value, bunsRef)}
        >
          Булки
        </Tab>
        <Tab
          value="Соусы"
          active={current === "Соусы"}
          onClick={(value) => handleTabClick(value, saucesRef)}
        >
          Соусы{" "}
        </Tab>
        <Tab
          value="Начинка"
          active={current === "Начинка"}
          onClick={(value) => handleTabClick(value, ingRef)}
        >
          Начинка{" "}
        </Tab>
      </section>
      <section className={`${ingredientsStyles.ingredients__section} mb-10`}>
        <p className="text text_type_main-medium mb-6 mt-10" ref={bunsRef}>
          Булки
        </p>
        <div className={`${ingredientsStyles.ingredients__container}`}>
          {buns.map((bun) => (
            <IngridientsItem ingredient={bun} key={bun._id} />
          ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-10" ref={saucesRef}>
          Соусы
        </p>
        <div className={`${ingredientsStyles.ingredients__container}`}>
          {sauces.map((sauce) => (
            <IngridientsItem ingredient={sauce} key={sauce._id} />
          ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-10" ref={ingRef}>
          Начинки
        </p>
        <div className={`${ingredientsStyles.ingredients__container}`}>
          {ingredients.map((item) => (
            <IngridientsItem ingredient={item} key={item._id} />
          ))}
        </div>
      </section>
    </div>
  );
}

IngridientsItem.propTypes = {
  ingredient: ingredientTypes.isRequired,
};
