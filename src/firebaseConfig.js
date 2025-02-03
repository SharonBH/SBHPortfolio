/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
