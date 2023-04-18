import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDn8DGKRoJYss3qGO1lCRkromZilTwGq0c",
  authDomain: "social-media-8bef5.firebaseapp.com",
  projectId: "social-media-8bef5",
  storageBucket: "social-media-8bef5.appspot.com",
  messagingSenderId: "75246268276",
  appId: "1:75246268276:web:f6dd7f60e8fe17df434621",
};

const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
