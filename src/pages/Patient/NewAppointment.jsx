import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientLayout from "../../components/patient/PatientLayout";
function ClinicIcon({ active }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "text-white" : "text-[#1026B8]"}
    >
      <path
        d="M4 21V7.5L12 3L20 7.5V21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 21V16H15V21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 8V13M9.5 10.5H14.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OnlineIcon({ active }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={active ? "text-white" : "text-[#1026B8]"}
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 21H16M12 17V21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M10 8L15 10.5L10 13V8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NewAppointment() {
  const navigate = useNavigate();
  const [visitType, setVisitType] = useState("");

  const visitTypes = [
    {
      id: "clinic",
      title: "In Clinic",
      description: "Visit the doctor at the clinic",
      icon: ClinicIcon,
    },
    {
      id: "online",
      title: "Online",
      description: "Consult with the doctor online",
      icon: OnlineIcon,
    },
  ];

  return (
  <PatientLayout>
    <div className="min-h-screen ...">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-11 h-11 rounded-xl bg-white border border-[#E5E8EF] flex items-center justify-center text-[#4B5361] hover:bg-[#F8F9FC] transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div>
            <h1 className="text-2xl font-bold text-[#292D38]">
              New Appointment
            </h1>
            <p className="text-sm text-[#8A909C] mt-1">
              Select your visit type
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-[#E9ECF3] p-7 lg:p-10">
          <h2 className="text-lg font-semibold text-[#292D38] mb-6">
            Select Type of Visit
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {visitTypes.map((type) => {
              const Icon = type.icon;
              const active = visitType === type.id;

              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setVisitType(type.id)}
                  className={`text-left p-6 rounded-2xl border-2 transition ${
                    active
                      ? "border-[#1026B8] bg-[#F4F6FF]"
                      : "border-[#E5E8EF] bg-white hover:border-[#BFC6E8]"
                  }`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                      active ? "bg-[#1026B8]" : "bg-[#F2F4F8]"
                    }`}
                  >
                    <Icon active={active} />
                  </div>

                  <h3 className="text-base font-semibold text-[#292D38]">
                    {type.title}
                  </h3>

                  <p className="text-sm text-[#8A909C] mt-2">
                    {type.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="flex justify-end mt-10">
            <button
              type="button"
              disabled={!visitType}
              className={`px-8 h-12 rounded-xl text-sm font-medium transition ${
                visitType
                  ? "bg-[#1026B8] text-white hover:bg-[#0B1E9B]"
                  : "bg-[#DDE1EA] text-[#9AA1AE] cursor-not-allowed"
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  </PatientLayout>
  );
}

export default NewAppointment;