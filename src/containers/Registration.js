import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions'
import SignUp from '../components/SignUp'

class Registration extends Component {

  onSubmit = formValues => {
    this.props.signUp(formValues)
  }
  
  render() {
    return (
      <div>
        <SignUp onSubmit={this.onSubmit}/>
      </div>
    );
  }

}


export default connect(null, { signUp })(Registration);
