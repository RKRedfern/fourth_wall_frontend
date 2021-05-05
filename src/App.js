

import React from 'react';
import {connect} from 'react-redux'
import {fetchGhosts} from './actions/fetchGhosts'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchGhosts()
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    )
  }
}
const mapStateToProps = (state) => {
//this is how we access values in our store as props
//gives us access to see what is already in our store
return {
  ghosts: state.ghosts
}
}

export default connect(null, {fetchGhosts})(App);
//connect accepts mapstatetoprops and action creator 
//calling dispatch on the return value of fetchGhosts
