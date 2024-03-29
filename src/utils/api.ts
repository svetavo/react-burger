import { TItem } from "./types/types";

const baseURL = "https://norma.nomoreparties.space/api";
const baseAuthURL = `${baseURL}/auth`;

export const ingredientsURL = `${baseURL}/ingredients`;
export const orderURL = `${baseURL}/orders`;
export const passwordResetURL = `${baseURL}/password-reset`;
export const newUserURL = `${baseAuthURL}/register`;
export const newPassURL = `${passwordResetURL}/reset`;
export const loginURL = `${baseAuthURL}/login`;
export const logoutURL = `${baseAuthURL}/logout`;
export const tokenURL = `${baseAuthURL}/token`;
export const profileEndpointURL = `${baseAuthURL}/user`;

// handlers
const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  throw new Error(`Ошибка ${res.status}`);
};

const request = (url: string, options: object) => {
  return fetch(url, options).then(checkResponse);
};

// ingredients, order
export const getIngredients = async () => {
  return request(`${baseURL}/ingredients`, {});
};

export const getOrder = async (addedIngredients: TItem[]) => {
  return request(`${baseURL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({ ingredients: addedIngredients }),
  });
};

// password
export const passwordReset = async (email: string) => {
  return request(passwordResetURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  });
};

export const newPass = async (password: string, token: string) => {
  return request(newPassURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  });
};

interface IUserReg {
  email: string;
  password: string;
  name: string;
}

//authorisation
export const newUserReg = async ({ email, password, name }: IUserReg) => {
  return request(newUserURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  });
};

export const login = async (email: string, password: string) => {
  return request(loginURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};

export const tokenRefresh = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  return request(tokenURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: refreshToken,
    }),
  });
};

export const logout = async (token: string) => {
  const refreshToken = localStorage.getItem("refreshToken");
  return request(logoutURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token: refreshToken,
    }),
  });
};

export const userGetInfo = async () => {
  return request(profileEndpointURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("accessToken"),
    },
  });
};

export const userPatchInfo = async (
  email: string,
  name: string,
  password: string
) => {
  return request(profileEndpointURL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: window.localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      email: email,
      name: name,
      password: password,
    }),
  });
};
