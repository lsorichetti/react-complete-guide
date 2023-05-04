import './ExpenseItem.css';

import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = props => {

    // useState needs to be in component function, this function will be re-evaluated when set new value
    // useState is setted per instance, if you call ExpenseItem multiple times,
    // multiple instances will be created and have separated states
    const [title, setTitle] = useState(props.expense.title);
    const [amount, setAmount] = useState(props.expense.amount);
    
    const {date} = props.expense;
    
    const clickHandler = () => {
        setTitle(title + ' updated');
        console.log('Title: ' + title);// this is not getting update yet
    }
    
    const clickHandlerPrice = () => {
        setAmount(amount + 10);
        console.log('Amount: ' + props.expense.amount);// this will be the first one
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={date}></ExpenseDate>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
                <button onClick={clickHandler}>Change Title</button>
                <button onClick={clickHandlerPrice}>Change Price</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;