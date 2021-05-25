import React, {useState} from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../Redux/actions'
import GhostContainer from './GhostContainer'
import Search from '../Components/Search'


const Profile = (props) => {

    const [ghosts, setGhosts] = useState(props.ghost)

    const deleteHandler = () => {
        let location = props.routerProps.history
        location.replace("/login")
        props.deletingUser(props.user.id)
    }

    const editHandler = () => {
        let location = props.routerProps.history
        location.replace("/edit")
    }

    const searchHandler = (searchInput) => {
        console.log(searchInput)

        const desiredGhost = props.ghost.filter(ghost => 
            ghost.name.startsWith(searchInput))

        if(searchInput === ""){
            setGhosts(props.ghost)
        } else {
            setGhosts(desiredGhost)
        }

        //if search input is an empty string, then state.ghost = props.ghost 
        //if search input is anything, then filter props.ghost
        //we are filtering ghost by what the search input is and what the name starts with
    }
        
    const user = props.user

        return (
            <>
            { user ?
                <span className="profile">
                    <div className="user-info">
                        <h1>Welcome {props.user.attributes.name}</h1>
                        <h4>{props.user.attributes.bio}</h4>
                        
                    </div>
                    <div className="user-ghost-collection">
                        <GhostContainer ghost={ghosts} />
                        <Search search={searchHandler}/>
                    </div>

                    <div className="account-buttons">

                    <button className="button" onClick={deleteHandler} >Delete Account</button>
                    <button className="button" onClick={editHandler} >Edit Account Info</button>

                    </div>

                </span>
            : 
            <h1>Loading...</h1> }
            </>
        )
}

function msp(state){
    return { 
        user: state.user,
        ghost: state.ghost
    }
}

function mdp(dispatch){
    return {
        deletingUser: (userId) => {dispatch(deleteUser(userId))},
    }
}

export default connect(msp, mdp)(Profile);

//Search Component 
//include it on the profile component 
//give it a function as props to send data back up 
//put a filter function in between my render/return 
//change where I'm sending the the ghost array 