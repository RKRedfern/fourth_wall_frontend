import React from 'react'
import {connect} from 'react-redux'

class GhostInput extends React.Component{

    state = {
        name: "",
        kind: "",
        notes: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        let location = this.props.routerProps.history
        location.replace("/profile")
    }

    render(){
        return(
            <div className="form-body">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Ghost Name" value={this.state.name} name="name" onChange={this.changeHandler}/>
                    <input type="text" placeholder="Ghost Type" value={this.state.kind} name="kind" onChange={this.changeHandler}/>
                    <input type="text" placeholder="Notes" value={this.state.notes} name="notes" onChange={this.changeHandler}/>
                <button>Add Ghost</button>
                </form>
            </div>
        )
    }
}

function msp(state){
    return { 
        ghost: state.ghost,
        user: state.user
    }
}

// function mdp(dispatch){
//     return{
//         addGhost: (ghostObj, userId) => dispatch(addToGhosts(ghostObj, userId)),
//     }
// }

export default connect(msp, null)(GhostInput);

// msp gives a component access to what is already in the store
// mdp passes information from dispatch to the props on data entry
