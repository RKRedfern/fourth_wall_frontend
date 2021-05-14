import React from 'react'
import {connect} from 'react-redux'
import {addToGhosts} from '../Redux/actions'

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
        this.props.addGhost(this.state, this.props.user.id)
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

function mdp(dispatch){
    return{
        addGhost: (ghostObj, userId) => dispatch(addToGhosts(ghostObj, userId)),
    }
}

export default connect(null, mdp)(GhostInput);

