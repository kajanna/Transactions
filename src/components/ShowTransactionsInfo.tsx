import { useAppSelector } from '../shared/hooks/reduxHooks';

import Transaction from './Transaction';
import Card from '../shared/Card';

import './ShowTransactionInfo.css'

const ShowTransactionsInfo = () => {
  const allTransactions = useAppSelector(state => state.transactions.allTransactions)
  return (
    <Card title='Transactions Info'>
      <div className='all-transaction'>
        <div>All Transactions</div>
        <div>{allTransactions} EUR</div>
      </div>
      <div>
        <div>Max Transaction</div>
        <Transaction id="p1" name="kot" amountEUR={123} amountPLN={333}/>
      </div>
     
    </Card>
  );
};

export default ShowTransactionsInfo;