// a container should render other components, pass them data if they require it 

import React from 'react'
import Ghosts from '../components/Ghosts'
import GhostInput from '../components/GhostInput'
import {connect} from 'react-redux'
import {fetchGhosts} from '../Redux/actions/fetchGhosts'

class GhostsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchGhosts()
        //every time this component mounts the fetch is made
    }

    mapGhostData(){
        this.props.ghosts.data.map(ghost => <Ghosts key={ghost.id} ghostObj={ghost}/>)
    }

    render(){
        return(
            <div>
                <GhostInput/>
                {this.mapGhostData()}
            </div>
            //call the ghosts file in the container, passing props
        )
    }

}

const mapStateToProps = state => {
    return{
        ghosts: state.ghosts
    }
    //so we can get access to the ghosts in the store and sent to the Ghosts file
}

export default connect(mapStateToProps, {fetchGhosts})(GhostsContainer);
//passed to the connect function mapStateToProps and {fetchGhosts} so that when we call the fetch function
//dispatch returns and updates the Redx store. This would not happen withut the function passed in as the second arguement.