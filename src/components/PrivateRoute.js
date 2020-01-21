import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={ props => (
    auth.token && auth.errorStatusCode !== 401 ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )}/>
)

const mapStateToProps = ({ auth }) => ({
  errorStatusCode: auth.errorStatusCode,
  token: auth.token
});

export default withRouter(
  connect(
    mapStateToProps
  )(PrivateRoute));
