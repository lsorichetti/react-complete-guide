import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = ({expenses}) =>{

    if(expenses.length === 0){
        return <h2 className='expeneses-list__fallback'><p>No expenses found</p></h2>
    }
    
    return (
        <ul className='expenses-list'>
        {expenses.map((item)=>
        <ExpenseItem key={item.id} expense={item}></ExpenseItem>)}
        </ul>
    )
}

export default ExpensesList;