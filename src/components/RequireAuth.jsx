import { useAuthContext } from "context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const { isAuth } = useAuthContext();
  const { pathname, search } = useLocation();

  if (isAuth) return <Outlet />;

  return <Navigate to="/login" state={{ pathname, search }} replace />;
}

export default RequireAuth;
