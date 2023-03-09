import { number } from "prop-types";
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
} from "../../utils/types/constructor_types";
import { TConstructor, TItem } from "../../utils/types/types";

export const addBun = (item: TItem): IAddBunAction => ({
  type: ConstructorTypes.ADD_BUN,
  payload: {
    item: item,
  },
});

export const addIngredient = (item: TItem): IAddIngredientAction => ({
  type: ConstructorTypes.ADD_INGREDIENT,
  payload: {
    item: item,
  },
});

export const removeIngredient = (id: number): IRemoveIngredientAction => ({
  type: ConstructorTypes.REMOVE_INGREDIENT,
  index: id,
});

export const clearIngredients = (): IClearIngredientsAction => ({
  type: ConstructorTypes.CLEAR_INGREDIENTS,
});

export const incrementPrice = (item: TItem): IIncrementAction => ({
  type: ConstructorTypes.INCREMENT,
  payload: {
    item: item,
    price: item.price,
  },
});

export const incrementBunPrice = (item: TItem): IIncrementBunAction => ({
  type: ConstructorTypes.INCREMENT_BUN,
  payload: {
    item: item,
    price: item.price,
  },
});

export const decrementPrice = (item: TItem): IDecrementAction => ({
  type: ConstructorTypes.DECREMENT,
  payload: {
    item: item,
    price: item.price,
  },
});

export const clearTotal = (): IClearTotalAction => ({
  type: ConstructorTypes.CLEAR_TOTAL,
});
