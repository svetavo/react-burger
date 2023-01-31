import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import appStyles from "../components/App/App.module.css";
import BurgerConstructor from "../components/Constructor/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../components/Constructor/BurgerIngredients/BurgerIngredients";

const HomePage = () => {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <main className={appStyles.maincontainer}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </DndProvider>
    </div>
  );
};

export default HomePage;
