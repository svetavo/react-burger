import React from "react";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory, Redirect, useLocation } from "react-router-dom";
import styles from "./pagesStyles.module.css";
import { resetPassword } from "../services/actions/passwordActions";
import { useState } from "react";
import { useDispatch, useSelector } from "../utils/hooks";
import { TLocation } from "../utils/types/types";

const ForgotPassPage: React.FC = (): JSX.Element | null => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // const location = useLocation<TLocation>();
  // const user = useSelector((store) => store.user.isLoggedIn);

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetPassword(email));
    history.replace({ pathname: "/reset-password" });
  };

  const handleLogin = () => {
    history.replace({ pathname: "/login" });
  };

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
        >
          Восстановить
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <span className={styles.span} onClick={handleLogin}>
            Войти
          </span>
        </h3>
      </form>
    </div>
  );
};

export default ForgotPassPage;
