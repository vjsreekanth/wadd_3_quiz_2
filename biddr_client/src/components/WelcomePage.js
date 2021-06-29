import React from 'react';
import auction from '../auction.jpg';
const WelcomePage = () => {
    return(
        <div>
            <h2>Welcome to Biddr App</h2>
            <img src={ auction } alt="auction"/>
        </div>
        
    ) 
}


export default WelcomePage;