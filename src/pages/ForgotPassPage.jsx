import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import styles from "./pagesStyles.module.css";
import { resetPassword } from "../services/actions/passwordActions";
import { useState } from "react";

const ForgotPassPage = () => {
  const [email, setEmail] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user.isLoggedIn);

  const handleReset = (e) => {
    e.preventDefault();
    console.log(email);
    dispatch(resetPassword(email));
    history.replace({ pathname: "/reset-password" });
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.area}>
      <form className={styles.container} onSubmit={handleReset}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <EmailInput
          placeholder={"Укажите e-mail"}
          extraClass="mb-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"
          // onClick={() => handleReset()}
        >
          Восстановить
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Вспомнили пароль? <span className={styles.span}>Войти</span>
        </h3>
      </form>
    </div>
  );
};

export default ForgotPassPage;
