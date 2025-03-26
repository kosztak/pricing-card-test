import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  databaseURL: "https://pricing-cards-test-default-rtdb.europe-west1.firebasedatabase.app",
  apiKey: "AIzaSyB0gnc9Dzmk9-ISMM5wbSunM_bxQexYTJE",
  authDomain: "pricing-cards-test-a88a8.firebaseapp.com",
  projectId: "pricing-cards-test-a88a8",
  storageBucket: "pricing-cards-test-a88a8.firebasestorage.app",
  messagingSenderId: "830240144788",
  appId: "1:830240144788:web:96761a75d740482b8e6381"

};

const database = getDatabase(initializeApp(firebaseConfig));

export const plansRef = ref(database, "plans"); // connection to plans list
export const benefitsRef = ref(database, "benefits"); // connection to benefits list