import React from 'react'


class LogInForm extends React.Component {
    state = {
        name: "",
        password: "", 
        bio: ""
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
            
            <div className="form-body">

                <h1>Log In</h1>
                <form onSubmit={this.submitHandler} className="login-form">

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
                        
                    <button>Log In</button>
                </form> 
                
            </div>
        
        )
    }
}

export default LogInForm;