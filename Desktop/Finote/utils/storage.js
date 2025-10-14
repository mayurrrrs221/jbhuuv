// Storage utility for async data (using AsyncStorage)
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn('Failed to save', key, e);
    return false;
  }
}

export async function getData(key) {
  try {
    const json = await AsyncStorage.getItem(key);
    return json != null ? JSON.parse(json) : null;
  } catch (e) {
    console.warn('Failed to load', key, e);
    return null;
  }
}

export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (e) {
    console.warn('Failed to remove', key, e);
    return false;
  }
}
