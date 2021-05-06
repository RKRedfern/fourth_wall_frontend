import React from 'react'

const Ghosts = (props) => {
    debugger
    return(
        
        <div>
            Ghosts
            {props.ghosts.map(ghost => <li>{ghost}</li>)}
        </div>
    )

}

export default Ghosts;

//Ask Demi to look at why my .map function isn't rendering. 