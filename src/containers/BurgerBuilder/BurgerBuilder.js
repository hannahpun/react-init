import React, {Component, Fragment} from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BugerControls/BugerControls'



import { throwStatement } from '@babel/types';

const INGREDIENT_PRICES = {
  salad: 0.5,
  meat: 0.8,
  bacon: 1,
  cheese: 2
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0
    },
    totalPrice: 0
  }
  addIngredient = (type) =>{
    const updateIngredients = {...this.state.ingredients}
    updateIngredients[type] = this.state.ingredients[type] + 1
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];
    this.setState((prevState, props) => ( {
        ingredients: updateIngredients,
        totalPrice: newPrice
      }))
    }
  removedIngredient = (type) => {
    const currentIngredient = this.state.ingredients[type];
    let updateIngredients = {...this.state.ingredients}
    updateIngredients[type] = currentIngredient > 0 ?  currentIngredient - 1 : 0;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - INGREDIENT_PRICES[type];
    this.setState((prevState, props) => ( {
      ingredients: updateIngredients,
      totalPrice: newPrice
    }))
  }
  disabledIngredient = (type) => {
    const currentIngredient = this.state.ingredients[type];
    return currentIngredient > 0 ? 0 : 1;
  }
  render () {

    return (
      <Fragment>
        <Burger ingredients = {this.state.ingredients}></Burger>
        <BurgerControls 
          added={this.addIngredient}
          removed={this.removedIngredient}
          disabled ={this.disabledIngredient}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
        <div>Burger Controls</div>
        <div>Burger Module</div>
      </Fragment>
    )
  }

}

export default BurgerBuilder;