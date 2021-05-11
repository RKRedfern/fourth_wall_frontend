import { LOG_IN, SIGN_UP, RETURNING, DELETE_USER, EDIT_USER, LOG_OUT } from './actionTypes'
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
                localStorage.setItem("token", checkedUserObj.jwt)
                localStorage.setItem("user", checkedUserObj.user)   

                dispatch({type: LOG_IN, payload: checkedUserObj.user})
            })
            .catch(console.log)
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

// This function is causing a ton of problems, what does it even do? Who knows?
export function returningUser(userObj) {
    //const ghosts = userObj.ghosts
    return dispatch => {
        debugger
        dispatch({ type: RETURNING, payload: userObj }) 
        //this will say something like ghosts dispatch ... dispatch(setWishlist(wishlistRecords))
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
            dispatch({ type: DELETE_USER, payload: null })
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