import React from 'react'

const Ghosts = (props) => {
    
    return(
        <div>
            Ghosts
            {/* {props.ghostObj === undefined ? null : props.ghostObj.name} */}
            {console.log(props.ghostObj)}
        </div>
    )

}

export default Ghosts;

//Ask Demi to look at why my .map function isn't rendering. 