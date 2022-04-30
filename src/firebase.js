import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDFZCKFMjgslQLubyrn8zMbk3N65RkXHss",
  authDomain: "eshop-90acc.firebaseapp.com",
  projectId: "eshop-90acc",
  storageBucket: "eshop-90acc.appspot.com",
  messagingSenderId: "1091331388863",
  appId: "1:1091331388863:web:1223ccd8d37f9d996c5d0a",
  measurementId: "G-Y3CB3M9KJP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

