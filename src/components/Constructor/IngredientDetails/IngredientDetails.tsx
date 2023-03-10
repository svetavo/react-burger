import ingredientDetailsStyles from "./IngredientDetails.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "../../../utils/hooks";
import { TItem } from "../../../utils/types/types";
import React from "react";

export const IngredientDetails: React.FC = (): JSX.Element => {
  const itemCurrent = useSelector((store) => store.current.currentIngredient);
  const ingredients = useSelector((store) => store.ingredients.ingredients);

  const { id } = useParams<{ id: string }>();

  const findItem = ingredients.find((i: TItem) => i._id === id);

  const item: TItem| undefined = itemCurrent ? itemCurrent : findItem;

  return (
    <div>
      <div className={ingredientDetailsStyles.ingredient__content}>
        <img src={item!.image_large} alt={item!.name} className="mb-15" />
        <p
          className={`${ingredientDetailsStyles.ingredient__name} text text_type_main-medium`}
        >
          {item!.name}
        </p>
        <div className={ingredientDetailsStyles.ingredient__info}>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Калории, ккал</p>
            <p className="text text_type_digits-default">{item!.calories}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Белки, г</p>
            <p className="text text_type_digits-default">{item!.proteins}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Жиры, г</p>
            <p className="text text_type_digits-default">{item!.fat}</p>
          </div>
          <div
            className={`${ingredientDetailsStyles.ingredient__infoitem} text text_type_main-default text_color_inactive`}
          >
            <p className="m-1">Углеводы, г</p>
            <p className="text text_type_digits-default">
              {item!.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
