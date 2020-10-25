import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {GlobalStyles} from './global-styles'
import {FirebaseContext} from "./context/firebase"


const firebaseConfig = {
  apiKey: "AIzaSyCYhmBdrSTOwm1sRynd-F8RD1Q8D9GvkzQ",
  authDomain: "viniflix-d5f90.firebaseapp.com",
  databaseURL: "https://viniflix-d5f90.firebaseio.com",
  projectId: "viniflix-d5f90",
  storageBucket: "viniflix-d5f90.appspot.com",
  messagingSenderId: "294768134941",
  appId: "1:294768134941:web:fed0012fcf046f76e8aff4",
  measurementId: "G-DR0Q7VGLL1",
};

const firebase = window.firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase: window.firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
