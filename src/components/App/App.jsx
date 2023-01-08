import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Constructor/IngredientDetails/IngredientDetails";

export default function App() {
  const isLoaded = useSelector((store) => store.ingredients.isLoaded);
  const error = useSelector((store) => store.ingredients.error);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCloseIng = () => {
    history.replace({ pathname: "/" });
  };


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
        <Router {...{ history }}>
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
            <ProtectedRoute path="/profile" exact={true}>
              <ProfilePage />
            </ProtectedRoute>
            <Route path={`/profile/orders/:id`} exact={true}></Route>
            <Route>
              <NotFound404 />
            </Route>
          </Switch>
          {/* {!!background && (
            <Route path="/ingredients/:id" exact={true}>
              <Modal handleClose={handleCloseIng}>
                <IngredientDetails />
              </Modal>
            </Route>
          )} */}
        </Router>
      </div>
    );
  }
}
