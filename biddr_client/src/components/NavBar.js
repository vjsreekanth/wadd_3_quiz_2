import React from 'react';
import {NavLink} from 'react-router-dom';
import {Session} from '../requests';
import { useHistory } from 'react-router-dom';



const Navbar = ({ currentUser, onSignOut} ) => {

    const history = useHistory();
    
    const handleSignOut = () => {
        Session.destroy().then(() => {
            onSignOut()
            
             history.push("/")
        })
    }
    return(
        <nav style={{padding: "10px",display: "flex"}}>
            <NavLink style={{ marginRight: "20px" }} to='/'>Home</NavLink> 
            <NavLink style={{ marginRight: "20px" }} to='/auctions'>Auctions</NavLink> 
            {currentUser ? ( 
                <React.Fragment>
                    <NavLink style={{ marginRight: "20px" }} to='/auctions/new'>New Auctions</NavLink>
                    <span style={{ marginRight: "20px" }} >Welcome, {currentUser.full_name}</span>
                    <button onClick={handleSignOut}>Sign Out</button>
                </React.Fragment>
                    ) : (
                    <>
                        <NavLink style={{ marginRight: "20px" }} to='/sign_in'>Sign In</NavLink>
                        
                        <NavLink style={{ marginRight: "20px" }} to='/sign_up'>Sign Up</NavLink>
                    </>
                    )}
        </nav>
    )

    
    }
   

export default Navbar;