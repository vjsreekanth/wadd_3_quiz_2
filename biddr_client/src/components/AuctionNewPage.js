import React, {Component} from 'react';
import NewAuctionForm from './NewAuctionForm'
import {Auction} from '../requests'

class AuctionNewPage extends Component {
    constructor(props){
        super(props);
        this.state = { errors: []}
        this.createAuction = this.createAuction.bind(this);
    }

    createAuction(params) {
        Auction.create(params)
        .then((auction) => {
            if(auction.errors){
                this.setState({errors: auction.errors});
            } else {
                this.props.history.push(`/auctions/${auction.id}`);
            }
        })
    }

    

    render(){
        return(
            <div>
                <NewAuctionForm 
                createAuction={this.createAuction}
                errors={this.state.errors}
                />
          
            </div>
        )
    }

    
}


export default AuctionNewPage;