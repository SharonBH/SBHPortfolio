import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Public web config (same project as the previous site).
const firebaseConfig = {
  apiKey: "AIzaSyCOFI7-rFPnMJKXSmbPAdUdwpCleUa34RQ",
  authDomain: "myportfolio-c0ad8.firebaseapp.com",
  databaseURL: "https://myportfolio-c0ad8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myportfolio-c0ad8",
  storageBucket: "myportfolio-c0ad8.firebasestorage.app",
  messagingSenderId: "514965919270",
  appId: "1:514965919270:web:f0ef221875d437b63b38e7",
  measurementId: "G-4TJRB2XS7M",
};

const app = getApps()[0] ?? initializeApp(firebaseConfig);
export const db = getFirestore(app);
