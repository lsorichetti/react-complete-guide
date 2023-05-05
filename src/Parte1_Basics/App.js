
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2021, 2, 28),
    title: 'Car Insurance',
    amount: 100.32
  },
  {
    id: 'e2',
    date: new Date(2020, 2, 28),
    title: 'Car Insurance 2',
    amount: 200.32
  },
  {
    id: 'e3',
    date: new Date(2019, 2, 28),
    title: 'Car Insurance 3',
    amount: 300.32
  }
]

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) =>{

    setExpenses((prevState)=>{
      const newArr = [expense,...prevState];
      return newArr;
    })
  }

  const cancelExpenseHandler = () =>{

  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>      
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
