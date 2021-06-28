import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDpGL4Aj9-A9pFmqH08Y-sfolDPoIb710Q",
    authDomain: "quora-ad9ff.firebaseapp.com",
    projectId: "quora-ad9ff",
    storageBucket: "quora-ad9ff.appspot.com",
    messagingSenderId: "365565739309",
    appId: "1:365565739309:web:e6e514ac0a1e4ca94f53a4",
    measurementId: "G-L9XSJTTWGF"
};

const firebaseapp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebaseapp.firestore()
export { auth, provider }
export default db;