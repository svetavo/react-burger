import React from 'react';
import { useSelector } from 'react-redux';
import ingredientDetailsStyles from "../components/Constructor/IngredientDetails/IngredientDetails.module.css";


const IngredientPage = (id) => {
    const ingredients = useSelector(store=>store.ingredients)
    const item = ingredients.find(item => item._id === id)
    
    return (
    <div>
      <h2
        className={`${ingredientDetailsStyles.ingredient__title} text text_type_main-large`}
      >
        Детали ингредиента
      </h2>
      <div className={ingredientDetailsStyles.ingredient__content}>
        <img src={item.image_large} alt={item.name} className="mb-15" />
        <p
          className={`${ingredientDetailsStyles.ingredient__name} text text_type_main-medium`}
        >
          {item.name}
        </p>
        <div className={ingredientDetailsStyles.ingredient__info}>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Калории, ккал</p>
            <p className="text text_type_digits-default">{item.calories}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Белки, г</p>
            <p className="text text_type_digits-default">{item.proteins}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Жиры, г</p>
            <p className="text text_type_digits-default">{item.fat}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Углеводы, г</p>
            <p className="text text_type_digits-default">
              {item.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </div>    );
};

export default IngredientPage;
