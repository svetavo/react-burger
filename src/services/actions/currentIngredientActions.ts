import { TCurrentOrder, TItem, TOrder } from "../../utils/types/types";
import {
  CurrentTypes,
  IAddCurrentIngAction,
  IRemoveCurrentIngAction,
  IAddCurrentOrderAction,
  IRemoveCurrentOrderAction,
} from "../../utils/types/current_types";

export const addCurrentIng = (item: TItem): IAddCurrentIngAction => ({
  type: CurrentTypes.ADD_CURRENT_ING,
  item: item,
});

export const removeCurrentIng = (): IRemoveCurrentIngAction => ({
  type: CurrentTypes.REMOVE_CURRENT_ING,
});

export const addCurrentOrder = (
  item: TOrder
): IAddCurrentOrderAction => ({
  type: CurrentTypes.ADD_CURRENT_ORDER,
  item: item,
});

export const removeCurrentOrder = (): IRemoveCurrentOrderAction => ({
  type: CurrentTypes.REMOVE_CURRENT_ORDER,
});
