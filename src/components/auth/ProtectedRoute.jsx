import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("userRole"); // e.g., 'PATIENT', 'DOCTOR', 'ADMIN'

  // 1. Not logged in -> Redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // 2. Logged in, but role is not allowed -> Redirect to default login or home
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  // 3. Authorized -> Render the child routes
  return <Outlet />;
};

export default ProtectedRoute;