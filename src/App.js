import React from 'react';
import { Router, Route } from 'react-router-dom';

import Registration from './containers/Registration'
import LogIn from './containers/LogIn'
// import LogOut from './components/LogOut'
import history from './history'
import Header from './components/Header'
import LogContainer from './containers/LogContainer'
import FoodSearch from './containers/FoodSearch'
import PrivateRoute from './components/PrivateRoute'
import Account from './containers/Account'

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <>
          {/* <LogOut /> */}
          <Header/>
            <PrivateRoute path='/logs' exact component={LogContainer} />
            <PrivateRoute path='/logs/:date' exact component={LogContainer} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={Registration} />
            <PrivateRoute path='/entries/new' component={FoodSearch} />
            <PrivateRoute path='/profile' component={Account} />

        </>
      </Router>
    </div>
  );
}

export default App;
