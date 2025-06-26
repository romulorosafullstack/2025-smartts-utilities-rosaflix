// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMhee7aztkMTwnGo0gg0gvShug870x5-8",
  authDomain: "rosaflix-1dd6f.firebaseapp.com",
  projectId: "rosaflix-1dd6f",
  storageBucket: "rosaflix-1dd6f.firebasestorage.app",
  messagingSenderId: "438295728609",
  appId: "1:438295728609:web:66c2035f92ff79a09d02a0",
  measurementId: "G-ZSJFJ81X02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, app, auth };
