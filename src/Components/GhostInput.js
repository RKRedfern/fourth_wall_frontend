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
            <div className="form-div">
                    <h1> Add A Ghost To Your Library </h1>
                <form onSubmit={this.handleSubmit}>

                <div className="name-div">
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                        <label htmlFor="name" className="label-name">
                            <span className="content-name">Name</span>
                        </label>
                </div>

                <div className="name-div">
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                        <label htmlFor="name" className="label-name">
                            <span className="content-name">Type</span>
                        </label>
                </div>

                <div className="name-div">
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                        <label htmlFor="name" className="label-name">
                            <span className="content-name">Notes</span>
                        </label>
                </div>

                <button className="button">Add Ghost</button>
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
