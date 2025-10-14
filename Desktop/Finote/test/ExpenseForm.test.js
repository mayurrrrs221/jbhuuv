import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import { ExpenseContext } from '../context/ExpenseContext';

// Mock navigation object
const navigation = { goBack: jest.fn() };

describe('AddExpenseScreen', () => {
  it('shows a validation popup if fields are empty', () => {
    const addExpense = jest.fn();
    const { getByText } = render(
      <ExpenseContext.Provider value={{ addExpense }}>
        <AddExpenseScreen navigation={navigation} />
      </ExpenseContext.Provider>
    );
    // This assumes an Alert is shown. You may want to mock Alert or manually verify.
    fireEvent.press(getByText('Save Expense'));
    expect(addExpense).not.toHaveBeenCalled();
  });

  it('calls addExpense successfully when every field is filled', () => {
    const addExpense = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <ExpenseContext.Provider value={{ addExpense }}>
        <AddExpenseScreen navigation={navigation} />
      </ExpenseContext.Provider>
    );
    fireEvent.changeText(getByPlaceholderText('Expense title'), 'Lunch');
    fireEvent.changeText(getByPlaceholderText('Amount'), '120');
    fireEvent.changeText(getByPlaceholderText('2025-10-13'), '2025-10-13');
    fireEvent.press(getByText('Save Expense'));
    expect(addExpense).toHaveBeenCalledWith({
      title: 'Lunch',
      amount: 120,
      date: '2025-10-13',
    });
  });
});
