import React from 'react';
import { connect } from 'react-redux'
import { updateEntry } from '../actions'
class Food extends React.Component {
    state = {
      visible: false,
      value: this.props.servings,
      food: {
        label: this.props.label,
        fat: this.props.fat,
        protein: this.props.protein,
        calories: this.props.calories,
        carbs: this.props.carbs
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
            fat: prevState.food.fat * e.target.value,
            protein: prevState.food.protein * e.target.value,
            calories: prevState.food.calories * e.target.value,
            carbs: prevState.food.carbs * e.target.value
          }
        }
      })
    }

    handleEditClick = () => {

      this.props.updateEntry(this.props.entry_id, this.state.value)
    }

    renderEdit = () => {
      if (this.state.visible) {
        return (
          <tr>
            <td colSpan='5'>
              <div className='ui form'>
                <div className='field'>
                  <input
                    type='text'
                    className='ui input'
                    style={{width: '50px'}}
                    value={this.state.value}
                    onChange={e => this.handleChange(e)}
                  ></input>
                  <div onClick={this.handleEditClick} className="ui positive button">
                    Edit
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

export default connect(null, { updateEntry })(Food)
