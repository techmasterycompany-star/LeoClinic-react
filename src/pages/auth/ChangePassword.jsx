import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

function ChangePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    navigate("/password-changed");
  };

  return (
    <AuthLayout leftImage="/auth/change-password-left-panel.png">
      <div className="w-full max-w-[576px]">
        <img
          src="/auth/leo-clinic-logo.png"
          alt="Leo Clinic"
          className="w-[100px] h-auto mb-7"
        />

        <h1 className="text-[40px] font-bold text-[#4B4F59]">
          Change Password
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          Create a new password for your account.
        </p>

        <form onSubmit={handleSubmit} className="mt-7">
          <AuthInput
            label="New Password"
            type="password"
            placeholder="Hint text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="mt-5">
            <AuthInput
              label="Confirm Password"
              type="password"
              placeholder="Hint text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="mt-3 text-sm text-red-500">
              {error}
            </p>
          )}

          <div className="mt-6">
            <AuthButton type="submit">
              Change Password
            </AuthButton>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default ChangePassword;