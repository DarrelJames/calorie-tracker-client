import React, { Component } from 'react';
import FoodSearchItem from './FoodSearchItem'

export default class FoodSearchItems extends Component {

  renderFoodSearchItems = () => {
    return this.props.foods.map(food => <FoodSearchItem key={food.food.foodId}/>)
  }

  render() {
    if (this.props.foods) {
      return (
        <div className='results'>
          {this.renderFoodSearchItems()}
        </div>
    )} else {
      return <></>
    }
  }

}
