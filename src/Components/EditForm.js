import React from 'react'
import { connect } from 'react-redux'

class EditForm extends React.Component {

    state = {
        // name: this.props.user.attributes.name,
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
            <div className="form-body">

                <form onSubmit={this.submitHandler} className="edit-form" >

                    {/* <div className="name-div">
                        <input type="text" name="name" value={this.state.name} onChange={this.editHandler} autoComplete="off"/>
                        <label htmlFor="name" className="label-name">
                            <span className="content-name"> Name </span>
                        </label>
                    </div> */}
                        
                    <div className="bio-div">
                        <input type="bio" name="bio" value={this.state.bio} onChange={this.editHandler} autoComplete="off" />
                        <label htmlFor="bio" className="label-bio">
                            <span className="content-bio"> Bio </span>
                        </label>

                    </div>

                    <button>Edit User</button>
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

//This action is incomplete - Need to finish the edit action in backend and fix prop transfer