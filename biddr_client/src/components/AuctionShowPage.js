
import React, {useState, useEffect} from 'react';
import {AuctionDetails} from './AuctionDetails';
import BidList from './BidList';
import {Auction, Bid} from '../requests';


export const AuctionShowContext = React.createContext(); 

const AuctionShowPage = props => {
  const [auctionShow, setAuctionShow] = useState({});
  
  
  
  
  useEffect(() => {
    Auction.show(props.match.params.id).then(auction => {
      setAuctionShow(auction);
    });
  }, []);


  const createBid = (bid_params, id) => {
    Bid.create(bid_params, id)
      setAuctionShow((state) => {
        const auctionCopy = JSON.parse(JSON.stringify(state));
        const newBids = auctionCopy.bids.filter((bid) => {
          return bid.id !==1
        })
        auctionCopy.bids = newBids;
        return auctionCopy
      })};

      const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const bid_params = {
            bid_price: formData.get('bid_price'),
        
        }
        const id = props.match.params.id
        console.log(id)
        console.log(bid_params)
          createBid(bid_params, id)}
  
  return(
      <main style={{
              marginLeft:10}}>
      
        <AuctionDetails {...auctionShow} />
        <div>
        <form onSubmit={handleSubmit}>
           <div>
               <label htmlFor="bid_price"></label>
               <br/>
               <input 
               name="bid_price" 
               id="bid_price" 
               />
               <input style={{

                    marginLeft:10,
                }} type="submit" value="Bid"/>
            </div>
       </form>
       </div>
        
      
        
        <AuctionShowContext.Provider>
        {auctionShow && auctionShow.id && auctionShow.bids?.length > 0 ?
        <BidList
        bids={auctionShow?.bids}
        
        /> : " "
        }
        </AuctionShowContext.Provider>
      </main>
  )
 };

 export default AuctionShowPage; 