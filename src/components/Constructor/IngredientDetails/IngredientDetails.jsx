import ingredientDetailsStyles from "./IngredientDetails.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function IngredientDetails() {
  const item = useSelector((store) => store.current.currentIngredient);
  const ingredients = useSelector((store) =>store.ingredients.ingredients)

  const { id } = useParams();

  const findItem = ingredients.find((i) => i._id === id);

  return (
    <div>
      <h2
        className={item ? `${ingredientDetailsStyles.ingredient__title} text text_type_main-large` : `${ingredientDetailsStyles.ingredient__title_center} text text_type_main-large`}
      >
        Детали ингредиента
      </h2>
      <div className={ingredientDetailsStyles.ingredient__content}>
        <img src={item ? item.image_large : findItem.image_large} alt={item ? item.name : findItem.name} className="mb-15" />
        <p
          className={`${ingredientDetailsStyles.ingredient__name} text text_type_main-medium`}
        >
          {item ? item.name : findItem.name}
        </p>
        <div className={ingredientDetailsStyles.ingredient__info}>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Калории, ккал</p>
            <p className="text text_type_digits-default">{item ? item.calories : findItem.calories}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Белки, г</p>
            <p className="text text_type_digits-default">{item ? item.proteins : findItem.proteins}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Жиры, г</p>
            <p className="text text_type_digits-default">{item ? item.fat : findItem.fat}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Углеводы, г</p>
            <p className="text text_type_digits-default">
              {item ? item.carbohydrates : findItem.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
