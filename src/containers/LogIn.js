import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions'
import LogInForm from '../components/LogInForm'
import RegistrationMessage from '../components/RegistrationMessage'
import MessageAlert from '../components/MessageAlert'
import { Grid, Header } from 'semantic-ui-react'

class LogIn extends Component {

  onSubmit = formValues => {
    this.props.logIn(formValues)
  }

  render() {
    return (
      <Grid
        textAlign='center'
        style={{ height: '100vh'}} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            Login to Your Account
          </Header>
          <LogInForm onSubmit={this.onSubmit} status={this.props.status}/>
          <MessageAlert message={this.props.message}/>
          <RegistrationMessage
            message="New to us?"
            link='/signup'
            linkText='Sign Up'
          />

        </Grid.Column>
      </Grid>
    );
  }

}

const mapStateToProps = ({ auth: { message, status }}) => ({message, status})

export default connect(mapStateToProps, { logIn })(LogIn);
