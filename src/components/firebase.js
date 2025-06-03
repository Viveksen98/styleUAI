import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions"; 
const firebaseConfig = {
  apiKey: "AIzaSyChY8B8h2QwHxrvF5zJJoHKGkzEVXFctNE",
  authDomain: "credit-system-222b0.firebaseapp.com",
  projectId: "credit-system-222b0",
  storageBucket: "credit-system-222b0.firebasestorage.app",
  messagingSenderId: "24102888034",
  appId: "1:24102888034:web:63b930447d30077e6d273b",
  measurementId: "G-ECSPF01ECC"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const storage = getStorage(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { app, storage, auth,functions, db,onAuthStateChanged  };
