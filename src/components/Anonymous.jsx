import { useAuthContext } from "context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

function Anonymous() {
  const { isAuth } = useAuthContext();

  if (!isAuth) return <Outlet />;

  return <Navigate to="/" replace />;
}

export default Anonymous;
