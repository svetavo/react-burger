import {
  Input,
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { useHistory } from "react-router-dom";
import { newUser } from "../services/actions/authorisationActions";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleReg = () => {
    dispatch(newUser());
  };

  const onClickLogin = () => {
    history.replace({ pathname: "/login" });
  };

  return (
    <div className={styles.area}>
      <div className={styles.container}>
        <h2 className="text text_type_main-medium mb-6">Регистрация</h2>
        <Input type={"text"} placeholder={"Имя"} extraClass="mb-6" />
        <EmailInput placeholder={"E-mail "} extraClass="mb-6" />
        <PasswordInput name={"password"} extraClass="mb-6" />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass="mb-20"
          onClick={() => handleReg()}
        >
          Зарегистрироваться
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?{" "}
          <span className={styles.span} onClick={onClickLogin}>
            Войти
          </span>
        </h3>
      </div>
    </div>
  );
};

export default RegisterPage;
