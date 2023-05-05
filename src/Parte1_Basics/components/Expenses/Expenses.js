import './Expenses.css';
import ExpensesList from './ExpensesList';

import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

import Card from '../UI/Card';

const Expenses = (props) => {

    const {items:expenses} = props;
    
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterHandler = (filter) =>{
      setFilteredYear(filter.year)
    }

    const filteredExpenses = expenses.filter((item) => item.date.getFullYear() == filteredYear);
    
    return (
        <Card className='expenses' >
            <ExpenseFilter selected={filteredYear} onFilterChange={filterHandler}></ExpenseFilter>
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpensesList expenses={filteredExpenses}></ExpensesList>
            {/*filteredExpenses.length == 0 && <p>No expenses found</p>*/}
            {/*filteredExpenses.length > 0 && filteredExpenses.map((item)=>
              <ExpenseItem key={item.id} expense={item}></ExpenseItem>
            )*/}
        </Card>
    );
}

export default Expenses;