import styles from "./pagesStyles.module.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const ProfilePage = () => {
  const [activeLinkProfile, setActiveLinkProfile] = useState('profile')
  const history = useHistory();
  const handleOrdersClick = (id) => {
    history.replace({ pathname: `/profile/orders/${id}`});
    setActiveLinkProfile("orders")
  }
  const handleInfoClick = () => {
    history.replace({ pathname: "/profile" });
    setActiveLinkProfile("profile")
  }
  const handleExitClick = () => {
    setActiveLinkProfile("exit")
  }

  return (
    <div>
      <div className={styles.profileContainer}>
        <div>
          <div className={`${activeLinkProfile === 'profile' ? ' ' : "text_color_inactive"} ${styles.menu} text text_type_main-medium `} onClick={handleInfoClick}>
            Профиль
          </div>
          <div
            className={`${activeLinkProfile === 'orders' ? ' ' : "text_color_inactive"} ${styles.menu} text text_type_main-medium  `} onClick={handleOrdersClick}
          >
            История заказов
          </div>
          <div
            className={`${activeLinkProfile === 'exit' ? ' ' : "text_color_inactive"} ${styles.menu} text text_type_main-medium mb-20`} onClick={handleExitClick}
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
              Марк
            </p>
          </div>
          <div className={styles.userinfo}>
            <p className="text text_type_main-small text_color_inactive">
              Логин
            </p>
            <p className="text text_type_main-small text_color_inactive">
              mail@stellar.burgers
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
