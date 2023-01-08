import styles from "./pagesStyles.module.css";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser, userLogout } from "../services/actions/userActions";
import { useSelector, useDispatch } from "react-redux";

const ProfilePage = () => {
  const [activeLinkProfile, setActiveLinkProfile] = useState("profile");
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user.refreshToken);
  const userName = useSelector((store) => store.user.name);
  const userEmail = useSelector((store) => store.user.email);

  useEffect(() => {
    dispatch(getUser(token));
  }, []);

  const handleOrdersClick = (id) => {
    history.replace({ pathname: `/profile/orders/${id}` });
    setActiveLinkProfile("orders");
  };
  const handleInfoClick = () => {
    history.replace({ pathname: "/profile" });
    setActiveLinkProfile("profile");
  };
  const handleExitClick = () => {
    setActiveLinkProfile("exit");
    dispatch(userLogout(token))
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
        <div>
          <div className={styles.userinfo}>
            <p className="text text_type_main-small text_color_inactive">Имя</p>
            <p className="text text_type_main-small text_color_inactive">
              {userName}
            </p>
          </div>
          <div className={styles.userinfo}>
            <p className="text text_type_main-small text_color_inactive">
              Логин
            </p>
            <p className="text text_type_main-small text_color_inactive">
              {userEmail}{" "}
            </p>
          </div>
          <div className={styles.userinfo}>
            <p className="text text_type_main-small text_color_inactive">
              Пароль
            </p>
            <p className="text text_type_main-small text_color_inactive">
              ******
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
