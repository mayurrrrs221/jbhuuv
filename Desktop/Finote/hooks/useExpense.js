import { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

// Custom hook for easier access to expense management
export default function useExpense() {
  const { expenses, addExpense, deleteExpense } = useContext(ExpenseContext);

  return { expenses, addExpense, deleteExpense };
}
