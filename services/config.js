import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyDyuFdh04q7eqoqnt3XwreU9RmTk6VdNH8",
  authDomain: "quizworld-app-727d5.firebaseapp.com",
  projectId: "quizworld-app-727d5",
  storageBucket: "quizworld-app-727d5.appspot.com",
  messagingSenderId: "129759240254",
  appId: "1:129759240254:web:de908d0423b8d9c40b716f",
  measurementId: "G-3C5CH24B7X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export {app, db, auth};
