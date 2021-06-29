import React from 'react'
import FormErrors from './FormErrors';

const NewBidForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const params = {
            bid_price: formData.get('bid_price'),
        
        }
        props.createBid(params);
    }


    return(
        <form onSubmit={handleSubmit}>
           
            <div>
                <label htmlFor="bid_price">Title</label>
                <br/>
                <input 
                name="bid_price" 
                id="bid_price" 
                />
                <FormErrors forField="bid_price" errors={props.errors}/>
            </div>
            
            <div>
                <input type="submit" value="Bid"/>
            </div>
        </form>
    )
}


export default NewBidForm;