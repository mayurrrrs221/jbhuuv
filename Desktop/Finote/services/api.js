// Example API service using fetch for potential backend integration
const API_URL = process.env.API_URL || 'https://dummyapi.io/data/api'; // Or your real backend

// Fetch all expenses from API
export async function fetchExpenses() {
  try {
    const response = await fetch(`${API_URL}/expenses`);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to fetch expenses');
    }
  } catch (e) {
    console.warn('API error:', e);
    return [];
  }
}

// Add a new expense to API
export async function addExpense(expense) {
  try {
    const response = await fetch(`${API_URL}/expenses`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Failed to add expense');
    }
  } catch (e) {
    console.warn('API error:', e);
    return null;
  }
}
