import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { ExpenseContext } from '../context/ExpenseContext';
import colors from '../constants/colors';

export default function AddExpenseScreen({ navigation }) {
  const { addExpense } = useContext(ExpenseContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const onSave = () => {
    if (!title || !amount || !date) {
      Alert.alert('Validation', 'Please fill all fields');
      return;
    }
    addExpense({ title, amount: parseFloat(amount), date });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} placeholder="Expense title" value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Amount (₹)</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Date (YYYY-MM-DD)</Text>
      <TextInput
        style={styles.input}
        placeholder="2025-10-13"
        value={date}
        onChangeText={setDate}
      />

      <Button title="Save Expense" onPress={onSave} color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.background },
  label: { fontWeight: 'bold', marginTop: 15, marginBottom: 5, color: colors.textPrimary },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, backgroundColor: '#fff' },
});
