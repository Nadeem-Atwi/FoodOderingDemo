import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import { getDatabase } from "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCEeYZzebJoE_uHHz7O0Op0pxH8D3jbjRY",
  authDomain: "react-http-a14ba.firebaseapp.com",
  databaseURL: "https://react-http-a14ba-default-rtdb.firebaseio.com",
  projectId: "react-http-a14ba",
  storageBucket: "react-http-a14ba.appspot.com",
  messagingSenderId: "247449229188",
  appId: "1:247449229188:web:f2640f96610148513f6fd1",
});

export const auth = app.auth();
export default app;

// const database = getDatabase();
