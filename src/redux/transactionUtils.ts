import { Transaction } from '../shared/interfaces';

export const convertAmount = (amount: string | number) => {
    if (typeof amount === "string") {
        return +Number(amount).toFixed(2);
    } else {
        return +amount.toFixed(2)
    }   
}

export const calculateTotalAmount = (transactions: Transaction[]) => {
    let sum: number = 0;
    for (const t of transactions) {
      sum+= t.amountEUR
    }
    return convertAmount(sum);
}

export const calculateAllPLNTransactions = (transactions: Transaction[], exchangeRate: number) => {
    const newPLNTransactions = transactions.map(t => t.amountPLN = convertAmount(t.amountEUR * exchangeRate));
    return newPLNTransactions;
}

export const findTransactionWithMaxAmount = (transactions: Transaction[]) => {
    const transactionAmounts = transactions.map(t => t.amountEUR);
    const max = Math.max(...transactionAmounts);
    const maxTransactions = transactions.filter(t => t.amountEUR === max)
    return maxTransactions;
}