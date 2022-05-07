import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";

export const PrivateRoutes = () => {
  const location = useLocation();
  const isAuth = useAuth().authData?.accessToken;
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
