// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrrqyiPs6KQB7itOXnHsZrsUbIN79fkwk",
  authDomain: "todo-list-41491.firebaseapp.com",
  projectId: "todo-list-41491",
  storageBucket: "todo-list-41491.appspot.com",
  messagingSenderId: "974711120927",
  appId: "1:974711120927:web:e2fb72e7f9fb301777212a",
  measurementId: "G-EQ4EJEJBG2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics();
