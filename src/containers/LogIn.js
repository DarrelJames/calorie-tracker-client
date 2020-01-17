import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions'
import LogInForm from '../components/LogInForm'

class LogIn extends Component {

  onSubmit = formValues => {
    this.props.logIn(formValues)
  }

  render() {
    return (
      <div>
        <LogInForm onSubmit={this.onSubmit}/>
      </div>
    );
  }

}


export default connect(null, { logIn })(LogIn);
