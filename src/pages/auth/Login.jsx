import { useState } from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!role) {
      setError("Please select Doctor or Patient.");
      return;
    }

    setError("");
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
          Login
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          Welcome back. Enter your credentials to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
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

              <span className="text-sm font-medium text-[#4B5563]">
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
            <AuthButton type="submit">
              Login
            </AuthButton>
          </div>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-[#9CA3AF] flex-1" />

          <span className="text-xs font-semibold text-[#6B7280]">
            OR
          </span>

          <div className="h-px bg-[#9CA3AF] flex-1" />
        </div>

        <div className="flex justify-center gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm text-[#4B5563]">
              Doctor
            </span>

            <input
              type="radio"
              name="role"
              value="doctor"
              checked={role === "doctor"}
              onChange={(e) => setRole(e.target.value)}
              className="w-4 h-4 accent-[#1026B8]"
            />
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm text-[#4B5563]">
              Patient
            </span>

            <input
              type="radio"
              name="role"
              value="patient"
              checked={role === "patient"}
              onChange={(e) => setRole(e.target.value)}
              className="w-4 h-4 accent-[#1026B8]"
            />
          </label>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="h-12 px-5 rounded-full border border-[#4B5563] flex items-center gap-3 text-sm text-[#4B5563] hover:bg-gray-50 transition"
          >
            Login with Google

            <span className="text-xl font-bold text-[#4285F4]">
              G
            </span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-[#4B5563]">
          Don't have an account?{" "}

          <Link
            to="/signup"
            className="font-bold text-[#1026B8] hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Login;