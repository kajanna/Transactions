import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { Transaction, AddTransactionValues } from "../shared/interfaces";
import {
  calculateTotalAmount,
  calculateAllPLNTransactions,
  findTransactionWithMaxAmount,
  convertAmount,
} from "./transactionUtils";
import type { RootState } from "./store";

interface TransactionsState {
  transactions: Transaction[];
  exchangeRate: number;
  maxTransactions: Transaction[];
  allTransactions: number;
}

//initial value for exchangeRate is the average euro 2022 exchange rate.
const initialState = {
  transactions: [],
  exchangeRate: 4.65,
  maxTransactions: [],
  allTransactions: 0,
} as TransactionsState;

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (
      state: TransactionsState,
      action: PayloadAction<AddTransactionValues>
    ) => {
      const amountEUR = convertAmount(action.payload.amount);
      const amountPLN = convertAmount(amountEUR * state.exchangeRate);
      const newTransaction: Transaction = {
        id: uuidv4(),
        name: action.payload.name,
        amountEUR: amountEUR,
        amountPLN: amountPLN,
      };
      state.transactions.push(newTransaction);
      state.maxTransactions = findTransactionWithMaxAmount(state.transactions);
      state.allTransactions = calculateTotalAmount(state.transactions);
    },
    deleteTransaction: (
      state: TransactionsState,
      action: PayloadAction<string>
    ) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );
      state.maxTransactions = findTransactionWithMaxAmount(state.transactions);
      state.allTransactions = calculateTotalAmount(state.transactions);
    },
    changeExchangeRate: (
      state: TransactionsState,
      action: PayloadAction<string>
    ) => {
      state.exchangeRate = convertAmount(action.payload);
      calculateAllPLNTransactions(state.transactions, state.exchangeRate);
      state.maxTransactions = findTransactionWithMaxAmount(state.transactions);
    },
  },
});

export const { addTransaction, deleteTransaction, changeExchangeRate } =
  transactionsSlice.actions;

export const selectCount = (state: RootState) => state.transactions;

export default transactionsSlice.reducer;
