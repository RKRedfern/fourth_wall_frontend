import { LOG_IN, SIGN_UP, RETURNING, DELETE_USER, EDIT_USER, LOG_OUT, ADD_GHOST, SET_GHOSTS } from './actionTypes'
import { URL } from '../index'


export function loginUser(userObj) {
    
    return function(dispatch, getState){
        fetch('http://localhost:3000/api/v1/login', {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(r => r.json())
            .then(checkedUserObj => {
                dispatch({ type: LOG_IN, payload: checkedUserObj })
                dispatch({ type: SET_GHOSTS, payload: checkedUserObj.user.data.attributes.ghosts })
                localStorage.setItem("token", checkedUserObj.jwt)
            })
            
    }
}

export function signupUser(userObj) {
    return function (dispatch) {
        fetch('http://localhost:3000/api/v1/users', {
            method: "POST",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({ user: userObj })
        })
            .then(r => r.json())
            .then(newUserObj => {
                localStorage.setItem("token", newUserObj.jwt)
                dispatch({ type: SIGN_UP, payload: newUserObj })

            })
            .catch(console.log)
    }
}

export function returningUser(userObj) {
    return dispatch => {
        
        dispatch({ type: RETURNING, payload: userObj })
        dispatch({ type: SET_GHOSTS, payload: userObj.data.attributes.ghosts })
    }
}

export function deleteUser(userId){
    return function (dispatch){
        fetch(`${URL}/users/${userId}`, {
            method: "DELETE",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token")
            }
        })
        .then(r=>r.json())
        .then(response => {
            localStorage.clear()
            dispatch({ type: DELETE_USER, payload: response })
            dispatch({ type: LOG_OUT })
        })
    }
}

export function editUser(userObj, userId){
    console.log(userObj)
    return function (dispatch){
        fetch(`${URL}/users/${userId}`, {
            method: "PATCH",
            headers: {
                "Accepts": "application/json",
                "Content-type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify( userObj )
        })
        .then(r=>r.json())
        .then(returnedUser => {
            
            dispatch({ type: EDIT_USER, payload: returnedUser })
        })
    }
}

export function loggingOut(){
    return { type: LOG_OUT }
}

export function addToGhosts(ghostObj, userId) {
    return function (dispatch) { 
            fetch(`${URL}/users/${userId}/ghosts/`, {
                method: "POST",
                headers: {
                    "Accepts": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify ({ ghost: ghostObj })
            })
            .then(r => r.json())
            .then(ghostObj => {
                
                dispatch({type: ADD_GHOST, payload: ghostObj })
                dispatch({type: SET_GHOSTS, payload: ghostObj })
            })
        }
    }


