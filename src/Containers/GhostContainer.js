import React from 'react'
import Ghost from '../Components/Ghost'
import GhostInput from '../Components/GhostInput'
import { connect } from 'react-redux'

const GhostContainer = (props) => {

    return(
        <div>
            <Ghost user={props.user}/>
            <GhostInput />
            
        </div>


    )
}

function msp(state){
    return{
        ghost: state.ghost
    }
}

export default connect(msp)(GhostContainer);
