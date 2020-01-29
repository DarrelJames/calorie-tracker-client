import React, { Component } from 'react';
import FoodSearchItem from './FoodSearchItem'
import { Table } from 'semantic-ui-react'
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
        <Table unstackable selectable structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={7}>Food Name</Table.HeaderCell>
              <Table.HeaderCell width={2}>Carbs</Table.HeaderCell>
              <Table.HeaderCell width={2}>Protein</Table.HeaderCell>
              <Table.HeaderCell width={2}>Fat</Table.HeaderCell>
              <Table.HeaderCell width={3}>Calories</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <tbody>
            {this.renderFoodSearchItems()}
          </tbody>
        </Table>
    )} else {
      return <></>

    }
  }

}
