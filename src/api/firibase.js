import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyDySiJwyOw6PxxKTf42D0eeqcf9gVgMfxY",
  authDomain: "gb-chat-6633a.firebaseapp.com",
  databaseURL: "https://gb-chat-6633a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-chat-6633a",
  storageBucket: "gb-chat-6633a.appspot.com",
  messagingSenderId: "1009785543815",
  appId: "1:1009785543815:web:c67d0a93538392104bec22",
  measurementId: "G-426139689Y"
};


export const firibase = initializeApp(firebaseConfig);

export const analytics = getAnalytics(firibase);
export const auth = getAuth(firibase);
export const database = getDatabase(firibase);