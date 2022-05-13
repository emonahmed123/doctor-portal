// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:  process.env.REACT_APP_APPI_KEY ,
//   authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
//   projectId:  process.env.REACT_APP_PROJECT_ID,
//   storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDERID,
//   appId:  process.env.REACT_APP_APP_ID
// };

const firebaseConfig = {
    apiKey: "AIzaSyA55L7bIdtJLU1dPJsYrXcCzWH54z2ZlKs",
    authDomain: "doctors-portals-595f4.firebaseapp.com",
    projectId: "doctors-portals-595f4",
    storageBucket: "doctors-portals-595f4.appspot.com",
    messagingSenderId: "248044081920",
    appId: "1:248044081920:web:b031fb96a8559046ed19e5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;