// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQnXi9apbJse68Ghqgt3NsnwnS41i9GFc",

  authDomain: "cryptobase-6593a.firebaseapp.com",

  projectId: "cryptobase-6593a",

  storageBucket: "cryptobase-6593a.appspot.com",

  messagingSenderId: "1013620301664",

  appId: "1:1013620301664:web:09bcc2d16a9e71f7430805"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app);

export default app;