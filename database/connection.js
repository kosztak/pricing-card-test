import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCgizgeydwKP5pxp4j7lFle8OEfeLQaJgg",
  authDomain: "pricing-cards-db.firebaseapp.com",
  databaseURL: "https://pricing-cards-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pricing-cards-db",
  storageBucket: "pricing-cards-db.firebasestorage.app",
  messagingSenderId: "142998745858",
  appId: "1:142998745858:web:3bfaa140ebf7fde1a5881b"
};

const database = getDatabase(initializeApp(firebaseConfig));

export const plansRef = ref(database, "plans"); // connection to plans list
export const benefitsRef = ref(database, "benefits"); // connection to benefits list