
import {combineReducers} from 'redux';

const defaultState = {
    user: null, 
    ghost: []
}

function userReducer(prevState = defaultState.user, action){
    switch(action.type){
        case "SIGN_UP":
            return action.payload.user.data
        case "LOG_IN":
            return action.payload.user.data
        case "RETURNING":
            return action.payload.data
        case "DELETE_USER":
            return action.payload
        case "EDIT_USER":
            return action.payload.user.data
        case "LOG_OUT":
            return null
        default:
            return prevState
    }
}

function ghostReducer(prevState = defaultState.ghost, action){
    switch(action.type) {
        case "ADD_GHOST":
            return [...prevState, action.payload]
        case "SET_GHOSTS":
            return action.payload
        case "LOG_OUT":
            return []
        default:
            return prevState
    }
}


const rootReducer = combineReducers({
    user: userReducer,
    ghost: ghostReducer
})

export default rootReducer;