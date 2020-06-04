import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Services from '../Services';
import Register from '../Register';
import HomePage from '../Home';
// import Header from './Header';
import logo from '../../logo.svg';

import * as ROUTES from '../../constants/routes';

const my404 = () => {
  return (<div>Sorry buddy, You are lost.</div>);
}

class App extends Component {
  render () {
    return (
      <div>
       <main>
      {/* <Header /> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <Switch>
         <div> Hello Everyone.</div>
          <Route exact path={ROUTES.HOME} component={ HomePage } /> 
          <Route exact path={ROUTES.SERVICES} component={ Services } />
          <Route exact path={ROUTES.REGISTER} component={ Register } /> 
          <Route component={ my404 } />
      </Switch>
      </main>
    </div>
    )
  }
}

export default App;