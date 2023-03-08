import React from "react";
import {
  Input,
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { useHistory } from "react-router-dom";
import { newUser } from "../services/actions/userActions";
import { useState } from "react";
import { useDispatch } from "../utils/hooks";

const RegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleReg = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(newUser(email, password, name));
  };

  const onClickLogin: React.MouseEventHandler  = () => {
    history.replace({ pathname: "/login" });
  };

  return (
    <div className={styles.area}>
      <form className={styles.container} onSubmit={handleReg}>
        <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
        <Input
          type={"text"}
          placeholder={"Имя"}
          extraClass="mb-6"
          value={""}
          onChange={(e) => setName(e.target.value)}
        />
        <EmailInput
          placeholder={"E-mail"}
          extraClass="mb-6"
          value={""}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordInput
          name={"password"}
          extraClass="mb-6"
          value={""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          extraClass="mb-20"
        >
          Зарегистрироваться
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?{" "}
          <span className={styles.span} onClick={onClickLogin}>
            Войти
          </span>
        </h3>
      </form>
    </div>
  );
};

export default RegisterPage;
