// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPFT9jXPc_R8C5li6LAf8TPWBGb2ELgfA",
  authDomain: "hazardous-map-mt.firebaseapp.com",
  projectId: "hazardous-map-mt",
  storageBucket: "hazardous-map-mt.appspot.com",
  messagingSenderId: "1017859593517",
  appId: "1:1017859593517:web:ec4610f4a2bcbcbe2e2fa4"
};

// initialize app and firestore
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firestore };







