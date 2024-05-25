// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8bUKx0YhMtjFRZ0zPPf1DFsqw9cSNE94",
  authDomain: "myblog-cf053.firebaseapp.com",
  projectId: "myblog-cf053",
  storageBucket: "myblog-cf053.appspot.com",
  messagingSenderId: "487453236298",
  appId: "1:487453236298:web:f0d5ec02e9ee5f95909ab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}