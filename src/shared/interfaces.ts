export interface Transaction {
    id: string,
    name: string,
    amountEUR: number,
    amountPLN: number
}

export interface AddTransactionValues {
    name: string,
    amount: number
}