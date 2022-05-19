import React from 'react';

import Transaction from './Transaction';
import Card from '../shared/Card';

import './ShowTransactionInfo.css'

const ShowTransactionsInfo = () => {
  return (
    <Card title='Transactions Info'>
      <div className='all-transaction'>
        <div>All Transactions</div>
        <div>1244.53</div>
      </div>
      <div>
        <div>Max Transaction</div>
        <Transaction id="p1" name="kot" amountEUR={123} amountPLN={333}/>
      </div>
     
    </Card>
  );
};

export default ShowTransactionsInfo;