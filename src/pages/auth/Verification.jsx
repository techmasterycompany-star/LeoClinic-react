import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthButton from "../../components/auth/AuthButton";

function Verification() {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      document.getElementById(`code-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const verificationCode = code.join("");

    if (verificationCode.length !== 4) {
      setError("Please enter the verification code.");
      return;
    }

    setError("");
    navigate("/change-password");
  };

  return (
    <AuthLayout leftImage="/auth/verification-left-panel.png">
      <div className="w-full max-w-[576px]">
        <img
          src="/auth/leo-clinic-logo.png"
          alt="Leo Clinic"
          className="w-[100px] h-auto mb-7"
        />

        <Link
          to="/forgot-password"
          className="flex items-center gap-2 text-[#8A909B] mb-7"
        >
          <span className="text-xl">‹</span>
          <span>Back</span>
        </Link>

        <h1 className="text-[40px] font-bold text-[#4B4F59]">
          Verification
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          Enter the verification code sent to your email.
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="flex gap-4 justify-center">
            {code.map((value, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={value}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                className="
                  w-16
                  h-16
                  rounded-xl
                  border border-[#D9DDE7]
                  text-center
                  text-2xl
                  font-semibold
                  text-[#4B4F59]
                  outline-none
                  focus:border-[#1026B8]
                "
              />
            ))}
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-500 text-center">
              {error}
            </p>
          )}

          <div className="mt-7">
            <AuthButton type="submit">
              Verify
            </AuthButton>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-[#4B5563]">
          Didn't receive the code?{" "}
          <button
            type="button"
            className="font-bold text-[#1026B8] hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </AuthLayout>
  );
}

export default Verification;