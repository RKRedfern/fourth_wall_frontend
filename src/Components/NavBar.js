import React from 'react'
// import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'


const NavBar = (props) => {
    

    return(
        <div className="nav-bar">
            <>
                <NavLink to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                    <button>Profile</button>
                </NavLink>

                <NavLink to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    {/* <button onClick={()=> {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    props.logOut()
                    }} >Log Out </button> */}
                </NavLink> 
            
                <NavLink to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}> 
                    <button>Log In</button>
                </NavLink>

                <NavLink to="/signup" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <button>Sign Up</button>
                </NavLink>   
            </>
        </div>
    )

}

export default NavBar;