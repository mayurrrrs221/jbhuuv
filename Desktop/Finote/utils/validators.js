// Simple validators for expense tracker forms

// Check for non-empty fields
export function isNonEmpty(str) {
  return (str || '').trim().length > 0;
}

// Check for positive number input
export function isPositiveNumber(val) {
  return !isNaN(val) && Number(val) > 0;
}

// Validate date in YYYY-MM-DD format
export function isValidYMD(str) {
  return /^\d{4}-\d{2}-\d{2}$/.test(str);
}

// Validate all form fields for an expense
export function validateExpense({ title, amount, date }) {
  if (!isNonEmpty(title)) return 'Title required';
  if (!isPositiveNumber(amount)) return 'Amount must be positive';
  if (!isValidYMD(date)) return 'Invalid date format (YYYY-MM-DD)';
  return null;
}
