import React from 'react'
import { connect } from 'react-redux'


class EditForm extends React.Component {

    state = {
        bio: this.props.user.attributes.bio
    }
    
    editHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let location = this.props.routerProps.history
        location.replace("/profile")
        this.props.submitHandler(this.state)
    }

    render(){
        return(
            <div className="form-div">

                <form onSubmit={this.submitHandler}>

                    <div className="name-div">
                        <input type="bio" name="bio" value={this.state.bio} onChange={this.editHandler} autoComplete="off" />
                        <label htmlFor="bio" className="label-bio">
                            <span className="content-bio"> Bio </span>
                        </label>

                    </div>

                    <button className="button">Edit User</button>
                </form>
            </div>
        )
    }
}

function msp(state){
    return{
        user: state.user
    }
}

export default connect(msp, null)(EditForm)

