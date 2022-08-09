// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBBEdLRU00r7IlxBcZ8waESYG-Kr1uFwk",
  authDomain: "reactloginform-762c3.firebaseapp.com",
  databaseURL: "https://reactloginform-762c3-default-rtdb.firebaseio.com",
  projectId: "reactloginform-762c3",
  storageBucket: "reactloginform-762c3.appspot.com",
  messagingSenderId: "998998728450",
  appId: "1:998998728450:web:07a866200b09ad3f5f2c1b",
  measurementId: "G-MH21EXCHLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth= getAuth();

export {auth}

