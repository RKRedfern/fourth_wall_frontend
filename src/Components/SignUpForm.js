import React from 'react'

export default class SignUpForm extends React.Component {
    constructor(props){
        super()
        this.state = {
            name: "",
            password: "", 
        }
    }

    changeHandler = (e) => {
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

                    <h1> Sign Up</h1>
                <form onSubmit={this.submitHandler} className="signup-form">

                    <div className="name-div">
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} autoComplete="off"/>
                        <label htmlFor="name" className="label-name">
                            <span className="content-name">Name</span>
                        </label>
                    </div>

                    <div className="password-div">
                        <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} autoComplete="off" />
                        <label htmlFor="password" className="label-password">
                            <span className="content-password"> Password </span>
                        </label>
                    </div>
                    
                    <button>Sign up</button>
                </form>
                
            </div>
        )
    }
}

