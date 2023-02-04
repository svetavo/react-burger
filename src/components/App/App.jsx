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
  NotFound404,
  RegisterPage,
  LoginPage,
} from "../../pages/index.jsx";
import { Switch, Route, useHistory } from "react-router-dom";
import { useLocation } from "react-router";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Constructor/IngredientDetails/IngredientDetails";
import { refreshToken, getUser } from "../../services/actions/userActions";
import { getCookie } from "../../utils/cookie";
import OrdersPage from "../../pages/OrdersPage";
import OrderInfo from "../Orders/OrderInfo/OrderInfo";

export default function App() {
  const isLoaded = useSelector((store) => store.ingredients.isLoaded);
  const error = useSelector((store) => store.ingredients.error);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const background = location.state?.background;

  let token = localStorage.getItem("refreshToken");
  const cookie = getCookie("token");

  const handleClose = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

  useEffect(() => {
    if (!cookie && token) {
      dispatch(refreshToken(token));
    }
    if (cookie && token) {
      dispatch(getUser());
    }
  }, [dispatch, cookie, token]);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className={appStyles.page}>
        <AppHeader />
        <Switch location={background || location}>
          <Route path="/" exact={true} component={HomePage} />
          <ProtectedRoute path="/login" exact={true} pass={true}>
            <LoginPage />
          </ProtectedRoute>
          <ProtectedRoute path="/register" exact={true} pass={true}>
            <RegisterPage />
          </ProtectedRoute>
          <ProtectedRoute path="/forgot-password" exact={true} pass={true}>
            <ForgotPassPage />
          </ProtectedRoute>
          <Route
            path="/reset-password"
            exact={true}
            component={ResetPassPage}
          />
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <Route
            path="/ingredients/:id"
            exact={true}
            component={IngredientDetails}
          />
          <ProtectedRoute path="/profile/orders/:id" exact={true}>
            <OrderInfo />
          </ProtectedRoute>
          <Route path="/feed" exact={true}>
            <OrdersPage />
          </Route>
          <Route path="/feed/:id" exact={true} component={OrderInfo} />
          <Route>
            <NotFound404 />
          </Route>
        </Switch>

        {!!background && (
          <Route
            path="/ingredients/:id"
            children={
              <Modal handleClose={handleClose}>
                <IngredientDetails />
              </Modal>
            }
          />
        )}
        {!!background && (
          <Route
            path="/feed/:id"
            children={
              <Modal handleClose={handleClose}>
                <OrderInfo />
              </Modal>
            }
          />
        )}
        {!!background && (
          <Route
            path="/profile/orders/:id"
            children={
              <Modal handleClose={handleClose}>
                <OrderInfo />
              </Modal>
            }
          />
        )}
      </div>
    );
  }
}
