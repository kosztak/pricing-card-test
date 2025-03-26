import { initializeApp } from "firebase/app";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC1lbW3Mirx8HvHJnLN6vAo27zRoTYcpwM",
  authDomain: "pricing-cards-test.firebaseapp.com",
  projectId: "pricing-cards-test",
  databaseURL: "https://pricing-cards-test-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "pricing-cards-test.firebasestorage.app",
  messagingSenderId: "636331095147",
  appId: "1:636331095147:web:4dc1db2d6a43947655ed2e"
};

const database = getDatabase(initializeApp(firebaseConfig));

export const plansRef = ref(database, "plans"); // connection to plans list
export const benefitsRef = ref(database, "benefits"); // connection to benefits list