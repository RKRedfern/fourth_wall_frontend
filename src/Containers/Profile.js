import React from 'react'
import { connect } from 'react-redux'

//import { deleteUser } from '../Redux/actions'


const Profile = (props) => {

    const deleteHandler = () => {
        let location = props.routerProps.history
        location.replace("/")
        props.deletingUser(props.user.id)
    }

    const editHandler = () => {
        let location = props.routerProps.history
        location.replace("/edit")
    }


        const user = props.user

        return (
            <>
                <span className="profile">
                    <div className="user-info">
                        <h1>Welcome  {props.user.name}</h1>
                        <h3>{props.user.name}</h3>
                        <h4>{props.user.bio}</h4>
                        <button onClick={editHandler} >Edit Account Info</button>
                    </div>
                    
                    <div className="account-buttons">
                        <button onClick={deleteHandler} >Delete Account</button>
                    </div>
                </span>
            </>
        )
    }


// function msp(state){
//     return { 
//         user: state.user
//     }
// }

// function mdp(dispatch){
//     return {
//         deletingUser: (userId) => {dispatch(deleteUser(userId))}
//     }
// }

export default Profile