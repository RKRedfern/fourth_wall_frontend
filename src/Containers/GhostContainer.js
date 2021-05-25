import React from 'react'
import Ghost from '../Components/Ghost'

const GhostContainer = (props) => {

    return(
        <div>
            <Ghost ghost={props.ghost}/>
        </div>
    ) 
}

export default GhostContainer;
