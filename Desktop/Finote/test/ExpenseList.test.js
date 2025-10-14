import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ExpenseList from '../components/ExpenseList';

describe('ExpenseList', () => {
  it('renders "No expenses added yet." when empty', () => {
    const { getByText } = render(<ExpenseList expenses={[]} onDelete={jest.fn()} />);
    expect(getByText('No expenses added yet.')).toBeTruthy();
  });

  it('renders an expense and delete works', () => {
    const onDelete = jest.fn();
    const expenses = [{ id: '1', title: 'Book', amount: 50, date: '2025-10-12' }];
    const { getByText } = render(<ExpenseList expenses={expenses} onDelete={onDelete} />);
    expect(getByText('Book')).toBeTruthy();
    fireEvent.press(getByText('Delete'));
    expect(onDelete).toHaveBeenCalledWith('1');
  });
});
