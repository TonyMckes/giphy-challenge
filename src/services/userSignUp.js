import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

async function userSignUp({ email, password }) {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const { code } = error;

    if (code === "auth/too-many-requests") {
      throw "Too many requests. Try again later.";
    } else if (code === "auth/email-already-in-use") {
      throw "Email is already in use, try logging in.";
    }

    console.log(error);
  }
}

export default userSignUp;
