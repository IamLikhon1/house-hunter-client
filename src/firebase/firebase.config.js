// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhegGNnI0W_v-6R7E2a7Z0I-3Lqx-whLY",
  authDomain: "house-hunter-2024.firebaseapp.com",
  projectId: "house-hunter-2024",
  storageBucket: "house-hunter-2024.appspot.com",
  messagingSenderId: "848083195313",
  appId: "1:848083195313:web:4f02111bda850b763b9990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app