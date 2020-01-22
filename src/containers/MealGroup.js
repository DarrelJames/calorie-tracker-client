import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Food from '../components/Food'
import { connect } from 'react-redux'
import _ from 'lodash'
class MealGroup extends Component {

  renderFoods = () => {
    if (_.isEmpty(this.props.logs.selected_log)) {return}

    const entries = this.props.logs.selected_log.entries.filter(entry => entry.category === this.props.category)    
     return entries.map(entry => entry.foods.map(food => (<Food key={food.id} {...food} /> )))
  }
  render(){
    return (

      <table className="ui red table">
        <thead>
          <tr>
            <th className='six wide'>{this.props.category}</th>
            <th className='two wide'>Carbs</th>
            <th className='two wide'>Protein</th>
            <th className='two wide'>Fat</th>
            <th className='three wide'>Calories</th>
          </tr>
        </thead>
        <tbody>

          {this.renderFoods()}
        </tbody>
        <tfoot>
          <tr>
            <td>
            <i className="plus icon green"/>
            <Link to={`/entries/new?category=${this.props.category}`}>Add Food Item</Link>
            </td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

const mapStateToProps = ({ logs }) => {
  return {logs}
}

export default connect(mapStateToProps)(MealGroup);
