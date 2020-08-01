import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config ={
    apiKey: "AIzaSyAxi5CBzImHrH--2E2P6PoI7zQN7eAKsAU",
    authDomain: "crown-db-c706c.firebaseapp.com",
    databaseURL: "https://crown-db-c706c.firebaseio.com",
    projectId: "crown-db-c706c",
    storageBucket: "crown-db-c706c.appspot.com",
    messagingSenderId: "180035646909",
    appId: "1:180035646909:web:e3f880131b7a030e4e8ed4",
    measurementId: "G-QE7HNK6STW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;