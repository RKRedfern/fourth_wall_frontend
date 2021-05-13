import { LOG_IN, SIGN_UP, RETURNING, DELETE_USER, EDIT_USER, LOG_OUT, SET_GHOSTS, ADD_TO_GHOSTS } from './actionTypes'
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
                dispatch({ type: SET_GHOSTS, payload: checkedUserObj })

                console.log(checkedUserObj)
                localStorage.setItem("token", checkedUserObj.jwt)
            })
            
    }
}

export function signupUser(userObj) {
    return function (dispatch, getState) {
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
                dispatch({type: SIGN_UP, payload: newUserObj.user})
            })
            .catch(console.log)
    }
}

export function returningUser(userObj) {
    return dispatch => {
        dispatch({ type: RETURNING, payload: userObj }) 
    }
}

export function deleteUser(userId){
    return function (dispatch){
        fetch(`${URL}/users/${userId}`, {
            method: "DESTROY",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accepts": "application/json",
                "Content-type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token")
            }
        })
        .then(r=>r.json())
        .then(response => {
            localStorage.clear()
            dispatch({ type: DELETE_USER, payload: response})
        })
    }
}

export function editUser(userObj, userId){
    return function (dispatch){
        fetch(`${URL}/users/${userId}`, {
            method: "PATCH",
            headers: {
                
                "Accepts": "application/json",
                "Content-type": "application/json",
                "Authorization": 'Bearer ' + localStorage.getItem("token")
            },
            body: JSON.stringify({ user: userObj })
        })
        .then(r=>r.json())
        .then(returnedUser => {
            dispatch({ type: EDIT_USER, payload: returnedUser.user })
        })
    }
}

export function loggingOut(){
    return { type: LOG_OUT }
}

export function addToGhosts(ghostObj, userId) {
    console.log(ghostObj)
    return function (dispatch) { 
            fetch(`${URL}/users/${userId}/ghosts/`, {
                method: "POST",
                headers: {
                    "Accepts": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(ghostObj)
            })
            .then(r => r.json())
            .then(ghostObj => {
                console.log(ghostObj)
                dispatch({type: ADD_TO_GHOSTS, payload: ghostObj })
            })
        }
    }


