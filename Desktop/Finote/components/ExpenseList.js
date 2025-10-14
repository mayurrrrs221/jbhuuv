import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ExpenseItem from './ExpenseItem';

export default function ExpenseList({ expenses, onDelete, onSelect }) {
  if (!expenses || expenses.length === 0) {
    return (
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text style={{ fontSize: 18, color: '#666' }}>No expenses added yet.</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ExpenseItem 
          expense={item} 
          onDelete={onDelete}
          onSelect={onSelect}
        />
      )}
    />
  );
}
