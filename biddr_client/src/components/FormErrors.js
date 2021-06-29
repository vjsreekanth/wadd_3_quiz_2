import React from 'react'; 
import '../index.css';


const FormErrors = props => {
    const { forField, errors } = props;

    let filteredErrors = [];

    if(errors[forField]){
        filteredErrors = errors[forField].map(err => err);
    }
    if(filteredErrors.length < 1){
        return null;
    }
    return(
        <ul className="FormErrors">
            {filteredErrors.map((error, i) => (
                <li key={i}>{`${error}`}</li>
            ))}
        </ul>
    )
}


export default FormErrors;