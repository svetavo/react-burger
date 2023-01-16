import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";
import { useHistory, NavLink } from "react-router-dom";
import { useState } from "react";

function HeaderLogo() {
  return <Logo />;
}

export default function AppHeader() {
  const [activeLink, setActiveLink] = useState("constructor");

  const history = useHistory();

  const onClickProfile = () => {
    setActiveLink("profile");
    history.replace({ pathname: "/profile" });
  };

  const onClickConstructor = () => {
    setActiveLink("constructor");
    history.replace({ pathname: "/" });
  };

  const onClickOrders = () => {
    setActiveLink("orders");
  };

  return (
    <header>
      <nav className={`${headerStyles.header} p-4`}>
        <div className={headerStyles.header__constructor}>
          <li className={headerStyles.header__item}>
            <NavLink
              to="/"
              className={`${headerStyles.header__button} p-5`}
              onClick={onClickConstructor}
            >
              {" "}
              <BurgerIcon
                type={activeLink === "constructor" ? "primary" : "secondary"}
              />
              <p
                className={`${
                  activeLink === "constructor"
                    ? headerStyles.header__text
                    : "text_color_inactive"
                }  ml-2 text text_type_main-default`}
              >
                Конструктор
              </p>
            </NavLink>
          </li>
          <li className={headerStyles.header__item}>
            <NavLink
              to="/"
              className={`${headerStyles.header__button} p-5`}
              onClick={onClickOrders}
            >
              {" "}
              <ListIcon
                type={activeLink === "orders" ? "primary" : "secondary"}
              />{" "}
              <p
                className={`${
                  activeLink === "orders"
                    ? headerStyles.header__text
                    : "text_color_inactive"
                } ml-2 text text_type_main-default `}
              >
                Лента заказов{" "}
              </p>
            </NavLink>
          </li>
        </div>
        <div className={headerStyles.header__logo}>
          <HeaderLogo />
        </div>
        <li className={headerStyles.header__item}>
          <NavLink
            to="/profile"
            className={`${headerStyles.header__button} p-5`}
            onClick={onClickProfile}
          >
            {" "}
            <ProfileIcon
              type={activeLink === "profile" ? "primary" : "secondary"}
            />
            <p
              className={`${
                activeLink === "profile"
                  ? headerStyles.header__text
                  : "text_color_inactive"
              } ml-2 text text_type_main-default `}
            >
              Личный кабинет
            </p>
          </NavLink>
        </li>{" "}
      </nav>
    </header>
  );
}
