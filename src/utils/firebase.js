// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeb7CyvcPVzGt1zKhL5QAPmGVlCX8ZT_Q",
  authDomain: "collectionone-864b1.firebaseapp.com",
  projectId: "collectionone-864b1",
  storageBucket: "collectionone-864b1.appspot.com",
  messagingSenderId: "1016772249565",
  appId: "1:1016772249565:web:8377a43470c045da5b1834",
  measurementId: "G-D42K6RMC0E",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
export default app;