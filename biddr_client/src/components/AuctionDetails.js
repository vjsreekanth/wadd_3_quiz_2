import React from 'react';

export const AuctionDetails = props => {
  console.log(props)
  return (
    <div>
        <h2>{props.title}</h2>
        <p
        style={{
          fontStyle: 'Roboto',
          fontSize: '24px'
          }}
        >{props.description}</p>
        <p>Current Price: {props.reserve_price}</p>
        <p>Ends at: {props.end_date}</p>
        <p>Reserve price not met: {props.reserve_price}</p>
      </div>
  );
 };
 
