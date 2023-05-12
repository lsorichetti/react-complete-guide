import { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isNotFourChars = value => value.trim().length !== 4;

const Checkout = (props) => {

    const [formIsValid, setFormIsValid] = useState(false);

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const name = nameInputRef.current.value;
        const street = streetInputRef.current.value;
        const postal = postalInputRef.current.value;
        const city = cityInputRef.current.value;
        
        if(isEmpty(name) || isEmpty(street) || isEmpty(postal) || isEmpty(city) || isNotFourChars(postal)){
            setFormIsValid(false);
            return;
        }
        setFormIsValid(true);

        const order = {
            name,
            street,
            postal,
            city
        }
        props.onConfirm(order);
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} type='text' id='name' />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input ref={streetInputRef} type='text' id='street' />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input ref={postalInputRef} type='text' id='postal' />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} type='text' id='city' />
            </div>
            <div className={classes.actions}>
                {!formIsValid && <p>Not valid form</p>}
                <button type='button' onClick={props.onCancel}>
                Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
            
        </form>
    );
};

export default Checkout;