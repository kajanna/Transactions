import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import { Transaction, AddTransactionValues } from "../shared/interfaces";
import { calculateAllTransactions, calculateAllPLNTransactions } from "./transactionUtils";
import type { RootState } from '../redux/store';

interface TransactionsState {
    transactions: Transaction[],
    exchangeRate: number,
    maxTransaction: number,
    allTransactions: number
}
//initial value for exchangeRate is the average euro 2022 exchange rate.
const initialState = {
    transactions: [],
    exchangeRate: 4.65,
    maxTransaction: 0,
    allTransactions: 0
} as TransactionsState

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
      addTransaction: (state: TransactionsState,  action: PayloadAction<AddTransactionValues>) => {
          const newTransaction: Transaction = {
              id: uuidv4(),
              name: action.payload.name,
              amountEUR: action.payload.amount,
              amountPLN: action.payload.amount * state.exchangeRate
          };
          state.transactions.push(newTransaction);
          state.allTransactions = calculateAllTransactions(state.transactions);
      },
      deleteTransaction: (state: TransactionsState,  action: PayloadAction<string>) => {
        state.transactions = state.transactions.filter(t => t.id !== action.payload);
        state.allTransactions = calculateAllTransactions(state.transactions);
      },
      changeExchangeRate: (state: TransactionsState, action: PayloadAction<number>) => {
        state.exchangeRate = action.payload;
        calculateAllPLNTransactions(state.transactions, state.exchangeRate) 
      },
    }
});

export const { addTransaction, deleteTransaction, changeExchangeRate } = transactionsSlice.actions

export const selectCount = (state: RootState) => state.transactions;


export default transactionsSlice.reducer