import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ExpenseDetailsScreen({ route }) {
  const { expense } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{expense.title}</Text>
      <Text style={styles.amount}>₹{expense.amount}</Text>
      <Text style={styles.date}>{expense.date}</Text>
      <Text style={styles.category}>{expense.category || 'No category'}</Text>
      <Text style={styles.note}>{expense.note || 'No note'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f7fa' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2d6cdf', marginBottom: 10 },
  amount: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 6 },
  date: { fontSize: 16, color: '#555', marginBottom: 6 },
  category: { fontSize: 16, color: '#888', marginBottom: 6 },
  note: { fontSize: 15, color: '#666' },
});
