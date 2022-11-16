import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAObSI67z0TgitSmYIv0gokVQ1rMXXXfEs",
  authDomain: "fireblog-redux.firebaseapp.com",
  projectId: "fireblog-redux",
  storageBucket: "fireblog-redux.appspot.com",
  messagingSenderId: "76586502223",
  appId: "1:76586502223:web:7fc724d190a7c4b34d823a",
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);

export default firebase;
