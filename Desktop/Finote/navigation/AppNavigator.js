import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ExpenseDetailsScreen from '../screens/ExpenseDetailsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AuthNavigator from './AuthNavigator';

// The user state helps manage switching between auth/app flows
export default function AppNavigator() {
  const [user, setUser] = useState(null);

  const onLogin = (profile) => setUser(profile);
  const onLogout = () => setUser(null);

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <HomeScreen {...props} user={user} />}
          </Stack.Screen>
          <Stack.Screen name="AddExpense" component={AddExpenseScreen} options={{ title: 'Add Expense' }} />
          <Stack.Screen name="ExpenseDetails" component={ExpenseDetailsScreen} options={{ title: 'Expense Details' }} />
          <Stack.Screen name="Category" component={CategoryScreen} options={{ title: 'Categories' }} />
          {/* Example for logout: add a "Logout" button inside HomeScreen if needed */}
        </Stack.Navigator>
      ) : (
        <AuthNavigator onLogin={onLogin} />
      )}
    </NavigationContainer>
  );
}
