import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [agree, setAgree] = useState(false);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agree) {
      setError("Please agree to the Terms and Privacy Policies.");
      return;
    }

    if (!role) {
      setError("Please select Doctor or Patient.");
      return;
    }

    setError("");

    ({
      ...form,
      role,
      agree,
    });

    navigate("/login");
  };

  return (
    <AuthLayout leftImage="/auth/signup-left-panel.png">
      <div className="w-full max-w-[576px]">
        {/* Logo */}
        <img
          src="/auth/leo-clinic-logo.png"
          alt="Leo Clinic"
          className="w-[100px] h-auto mb-7 object-contain"
        />

        {/* Heading */}
        <h1 className="text-[40px] leading-none font-bold text-[#4B4F59]">
          Signup
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          Create your account.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* First + Last Name */}
          <div className="grid grid-cols-2 gap-5">
            <AuthInput
              label="First Name"
              name="firstName"
              placeholder="Hint text"
              value={form.firstName}
              onChange={handleChange}
            />

            <AuthInput
              label="Last Name"
              name="lastName"
              placeholder="Hint text"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-5 mt-5">
            <AuthInput
              label="Email"
              name="email"
              type="email"
              placeholder="Hint text"
              value={form.email}
              onChange={handleChange}
            />

            <AuthInput
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Hint text"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <AuthInput
              label="Password"
              name="password"
              type="password"
              placeholder="Hint text"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          {/* Confirm Password */}
          <div className="mt-5">
            <AuthInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="Hint text"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 mt-5 cursor-pointer">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="w-5 h-5 accent-[#1026B8]"
            />

            <span className="text-sm text-[#4B5563]">
              I agree to all the{" "}
              <span className="font-semibold">
                Terms and Privacy Policies
              </span>
            </span>
          </label>

          {/* Error */}
          {error && (
            <p className="mt-3 text-sm text-red-500">
              {error}
            </p>
          )}

          {/* Signup */}
          <div className="mt-5">
            <AuthButton type="submit">
              Sign up
            </AuthButton>
          </div>
        </form>

        {/* OR */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-[#9CA3AF] flex-1" />

          <span className="text-xs font-semibold text-[#6B7280]">
            OR
          </span>

          <div className="h-px bg-[#9CA3AF] flex-1" />
        </div>

        {/* Role */}
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

        {/* Google */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="
              h-12
              px-5
              rounded-full
              border border-[#4B5563]
              flex items-center gap-3
              text-sm
              text-[#4B5563]
              hover:bg-gray-50
              transition
            "
          >
            Sign up with Google

            <span className="text-xl font-bold text-[#4285F4]">
              G
            </span>
          </button>
        </div>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-[#4B5563]">
          Already have an account?{" "}

          <Link
            to="/login"
            className="font-bold text-[#1026B8] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}

export default SignUp;