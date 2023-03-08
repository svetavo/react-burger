import React from "react";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { userLogin } from "../services/actions/userActions";
import { useDispatch } from "../utils/hooks";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const history = useHistory();
  const dispatch = useDispatch();

  const onClickReg: React.MouseEventHandler = () => {
    history.replace({ pathname: "/register" });
  };

  const onClickRes: React.MouseEventHandler = () => {
    history.replace({ pathname: "/forgot-password" });
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogin(email, password));
  };

  return (
    <div className={styles.area}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <h2 className="text text_type_main-medium mb-6">Вход</h2>
        <EmailInput
          placeholder={"E-mail"}
          value={email}
          name={"email"}
          extraClass="mb-6"
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          name={"password"}
          value={password}
          extraClass="mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"
        >
          Войти
        </Button>
        <h3 className="text text_type_main-default text_color_inactive mb-4">
          Вы - новый пользователь?{" "}
          <span className={styles.span} onClick={onClickReg}>
            Зарегистрироваться
          </span>
        </h3>
        <h3 className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <span className={styles.span} onClick={onClickRes}>
            Восстановить пароль
          </span>
        </h3>
      </form>
    </div>
  );
};

export default LoginPage;
