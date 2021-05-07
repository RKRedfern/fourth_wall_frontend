
import {combineReducers} from 'redux';

const defaultState = {
    user: null,
    ghosts: [],
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


const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer;