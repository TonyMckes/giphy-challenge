import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export const authState = { isAuth: false, username: "" };

const initialState = () => {
  return JSON.parse(sessionStorage.getItem("auth")) || authState;
};

function AuthProvider({ children }) {
  const [{ isAuth, username }, setAuthState] = useState(initialState);

  useEffect(() => {
    sessionStorage.setItem("auth", JSON.stringify({ isAuth, username }));
  }, [isAuth, username]);

  return (
    <AuthContext.Provider value={{ isAuth, username, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
