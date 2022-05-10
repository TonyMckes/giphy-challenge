import { useAuthContext } from "context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  let { isAuth } = useAuthContext();
  let { pathname, search } = useLocation();

  if (isAuth) return <Outlet />;

  return <Navigate to="/login" state={{ pathname, search }} replace />;
}

export default RequireAuth;
