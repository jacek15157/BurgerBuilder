import React, { Component } from "react";
import Auxilialry from "../../hoc/Auxiliary";
import Bruger from "../../components/Burger/Bruger";
import BuildControls from "../Burger/BuildControls/BuildControls";
import Modal from '../UI/Modal/Modal'
const INGRIDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false
  };

  updatePurchaseState(newPrice, newIngridients) {
    const sum = Object.keys(newIngridients)
      .map(igKey => {
        return newIngridients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      totalPrice: newPrice,
      ingredients: newIngridients,
      purchasable: sum > 0
    });
  }

  addIngridientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount >= 5) {
      return;
    }
    const updatedCount = oldCount + 1;
    const updatedIngridients = {
      ...this.state.ingredients
    };
    let additionPrice = 0;
    updatedIngridients[type] = updatedCount;
    additionPrice += INGRIDIENT_PRICES[type];

    const newPrice = this.state.totalPrice + additionPrice;
    this.updatePurchaseState(newPrice, updatedIngridients);
  };

  removeIngridientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngridients = {
      ...this.state.ingredients
    };
    let fewerPrice = 0;
    updatedIngridients[type] = updatedCount;
    fewerPrice += INGRIDIENT_PRICES[type];

    const newPrice = this.state.totalPrice - fewerPrice;
    this.updatePurchaseState(newPrice, updatedIngridients);
  };
  render() {
    let disableInfo = {
      ...this.state.ingredients
    };

    for (let key in disableInfo) disableInfo[key] = disableInfo[key] <= 0;

    return (
      <Auxilialry>
        <Bruger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngridientHandler}
          ingredientSubtracted={this.removeIngridientHandler}
          purchasable={this.state.purchasable}
          disabled={disableInfo}
          price={this.state.totalPrice}
        />
      </Auxilialry>
    );
  }
}

export default BurgerBuilder;
