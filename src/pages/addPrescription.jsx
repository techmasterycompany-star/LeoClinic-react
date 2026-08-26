import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import PatientDashboardSidebar from "../components/DrDashboardSidebar";
import PatientDashboardNavbar from "../components/AdminDrProfileNavbar";

function AddPrescription() {
  const navigate = useNavigate();

  const [prescriptionNumber, setPrescriptionNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("2026-05-28");
  const [prescriptionText, setPrescriptionText] = useState("");

  const dateInputRef = useRef(null);

  // =========================
  // Number input
  // =========================
  const handleNumberChange = (e) => {
    // Allow numbers only
    const value = e.target.value.replace(/\D/g, "");
    setPrescriptionNumber(value);
  };

  // =========================
  // Save prescription
  // =========================
  const handleSave = () => {
    const prescriptionData = {
      prescriptionNumber,
      date: selectedDate,
      prescription: prescriptionText,
    };

    console.log("Prescription saved:", prescriptionData);

    // Later this can be replaced with an API call
    alert("Prescription saved successfully!");
  };

  // =========================
  // Cancel
  // =========================
  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* ================= SIDEBAR ================= */}
      <PatientDashboardSidebar />

      {/* ================= MAIN AREA ================= */}
      <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {/* ================= NAVBAR ================= */}
        <PatientDashboardNavbar />

        {/* ================= CONTENT ================= */}
        <div
          className="
            flex-1
    min-h-0
    overflow-y-auto
    flex
    justify-center
    items-center
    px-6
    py-8
          "
        >
          {/* ================= MAIN CONTAINER ================= */}
          <div
            className="
              w-[960px]
              h-[545px]
              rounded-[12px]
              p-6
              bg-white
              shadow-[0px_0px_20.6px_0px_#7070F32B]
              flex
              flex-col
              gap-[19px]
            "
          >
            {/* ================= EXIT BUTTON ================= */}
            <div className="w-full h-[24px] flex justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className="
                  w-[24px]
                  h-[24px]
                  flex
                  items-center
                  justify-center
                  rounded-md
                  hover:bg-[#F5F6F8]
                  transition-colors
                "
                aria-label="Close"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="4"
                    stroke="#4A4F5A"
                    strokeWidth="1.6"
                  />

                  <path
                    d="M9 9L15 15M15 9L9 15"
                    stroke="#4A4F5A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* ================= FORM CONTENT ================= */}
            <div className="w-full flex flex-col gap-[32px]">
              {/* ================= TITLE ================= */}
              <div className="flex items-center gap-2">
                {/* Icon */}
                <div
                  className="
                    w-[32px]
                    h-[32px]
                    rounded-[8px]
                    bg-[#0072C31A]
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M8 4H16C17.1 4 18 4.9 18 6V18C18 19.1 17.1 20 16 20H8C6.9 20 6 19.1 6 18V6C6 4.9 6.9 4 8 4Z"
                      stroke="#0072C3"
                      strokeWidth="1.6"
                    />

                    <path
                      d="M9 8H15M9 12H15M9 16H13"
                      stroke="#0072C3"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[2px]">
                  <span
                    className="
                      font-['IBM_Plex_Sans']
                      text-[14px]
                      font-bold
                      leading-[24px]
                      text-[#4A4F5A]
                    "
                  >
                    Add Prescription
                  </span>

                  <span
                    className="
                      font-['IBM_Plex_Sans']
                      text-[14px]
                      font-normal
                      leading-[24px]
                      text-[#4A4F5A]
                    "
                  >
                    Enter prescription details for the patient
                  </span>
                </div>
              </div>

              {/* ================= FORM ================= */}
              <div className="w-full flex flex-col gap-[24px]">
                {/* ================= FIRST ROW ================= */}
                <div className="w-full flex gap-4">
                  {/* Number Prescription */}
                  <div className="flex-1 flex flex-col gap-2">
                    <label
                      htmlFor="prescription-number"
                      className="
                        font-['IBM_Plex_Sans']
                        text-[14px]
                        font-normal
                        leading-[24px]
                        text-[#4A4F5A]
                      "
                    >
                      Number Prescription
                    </label>

                    <input
                      id="prescription-number"
                      type="text"
                      inputMode="numeric"
                      value={prescriptionNumber}
                      onChange={handleNumberChange}
                      placeholder="1"
                      className="
                        w-full
                        h-[48px]
                        rounded-[12px]
                        border
                        border-[#DFE1E6]
                        bg-white
                        px-5
                        font-['IBM_Plex_Sans']
                        text-[14px]
                        text-[#4A4F5A]
                        outline-none
                        placeholder:text-[#A7ABB5]
                        focus:border-[#0018A6]
                      "
                    />
                  </div>

                  {/* Date */}
                  <div className="flex-1 flex flex-col gap-2">
                    <label
                      htmlFor="prescription-date"
                      className="
                        font-['IBM_Plex_Sans']
                        text-[14px]
                        font-normal
                        leading-[24px]
                        text-[#4A4F5A]
                      "
                    >
                      Date
                    </label>

                    <div className="relative w-full h-[48px]">
                      {/* Visible date button */}
                      <button
                        type="button"
                        onClick={() => {
                          if (dateInputRef.current) {
                            if (dateInputRef.current.showPicker) {
                              dateInputRef.current.showPicker();
                            } else {
                              dateInputRef.current.click();
                            }
                          }
                        }}
                        className="
                          w-full
                          h-full
                          rounded-[12px]
                          border
                          border-[#DFE1E6]
                          bg-white
                          px-5
                          flex
                          items-center
                          justify-between
                          font-['IBM_Plex_Sans']
                          text-[14px]
                          font-normal
                          text-[#8F95A1]
                          cursor-pointer
                        "
                      >
                        <div className="flex items-center gap-[10px]">
                          {/* Calendar icon */}
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="17"
                              rx="3"
                              stroke="currentColor"
                              strokeWidth="1.6"
                            />

                            <path
                              d="M16 2V6M8 2V6M3 10H21"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>

                          <span>
                            {selectedDate
                              ? new Date(
                                  `${selectedDate}T00:00:00`,
                                ).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                  year: "numeric",
                                })
                              : "Select Date"}
                          </span>
                        </div>

                        {/* Arrow */}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {/* Native date input */}
                      <input
                        ref={dateInputRef}
                        id="prescription-date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="
                          absolute
                          w-0
                          h-0
                          opacity-0
                          pointer-events-none
                        "
                      />
                    </div>
                  </div>
                </div>

                {/* ================= NEW PRESCRIPTION ================= */}
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="new-prescription"
                    className="
                      font-['IBM_Plex_Sans']
                      text-[14px]
                      font-normal
                      leading-[24px]
                      text-[#4A4F5A]
                    "
                  >
                    New Prescription
                  </label>

                  <textarea
                    id="new-prescription"
                    value={prescriptionText}
                    onChange={(e) => setPrescriptionText(e.target.value)}
                    placeholder="Enter diagnosis"
                    className="
                      w-full
                      h-[164px]
                      resize-none
                      rounded-[12px]
                      border
                      border-[#DFE1E6]
                      bg-white
                      px-5
                      py-3
                      font-['IBM_Plex_Sans']
                      text-[14px]
                      font-normal
                      text-[#4A4F5A]
                      leading-[24px]
                      outline-none
                      placeholder:text-[#A7ABB5]
                      focus:border-[#0018A6]
                    "
                  />
                </div>
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="w-full flex justify-end items-center gap-3 mt-auto">
              {/* Cancel */}
              <button
                type="button"
                onClick={handleCancel}
                className="
                  w-[132px]
                  h-[48px]
                  rounded-full
                  border
                  border-[#F0F1F5]
                  bg-[#E8EBFC]
                  px-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-['IBM_Plex_Sans']
                  text-[14px]
                  font-medium
                  text-[#0018A6]
                  hover:bg-[#DDE2FA]
                  transition-colors
                "
              >
                Cancel
              </button>

              {/* Save */}
              <button
                type="button"
                onClick={handleSave}
                className="
                  w-[207px]
                  h-[48px]
                  rounded-full
                  border
                  border-[#0018A6]
                  bg-[#0018A6]
                  px-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-['IBM_Plex_Sans']
                  text-[14px]
                  font-medium
                  text-white
                  hover:bg-[#00148C]
                  transition-colors
                "
              >
                Save Prescription
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddPrescription;
