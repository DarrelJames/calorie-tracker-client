import React from 'react';
import { Link } from 'react-router-dom'
import Food from '../components/Food'
const MealGroup = ({category}) => {
  return (
    <table className="ui red table">
      <thead>
        <tr>
          <th className='six wide'>{category}</th>
          <th className='two wide'>Carbs</th>
          <th className='two wide'>Protein</th>
          <th className='two wide'>Fat</th>
          <th className='three wide'>Calories</th>
        </tr>
      </thead>
      <tbody>
        <Food food={{food: {}}}/>
      </tbody>
      <tfoot>
        <tr>
          <td>
          <i className="plus icon green"/>
          <Link to={`/entries/new?category=${category}`}>Add Food Item</Link>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}


export default MealGroup;
