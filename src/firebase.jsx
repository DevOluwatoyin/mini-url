import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Add your Firebase config here
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyCUy2eDt9GveUhOer0JRmDSE0f7PzMF7jU",
  authDomain: "url-shortner-5ee7f.firebaseapp.com",
  projectId: "url-shortner-5ee7f",
  storageBucket: "url-shortner-5ee7f.appspot.com",
  messagingSenderId: "47513092590",
  appId: "1:47513092590:web:68dfe97f6bf52fd8348eff",
  measurementId: "G-V2S4C1ZE5F",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();
// const auth = firebase.auth();
