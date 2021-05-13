import React from 'react'
// import HauntedHouse from '../assets/HauntedHouse.jpeg'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { loggingOut } from '../Redux/actions'


const NavBar = (props) => {
    

    return(
        <div className="nav-bar">

                <NavLink to="/" style={{ color: 'inherit', textDecoration: 'inherit'}} > 
                    <div className="nav-img">
                    {/* <img src={HauntedHouse} alt="Spooky Ghost"/> */}
                    </div>
                    
                    <div className="nav-logo">
                    <h2> Break The Fourth Wall </h2>
                    </div>
                </NavLink>

            <div className="button-div">

                { props.user ?
                <>

                <NavLink to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                    <button>Profile</button>
                </NavLink>

                <NavLink to="/logout" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button onClick={()=> {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    props.logOut()
                    }} > Log Out </button>
                </NavLink>

                </>
                :
                <>

                <NavLink to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                    <button> Log In </button>
                </NavLink>

                <NavLink to="/signup" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button> Sign Up </button>
                </NavLink>
                </>
                }
            </div>
        </div>
    )

}

function msp(state){
    return { 
        user: state.user
    }
}

function mdp(dispatch){
    return {
        logOut: () => dispatch(loggingOut())
    }
}

export default connect(msp, mdp)(NavBar);