import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions'
import LogInForm from '../components/LogInForm'
import RegistrationMessage from '../components/RegistrationMessage'
import '../css/fullscreenform.css'
class LogIn extends Component {

  onSubmit = formValues => {
    this.props.logIn(formValues)
  }

  render() {
    return (
      <div className='ui middle aligned center aligned grid'>
        <div className='column' >
          <LogInForm onSubmit={this.onSubmit}/>
          <RegistrationMessage
            message="New to us?"
            link='/signup'
            linkText='Sign Up'
          />
        </div>
      </div>
    );
  }

}


export default connect(null, { logIn })(LogIn);
