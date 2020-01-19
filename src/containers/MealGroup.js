import React from 'react';
import { Link } from 'react-router-dom'
import Food from '../components/Food'
const MealGroup = ({category}) => {
  return (
    <table class="ui red table">
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
        <Food />
      </tbody>
      <tfoot>
        <tr>
          <td><i class="plus icon green"></i><Link to='/foods/new'>Add Food Item</Link></td>
        </tr>
      </tfoot>
    </table>
  )
}


export default MealGroup;
