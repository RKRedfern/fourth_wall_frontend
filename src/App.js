//import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {URL} from './index';
import HomePage from './Containers/HomePage';
import NavBar from './Components/NavBar';
import LogInForm from './Components/LogInForm';
import SignUpForm from './Components/SignUpForm';
import { loginUser, signupUser, returningUser, editUser, addToGhosts } from './Redux/actions';
import Profile from './Containers/Profile';
import EditForm from './Components/EditForm';
import GhostInput from './Components/GhostInput';

class App extends React.Component {

  componentDidMount = () => {
    
    const token = localStorage.getItem("token")
    
    if(token){
      fetch(`${URL}/profile`, {
        method: "GET",
        headers: {
          "Authorization": 'Bearer ' + token
        }
      })
        .then(r => r.json())
        .then(returningUser => {
          this.props.returning(returningUser.user)
        })
    }
  }

  signupSubmitHandler = (userObj) => {
    this.props.signup(userObj)
  }

  loginSubmitHandler = (userObj) => {
    this.props.login(userObj)
  }

  editSubmitHandler = (userObj) => {
    this.props.edit(userObj, this.props.user.id)
  }

  addGhostHandler = (ghostObj) => {
    this.props.addGhost(ghostObj)
  }

  render () {
    return (
      <div className="App">
        <NavBar />
        <Switch>
        <Route path="/profile" render={(routerProps)=> {
              return(
                <Profile routerProps={routerProps} /> )
            }} 
        />
        <Route path="/login" render={(routerProps) => {
            return(
              <LogInForm  submitHandler={this.loginSubmitHandler} routerProps={routerProps}/> )
            }} 
        />
        <Route path="/signup" render={(routerProps) =>{
              return(
                <SignUpForm submitHandler={this.signupSubmitHandler} routerProps={routerProps} /> )
            }}
        />
        <Route path='/edit' render={(routerProps) => {
            return(
              <EditForm submitHandler={this.editSubmitHandler} routerProps={routerProps} user={this.props.user}/>
            )
          }} 
        />
        <Route path='/addghost' render={(routerProps) => {
            return(
              <GhostInput submitHandler={this.addGhostHandler} routerProps={routerProps} />
            )
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
    user: state.user,
    ghost: state.ghost
  }
}

function mdp(dispatch){
  return{
    login: (userObj) => dispatch(loginUser(userObj)),
    signup: (newUserObj) => dispatch(signupUser(newUserObj)),
    returning: (userObj, ghostObj) => dispatch(returningUser(userObj, ghostObj)),
    edit: (userObj, userId) => dispatch(editUser(userObj, userId)),
    addGhost: (ghostObj, userId) => dispatch(addToGhosts(ghostObj, userId))
  }
}

export default connect(msp, mdp)(App);