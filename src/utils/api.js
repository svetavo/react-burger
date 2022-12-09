const baseURL = "https://norma.nomoreparties.space/api";

export const ingredientsURL = `${baseURL}/ingredients`;
export const orderURL = `${baseURL}/order`;

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  throw new Error(`Ошибка ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

export const getIngredients = async () => {
  return request(`${baseURL}/ingredients`);
};

export const getOrder = async (addedIngredients) => {
  return request(`${baseURL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: addedIngredients }),
  });
};
