import React from 'react'
import FormErrors from './FormErrors';

const NewAuctionForm = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const params = {
            title: formData.get('title'),
            description: formData.get('description'),
            end_date: formData.get('end_date'),
            reserve_price: formData.get('reserve_price')
        }
        props.createAuction(params);
    }

    

    return(
        <form onSubmit={handleSubmit}>
            <h1>New Auction</h1>
            <div>
                <label htmlFor="title">Title</label>
                <br/>
                <input 
                name="title" 
                id="title" 
                />
                <FormErrors forField="title" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <br/>
                <input 
                name="description" 
                id="description" 
                />
                <FormErrors forField="description" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="end_date">Ends at</label>
                <br/>
                <input 
                name="end_date" 
                id="end_date" 
                />
                <FormErrors forField="end_date" errors={props.errors}/>
            </div>
            <div>
                <label htmlFor="reserve_price">Reserve Price</label>
                <br/>
                <input 
                name="reserve_price" 
                id="reserve_price" 
                />
                <FormErrors forField="reserve_price" errors={props.errors}/>
            </div>
            <div>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}


export default NewAuctionForm;