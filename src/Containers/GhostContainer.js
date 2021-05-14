import React from 'react'
import Ghost from '../Components/Ghost'
import { connect } from 'react-redux'

class GhostContainer extends React.Component{

    state = {
        ghost: this.props.ghost
    }

    render(){
        return(
            <div>
                <Ghost ghost={this.props.ghost}/>
            </div>
        ) 
    }
}

function msp(state){
    return{
        ghost: state.ghost
    }
}

export default connect(msp, null)(GhostContainer);
