import React from 'react';
import { UserAuthProvider } from './context/userauth';
import { ExpenseDataProvider } from './context/expensedatacontext';
import AppNavigator from './navigation/AppNavigator';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <UserAuthProvider>
      <ExpenseDataProvider>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </ExpenseDataProvider>
    </UserAuthProvider>
  );
}
