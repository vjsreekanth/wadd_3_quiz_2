import React from 'react'


const NewBidForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const bid_params = {
            bid_price: formData.get('bid_price'),
        
        }
        props.createBid(bid_params, props.id);
    }


    return(
        <form onSubmit={handleSubmit}>
           
            <div>
                <label htmlFor="bid_price"></label>
                <br/>
                <input 
                name="bid_price" 
                id="bid_price" 
                />
               
            </div>
            
            <div>
                <input type="submit" value="Bid"/>
            </div>
        </form>
    )
}


export default NewBidForm;