import React from 'react';
import {BidDetails} from './BidDetails';

    
function BidList(props){
const bids = props.bids
    return(
        <div>
            <h2>Previous Bids</h2>
                {bids.map(bid => (
                    <BidDetails
                    key={bid.id}
                    {...bid}
                    />
                ))}
        </div>
    )
}

export default BidList;
