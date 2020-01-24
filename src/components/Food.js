import React from 'react';
import { connect } from 'react-redux'
import { updateEntry, deleteEntry } from '../actions'
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
        this.props.updateEntry(this.props.entry_id, this.state.value)
      })
    }

    handleEditClick = () => {

      this.props.updateEntry(this.props.entry_id, this.state.value)
    }
    handleDeleteClick = () => {

      this.props.deleteEntry(this.props.entry_id)
    }

    renderEdit = () => {
      if (this.state.visible) {
        return (
          <tr>
            <td colSpan='5'>
              <div className='ui form'>
                <div className='inline fields'>
                  <div className='field'>
                    <input
                      type='text'
                      className='ui input'
                      style={{width: '50px'}}
                      value={this.state.value}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                  <div className='field'>
                    <div onClick={this.handleEditClick} className="ui positive button">
                      Edit
                    </div>
                  </div>
                  <div className='field'>
                    <div onClick={this.handleDeleteClick} className="ui negative button">
                      Remove
                    </div>
                  </div>
                </div>

              </div>
            </td>
          </tr>
        )
      }
    }

    render(){
      return (
        <>
          <tr style={{cursor: 'pointer'}} onClick={this.handleTableRowClick}>
            <td>{this.state.food.label}</td>
            <td>{this.state.food.carbs}</td>
            <td>{this.state.food.protein}</td>
            <td>{this.state.food.fat}</td>
            <td>{this.state.food.calories}</td>
          </tr>
          {this.renderEdit()}
        </>
      )}
}

export default connect(null, { updateEntry, deleteEntry })(Food)
