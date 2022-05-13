import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function userLogout() {
  return signOut(auth);
}
