import React from 'react'
//import { connect } from 'react-redux'

class HomePage extends React.Component  {
    render () {

        return (
            <span className="homepage">

                <div className="homepage-text">
                    <h1> This is the Landing Page </h1>

                    <h4> Some other spooky info </h4>
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