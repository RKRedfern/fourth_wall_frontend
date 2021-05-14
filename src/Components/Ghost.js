import React from 'react'
import { connect } from 'react-redux'



class Ghost extends React.Component {

    state = {
        ghost: this.props.ghosts
    }

    render(){

        return(
            <div>
                {this.props.ghost.map(ghost => <li key={ghost.id}> - {ghost.name} - {ghost.kind} - {ghost.notes} </li>)}
            </div>
        )
    }
}

function msp(state){
    return{
        ghost: state.ghost
    }
}

export default connect(msp, null)(Ghost);