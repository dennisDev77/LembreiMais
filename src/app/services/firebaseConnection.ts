import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDB2vYacMMb890xnb0wGr6Cm8nwnw8fOWY",
    authDomain: "lembrei-mais.firebaseapp.com",
    projectId: "lembrei-mais",
    storageBucket: "lembrei-mais.firebasestorage.app",
    messagingSenderId: "1089203144598",
    appId: "1:1089203144598:web:2f10fc47c3c4f3a449ffb7",
    measurementId: "G-YFRPZL6D27"
  };
   
  // Initialize Firebase
  if(!firebase.getApps.length){

     firebase.initializeApp(firebaseConfig);
  }

  export default firebase;