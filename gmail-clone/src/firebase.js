import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEEz67lFgLL6GyEK2B71G47WOaPQ-2Gok",
    authDomain: "my-clone-91796.firebaseapp.com",
    projectId: "my-clone-91796",
    storageBucket: "my-clone-91796.appspot.com",
    messagingSenderId: "197974288370",
    appId: "1:197974288370:web:16619dfcd35a62eff7ad6b",
    measurementId: "G-433L1GYMQE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};