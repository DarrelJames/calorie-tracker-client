import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth,
  token,
  errorStatusCode,
  ...rest
}) => (
  <Route {...rest} render={ props => (
    token ? (
      <Redirect to="/logs" />
    ) : (
      <Component {...props} />
    )
  )}/>
)

const mapStateToProps = ({ auth: {token, errorStatusCode} }) => ({
  errorStatusCode,
  token
});

export default withRouter(
  connect(
    mapStateToProps
  )(PrivateRoute));
