import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyAfNMHEsW7gAwvRh1f9-Qbi_NON4ftjQK4",
  authDomain: "giphy-challenge-dev.firebaseapp.com",
  projectId: "giphy-challenge-dev",
  storageBucket: "giphy-challenge-dev.appspot.com",
  messagingSenderId: "3994016947",
  appId: "1:3994016947:web:bc6fd1d76997ea6f9c64c6",
});

export const auth = getAuth(app);
export default app;
