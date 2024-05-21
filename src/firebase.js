import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmqKsmVriZWnc-DsHHguQYMQW1GdlrIjg",
  authDomain: "clone-2b2c5.firebaseapp.com",
  projectId: "clone-2b2c5",
  storageBucket: "clone-2b2c5.appspot.com",
  messagingSenderId: "9507046147",
  appId: "1:9507046147:web:aab76c8a22dd6cc91c9f36",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
