import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../Redux/actions'
import GhostContainer from './GhostContainer'

const Profile = (props) => {
    
    const deleteHandler = () => {
        let location = props.routerProps.history
        location.replace("/")
        props.deletingUser(props.user.data.id)
    }

    const editHandler = () => {
        let location = props.routerProps.history
        location.replace("/edit")
    }
        
    const user = props.user

        return (
            <>
            { user ?
                <span className="profile">
                    <div className="user-info">
                        {/* <h1>Welcome {props.user.data.attributes.name}</h1> */}
                        {/* <h4>{props.user.data.attributes.bio}</h4> */}
                        
                    </div>
                    <div className="user-ghost-collection">
                        <GhostContainer/>
                    </div>

                    <div className="account-buttons">
                        <button onClick={deleteHandler} >Delete Account</button>
                        <button onClick={editHandler} >Edit Account Info</button>
                    </div>

                </span>
            : 
            <h1>Loading...</h1> }
            </>
        )
}

function msp(state){
    return { 
        user: state.user
    }
}

function mdp(dispatch){
    return {
        deletingUser: (userId) => {dispatch(deleteUser(userId))},
    }
}

export default connect(msp, mdp)(Profile);