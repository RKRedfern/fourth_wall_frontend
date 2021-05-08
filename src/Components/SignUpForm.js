import React from 'react'

class SignUpForm extends React.Component {
    state = {
        username: "",
        password: ""
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

                    <h1> Sign Up</h1>
                <form onSubmit={this.submitHandler} className="signup-form">

                    <div className="username-div">
                        <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} autoComplete="off"/>
                        <label for="username" className="label-username">
                            <span className="content-username">Username</span>
                        </label>
                    </div>

                    <div className="password-div">
                        <input type="password" name="password" value={this.state.password} onChange={this.changeHandler} autoComplete="off" />
                        <label for="password" className="label-password">
                            <span className="content-password">Password</span>
                        </label>
                    </div>
                    
                    <button>Sign up</button>
                </form>
                
            </body>
        )
    }
}

export default SignUpForm