import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions'
import SignUp from '../components/SignUp'
import '../css/fullscreenform.css'
import RegistrationMessage from '../components/RegistrationMessage'
class Registration extends Component {

  onSubmit = formValues => {
    this.props.signUp(formValues)
  }

  render() {
    return (
      <div className='ui middle aligned center aligned grid'>
        <div className='column'>
          <SignUp onSubmit={this.onSubmit}/>
          <RegistrationMessage
            message="Already have an account?"
            link='/login'
            linkText='Log In'
          />
        </div>
      </div>
        );
  }

}


export default connect(null, { signUp })(Registration);
