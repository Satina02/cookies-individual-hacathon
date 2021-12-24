import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCH4bYqSic6uKCMg4p-FXFBQ3MVFtQ9btk",
  authDomain: "cookies-8cda1.firebaseapp.com",
  projectId: "cookies-8cda1",
  storageBucket: "cookies-8cda1.appspot.com",
  messagingSenderId: "63789893556",
  appId: "1:63789893556:web:5cec716f2e0425e78c14e1"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
