import React, { useEffect, useState } from 'react'
import Ghost from '../Components/Ghost'
import GhostInput from '../Components/GhostInput'
import { connect } from 'react-redux'

const GhostContainer = (props) => {

    return(
        <div>
            <Ghost />
            <GhostInput />
        </div>
    )
}

function msp(state){
    return{
        ghost: state.ghost
    }
}

// const mdp = dispatch => {
//     return {
//         fetchGhosts: () => dispatch(fetchGhosts())
//     }
// }

export default connect(msp)(GhostContainer);


{/* { this.props.ghost !== undefined ? 
console.log(this.props.ghost) : 'Loading...'} */}