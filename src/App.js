import React from 'react';
import { Router } from 'react-router-dom';

import Registration from './containers/Registration'
import LogIn from './containers/LogIn'
// import LogOut from './components/LogOut'
import history from './history'
import Header from './components/Header'
import LogContainer from './containers/LogContainer'
import FoodSearch from './containers/FoodSearch'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import Account from './containers/Account'
import LandingPage from './components/LandingPage'

import './css/index.css'
function App(props) {
  return (
    <div className="ui container">
      <Router history={history}>
        <>

          <Header/>
            <PublicRoute path='/' exact component={LandingPage} />
            <PrivateRoute path='/logs' exact component={LogContainer} />
            <PrivateRoute path='/logs/:date' exact component={LogContainer} />
            <PublicRoute path='/login' component={LogIn} />
            <PublicRoute path='/signup' component={Registration} />
            <PrivateRoute path='/entries/new' component={FoodSearch} />
            <PrivateRoute path='/profile' component={Account} />

        </>
      </Router>
    </div>
  );
}

export default App;
