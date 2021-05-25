import React from 'react'

export default class Button extends React.Component{

    state = {
        counter: 0
    }

    buttonClicker = () => {
        console.log(this.state.counter)
        this.setState({ counter: this.state.counter + 1})
    }

    render(){
        return(
            <button onClick={this.buttonClicker}>{this.state.counter} </button> 
        )
    }

}