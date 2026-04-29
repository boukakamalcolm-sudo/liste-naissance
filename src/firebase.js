import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkvax7CvII-qHSJJ3xQlMjb2iePMp9yrY",
  authDomain: "gender-reveal-76ff7.firebaseapp.com",
  projectId: "gender-reveal-76ff7",
  storageBucket: "gender-reveal-76ff7.firebasestorage.app",
  messagingSenderId: "534954798094",
  appId: "1:534954798094:web:0540bafa3adb205f01e05f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);