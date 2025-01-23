// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQaAUrEFpzLZA5toHKdRvlhnWpFZwt5Oo",
  authDomain: "coffee-store-8b825.firebaseapp.com",
  projectId: "coffee-store-8b825",
  storageBucket: "coffee-store-8b825.firebasestorage.app",
  messagingSenderId: "988497115583",
  appId: "1:988497115583:web:f84df3f9c08e6562b9490a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;