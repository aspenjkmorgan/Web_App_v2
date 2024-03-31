// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { doc, getDoc } from "firebase/firestore";
import 'firebase/compat/firestore';
import React, {useState, useEffect} from 'react'

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

const apiRef = doc(firestore, 'api_key', 'GOOGLE_MAPS');
const apiSnap = await getDoc(apiRef);

export { firestore, apiSnap };







