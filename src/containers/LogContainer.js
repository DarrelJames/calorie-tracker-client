import React, { Component } from 'react';
import Log from '../components/Log'
import MealGroup from './MealGroup'

export default class LogContainer extends Component {

  render() {
    return (
      <div>
        <MealGroup category="Breakfast" />
        <MealGroup category="Lunch" />
        <MealGroup category="Dinner" />
        <MealGroup category="Snacks" />
      </div>
    );
  }

}
