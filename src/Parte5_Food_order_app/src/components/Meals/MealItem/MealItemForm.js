import { useRef, useState } from 'react';
import styles from './MealItemForm.module.css'
import Input from '../../UI/Input';
const MealItemForm = props =>{

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event =>{
        event.preventDefault();

        const enteredAmount = Number(amountInputRef.current.value);

        if(enteredAmount < 1 || enteredAmount > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmount);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input={{type:"number", id: "amount_" + props.id, min: "1", max:"5", step:"1", defaultValue:"1"}}></Input>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valida amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm;