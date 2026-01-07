import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Transaction, ExpenseState } from "../../types/type";
const defaultCategories: string[] = [
  "غذا",
  "حمل و نقل",
  "قبوض",
  "درآمد",
  "تفریح",
  "سایر",
];

const initialTransactions: Transaction[] = JSON.parse(
  localStorage.getItem("transactions") || "[]"
);
const initialCategories: string[] =
  JSON.parse(localStorage.getItem("categories") || "null") || defaultCategories;
const initialState: ExpenseState = {
  transactions: initialTransactions,
  categories: initialCategories,
  searchQuery: "",
  filterCategory: "All",
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
      
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    },
    addCategory: (state, action: PayloadAction<string>) => {
      state.categories.push(action.payload);
      
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilterCategory: (state, action: PayloadAction<string>) => {
      state.filterCategory = action.payload;
    },
  },
});
export const {
  addTransaction,
  addCategory,
  deleteTransaction,
  setSearchQuery,
  setFilterCategory,
} = expenseSlice.actions;

export default expenseSlice.reducer;
