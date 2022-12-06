import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "normalize.css";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../Constructor/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../Constructor/BurgerIngredients/BurgerIngredients";
import { loadIngredients } from "../../services/actions/ingredientsActions";

export default function App() {
  const isLoaded = useSelector((store) => store.ingredients.isLoaded);
  const error = useSelector((store) => store.ingredients.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={appStyles.page}>
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <main className={appStyles.maincontainer}>
            <BurgerIngredients />
            <BurgerConstructor />
          </main>
        </DndProvider>
      </div>
    );
  }
}
