import React from 'react';


export const BidDetails = props => {
  
    return(
      <div>
            <p
            style={{
            fontStyle: 'Roboto',
            fontSize: '12px'
            }}
            >{props.bid_price} On {props.created_at}</p>
        </div>
     
    )
}
