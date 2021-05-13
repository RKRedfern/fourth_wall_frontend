import React from 'react'


const Ghosts = (props) => {
    
    return(
        <div>
            {props.user.attributes.ghosts.map(ghost => <li key={ghost.id}> {ghost.name} - {ghost.kind} - {ghost.notes} </li>)}
        </div>
    )

}

export default Ghosts;