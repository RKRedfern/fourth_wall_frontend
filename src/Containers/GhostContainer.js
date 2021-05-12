import React from 'react'
import Ghost from '../Components/Ghost'
import GhostInput from '../Components/GhostInput'
import { connect } from 'react-redux'
import { fetchGhosts } from '../Redux/actions'

class GhostContainer extends React.Component {

    componentDidMount(){
        this.props.fetchGhosts()
    }

    render(){
        return(
            <div>
                <Ghost />
                <GhostInput />
            </div>
        )
    }
}

function msp(state){
    return{
        ghosts: state.ghosts
    }
}

// function mdp(dispatch){
//     return {
//         fetchGhosts: {dispatch(fetchGhosts)}
//     }
// }

export default connect(msp, {fetchGhosts})(GhostContainer);

