import React from 'react';
import constructorStyles from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import {ingredients} from '../../utils/data';

class Bun extends React.Component {
    render() {
        return (
            <div className={constructorStyles.burger__item}>
            <div className={constructorStyles.burger__dragdrop}></div>
            <ConstructorElement 
            type={this.props.type} 
            isLocked={true}
            text={this.props.text}
            price={20}
            thumbnail={this.props.img}
            />
          </div>
        )
    }
}

class Ingredient extends React.Component {
    render() {
        return (
            <div className={constructorStyles.burger__item}>
            <div className={constructorStyles.burger__dragdrop}>
                <DragIcon type="primary" />
            </div>
              <ConstructorElement  
            text={this.props.text}
            price={this.props.price}
            thumbnail={this.props.img}
            />
          </div>
        )
    }
}

class Summary extends React.Component {
  render() {
    return (
      <div className={constructorStyles.burger__summary}>
        <div className={constructorStyles.burger__totalprice}>
        <p className={`${constructorStyles.burger__summarytext} text text_type_digits-medium`}>610</p>
        <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">Оформить заказ</Button>
      </div>
    )
  }
}

export default class BurgerConstructor extends React.Component {
    render() {
      return (
        <section className={constructorStyles.burger__section}>
            <ul className={constructorStyles.burger__list}>
            <Bun type="top" text={`${ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').name} (верх)`} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').price}img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').image}/>
            <div className={`${constructorStyles.burger__scroll} ${constructorStyles.burger__list}`}>
            <Ingredient text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').image}/>
            <Ingredient text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').image}/>
            <Ingredient text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').image}/>
            <Ingredient text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').image}/>
            <Ingredient text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').image}/>
            <Ingredient text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').image}/>
            <Ingredient text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').image}/>
            <Ingredient text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b4').image}/>
            </div>
            <Bun type="bottom" text={`${ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').name} (низ)`} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').image}/>
            </ul>
            <Summary/>
        </section>
      )
    }
  }
