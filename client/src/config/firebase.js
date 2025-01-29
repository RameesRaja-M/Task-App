// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBVX_XDxKA74DEZqR1yeo6QKeoDelciIhU",
  authDomain: "taskmanager-9207b.firebaseapp.com",
  projectId: "taskmanager-9207b",
  storageBucket: "taskmanager-9207b.firebasestorage.app",
  messagingSenderId: "843138137900",
  appId: "1:843138137900:web:5908a5ab9e5fe91f09f689",
  measurementId: "G-NTM5R40F7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth