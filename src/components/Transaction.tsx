import { useState } from 'react';
import DeleteButton from '../shared/DeleteButton';
import Modal from '../shared/Modal';
import { useAppDispatch } from '../shared/hooks/reduxHooks';
import { deleteTransaction } from '../redux/transactionSlice'; 

import "./Transaction.css"
import Button from '../shared/Button';

interface TransactionProps {
    id: string;
    name: string;
    amountEUR: number;
    amountPLN: number;
    showDeleteButton: boolean;
}

const Transaction = ({ id, name, amountEUR, amountPLN, showDeleteButton }: TransactionProps) => {
    const dispatch = useAppDispatch();
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);
 
    return (
        <>
        {showDeleteModal && (<Modal title="Delete Transaction" close={()=>setShowDeleteModal(false)}>
            <div>
                <p className='center'>Delete the {name} transaction?</p>
                <div className='delete-transaction__buttons'>
                <Button type="button" text='NO' onClick={()=>setShowDeleteModal(false)}/>
                <Button type="button" text='YES' onClick={() => {dispatch(deleteTransaction(id))}}/>
                </div>
            </div>
        </Modal>)}
        <div className='transaction' id={id} >
            <div>{name}</div>
            <div>{amountEUR} <span className='currency-name'>EUR</span></div>
            <div>{amountPLN} <span className='currency-name'>PLN</span></div>
            {showDeleteButton && <DeleteButton onClick={()=> setShowDeleteModal(true)} />}
        </div>
        </>
    );
};

export default Transaction;