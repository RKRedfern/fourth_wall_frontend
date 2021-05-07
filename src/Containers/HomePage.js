import React from 'react'
//import { connect } from 'react-redux'

class HomePage extends React.Component  {
    render () {
    const ghosts = this.props.ghosts

    return (
        <span className="homepage">
            
            <div className="ghosts-array">
            
            </div>
                
            
            <div className="homepage-text">
                <h1> Break the Fourth Wall</h1>
            </div>
                

        </span>

        )
    }
}


export default HomePage;