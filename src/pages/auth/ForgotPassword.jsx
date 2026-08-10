import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setError("");
    navigate("/verification");
  };

  return (
    <AuthLayout leftImage="/auth/forgot-left-panel.png">
      <div className="w-full max-w-[576px]">
        <img
          src="/auth/leo-clinic-logo.png"
          alt="Leo Clinic"
          className="w-[100px] h-auto mb-7"
        />

        <Link
          to="/login"
          className="flex items-center gap-2 text-[#8A909B] mb-7"
        >
          <span className="text-xl">‹</span>
          <span>Back to login</span>
        </Link>

        <h1 className="text-[40px] font-bold text-[#4B4F59]">
          Forgot Password
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          We will Send you a verification code to your registered email.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <AuthInput
            label="Email"
            type="email"
            placeholder="Hint text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && (
            <p className="mt-3 text-sm text-red-500">
              {error}
            </p>
          )}

          <div className="mt-5">
            <AuthButton type="submit">
              Submit
            </AuthButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;