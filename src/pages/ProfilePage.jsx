import styles from "./pagesStyles.module.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getUser,
  userLogout,
  patchUser,
} from "../services/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ProfilePage = () => {
  const [activeLinkProfile, setActiveLinkProfile] = useState("profile");
  const [activeButton, setActiveButton] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user.refreshToken);
  const userName = useSelector((store) => store.user.name);
  const userEmail = useSelector((store) => store.user.email);

  useEffect(() => {
    dispatch(getUser(token));
    setName(userName);
    setEmail(userEmail);
  }, []);

  const handleOrdersClick = (id) => {
    // history.replace({ pathname: `/profile/orders/${id}` });
    setActiveLinkProfile("orders");
  };
  const handleInfoClick = () => {
    history.replace({ pathname: "/profile" });
    setActiveLinkProfile("profile");
  };
  const handleExitClick = () => {
    setActiveLinkProfile("exit");
    dispatch(userLogout());
    history.replace({ pathname: "/login" });
  };

  const handleCancel = () => {
    setName(userName);
    setEmail(userEmail);
    setActiveButton(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(patchUser(email, name));
  };

  return (
    <div>
      <div className={styles.profileContainer}>
        <div>
          <div
            className={`${
              activeLinkProfile === "profile" ? " " : "text_color_inactive"
            } ${styles.menu} text text_type_main-medium `}
            onClick={handleInfoClick}
          >
            Профиль
          </div>
          <div
            className={`${
              activeLinkProfile === "orders" ? " " : "text_color_inactive"
            } ${styles.menu} text text_type_main-medium  `}
            onClick={handleOrdersClick}
          >
            История заказов
          </div>
          <div
            className={`${
              activeLinkProfile === "exit" ? " " : "text_color_inactive"
            } ${styles.menu} text text_type_main-medium mb-20`}
            onClick={handleExitClick}
          >
            Выход
          </div>
          <p className={`${styles.text} text text_type_main-small`}>
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={(e) => setName(e.target.value)}
            icon={activeButton === "name" ? "CloseIcon" : "EditIcon"}
            value={name}
            name={"name"}
            error={false}
            onIconClick={() => setActiveButton("name")}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-4"
          />
          <Input
            type={"email"}
            placeholder={"Логин"}
            onChange={(e) => setEmail(e.target.value)}
            icon={activeButton === "email" ? "CloseIcon" : "EditIcon"}
            value={email}
            name={"email"}
            error={false}
            onIconClick={() => setActiveButton("email")}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-4"
          />
          <Input
            type={"text"}
            placeholder={"Пароль"}
            // onChange={(e) => setValue(e.target.value)}
            icon={activeButton === "password" ? "CloseIcon" : "EditIcon"}
            value={"******"}
            name={"password"}
            error={false}
            onIconClick={() => setActiveButton("password")}
            errorText={"Ошибка"}
            size={"default"}
            extraClass="mb-4"
          />
          {activeButton && (
            <div className={styles.buttonContainer}>
              <Button
                htmlType="button"
                type="secondary"
                size="large"
                extraClass="mb-20"
                onClick={() => handleCancel()}
              >
                Отмена
              </Button>
              <Button
                htmlType="submit"
                type="primary"
                size="large"
                extraClass="mb-20"
              >
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
