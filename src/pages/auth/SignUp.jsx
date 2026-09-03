import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import { registerUser } from "../../api/authService";

function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "patient", // default selection
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Client-side Form Validation
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // 2. Prepare payload for API
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: formData.role.toUpperCase(), // 'PATIENT' or 'DOCTOR'
      };

      await registerUser(payload);

      // 3. Navigate to verification screen (or directly to login)
      navigate("/verification", { state: { email: formData.email } });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Registration failed. Please check your network or try another email."
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
          Sign Up
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          Create an account to manage your medical appointments easily.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <AuthInput
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
          />

          <AuthInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          <AuthInput
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
          />

          <AuthInput
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />

          <AuthInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          {/* Role Selection */}
          <div className="mt-2 flex items-center justify-center gap-8">
            <label className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm text-[#4B5563]">Patient</span>
              <input
                type="radio"
                name="role"
                value="patient"
                checked={formData.role === "patient"}
                onChange={handleChange}
                className="w-4 h-4 accent-[#1026B8]"
              />
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <span className="text-sm text-[#4B5563]">Doctor</span>
              <input
                type="radio"
                name="role"
                value="doctor"
                checked={formData.role === "doctor"}
                onChange={handleChange}
                className="w-4 h-4 accent-[#1026B8]"
              />
            </label>
          </div>

          {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

          <div className="mt-4">
            <AuthButton type="submit" disabled={loading}>
              {loading ? "Creating Account..." : "Sign Up"}
            </AuthButton>
          </div>
        </form>

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