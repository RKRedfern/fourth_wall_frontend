// a container should render other components, pass them data if they require it 

import React from 'react'
import Ghosts from '../components/Ghosts'
import GhostInput from '../components/GhostInput'
import {connect} from 'react-redux'
import {fetchGhosts} from '../actions/fetchGhosts'

class GhostsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchGhosts()
    }

    render(){
        return(
            <div>
                <GhostInput/>
                <Ghosts ghosts={this.props.ghosts}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return{
        ghosts: state.ghosts
    }
}



export default connect(mapStateToProps, {fetchGhosts})(GhostsContainer);