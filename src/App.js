import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Registration from './containers/Registration'
import LogIn from './containers/LogIn'
// import LogOut from './components/LogOut'
import history from './history'
import Header from './components/Header'
import LogContainer from './containers/LogContainer'
import Foods from './containers/Foods'
import PrivateRoute from './components/PrivateRoute'
import Account from './containers/Account'

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <>
          {/* <LogOut /> */}
          <Header/>
            <PrivateRoute path='/' exact component={LogContainer} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={Registration} />
            <PrivateRoute path='/entries/new' component={Foods} />
            <PrivateRoute path='/profile' component={Account} />

        </>
      </Router>
    </div>
  );
}

export default App;
