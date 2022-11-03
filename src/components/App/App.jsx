import React from "react";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

class App extends React.Component {
  render() {
    return (
      <div className={appStyles.page}>
        <AppHeader />
        <main>
          <div className={appStyles.maincontainer}>
            <BurgerIngredients />
            <BurgerConstructor />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
