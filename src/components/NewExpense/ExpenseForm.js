
import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }) */

    const titleChangeHandler = ({target:{value}}) =>{

        setEnteredTitle(value); 

        /* setUserInput((prevState)=>{
            return {...prevState, enteredTitle: value}
        }) */
    }
    const amountChangeHandler = ({target:{value}}) =>{

        setEnteredAmount(value);

        /* setUserInput((prevState)=>{
            return {...prevState, enteredAmount: value}
        }) */
    }
    const dateChangeHandler = ({target:{value}}) =>{

        setEnteredDate(value);
        
        /* setUserInput((prevState)=>{
            return {...prevState, enteredDate: value}
        }) */
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate)
        }

        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
        props.onSaveExpenseData(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;

