import { useEffect, useState } from "react";
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
        throw res;
      })
      .then(
        ({ data }) => {
          setIsLoaded(true);
          setItems(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={appStyles.page}>
        <AppHeader />
        <main>
          <div className={appStyles.maincontainer}>
            <BurgerIngredients ingredientList={data} />
            <BurgerConstructor data={data} />
          </div>
        </main>
      </div>
    );
  }
}
