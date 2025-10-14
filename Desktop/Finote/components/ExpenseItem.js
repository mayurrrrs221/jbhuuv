import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

export default function ExpenseItem({ expense, onDelete, onSelect }) {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onSelect && onSelect(expense)}
      activeOpacity={onSelect ? 0.6 : 1}
    >
      <View>
        <Text style={styles.title}>{expense.title}</Text>
        <Text style={styles.date}>{new Date(expense.date).toLocaleDateString()}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>₹{expense.amount.toFixed(2)}</Text>
        {onDelete && (
          <TouchableOpacity onPress={() => onDelete(expense.id)}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 4
  },
  title: { fontSize: 16, fontWeight: 'bold', color: colors.textPrimary },
  date: { color: colors.textSecondary, fontSize: 12 },
  amountContainer: { alignItems: 'flex-end' },
  amount: { color: colors.primary, fontWeight: 'bold', fontSize: 16 },
  delete: { color: colors.danger, marginTop: 4 },
});
