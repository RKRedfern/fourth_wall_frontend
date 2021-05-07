
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {URL} from './index';
import HomePage from './Containers/HomePage';

class App extends React.Component {



  render () {
    return (
      <div className="App">

      <Switch>
  
      <Route path="/" render={() => <HomePage />} />

      </Switch>

      </div>
    )
  }

}

export default App;