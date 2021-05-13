
import {combineReducers} from 'redux';

const defaultState = {
    user: null, 
    ghost: []
}

function userReducer(prevState = defaultState.user, action){
    switch(action.type){
        case "SIGN_UP":
            return action.payload
        case "LOG_IN":
            return action.payload
        case "RETURNING":
            return action.payload
        case "DELETE_USER":
            return action.payload
        case "EDIT_USER":
            return action.payload
        case "LOG_OUT":
            return null
        default:
            return prevState
    }
}

function ghostReducer(prevState = defaultState.ghost, action){
    switch(action.type) {
        case "FETCH_GHOSTS":
            return action.payload
        case "SET_GHOSTS":
            return action.payload
        case "ADD_TO_GHOSTS":
            return [...prevState, action.payload]
        case "REMOVE_FROM_GHOSTS":
            return prevState.filter(ghost => ghost.id !== action.payload)
        default:
            return prevState
    }
}


const rootReducer = combineReducers({
    user: userReducer,
    ghost: ghostReducer
})

export default rootReducer;