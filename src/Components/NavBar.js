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
                    <button className="button">Profile</button>
                </NavLink>

                <NavLink to="/logout" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button className="button" onClick={()=> {
                    localStorage.removeItem("token")
                    props.logOut()
                    }} > Log Out </button>
                </NavLink>

                <NavLink to="/addghost" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                    <button className="button">Add A Ghost</button>
                </NavLink>

                {/* <NavLink to="/ghostcollection" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                    <button>See My Collection</button>
                </NavLink> */}
                
                </>
                :
                <>

                <NavLink to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                    <button className="button"> Log In </button>
                </NavLink>

                <NavLink to="/signup" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button className="button"> Sign Up </button>
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