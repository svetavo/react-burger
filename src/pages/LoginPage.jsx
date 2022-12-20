import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { useHistory } from "react-router-dom";

const LoginPage = () => {

  const history = useHistory();
  
  const onClickReg = () => {
    history.replace({ pathname: '/register' });
  };

  const onClickRes = () => {
    history.replace({ pathname: '/forgot-password' });
  };


  return (
    <div className={styles.area}>
      <div className={styles.container}>
        <h2 className="text text_type_main-medium mb-6">Вход</h2>
        <EmailInput placeholder={"E-mail"} extraClass="mb-6" />
        <PasswordInput
          name={"password"}
          extraClass="mb-6"
        />{" "}
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass="mb-20"
        >
          Войти
        </Button>
        <h3 className="text text_type_main-default text_color_inactive mb-4">
          Вы - новый пользователь?{" "}
          <span className={styles.span} onClick={onClickReg}>Зарегистрироваться</span>
        </h3>
        <h3 className="text text_type_main-default text_color_inactive">
          Забыли пароль?{" "}
          <span className={styles.span} onClick={onClickRes}>Восстановить пароль</span>
        </h3>
      </div>
    </div>
  );
};

export default LoginPage;
