import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "normalize.css";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { loadIngredients } from "../../services/actions/ingredientsActions";
import {
  HomePage,
  ForgotPassPage,
  ResetPassPage,
  ProfilePage,
  IngredientPage,
  NotFound404,
  RegisterPage,
  LoginPage,
} from "../../pages/index.jsx";

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
        <Router>
          <AppHeader />
          <Switch>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
            <Route path="/login" exact={true}>
              <LoginPage />
            </Route>
            <Route path="/register" exact={true}>
              <RegisterPage />
            </Route>
            <Route path="/forgot-password" exact={true}>
              <ForgotPassPage />
            </Route>
            <Route path="/reset-password" exact={true}>
              <ResetPassPage />
            </Route>
            <Route path="/profile" exact={true}>
              <ProfilePage />
            </Route>
            <Route path={`/ingredients/:id`} exact={true}>
              <IngredientPage />
            </Route>
            <Route path={`/profile/orders/:id`} exact={true}>

            </Route>
            <Route>
              <NotFound404 />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
