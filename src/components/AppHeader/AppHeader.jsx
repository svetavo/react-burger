import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Button
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./AppHeader.module.css";


function HeaderItem(props) {
  return <li className={headerStyles.header__item}>{props.children}</li>;
}

function BurgerConstructorButton() {
  return (
    <Button
      className={`${headerStyles.header__button} p-5`}
      type="secondary"
      size="large"
      htmlType='button'
    >
      <BurgerIcon type="primary" />
      <p
        className={`${headerStyles.header__text} ml-2 text text_type_main-default`}
      >
        Конструктор
      </p>
    </Button>
  );
}

function OrdersButton() {
  return (
    <Button
      className={`${headerStyles.header__button} p-5`}
      type="secondary"
      size="large"
      htmlType='button'
    >
      <ListIcon type="secondary" />
      <p className="ml-2 text text_type_main-default text_color_inactive">
        Лента заказов
      </p>
    </Button>
  );
}

function ProfileButton() {
  return (
    <Button
      className={`${headerStyles.header__button} p-5`}
      type="secondary"
      size="large"
      htmlType='button'
    >
      <ProfileIcon type="secondary" />
      <p className="ml-2 text text_type_main-default text_color_inactive">
        Личный кабинет
      </p>
    </Button>
  );
}

export default function AppHeader() {
  return (
    <header>
      <nav className={`${headerStyles.header} p-4`}>
        <div className={headerStyles.header__constructor}>
          <HeaderItem children={<BurgerConstructorButton />} />
          <HeaderItem children={<OrdersButton />} />
        </div>
        <div className={headerStyles.header__logo}>
          <Logo />
        </div>
        <HeaderItem children={<ProfileButton />} />
      </nav>
    </header>
  );
}
