import {
  IngredientsTypes,
  IFetchIngErr,
  IFetchIngOk,
  IFetchIngReq,
} from "../../utils/types/ingredients_types";

interface IIngredientsState {
  ingredients: any[];
  ingredientsRequest: boolean;
  ingredientsFail: boolean;
  isLoaded: boolean;
  error: null | object;
}

export type TIngredientsAction = IFetchIngErr | IFetchIngOk | IFetchIngReq;

const initialState: IIngredientsState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFail: false,
  isLoaded: false,
  error: null,
};

const ingredientsReducer = (
  state = initialState,
  action: TIngredientsAction
): IIngredientsState => {
  switch (action.type) {
    case IngredientsTypes.FETCH_INGREDIENTS_OK:
      return {
        ...state,
        ingredients: action.ingredients,
        ingredientsRequest: false,
        ingredientsFail: false,
        isLoaded: true,
      };
    case IngredientsTypes.FETCH_INGREDIENTS_REQUEST:
      return {
        ...state,
        ingredientsRequest: true,
        ingredientsFail: false,
      };
    case IngredientsTypes.FETCH_INGREDIENTS_ERROR:
      return {
        ...state,
        ingredientsRequest: false,
        ingredientsFail: true,
        error: action.error,
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
