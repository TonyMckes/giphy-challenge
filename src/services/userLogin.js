import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

async function userLogin({ email, password }) {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const { code } = error;

    if (code === "auth/too-many-requests") {
      throw "Too many requests. Try again later.";
    } else if (code === "auth/wrong-password") {
      throw "Wrong password, try again.";
    }

    console.log(error);
  }
}

export default userLogin;
