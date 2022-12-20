import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./pagesStyles.module.css";
import { newPassword } from "../services/actions/passwordActions";
import { useDispatch } from "react-redux";
import {useHistory} from 'react-router-dom'

const ResetPassPage = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const resetPassHandler = () => {
    dispatch(newPassword());
  };

  const onClickLogin = () => {
    history.replace({ pathname: "/login" });
  };


  return (
    <div className={styles.area}>
      <div className={styles.container}>
        <h2 className="text text_type_main-medium mb-6">
          Восстановление пароля
        </h2>
        <PasswordInput
          name={"password"}
          placeholder={"Введите новый пароль"}
          extraClass="mb-6"
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          extraClass="mb-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass="mb-20"
          onClick={() => resetPassHandler()}
        >
          Сохранить
        </Button>
        <h3 className="text text_type_main-default text_color_inactive">
          Вспомнили пароль? <span className={styles.span} onClick={onClickLogin}>Войти</span>
        </h3>
      </div>
    </div>
  );
};

export default ResetPassPage;
