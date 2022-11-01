import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import headerStyles from "./AppHeader.module.css";

class  HeaderLogo extends React.Component {
    render() {
      return (
      <Logo />      
      );
    }
  }

  class HeaderItem extends React.Component {
      render() {
          return (<li className={headerStyles.header__item}>
              {this.props.children}
              </li>
          )
      }
  }

  class BurgerConstructorButton extends React.Component {
      render() {
          return (
            <button className={`${headerStyles.header__button} p-5`} type="secondary" size="large">
            <BurgerIcon type="primary"/>
              <p className={`${headerStyles.header__text} ml-2 text text_type_main-default`}>Конструктор</p>
            </button>
          )
      }
  }

  class OrdersButton extends React.Component {
    render() {
        return (
          <button className={`${headerStyles.header__button} p-5`} type="secondary" size="large">
              <ListIcon type="secondary"/>
              <p className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</p>
          </button>
        )
    }
}

class ProfileButton extends React.Component {
    render() {
        return (
            <button className={`${headerStyles.header__button} p-5`} type="secondary" size="large">
            <ProfileIcon type="secondary"/>
            <p className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</p>
          </button>
        )
    }
}

  
  export default class AppHeader extends React.Component {
    render() {
      return (
        <header>
            <nav className={headerStyles.header}>
            <div className={headerStyles.header__constructor}>
            <HeaderItem children={<BurgerConstructorButton/>} />
            <HeaderItem children={<OrdersButton/>} />
            </div>
            <div className={headerStyles.header__logo}>
                <HeaderLogo />
            </div>
            <HeaderItem children={<ProfileButton/>} />
            </nav>
      </header>
      );
    }
  }
  
  