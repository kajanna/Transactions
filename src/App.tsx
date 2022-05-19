import React from 'react';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import ShowTransactionsInfo from './components/ShowTransactionsInfo';
import './App.css';
import ShowExchangeRate from './components/ShowExchangeRate';


function App() {
  return (
    <div className="app">
      <AddTransaction />
      <ShowExchangeRate/>
      <TransactionList />
      <ShowTransactionsInfo />
    </div>
  );
}

export default App;
