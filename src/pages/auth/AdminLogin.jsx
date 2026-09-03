import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import { adminLogin } from "../../api/authService";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const data = await adminLogin({ email, password });

      // Extract token (fallbacks for different field names)
      const token = data.token || data.jwt || data.accessToken;
      if (token) {
        localStorage.setItem("token", token);
      }

      // Explicitly mark as ADMIN role for ProtectedRoute checks
      localStorage.setItem("userRole", "ADMIN");

      // Redirect directly to admin overview
      navigate("/admin/overview");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Admin authentication failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-[576px]">
        <img
          src="/auth/leo-clinic-logo.png"
          alt="Leo Clinic"
          className="w-[100px] h-auto mb-7 object-contain"
        />

        <h1 className="text-[40px] leading-none font-bold text-[#4B4F59]">
          Admin Login
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          Welcome back. Enter your credentials to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-7">
          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mt-5">
            <AuthInput
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-5 flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-5 h-5 accent-[#1026B8]"
              />

              <span className="text-sm text-[#4B5563]">
                Remember device
              </span>
            </label>

            <Link
              to="/forgot-password"
              className="text-sm text-[#1026B8] hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-500">
              {error}
            </p>
          )}

          <div className="mt-6">
            <AuthButton type="submit" disabled={loading}>
              {loading ? "Authenticating..." : "Login"}
            </AuthButton>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-[#4B5563]">
          Back to{" "}
          <Link
            to="/login"
            className="font-bold text-[#1026B8] hover:underline"
          >
            User Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default AdminLogin;