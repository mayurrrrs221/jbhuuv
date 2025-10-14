import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { ExpenseContext } from '../context/ExpenseContext';
import ExpenseList from '../components/ExpenseList';
import colors from '../constants/colors';

export default function HomeScreen({ navigation }) {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <View style={styles.container}>
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      <View style={styles.addButton}>
        <Button 
          title="Add Expense" 
          onPress={() => navigation.navigate('AddExpense')} 
          color={colors.primary} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 10 },
  addButton: { marginVertical: 10 },
});
