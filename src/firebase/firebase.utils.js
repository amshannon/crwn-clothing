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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  // If collection doesn't exist with collectionKey, firebase automaatically create it
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit()
} 

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map( doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
/*
* providing prompt: 'select_account' means we will always trigger the google popup
* whenever using the GoogleAuthProvider for authentication and sign in.
*/
googleProvider.setCustomParameters({ prompt: 'select_account' }); 
/*
* export sign in with google method. The auth.signInWithPopup can take argument for
* many types of sign in. 
*/
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); 

export default firebase; // in case we need access to whole library
