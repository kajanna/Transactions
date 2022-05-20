import Button from '../shared/Button';

import { useAppDispatch } from '../shared/hooks/reduxHooks';
import { deleteTransaction } from '../redux/transactionSlice'; 

import "./Transaction.css"

interface TransactionProps {
    id: string;
    name: string;
    amountEUR: number;
    amountPLN: number;
}

const Transaction = ({ id, name, amountEUR, amountPLN }: TransactionProps) => {
    const dispatch = useAppDispatch();
 
    return (
        <div className='transaction' id={id} >
            <div>{name}</div>
            <div>{amountEUR} <span className='transaction__info'>EUR</span></div>
            <div>{amountPLN} <span className='transaction__info'>PLN</span></div>
            <Button onClick={() => {dispatch(deleteTransaction(id))}} text="DELETE" type='button'/>
        </div>
    );
};

export default Transaction;