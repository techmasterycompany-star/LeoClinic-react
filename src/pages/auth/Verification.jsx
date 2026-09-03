import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";
import { verifyOtpCode } from "../../api/authService";

function Verification() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otp) {
      setError("Please enter the verification code.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await verifyOtpCode(email, otp);
      // Forward email and OTP code to ChangePassword
      navigate("/change-password", { state: { email, otp } });
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid or expired verification code."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout leftImage="/auth/verification-left-panel.png">
      <div className="w-full max-w-[576px]">
        <img
          src="/auth/leo-clinic-logo.png"
          alt="Leo Clinic"
          className="w-[100px] h-auto mb-7"
        />

        <h1 className="text-[40px] font-bold text-[#4B4F59]">
          Verification Code
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          We sent a code to <span className="font-semibold">{email || "your email"}</span>.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <AuthInput
            label="Verification Code"
            type="text"
            placeholder="Enter code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          <div className="mt-5">
            <AuthButton type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Verify Code"}
            </AuthButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Verification;