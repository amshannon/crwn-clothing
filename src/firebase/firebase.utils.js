import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD3zk_h_hNw3tJisO9xhOsaOO3M5RPvef8",
  authDomain: "crwn-clothing-db-88ca1.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-88ca1.firebaseio.com",
  projectId: "crwn-clothing-db-88ca1",
  storageBucket: "crwn-clothing-db-88ca1.appspot.com",
  messagingSenderId: "535647484944",
  appId: "1:535647484944:web:46df209bcac2dc88ed5e95",
  measurementId: "G-7TFFVHK94D"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  
  if(!userAuth) return; // no userAuth returned i.e. signing out

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    // If doesn't already exit then create
    const { displayName, email } = userAuth;
    const createdAt = new Date(); // new js date obj to tell us current date/time
    try {
      await userRef.set ({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }

  }

  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
/*
* providing prompt: 'select_account' means we will always trigger the google popup
* whenever using the GoogleAuthProvider for authentication and sign in.
*/
provider.setCustomParameters({ prompt: 'select_account' }); 
/*
* export sign in with google method. The auth.signInWithPopup can take argument for
* many types of sign in. 
*/
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; // in case we need access to whole library
