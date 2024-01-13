// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMv9MkRzWTzU-HqtzbHdS9l6wYxWD2v9Q",
  authDomain: "blog-fb-1a967.firebaseapp.com",
  projectId: "blog-fb-1a967",
  storageBucket: "blog-fb-1a967.appspot.com",
  messagingSenderId: "1073978775211",
  appId: "1:1073978775211:web:97c837d8eb5c3d89b5c9ee",
  measurementId: "G-L2Z7NLDDBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);
