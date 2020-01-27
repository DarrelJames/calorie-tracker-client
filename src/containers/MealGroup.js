import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Food from '../components/Food'
import { connect } from 'react-redux'
import { Table, Icon, Transition } from 'semantic-ui-react'

class MealGroup extends Component {

  renderFoods = () => {

    if ( this.props.logSet){
      const entries = this.props.log.entries.filter(entry => entry.category === this.props.category)
      return entries.map(entry => entry.foods.map((food) => {
        return <Transition.Group animation='slide down' duration='500' as={Food} servings={entry.servings} entry_id={entry.id} key={food.id} {...food} />
      }
      ))
    }
  }
  render(){
    return (

      <Table structured unstackable selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{this.props.category}</Table.HeaderCell>
            <Table.HeaderCell>Carbs</Table.HeaderCell>
            <Table.HeaderCell>Protein</Table.HeaderCell>
            <Table.HeaderCell>Fat</Table.HeaderCell>
            <Table.HeaderCell>Calories</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>

          {this.renderFoods()}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>
              <Icon color='green' name='plus'/>
              <Link to={`/entries/new?category=${this.props.category}`}>Add Food Item</Link>
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  return { log: state.logs[state.logs.date], logSet: state.logs.logSet}
}

export default connect(mapStateToProps)(MealGroup);
