import { Transaction } from '../shared/interfaces';

export const calculateAllTransactions = (transactions: Transaction[]) => {
    let sum = 0;
    for (const t of transactions) {
      sum+= t.amountEUR
    }
    return sum;
}

export const calculateAllPLNTransactions = (transactions: Transaction[], exchangeRate: number) => {
    for (const t of transactions) {
        console.log(t, exchangeRate)
  
    }
    return transactions;
}