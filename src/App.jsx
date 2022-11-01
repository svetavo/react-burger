import React from 'react';
import appStyles from './App.module.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients';


class App extends React.Component {
  render() {
  return (
    <div className={appStyles.page}>
      <AppHeader />
      <main>
      <div className={appStyles.constructor}>
      <BurgerIngredients />
      <BurgerConstructor />
      </div>
      </main>
    </div>
  )}
}

export default App;
