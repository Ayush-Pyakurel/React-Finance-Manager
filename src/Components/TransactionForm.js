import { useState } from 'react';

const TransactionForm = () => {
  const [transactionName, setTransactionName] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log({ transactionName, transactionAmount });
  };

  return (
    <>
      <h3>Add Transaction: </h3>
      <form onSubmit={onFormSubmit}>
        <label>
          <span>Transaction Name: </span>
          <input
            type='text'
            onChange={(e) => setTransactionName(e.target.value)}
            value={transactionName}
            required
          />
        </label>
        <label>
          <span>Transaction Amount: </span>
          <input
            type='number'
            onChange={(e) => setTransactionAmount(e.target.value)}
            value={transactionAmount}
            required
          />
        </label>
        <button>Add Transaction</button>
      </form>
    </>
  );
};

export default TransactionForm;
