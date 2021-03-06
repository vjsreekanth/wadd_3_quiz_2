import React, {useState, useEffect} from 'react';
// import NewAuctionForm from './NewAuctionForm';
import {Auction} from '../requests';
import {Link} from 'react-router-dom';

export const AuctionIndexPage = () => {
    const [auctionIndex, setAuctionIndex] = useState({
        auctions: [],
    });
     
   
  
  
    useEffect(() => {
        Auction.index().then(auctions => {
          setAuctionIndex({ auctions });
        });
    }, []);
  
    return(
            <main style={{
                marginLeft:10}}>
                <h1>Auctions</h1>
                <ul style={{
                    listStyle: 'none',
                    paddingLeft: 0,
                }}>
                {auctionIndex.auctions.map(auction => (
                    <li key={auction.id}>
                        <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
                        <p>post on: {new Date(auction.created_at).toDateString().split(' ').slice(1).join(' ')}</p>
                    </li>
                ))}
                </ul>
            </main>
    )
 }