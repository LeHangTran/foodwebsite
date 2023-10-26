import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAefem6nh0htDnnSCTfb0zty1NnSU4VhTY",
    authDomain: "luyen-e76cc.firebaseapp.com",
    databaseURL: "https://luyen-e76cc-default-rtdb.firebaseio.com",
    projectId: "luyen-e76cc",
    storageBucket: "luyen-e76cc.appspot.com",
    messagingSenderId: "377483294264",
    appId: "1:377483294264:web:fb4fd5d9e0c41b4756d8cd",
    measurementId: "G-XL8RB0VJFE"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  export { app, firestore, storage };