import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDofr11-V-tjSFefzfl2PU3HWvFnuCkzeI",
    authDomain: "project-2-c8133.firebaseapp.com",
    projectId: "project-2-c8133",
    storageBucket: "project-2-c8133.appspot.com",
    messagingSenderId: "349807254911",
    appId: "1:349807254911:web:0563b30da0203042394e4a",
    measurementId: "G-184SQ3E667"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };