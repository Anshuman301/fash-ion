import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBnZs1eZUMu8BuxykCek8Ku_2kDfbWj7kI",
    authDomain: "fash-ion-db.firebaseapp.com",
    databaseURL: "https://fash-ion-db.firebaseio.com",
    projectId: "fash-ion-db",
    storageBucket: "",
    messagingSenderId: "1015681216526",
    appId: "1:1015681216526:web:c079e8b5a7cbd3d8"
  };

  export const createUserProfile = async (userAuth,additionalData) => {
    if(!userAuth) return;
    const docref=firestore.doc(`users/${userAuth.uid}`);
    const snap=await docref.get();
    if(!snap.exists){
      const {displayName,email} = userAuth;
      const createdAt=new Date();

      try{
        await docref.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(err){
        console.log('error creting user',err.message)
      }
    }
    return docref;
  }
  firebase.initializeApp(config);
  
  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle=()=>auth.signInWithPopup(provider);

  export default firebase; 