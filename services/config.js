import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCVpZ-gNRSlCk_MWtwZJTJvCuF8N2D-vsA",
    authDomain: "quiz-app-9fc72.firebaseapp.com",
    projectId: "quiz-app-9fc72",
    storageBucket: "quiz-app-9fc72.appspot.com",
    messagingSenderId: "140614847703",
    appId: "1:140614847703:web:4014ab525e235bd113b492",
    measurementId: "G-1S5FJCT5R9"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth};
