//responsible for updating the parts of the store that have to do with the ghosts
// a reducer is a statement that defines action types 
// it takes in state and an action object
// update state based on action type

export default function ghostReducer( state = {ghosts: []}, action ){
    
    switch (action.type){
        case 'FETCH_GHOSTS':
            return {ghosts: action.payload}
        default:
            return state
    }

}


//set the default state to an empty object, containing an empty array of ghosts
//the action sent to the reducer comes from an action file...