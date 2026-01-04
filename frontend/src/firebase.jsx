// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Read API key from .env (Vite)
const apiKey1 = import.meta.env.VITE_FIREBASE_API_KEY;
//console.log(apiKey1);
// Firebase configuration
const firebaseConfig = {
  apiKey: apiKey1,
  authDomain: "greentechservices.firebaseapp.com",
  projectId: "greentechservices",
  storageBucket: "greentechservices.appspot.com",
  messagingSenderId: "1012913383085",
  appId: "1:1012913383085:web:c928b2642c6d6776c8c824",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize services WITH app
export const auth = getAuth(app);
export const db = getFirestore(app);
