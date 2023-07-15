import {
  CurrentTypes,
  IAddCurrentIngAction,
  IRemoveCurrentIngAction,
  IAddCurrentOrderAction,
  IRemoveCurrentOrderAction,
} from "../../utils/types/current_types";
import { TOrder, TCurrentOrder, TItem } from "../../utils/types/types";

interface ICurrentState {
  currentIngredient: TItem | null;
  currentOrder: TOrder | null;
}

export type TCurrentAction =
  | IAddCurrentIngAction
  | IRemoveCurrentIngAction
  | IAddCurrentOrderAction
  | IRemoveCurrentOrderAction;

const initialState: ICurrentState = {
  currentIngredient: null,
  currentOrder: null,
};

export const currentReducer = (
  state = initialState,
  action: TCurrentAction
): ICurrentState => {
  switch (action.type) {
    case CurrentTypes.ADD_CURRENT_ING:
      return { ...state, currentIngredient: action.item };
    case CurrentTypes.REMOVE_CURRENT_ING:
      return { ...state, currentIngredient: null };
    case CurrentTypes.ADD_CURRENT_ORDER:
      return { ...state, currentOrder: action.item };
    case CurrentTypes.REMOVE_CURRENT_ORDER:
      return { ...state, currentOrder: null };
    default:
      return state;
  }
};

export default currentReducer;
