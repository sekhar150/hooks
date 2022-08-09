import {initializeApp} from 'firebase/app'

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbUV7hn3SceoqlhAUykVPcrmjHbvCo0pQ",
    authDomain: "reactcontactform-85843.firebaseapp.com",
    databaseURL: "https://reactcontactform-85843-default-rtdb.firebaseio.com",
    projectId: "reactcontactform-85843",
    storageBucket: "reactcontactform-85843.appspot.com",
    messagingSenderId: "488196516336",
    appId: "1:488196516336:web:fafaac19aa9a45894dd535"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  export {auth};