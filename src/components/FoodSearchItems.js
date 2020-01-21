import React, { Component } from 'react';
import FoodSearchItem from './FoodSearchItem'
export default class FoodSearchItems extends Component {

  renderFoodSearchItems = () => {
    return this.props.foods.map(food => {
      return <FoodSearchItem
        {...this.props.history.location}
        {...food.food.nutrients}
        key={food.food.foodId}
        label={food.food.label}

      />
    })
  }

  render() {
    if (this.props.searching) {
      return (
        <>
          <div className='ui segment' style={{height: '200px'}}>
            <div className="ui active inverted dimmer">
              <div className="ui large text loader">Loading</div>
            </div>
          </div>
        </>
      )
    } else if (this.props.foods) {
      return (
        <table className="ui red table">
          <thead>
            <tr>
              <th className='seven wide'>Food Name</th>
              <th className='two wide'>Carbs</th>
              <th className='two wide'>Protein</th>
              <th className='two wide'>Fat</th>
              <th className='three wide'>Calories</th>
            </tr>
          </thead>
          <tbody>
            {this.renderFoodSearchItems()}
          </tbody>
        </table>
    )} else {
      return <></>

    }
  }

}
