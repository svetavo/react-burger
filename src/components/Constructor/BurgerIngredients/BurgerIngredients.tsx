import { useState, useRef, useEffect } from "react";
import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyles from "./BurgerIngredients.module.css";
import { IngridientsItem } from "./IngredientsItem/IngredientsItem";
import { useInView } from "react-intersection-observer";
import { useSelector } from "../../../utils/hooks";
import { TItem } from "../../../utils/types/types";

export const BurgerIngredients: React.FC = () => {
  const { ref: bunsRefVisible, inView: bunsVisible } = useInView();
  const { ref: saucesRefVisible, inView: saucesVisible } = useInView();
  const { ref: ingredientsRefVisible, inView: ingredientsVisible } =
    useInView();

  const [current, setCurrent] = useState("Булки");

  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const ingRef = useRef(null);

  const ingredientList = useSelector((store) => store.ingredients.ingredients);

  const buns: TItem[] = ingredientList.filter(
    (ingredient) => ingredient.type === "bun"
  );
  const sauces: TItem[] = ingredientList.filter(
    (ingredient) => ingredient.type === "sauce"
  );
  const ingredients: TItem[] = ingredientList.filter(
    (ingredient) => ingredient.type === "main"
  );

  const handleTabClick = (value: string, ref: any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setCurrent(value);
  };

  const handleScroll = () => {
    if (bunsVisible) {
      setCurrent("Булки");
    } else if (saucesVisible) {
      setCurrent("Соусы");
    } else if (ingredientsVisible) {
      setCurrent("Начинка");
    }
  };

  useEffect(() => {
    handleScroll();
  }, [bunsVisible, saucesVisible, ingredientsVisible]);

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
        <div
          className={`${ingredientsStyles.ingredients__container}`}
          ref={bunsRefVisible}
        >
          {buns.map((bun) => (
            <IngridientsItem ingredient={bun} key={bun._id} />
          ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-10" ref={saucesRef}>
          Соусы
        </p>
        <div
          className={`${ingredientsStyles.ingredients__container}`}
          ref={saucesRefVisible}
        >
          {sauces.map((sauce) => (
            <IngridientsItem ingredient={sauce} key={sauce._id} />
          ))}
        </div>
        <p className="text text_type_main-medium mb-6 mt-10" ref={ingRef}>
          Начинки
        </p>
        <div
          className={`${ingredientsStyles.ingredients__container}`}
          ref={ingredientsRefVisible}
        >
          {ingredients.map((item) => (
            <IngridientsItem ingredient={item} key={item._id} />
          ))}
        </div>
      </section>
    </div>
  );
};
