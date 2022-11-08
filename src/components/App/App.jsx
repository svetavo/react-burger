import { useEffect, useState } from "react";
import "normalize.css";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setItems] = useState([]);
  const baseURL = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    fetch(baseURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Ошибка ${res.status}`);
      })
      .then(({ data }) => {
        setItems(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={appStyles.page}>
        <AppHeader />
        <main className={appStyles.maincontainer}>
          <BurgerIngredients ingredientList={data} />
          <BurgerConstructor data={data} />
        </main>
      </div>
    );
  }
}
