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
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useLocation } from "react-router";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Modal from "../Modal/Modal";
import IngredientDetails from "../Constructor/IngredientDetails/IngredientDetails";

export default function App() {
  const isLoaded = useSelector((store) => store.ingredients.isLoaded);
  const error = useSelector((store) => store.ingredients.error);
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  const background = location.state?.background;

  const handleCloseIng = () => {
    history.replace({ pathname: "/" });
  };

  useEffect(() => {
    dispatch(loadIngredients());
  }, [dispatch]);

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
          <Route path="/login" exact={true} component={LoginPage} />
          <Route path="/register" exact={true} component={RegisterPage} />
          <Route
            path="/forgot-password"
            exact={true}
            component={ForgotPassPage}
          />
          <Route
            path="/reset-password"
            exact={true}
            component={ResetPassPage}
          />
          <ProtectedRoute path="/profile" exact={true}>
            <ProfilePage />
          </ProtectedRoute>
          <Route
            path="/ingredients/:id"
            exact={true}
            component={IngredientDetails}
          />
          {/* <Route path={`/profile/orders/:id`} exact={true}></Route> */}

          <Route>
            <NotFound404 />
          </Route>
        </Switch>

        {!!background && (
          <Route
            path="/ingredients/:id"
            children={
              <Modal handleClose={handleCloseIng}>
                <IngredientDetails />
              </Modal>
            }
          />
        )}
      </div>
    );
  }
}
