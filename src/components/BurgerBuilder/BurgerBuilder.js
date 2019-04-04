import React, { Component } from 'react';
import Auxilialry from '../../hoc/Auxiliary'
import Bruger from '../../components/Burger/Bruger'
import BuildControls from '../Burger/BuildControls/BuildControls'

const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
   state = {
    ingredients :{
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    totalPrice: 4
   }
   
   addIngridientHandler = (type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount +1;
    const updatedIngridients = {
        ...this.state.ingredients
    };
    let additionPrice = 0;
    updatedIngridients[type] = updatedCount;
    additionPrice += INGRIDIENT_PRICES[type];
    
    const newPrice = this.state.totalPrice + additionPrice; 
    this.setState({
        totalPrice: newPrice,
        ingredients: updatedIngridients
    });

    this.setState()
   }

   removeIngridientHandler = (type)=>{

   }
    render() {
        return (
            <Auxilialry>
                <Bruger ingredients = {this.state.ingredients}/>
                <BuildControls ingredientAdded = {this.addIngridientHandler}/>
            </Auxilialry>
        );
    }
}

export default BurgerBuilder;