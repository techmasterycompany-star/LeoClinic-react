import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";
import AdminLogin from "./pages/auth/AdminLogin";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Verification from "./pages/auth/Verification";
import ChangePassword from "./pages/auth/ChangePassword";
import PasswordChanged from "./pages/auth/PasswordChanged";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/password-changed" element={<PasswordChanged />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;