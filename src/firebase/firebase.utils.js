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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
