
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
//import {URL} from './index';
import HomePage from './Containers/HomePage';
import NavBar from './Components/NavBar';
import LogInForm from './Components/LogInForm';
import SignUpForm from './Components/SignUpForm';
import { loginUser } from './Redux/actions';
import Profile from './Containers/Profile';


class App extends React.Component {

  signupSubmitHandler = (userObj) => {
    this.props.signup(userObj)
  }

  loginSubmitHandler = (userObj) => {
    this.props.login(userObj)
  }

  render () {
    return (
      <div className="App">
      <NavBar /> 
      <Switch>

      <Route path="/login" render={(routerProps) => {
          return(
            <LogInForm  submitHandler={this.loginSubmitHandler} routerProps={routerProps}/> )
          }} 
      />

      <Route path="/profile" render={(routerProps)=> {
            return(
              <Profile routerProps={routerProps} /> )
          }} 
      />

      <Route path="/signup" render={(routerProps) =>{
            return(
              <SignUpForm submitHandler={this.signupSubmitHandler} routerProps={routerProps} /> )
          }}

      />

      <Route path="/" render={() => <HomePage />} />

      </Switch>
      </div>
    )
  }
}

function msp(state){
  return{
    user: state.user
  }
}

function mdp(dispatch){
  return{
    login: (userObj) => dispatch(loginUser(userObj)),
    signup: (newUserObj) => dispatch(signupUser(newUserObj)),
  }
}

export default connect(msp, mdp)(App);