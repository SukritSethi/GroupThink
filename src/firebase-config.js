import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyDpTHlrGua0UzIg21GbOrPnV5O-loKxM",
    authDomain: "welearn-d70ba.firebaseapp.com",
    databaseURL: "https://welearn-d70ba-default-rtdb.firebaseio.com",
    projectId: "welearn-d70ba",
    storageBucket: "welearn-d70ba.appspot.com",
    messagingSenderId: "526895904520",
    appId: "1:526895904520:web:1d3c2646cb541860211ebd",
    measurementId: "G-706K1EJNJP"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore();