
import React, {useState, useEffect} from 'react';
import {AuctionDetails} from './AuctionDetails';
import BidList from './BidList';
import NewBidForm from './NewBidForm';
import {Auction} from '../requests';

export const AuctionShowContext = React.createContext(); 

const AuctionShowPage = props => {
  const [auctionShow, setAuctionShow] = useState({});
  
  
  
  
  useEffect(() => {
    Auction.show(props.match.params.id).then(auction => {
      setAuctionShow(auction);
    });
  }, []);
  
  return(
    <main>
        <AuctionDetails {...auctionShow} />
        <NewBidForm 
        createBid={this.createBid}
        
        />
        
        <AuctionShowContext.Provider>
        {auctionShow && auctionShow.id && auctionShow.bids?.length > 0 ?
        <BidList
        bids={auctionShow?.bids}
        
        /> : " "
        }
        </AuctionShowContext.Provider>
      </main>
  );
 };
  
 export default AuctionShowPage; 