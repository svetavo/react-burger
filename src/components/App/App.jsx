import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "normalize.css";
// import BurgerConstructorContext from "../../utils/context/BurgerContext";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../Constructor/BurgerIngredients/BurgerIngredients";
import { loadIngredients } from "../../services/actions/ingredientsActions";
// import IngredientDetails from "../Constructor/IngredientDetails/IngredientDetails";

export default function App() {

  const isLoaded = useSelector(store => store.ingredients.isLoaded)
  const error = useSelector(store => store.ingredients.error)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients())
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else
  if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={appStyles.page}>
        <AppHeader />
        <main className={appStyles.maincontainer}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </div>
    );
  }
}
