import React from 'react'
//import { connect } from 'react-redux'

class HomePage extends React.Component  {
    render () {

        return (
            <span className="homepage">

                <div className="homepage-text">
                    <h1> Break the Fourth Wall</h1>
                </div>
            </span>
            )
        }
    }

//     function msp(state){
//         return{
//             ghosts: state.ghosts
//         }
//     }

// export default connect(msp)(HomePage);

export default HomePage;