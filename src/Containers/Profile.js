import React from 'react'
import { connect } from 'react-redux'
import { deleteUser } from '../Redux/actions'
import GhostContainer from './GhostContainer'

const Profile = (props) => {

    const deleteHandler = () => {
        let location = props.routerProps.history
        location.replace("/login")
        props.deletingUser(props.user.id)
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
                        <h1>Welcome {props.user.attributes.name}</h1>
                        <h4>{props.user.attributes.bio}</h4>
                        
                    </div>
                    <div className="user-ghost-collection">
                        < GhostContainer />
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