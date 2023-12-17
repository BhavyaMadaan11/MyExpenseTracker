import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const isIncome = transaction.amount > 0;

  return (
    <li className={`flex justify-between p-2 ${isIncome ? 'greenText' : 'redText'}`}>
      <div>{transaction.text}</div>
      <div>
        {isIncome ? '+' : '-'}${Math.abs(transaction.amount)}
        <button onClick={() => onDelete(transaction.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Transaction;