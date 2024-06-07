// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFHnwhqAI-oM0U4eOeH9plHC1rlhbaEtU",
  authDomain: "dashboard-5dc8d.firebaseapp.com",
  projectId: "dashboard-5dc8d",
  storageBucket: "dashboard-5dc8d.appspot.com",
  messagingSenderId: "396918274842",
  appId: "1:396918274842:web:8ee74de927c880a9338aa3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);