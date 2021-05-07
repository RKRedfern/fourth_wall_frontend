

import React from 'react';
import {connect} from 'react-redux'
// import {fetchGhosts} from './actions/fetchGhosts'
import GhostsContainer from './containers/GhostsContainer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <GhostsContainer/>
      </div>
      //1 call the ghosts container in app
    )
  }
}

export default App;
//connect accepts mapstatetoprops and action creator 
//calling dispatch on the return value of fetchGhosts




// const mapStateToProps = (state) => {
// //this is how we access values in our store as props
// //gives us access to see what is already in our store
// return {
//   ghosts: state.ghosts
// }

