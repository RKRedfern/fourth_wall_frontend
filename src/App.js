
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import {URL} from './index';
import HomePage from './Containers/HomePage';
import NavBar from './Components/NavBar';
import LogInForm from './Components/LogInForm';
import SignUpForm from './Components/SignUpForm';
import { loginUser, signupUser, returningUser, editUser, fetchGhosts } from './Redux/actions';
import Profile from './Containers/Profile';
import EditForm from './Components/EditForm';
import GhostContainer from './Containers/GhostContainer'



class App extends React.Component {

  componentDidMount = () => {
    
    const token = localStorage.getItem("token")
    const user = localStorage.getItem("user")

    if(token && user){
      fetch(`${URL}/profile`, {
        method: "GET",
        headers: {
          "Authorization": 'Bearer ' + token
        }
      })
        .then(r => r.json())
        .then(returningUser => {
          console.log(returningUser)
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
    this.props.edit(userObj, this.props.user.data.id)
  }

  render () {
    return (
      <div className="App">
        <NavBar />
        <GhostContainer />
        <Switch>
          {/* User Routes */}
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
              <EditForm submitHandler={this.editSubmitHandler} routerProps={routerProps} />
            )
          }} 
        />
          {/* Ghost Routes */}
        <Route path="/" render={() => <HomePage />} />

        </Switch>
      </div>
    )
  }
}

function msp(state){
  return{
    user: state.user,
    ghosts: state.ghosts
  }
}

function mdp(dispatch){
  return{
    login: (userObj) => dispatch(loginUser(userObj)),
    signup: (newUserObj) => dispatch(signupUser(newUserObj)),
    returning: (userObj) => dispatch(returningUser(userObj)),
    edit: (userObj, userId) => dispatch(editUser(userObj, userId)),
    fetchGhosts: (ghostDetails) => dispatch(fetchGhosts(ghostDetails))
  }
}

export default connect(msp, mdp)(App);