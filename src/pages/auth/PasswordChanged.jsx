import { Link } from "react-router-dom";

import AuthLayout from "../../components/auth/AuthLayout";

function PasswordChanged() {
  return (
    <AuthLayout leftImage="/auth/password-changed-left-panel.png">
      <div className="w-full max-w-[576px] text-center">
        <img
          src="/auth/leo-clinic-logo.png"
          alt="Leo Clinic"
          className="w-[100px] h-auto mb-10 mx-auto"
        />

        <div className="mx-auto w-20 h-20 rounded-full bg-[#E8F7EE] flex items-center justify-center">
          <span className="text-4xl text-[#20A55A]">✓</span>
        </div>

        <h1 className="mt-7 text-[40px] font-bold text-[#4B4F59]">
          Password Changed
        </h1>

        <p className="mt-5 text-[16px] text-[#7B818C]">
          Your password has been changed successfully.
        </p>

        <Link
          to="/login"
          className="
            mt-7
            w-full
            h-12
            rounded-full
            bg-[#1026B8]
            text-white
            flex
            items-center
            justify-center
            font-medium
            hover:bg-[#0B1E9B]
            transition
          "
        >
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
}

export default PasswordChanged;