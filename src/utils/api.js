const baseURL = 'https://norma.nomoreparties.space/api';


const checkResponse = (res) => {
  if (res.ok) {
        return res.json();
      } 
        throw new Error(`Ошибка ${res.status}`);
};

export const getIngredients = async() => {
  return fetch(`${baseURL}/ingredients`)
         .then(res => checkResponse(res))
};  

export const getOrder = async(addedIngredients) => {
  return fetch(`${baseURL}/orders`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ingredients: addedIngredients})
  })
  .then(res => checkResponse(res))
};  
