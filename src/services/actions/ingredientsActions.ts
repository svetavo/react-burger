import { getIngredients } from "../../utils/api";
import { IngredientsTypes } from "../../utils/types/ingredients_types";
import { AppThunk } from "../../services/store";
import { AppDispatch } from "../store";

export const loadIngredients: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: IngredientsTypes.FETCH_INGREDIENTS_REQUEST,
    });
    getIngredients()
      .then((res) => {
        dispatch({
          type: IngredientsTypes.FETCH_INGREDIENTS_OK,
          ingredients: res.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: IngredientsTypes.FETCH_INGREDIENTS_ERROR,
          error: error.message,
        })
      );
  };
};
