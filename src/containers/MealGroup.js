import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Food from '../components/Food'
import { connect } from 'react-redux'
import { Table, Icon, Transition } from 'semantic-ui-react'
import MealTotalsRow from '../components/MealTotalsRow'

class MealGroup extends Component {

  renderFoods = () => {
    if ( this.props.logSet){
      return this.props.entries.map(entry => entry.foods.map((food) => {
        return <Transition.Group animation='slide down' duration='500' as={Food} servings={entry.servings} entry_id={entry.id} key={food.id} {...food} />
      }
      ))
    }
  }

  getTotals = () => {
    if ( this.props.logSet) {
      let calories, carbs, fat, protein
      calories = carbs = fat = protein = 0
      this.props.entries.forEach(entry => entry.foods.forEach(item => {
        calories += item.calories * entry.servings;
        carbs += item.carbs * entry.servings;
        fat += item.fat * entry.servings;
        protein += item.protein * entry.servings;
      }))
      return {
        calories,
        carbs,
        fat,
        protein
      }
    }
  }

  render(){
    const mealTotals = this.getTotals()
    return (

      <Table structured unstackable selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={7}>{this.props.category}</Table.HeaderCell>
            <Table.HeaderCell width={2}>Carbs</Table.HeaderCell>
            <Table.HeaderCell width={2}>Protein</Table.HeaderCell>
            <Table.HeaderCell width={2}>Fat</Table.HeaderCell>
            <Table.HeaderCell width={3}>Calories</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.renderFoods()}
          <Table.Row>
            <Table.Cell>
              <Icon color='green' name='plus'/>
              <Link to={`/entries/new?category=${this.props.category}`}>Add Food Item</Link>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        {(this.props.logSet && this.props.entries.length > 0) &&  <MealTotalsRow {...mealTotals}/>}

      </Table>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const cat = ownProps.category
  const log = state.logs[state.logs.date]
  let entries = null
  if (log) {
    entries = log[cat]
  }

  return { entries, logSet: state.logs.logSet}
}

export default connect(mapStateToProps)(MealGroup);
