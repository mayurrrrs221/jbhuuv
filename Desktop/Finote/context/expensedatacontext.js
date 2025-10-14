import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Expense data context
export const ExpenseDataContext = createContext();

export const ExpenseDataProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem('@expenses');
        setExpenses(stored ? JSON.parse(stored) : []);
      } catch (e) {
        setExpenses([]);
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@expenses', JSON.stringify(expenses)).catch(() => {});
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, { ...expense, id: Date.now().toString() }]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <ExpenseDataContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseDataContext.Provider>
  );
};

// Custom hook for easier usage
export function useExpenseData() {
  return useContext(ExpenseDataContext);
}
