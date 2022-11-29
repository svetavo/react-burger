import { getIngredients } from "../../utils/api";

// ingredients:

export const loadIngredients = () => {
  return function (dispatch) {
    dispatch({
      type: "FETCH_INGREDIENTS_REQUEST",
    });
    getIngredients()
      .then((res) => {
        dispatch({
          type: "FETCH_INGREDIENTS_OK",
          ingredients: res.data,
        });
      })
      .catch((error) =>
        dispatch({
          type: "FETCH_INGREDIENTS_ERROR",
          error: error.message
        })
      )
  };
};


