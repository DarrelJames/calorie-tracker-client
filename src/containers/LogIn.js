import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions'
import LogInForm from '../components/LogInForm'
import SignUpMessage from '../components/SignUpMessage'

class LogIn extends Component {

  onSubmit = formValues => {
    this.props.logIn(formValues)
  }

  render() {
    return (
      <div className='ui middle aligned center aligned grid'>
        <div className='column' style={{maxWidth: "450px", marginTop: '150px' }}>
          <LogInForm onSubmit={this.onSubmit}/>
          <SignUpMessage />
        </div>
      </div>
    );
  }

}


export default connect(null, { logIn })(LogIn);
