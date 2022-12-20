const baseURL = "https://norma.nomoreparties.space/api";
const baseAuthURL = "https://norma.nomoreparties.space/api/auth";

export const ingredientsURL = `${baseURL}/ingredients`;
export const orderURL = `${baseURL}/orders`;
export const passwordResetURL = `${baseURL}/password-reset`;
export const newUserURL = `${baseAuthURL}/register`;
export const newPassURL = `${passwordResetURL}/reset`;
export const loginURL=`${baseAuthURL}/login`;
export const logoutURL =`${baseAuthURL}/logout`;
export const tokenURL =`${baseAuthURL}/token`;

// handlers
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  throw new Error(`Ошибка ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
};

// ingredients, order
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

// password
export const passwordReset = async () => {
  return request(passwordResetURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: " " }),
  });
};


export const newPass = async () => {
  return request(newPassURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: "",
      token: "",
    }),
  });
};

//authorisation
export const newUserReg = async () => {
  return request(newUserURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "test-data@yandex.ru",
      password: "password",
      name: "Username",
    }),
  });
};

export const login = async () => {
  return request(newUserURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "",
      password: "",
    }),
  });
};

export const tokenRefresh = async (refreshToken) => {
  return request(tokenURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: `значение ${refreshToken}`,
    }),
  });
};

export const logout = async (refreshToken) => {
  return request(logoutURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: `значение ${refreshToken}`,
    }),
  });
};

