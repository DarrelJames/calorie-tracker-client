import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Registration from './containers/Registration'
import LogIn from './containers/LogIn'
// import LogOut from './components/LogOut'
import history from './history'
import Header from './components/Header'
import LogContainer from './containers/LogContainer'
import Foods from './containers/Foods'
function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <>
          {/* <LogOut /> */}
          <Header/>
          <Switch>
            <Route path='/' exact component={LogContainer} />
            <Route path='/login' component={LogIn} />
            <Route path='/signup' component={Registration} />
            <Route path='/foods/new' component={Foods} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
