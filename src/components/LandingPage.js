import React, { Component } from 'react';
import Logo from '../images/kcal.png'

export default class LandingPage extends Component {

  render() {
    return (
      <h1 className='ui centered header'>
        <img src={Logo} className='ui large image' alt='logo'/>
        Calorie Tracker
      </h1>
    );
  }

}
