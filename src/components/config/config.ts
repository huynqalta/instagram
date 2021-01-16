
import firebase from "firebase"
export const firebaseConfig = {
    apiKey: "AIzaSyBv4fevI8JGoNOtVAT3QUPk2nGjlvve3jM",
    authDomain: "instagram-c4fc2.firebaseapp.com",
    projectId: "instagram-c4fc2",
    storageBucket: "instagram-c4fc2.appspot.com",
    messagingSenderId: "813539332540",
    appId: "1:813539332540:web:af1dfe0b5cda2aa7c9dbb9",
    measurementId: "G-EXFEPGHKFT"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };