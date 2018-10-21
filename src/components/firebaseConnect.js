
//Database of Firebase 
import * as firebase from 'firebase';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCdboyEqybls7z7bqApFeLnM2SOHAtuYpU",
    authDomain: "notereacthuy.firebaseapp.com",
    databaseURL: "https://notereacthuy.firebaseio.com",
    projectId: "notereacthuy",
    storageBucket: "notereacthuy.appspot.com",
    messagingSenderId: "956383116680"
  };
 firebase.initializeApp(config);
 export const noteData=firebase.database().ref('DataForNote/'); 
 
 
