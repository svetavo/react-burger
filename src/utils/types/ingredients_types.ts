export enum IngredientsTypes {
  FETCH_INGREDIENTS_OK = "FETCH_INGREDIENTS_OK",
  FETCH_INGREDIENTS_ERROR = "FETCH_INGREDIENTS_ERROR",
  FETCH_INGREDIENTS_REQUEST = "FETCH_INGREDIENTS_REQUEST",
}

export interface IFetchIngOk {
  readonly type: IngredientsTypes.FETCH_INGREDIENTS_OK;
  ingredients: any[];
}

export interface IFetchIngErr {
  readonly type: IngredientsTypes.FETCH_INGREDIENTS_ERROR;
  error: any;
}

export interface IFetchIngReq {
  readonly type: IngredientsTypes.FETCH_INGREDIENTS_REQUEST;
}

