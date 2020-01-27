import React from 'react';
import { connect } from 'react-redux'
import { updateEntry, deleteEntry } from '../actions'
import { debounce } from 'lodash'
import { Table, Form, Input, Transition} from 'semantic-ui-react'
import RemoveModal from './RemoveModal'

class Food extends React.Component {

  constructor(props) {
    super(props)

    this.fat = props.fat
    this.protein = props.protein
    this.calories = props.calories
    this.carbs = props.carbs

    this.state = {
      visible: false,
      value: this.props.servings,
      food: {
        label: props.label,
        fat: this.fat * this.props.servings,
        protein: this.protein * this.props.servings,
        calories: this.calories * this.props.servings,
        carbs: this.carbs * this.props.servings
      }
    }

    this.updateServings = debounce(this.updateServings, 500);
  }

    handleTableRowClick = () => {
      this.setState(prevState => ({visible: !prevState.visible}))
    }

    handleChange = (e) => {

      e.persist()
      this.setState(prevState => {
       return { ...prevState,
          value: e.target.value,
          food: { ...prevState.food,
            fat: Math.ceil(this.fat * e.target.value),
            protein: Math.ceil(this.protein * e.target.value),
            calories: Math.ceil(this.calories * e.target.value),
            carbs: Math.ceil(this.carbs * e.target.value)
          }
        }
      }, () => {
        this.updateServings()
      })
    }

    updateServings = () => this.props.updateEntry(this.props.entry_id, this.state.value)

    handleEditClick = () => {

      this.props.updateEntry(this.props.entry_id, this.state.value)
    }
    handleDeleteClick = () => {

      this.props.deleteEntry(this.props.entry_id)
    }

    renderEdit = () => {
      if (this.state.visible) {
        return (
            <Table.Cell colSpan='5' collapsing>
              <Form>
                <Form.Group inline>
                  <Form.Field>
                    <label>Servings (100g)</label>
                    <Input
                      value={this.state.value}
                      onChange={e => this.handleChange(e)}
                      style={{width: '50px'}}
                    />
                  </Form.Field>
                  <RemoveModal label={this.state.food.label} entry={this.props.entry_id}/>
                </Form.Group>
              </Form>
            </Table.Cell>
        )
      }
    }

    render(){
      return (
        <>
          <Table.Row onClick={this.handleTableRowClick}>
            <Table.Cell>{this.state.food.label}</Table.Cell>
            <Table.Cell>{this.state.food.carbs}</Table.Cell>
            <Table.Cell>{this.state.food.protein}</Table.Cell>
            <Table.Cell>{this.state.food.fat}</Table.Cell>
            <Table.Cell>{this.state.food.calories}</Table.Cell>
          </Table.Row>
          <Transition.Group as={Table.Row} animation='slide down' duration={500}>
            {this.renderEdit()}
          </Transition.Group>
        </>
      )}
}

export default connect(null, { updateEntry, deleteEntry })(Food)
