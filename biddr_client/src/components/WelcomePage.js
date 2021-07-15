import React from 'react';
import auction from './images/auction.jpg'

const WelcomePage = () => {
    return(
        <div>
            <h2>Welcome to Biddr App</h2>
            <img src={auction} alt="welcome" 
                style={{width:'100vw' }}
            />
          
        </div>
        
    ) 
}


export default WelcomePage;