import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import { requestPasswordReset } from "../../api/authService";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await requestPasswordReset(email);
      // Pass email to verification screen
      navigate("/verification", { state: { email } });
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to send verification code. Check your email."
      );
    } finally {
      setLoading(false);
    }
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
          We will send you a verification code to your registered email.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <AuthInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          <div className="mt-5">
            <AuthButton type="submit" disabled={loading}>
              {loading ? "Sending Code..." : "Submit"}
            </AuthButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default ForgotPassword;