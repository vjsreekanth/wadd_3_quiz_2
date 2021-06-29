import React from 'react';
import {NavLink} from 'react-router-dom';
import {Session} from '../requests';


const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
        })
    }
    return(
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/auctions'>Auctions</NavLink>
            -
            { currentUser ? (
                <React.Fragment>
                    <NavLink to='/auctions/new'>New Auctions</NavLink>
                    - 
                    <span>Welcome, {currentUser.full_name}</span>
                    <button onClick={handleSignOut}>Sign Out</button>
                    
                    {/* React Fragment allow us to write components beside each other without wrapping
                    them in a parent container. This stops us from messing around the layout and
                    keeps the Navlinks as a direct child of the <nav>. The short from is <> </> */}
                </React.Fragment>
            ) : (
                <>
                    <NavLink to='/sign_in'>Sign In</NavLink>
                    - 
                    <NavLink to='/sign_up'>Sign Up</NavLink>
                </>
            ) } 
        </nav>
    )
}

export default NavBar;