import './Expenses.css';
import ExpenseItem from './ExpenseItem';

import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

import { useState } from 'react';

import Card from '../UI/Card';

const Expenses = (props) => {

    const {items:expenses} = props;
    
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterHandler = (filter) =>{
      setFilteredYear(filter.year)
    }
    
    return (
        <Card className='expenses' >
            <ExpenseFilter selected={filteredYear} onFilterChange={filterHandler}></ExpenseFilter>
            {expenses.map((item)=>
            <div>
              <div style={{color:'white'}}>{item.title}</div>
              <ExpenseItem expense={item}></ExpenseItem>
            </div>
            )}
        </Card>
    );
}

export default Expenses;