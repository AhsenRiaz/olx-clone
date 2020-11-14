import firebase from "firebase/app"
import "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCsu6FGMTITpXj0EQtuzoU1taDpG2lMIms",
    authDomain: "olxclone2001.firebaseapp.com",
    databaseURL: "https://olxclone2001.firebaseio.com",
    projectId: "olxclone2001",
    storageBucket: "olxclone2001.appspot.com",
    messagingSenderId: "870844913231",
    appId: "1:870844913231:web:4dbc1e61d3df5591ad7c3a"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider  = new firebase.auth.GoogleAuthProvider();


  export {auth,provider};