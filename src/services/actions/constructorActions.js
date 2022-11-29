import { isTemplateTail } from "typescript";

export const addBun = (item) => {
  return {
    type: "ADD_BUN",
    item: item,
  };
};

export const addIngredient = (item) => {
  return {
    type: "ADD_INGREDIENT",
    item: item,
  };
};

export const removeIngredient = (id) => {
  return {
    type: "REMOVE_INGREDIENT",
    id: id,
  };
};
