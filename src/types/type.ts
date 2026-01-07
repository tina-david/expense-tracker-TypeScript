export type TransactionType = "income" | "expense";
export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  date: string;
  category: string;
}
export interface ExpenseState {
  transactions: Transaction[];
  categories: string[];
  searchQuery: string;
  filterCategory: string;
}
