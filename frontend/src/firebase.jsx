// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKey1= import.meta.env.VITE_FIREBASE_API_KEY;

// Your web app's Firebase configuration
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
export const auth=getAuth(app);
export const db=getFirestore();