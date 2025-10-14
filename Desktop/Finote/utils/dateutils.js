// Utility functions for formatting and parsing dates

// Format a JS date string in YYYY-MM-DD format
export function formatDateToYMD(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (`0${d.getMonth() + 1}`).slice(-2);
  const day = (`0${d.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
}

// Parse a YMD string (YYYY-MM-DD) to Date
export function parseYMDToDate(ymd) {
  const [year, month, day] = ymd.split('-');
  return new Date(year, month - 1, day);
}
