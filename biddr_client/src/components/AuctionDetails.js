import React from 'react';
import { Bid, User, Session } from '../requests';
import { BidDetails } from './BidDetails';

export const AuctionDetails = props => {
  
  const bids = props?.bids || []
  let bidvalues = []
  console.log(bids)
  bids.map(bid =>{
    
    bidvalues.push(bid.bid_price)
  })
  const maxBid = Math.max(...bidvalues)
  console.log(maxBid)
  console.log(props.reserve_price)
  const currentPrice = Math.max(maxBid, props.reserve_price)
  console.log(currentPrice)

  return (
    <div>
        <h2>{props.title}</h2>
        <p
        style={{
          fontStyle: 'Roboto',
          fontSize: '16px'
          }}
        >{props.description}</p>
        <div style={{
          fontStyle: 'Roboto',
          fontSize: '16px',
          }}>
          <p>Current Price: {currentPrice} </p>
          <p>Ends at: {new Date(props.end_date).toDateString().split(' ').slice(1).join(' ')}</p>
          <p>Reserve price: { currentPrice > props.reserve_price ? " met" : "not met"}</p>
        </div>
        
      </div>
  );
  }
 
//  Math.max.apply(Math, array.map(function(o) { return o.y; }))
