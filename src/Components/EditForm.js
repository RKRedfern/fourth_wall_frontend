import React from 'react'
import { connect } from 'react-redux'

class EditForm extends React.Component {
    state = {
        username: this.props.user.username,
        email: this.props.user.email,
        phone: this.props.user.phone
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        
        let location = this.props.routerProps.history
        location.replace("/profile")
        this.props.submitHandler(this.state)
    }

    render(){
        return(
            <body className="form-body">

                <form onSubmit={this.submitHandler} className="edit-form" >

                    <div className="name-div">
                        <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} autoComplete="off"/>
                        <label for="username" className="label-username">
                            <span className="content-username">Username</span>
                        </label>
                    </div>
                        
                    <div className="bio-div">
                        <input type="phone" name="phone" value={this.state.phone} onChange={this.changeHandler} autoComplete="off" />
                        <label for="phone" className="label-phone">
                            <span className="content-phone">Phone</span>
                        </label>

                    </div>

                    <button>Edit User</button>
                </form>
            </body>
        )
    }
}

function msp(state){
    return{
        user: state.user
    }
}

export default connect(msp, null) (EditForm)