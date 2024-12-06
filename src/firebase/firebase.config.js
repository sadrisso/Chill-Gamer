// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-FLHqY98vqbt-fqwvn3pCg0s_Zn4nQK0",
  authDomain: "gamer-e29ae.firebaseapp.com",
  projectId: "gamer-e29ae",
  storageBucket: "gamer-e29ae.firebasestorage.app",
  messagingSenderId: "528409561345",
  appId: "1:528409561345:web:dbe609b4cff0f10b4df300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)