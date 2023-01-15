import {
  Input,
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { useHistory } from "react-router-dom";
import { newUser } from "../services/actions/userActions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleReg = (e) => {
    e.preventDefault();
    dispatch(newUser(email, password, name));
  };

  const onClickLogin = () => {
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
          // onClick={() => handleReg()}
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
