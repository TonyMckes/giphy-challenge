import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [{ username }, setAuthState] = useState({ username: "" });

  return (
    <AuthContext.Provider value={{ username, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
