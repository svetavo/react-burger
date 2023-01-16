import { getIngredients } from "../../utils/api";

export const FETCH_INGREDIENTS_REQUEST = "FETCH_INGREDIENTS_REQUEST";
export const FETCH_INGREDIENTS_OK = "FETCH_INGREDIENTS_OK";
export const FETCH_INGREDIENTS_ERROR = "FETCH_INGREDIENTS_ERROR";

// ingredients:

export const loadIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: FETCH_INGREDIENTS_REQUEST,
    });
    getIngredients()
      .then((res) => {
        dispatch({
          type: FETCH_INGREDIENTS_OK,
          ingredients: res.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_INGREDIENTS_ERROR,
          error: error.message,
        })
      );
  };
};
