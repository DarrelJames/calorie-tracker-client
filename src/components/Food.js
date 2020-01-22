import React from 'react';


 const Food = ({protein, carbs, calories, fat, label}) => {
    
    return (
      <tr>
      <td>{label}</td>
      <td>{carbs}</td>
      <td>{protein}</td>
      <td>{fat}</td>
      <td>{calories}</td>
      </tr>
    )
}

export default Food
