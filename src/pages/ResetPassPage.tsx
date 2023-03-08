import React from "react";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { newPassword } from "../services/actions/passwordActions";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "../utils/hooks";

const ResetPassPage: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const email = useSelector((store) => store.password.email);

  const history = useHistory();
  const dispatch = useDispatch();

  const resetPassHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newPassword(password, token));
  };

  const onClickLogin: React.MouseEventHandler = () => {
    history.replace({ pathname: "/login" });
  };

  if (email === null) {
    return <Redirect to="/forgot-password" />;
  }

  return (
    <div className={styles.area}>
      <form className={styles.container} onSubmit={resetPassHandler}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <PasswordInput
          name={"password"}
          value={password}
          placeholder={"Введите новый пароль"}
          extraClass="mb-6"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type={"text"}
          value={token}
          placeholder={"Введите код из письма"}
          extraClass="mb-6"
          onChange={(e) => setToken(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"
        >
          Сохранить
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?{" "}
          <span className={styles.span} onClick={onClickLogin}>
            Войти
          </span>
        </h3>
      </form>
    </div>
  );
};

export default ResetPassPage;
