import React from 'react';
import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import ingredientsStyles from "./BurgerIngredients.module.css";
import {ingredients} from '../../utils/data';

class IngridientsItem extends React.Component {
    render() {
        return (
            <div className={`${ingredientsStyles.ingredients__item} pl-4 mb-8`}>
            <img className={`${ingredientsStyles.ingredients__image} mb-1`} src={this.props.img}/>
            <div className={`${ingredientsStyles.ingredients__price} mb-1`}>
                <p className='text text_type_main-default mr-2'>{this.props.price}</p>
            <CurrencyIcon />
            </div>            
            <p className='text text_type_main-default'>{this.props.text}</p>
            <div className={ingredientsStyles.ingredients__quantity}><Counter count={1} size="default" /></div> 
            </div>
        )
    }
}


export default class BurgerIngredients extends React.Component {
    render() {
      return (
        <div>
            <p className='pt-10 pb-5 text text_type_main-large'>Соберите бургер</p>
            <nav className={ingredientsStyles.ingredients__menu}>
                <Tab value="Булки">Булки</Tab>
                <Tab value="Соусы" >Соусы </Tab>
                <Tab value="Начинка">Начинка </Tab>
            </nav>
            <section className={`${ingredientsStyles.ingredients__section} mb-10`}>
            <p className="text text_type_main-medium mb-6 mt-10">Булки</p>
            <div className={`${ingredientsStyles.ingredients__container}`}>
            <IngridientsItem text={`${ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').name} (верх)`} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b1').image}/>
            </div>
            <p className="text text_type_main-medium mb-6 mt-10">Соусы</p>
            <div className={`${ingredientsStyles.ingredients__container}`}>
            <IngridientsItem text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').image}/>
            <IngridientsItem text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').image}/>
            <IngridientsItem text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').image}/>
            <IngridientsItem text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').image}/>
            <IngridientsItem text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').image}/>
            <IngridientsItem text={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').name} price={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').price} img={ingredients.find(item => item._id === '60666c42cc7b410027a1a9b9').image}/>

            </div>
            </section>
        </div>
        );
    }
  }
