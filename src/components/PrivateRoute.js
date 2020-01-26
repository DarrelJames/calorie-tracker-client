import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  auth,
  token,
  errorStatusCode,
  ...rest
}) => {
  return  (
    <Route {...rest} render={ props => (
    token && errorStatusCode !== 401 ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )}/>
)}

const mapStateToProps = ({ auth: {token, errorStatusCode} }) => ({
  errorStatusCode,
  token
});

export default withRouter(
  connect(
    mapStateToProps
  )(PrivateRoute));
