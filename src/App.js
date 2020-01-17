import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Registration from './containers/Registration'
import LogIn from './containers/LogIn'
import LogOut from './components/LogOut'
import history from './history'

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <LogOut />
          <Switch>
            <Route path='/' exact component={LogIn} />
            <Route path='/signup' component={Registration} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
