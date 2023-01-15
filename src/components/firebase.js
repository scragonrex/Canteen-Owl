import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDmFzxH0zB2M6Y9IdpBogF4_sv17Uph9HA",
  authDomain: "canteen01-8161d.firebaseapp.com",
  projectId: "canteen01-8161d",
  storageBucket: "canteen01-8161d.appspot.com",
  messagingSenderId: "127743116604",
  appId: "1:127743116604:web:6cbafeffa137c3989bca39",
  measurementId: "G-R7QTE0CRB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);