// Example Firebase service for Firestore
// Make sure you have initialized Firebase in your app elsewhere if you use this

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_MSID",
  appId: "YOUR_APPID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllExpenses() {
  try {
    const querySnapshot = await getDocs(collection(db, 'expenses'));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.warn('Firebase get error:', e);
    return [];
  }
}

export async function addExpenseToFirebase(expense) {
  try {
    const docRef = await addDoc(collection(db, 'expenses'), expense);
    return { id: docRef.id, ...expense };
  } catch (e) {
    console.warn('Firebase add error:', e);
    return null;
  }
}
