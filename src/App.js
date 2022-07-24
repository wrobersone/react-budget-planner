import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/budget/Budget';
import Remaining from './components/budget/Remaining';
import Expense from './components/expense/Expense';
import ExpenseList from './components/expense/ExpenseList';
import AddExpenseForm from './components/expense/AddExpenseForm';
import { AppProvider } from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Expense />
          </div>
        </div>
        <h3 className='mt-3'>Expenses List</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
