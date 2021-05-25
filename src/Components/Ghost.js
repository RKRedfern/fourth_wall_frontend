import React from 'react'
//import { connect } from 'react-redux'
import Button from './Button'



class Ghost extends React.Component {

    render(){
        
        return(
            <div>
                {this.props.ghost.map(ghost => <li key={ghost.id}> - {ghost.name} - {ghost.kind} - 
                {ghost.notes}<Button/></li> )}
            </div>
        )
    }
}


export default Ghost;
