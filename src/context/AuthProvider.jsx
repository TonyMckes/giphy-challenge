import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export const authState = { isAuth: false };

const initialState = () => {
  return JSON.parse(sessionStorage.getItem("auth")) || authState;
};

function AuthProvider({ children }) {
  const [{ isAuth }, setAuthState] = useState(initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthState({ isAuth: !!user });
      sessionStorage.setItem("auth", JSON.stringify({ isAuth: !!user }));
    });

    return () => unsubscribe();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
