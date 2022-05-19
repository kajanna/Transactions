import React from 'react';

import "./Transaction.css"

interface TransactionProps {
    id: string;
    name: string;
    amountEUR: number;
    amountPLN: number;
}

const Transaction = ({ id, name, amountEUR, amountPLN }: TransactionProps) => {
    return (
        <div className='transaction' id={id} onClick={() => console.log("delete transaction", id)}>
            <div>{name}</div>
            <div>{amountEUR} <span className='transaction__info'>EUR</span></div>
            <div>{amountPLN} <span className='transaction__info'>PLN</span></div>
        </div>
    );
};

export default Transaction;