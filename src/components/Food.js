import React, { Component } from 'react';


export default class Food extends Component {

  render() {
    const {name, protein, carbs, fat, calories} = this.props.food
    return (
      <tr>
        <td>{name}</td>
        <td>{carbs}</td>
        <td>{protein}</td>
        <td>{fat}</td>
        <td>{calories}</td>
      </tr>
    );
  }

}
