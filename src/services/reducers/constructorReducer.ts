import { TConstructor, TItem } from "../../utils/types/types";
import {
  ConstructorTypes,
  IAddBunAction,
  IAddIngredientAction,
  IClearIngredientsAction,
  IClearTotalAction,
  IDecrementAction,
  IIncrementAction,
  IIncrementBunAction,
  IRemoveIngredientAction,
  ISortIngredientsAction,
} from "../../utils/types/constructor_types";

type TNewIng = {
  uuid?: string;
};

interface IConstructorState {
  buns: any[];
  ingredients: any[];
}

export type TConstructorAction =
  | IAddBunAction
  | IAddIngredientAction
  | IRemoveIngredientAction
  | ISortIngredientsAction
  | IClearIngredientsAction;

const initialState: IConstructorState = {
  buns: [],
  ingredients: [],
};

export const constructorReducer = (
  state = initialState,
  action: TConstructorAction
): IConstructorState => {
  switch (action.type) {
    case ConstructorTypes.ADD_BUN: {
      return {
        ...state,
        buns: [action.payload.item],
      };
    }

    case ConstructorTypes.ADD_INGREDIENT: {
      const newArr = [...state.ingredients];
      const newIngredient: TItem = { ...action.payload.item };
      newIngredient.uuid = action.payload.item.uuid;
      newArr.push(newIngredient);
      return {
        ...state,
        ingredients: newArr,
      };
    }

    case ConstructorTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient.uuid !== action.uuid
        ),
      };

    case ConstructorTypes.SORT_INGREDIENTS: {
      return { ...state, ingredients: [...action.sortedArray] };
    }

    case ConstructorTypes.CLEAR_INGREDIENTS: {
      return { buns: [], ingredients: [] };
    }

    default:
      return state;
  }
};

interface ITotalState {
  total: number;
}

export type TTotalAction =
  | IIncrementAction
  | IIncrementBunAction
  | IDecrementAction
  | IClearTotalAction;

const initialPrice: ITotalState = {
  total: 0,
};

export const totalPriceReducer = (
  state = initialPrice,
  action: TTotalAction
): ITotalState => {
  switch (action.type) {
    case ConstructorTypes.INCREMENT:
      return { ...state, total: state.total + action.payload.item.price };
    case ConstructorTypes.INCREMENT_BUN:
      return { ...state, total: state.total + action.payload.item.price * 2 };
    case ConstructorTypes.DECREMENT:
      return { ...state, total: state.total - action.payload.item.price };
    case ConstructorTypes.CLEAR_TOTAL:
      return { ...state, total: 0 };
    default:
      return state;
  }
};
