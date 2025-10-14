import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import CategoryPicker from './CategoryPicker';

export default function ExpenseForm({ onSubmit, initial = {} }) {
  const [title, setTitle] = useState(initial.title || '');
  const [amount, setAmount] = useState(initial.amount ? String(initial.amount) : '');
  const [date, setDate] = useState(initial.date || '');
  const [category, setCategory] = useState(initial.category || '');

  const handleSubmit = () => {
    if (!title || !amount || !date) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }
    onSubmit({
      title,
      amount: parseFloat(amount),
      date,
      category,
    });
  };

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Expense title" />
      <Text style={styles.label}>Amount (₹)</Text>
      <TextInput style={styles.input} value={amount} onChangeText={setAmount} placeholder="Amount" keyboardType="numeric" />
      <Text style={styles.label}>Date (YYYY-MM-DD)</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="2025-10-13" />
      <Text style={styles.label}>Category</Text>
      <CategoryPicker selected={category} onSelect={setCategory} />
      <Button title="Save Expense" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontWeight: 'bold', marginTop: 10, marginBottom: 5, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, backgroundColor: '#fff', marginBottom: 10 },
});
