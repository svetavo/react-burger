import { useEffect, useState } from "react";
import "normalize.css";
import { getIngredients } from "../../utils/api";
import BurgerConstructorContext from "../../utils/context/BurgerContext";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../Constructor/BurgerIngredients/BurgerIngredients";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getIngredients()
      .then((res) => {
        setItems(res.data);
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
      <BurgerConstructorContext.Provider value={items}>
        <div className={appStyles.page}>
          <AppHeader />
          <main className={appStyles.maincontainer}>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </div>
      </BurgerConstructorContext.Provider>
    );
  }
}
