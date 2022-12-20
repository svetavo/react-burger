import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./pagesStyles.module.css";
import { resetPassword } from "../services/actions/passwordActions";

const ForgotPassPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleReset = () => {
    dispatch(resetPassword());
    history.replace({ pathname: "/reset-password" });
  };

  return (
    <div className={styles.area}>
      <div className={styles.container}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <EmailInput placeholder={"Укажите e-mail"} extraClass="mb-6" />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass="mb-20"
          onClick={() => handleReset()}
        >
          Восстановить
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Вспомнили пароль? <span className={styles.span}>Войти</span>
        </h3>
      </div>
    </div>
  );
};

export default ForgotPassPage;
