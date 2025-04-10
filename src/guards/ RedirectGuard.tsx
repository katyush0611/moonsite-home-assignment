import { useLocation, Navigate } from "react-router-dom";

const RedirectGuard = ({ children }) => {
  const location = useLocation();

  // Only allow access if redirected with a specific state
  const cameFromRedirect = location.state?.fromSearch;
  console.log(location.state);

  return cameFromRedirect ? children : <Navigate to="/" replace />;
};

export default RedirectGuard;
