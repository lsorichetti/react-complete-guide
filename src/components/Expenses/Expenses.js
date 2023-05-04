import './Expenses.css';
import ExpenseItem from './ExpenseItem';

const Expenses = () => {

    const expenses = [
        {
          id: 'e1',
          date: new Date(2021, 2, 28),
          title: 'Car Insurance',
          amount: 100.32
        },
        {
          id: 'e2',
          date: new Date(2021, 2, 28),
          title: 'Car Insurance 2',
          amount: 200.32
        },
        {
          id: 'e3',
          date: new Date(2021, 2, 28),
          title: 'Car Insurance 3',
          amount: 300.32
        }
    ]
    
    return (
        <div className='expenses'>
            <ExpenseItem expense={expenses[0]}></ExpenseItem>
            <ExpenseItem expense={expenses[1]}></ExpenseItem>
            <ExpenseItem expense={expenses[2]}></ExpenseItem>
        </div>
    );
}

export default Expenses;