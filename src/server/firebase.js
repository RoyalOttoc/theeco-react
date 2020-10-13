import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyDw1_vkCNz697ZdsJwJXIykERgnyqVw4UA",
    authDomain: "theeco-react.firebaseapp.com",
    databaseURL: "https://theeco-react.firebaseio.com",
    projectId: "theeco-react",
    storageBucket: "theeco-react.appspot.com",
    messagingSenderId: "467260015885",
    appId: "1:467260015885:web:b7c30997f9d38b37855c44",
    measurementId: "G-HP2BZSHBZ8"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;