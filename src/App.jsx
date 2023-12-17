import React, { useState } from 'react';
import Transaction from './components/Transaction';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const addTransaction = (e) => {
    e.preventDefault();

    if (!text || !amount) return;

    const newTransaction = {
      id: Math.random(),
      text,
      amount: +amount,
    };

    setTransactions([...transactions, newTransaction]);
    setText('');
    setAmount('');
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
  const income = transactions.reduce((acc, transaction) => (transaction.amount > 0 ? acc + transaction.amount : acc), 0);
  const expense = transactions.reduce((acc, transaction) => (transaction.amount < 0 ? acc + transaction.amount : acc), 0);

  return (
    <>
    <h1 id='expense-tracker'>Expense Tracker</h1>
    <div className="add-transaction">
      <form onSubmit={addTransaction}>
      <h3>Add New Transaction</h3>
      <label>Text</label>
      <input type = "text" placeholder='Enter Text...' value={text} onChange={(e) => setText(e.target.value)}></input>
      <label>Amount</label> <p>(Negative - Expense, Positive - Income)</p>
      <input type='Number' placeholder='Enter Amount...' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
      <button type='submit' id='add' onClick={addTransaction}>Add Transaction</button>
      </form>
    </div>
    <div className='bal-inc-exp'>
      <div className="balance">
        <p>YOUR BALANCE</p>
        <p id='total'>${total}</p>
      </div>
      <div className="income-expense">
        <div className="income">
        <p>INCOME</p>
        <p id='calculated-income'>${income}</p>
        </div>
        <div className="expense">
        <p>EXPENSE</p>
        <p id='calculated-expense'>${Math.abs(expense)}</p>
        </div>
        
      </div>
      <div className="transactions">
      <h3>Transactions</h3>
      <ul className='transaction-list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} onDelete={deleteTransaction} />
        ))}
      </ul>
      </div>
    </div>
    </>
    
  );
};

export default App;

