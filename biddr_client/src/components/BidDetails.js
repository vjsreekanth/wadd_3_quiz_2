import React from 'react';


export const BidDetails = props => {
    
  
    return(
      <div>
            <p
            style={{
            fontStyle: 'Roboto',
            fontSize: '12px'
            }}
            >${props.bid_price} On {new Date(props.created_at).toDateString().split(' ').slice(1).join(' ')}</p>
        </div>
     
    )
}
