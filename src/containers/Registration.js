import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions'
import SignUp from '../components/SignUp'
import '../css/fullscreenform.css'
import RegistrationMessage from '../components/RegistrationMessage'
import MessageAlert from '../components/MessageAlert'
import { Grid, Header } from 'semantic-ui-react'

class Registration extends Component {

  onSubmit = formValues => {
    this.props.signUp(formValues)
  }

  render() {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh'}} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            Signup for Account
          </Header>
          <SignUp onSubmit={this.onSubmit} status={this.props.status}/>
          <MessageAlert message={this.props.message}/>
          <RegistrationMessage
            message="Already have an account?"
            link='/login'
            linkText='Log In'
          />

        </Grid.Column>
      </Grid>
        );
  }

}


const mapStateToProps = ({auth: { message, status }}) => ({ message, status })

export default connect(mapStateToProps, { signUp })(Registration);
