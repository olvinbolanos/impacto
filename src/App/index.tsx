import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Services from './Services';
import Register from './Register';
import Home from './Home';
import Header from './Header';


const my404 = () => {
    return (<div>Sorry buddy, You are lost.</div>);
}

export default function App () {
  return (
    <main>
      <Header />
      <Switch>
          <Route exact path='/' component={ Home} />
          <Route exact path='/services' component={ Services } />
          <Route exact path='/register' component={ Register } />
          <Route component={ my404 } />
      </Switch>
    </main>
  );
}