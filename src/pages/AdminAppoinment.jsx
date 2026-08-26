import React, { useState } from "react";
import Sidebar from "../components/AdminDashboardSidebar2";
import Navbar from "../components/AdminDrProfileNavbar";

// Icons
import TotalPatientsIcon from "../assets/totalappoinment.png";
import ActiveTreatmentsIcon from "../assets/checkmark-square-04.png";
import NewThisMonthIcon from "../assets/refresh.png";
import SatisfiedPatientsIcon from "../assets/cancel-square.png";
import profile from "../assets/profilePic.png";

/* ---------- Mock data ---------- */

const STATS = [
  {
    id: "total",
    icon: TotalPatientsIcon,
    iconBg: "#E8EBFC",
    label: "Total appointment",
    value: "1,500",
    trend: "+12.5%",
    trendColor: "#0018A6",
  },
  {
    id: "confirmed",
    icon: ActiveTreatmentsIcon,
    iconBg: "#E7F9EF",
    label: "Confirmed appointment",
    value: "1,500",
    trend: "+12.5%",
    trendColor: "#1FA959",
  },
  {
    id: "awaiting",
    icon: NewThisMonthIcon,
    iconBg: "#FDF3E2",
    label: "Awaiting confirmation",
    value: "1,500",
    trend: "+12.5%",
    trendColor: "#C98A1F",
  },
  {
    id: "cancelled",
    icon: SatisfiedPatientsIcon,
    iconBg: "#FCE9E9",
    label: "Cancelled appointment",
    value: "1,500",
    trend: "+12.5%",
    trendColor: "#DA1E28",
  },
];

const FILTERS = ["All", "Confirmed", "Pending", "Cancelled"];

const PATIENTS = [
  {
    id: "#P-001",
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    name: "Franklin Gutkow III",
    time: "4:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "Follow-up",
    status: "Confirmed",
    doctorFilter: "Dr.Terry",
    appointmentDate: "2026-07-28",
  },
  {
    id: "#P-002",
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    name: "Marie Jaskolski",
    time: "5:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "New visit",
    status: "Pending",
    doctorFilter: "Dr.Terry",
    appointmentDate: "2026-07-28",
  },
  {
    id: "#P-003",
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    name: "Jackie Larkin",
    time: "6:30 Pm",
    date: "28 jul 2026",
    type: "Online",
    state: "Follow-up",
    status: "Confirmed",
    doctorFilter: "Dr.Terry",
    appointmentDate: "2026-07-28",
  },
  {
    id: "#P-004",
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    name: "Jeanne Schullist",
    time: "7:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "New visit",
    status: "Pending",
    doctorFilter: "Dr.Terry",
    appointmentDate: "2026-07-28",
  },
  {
    id: "#P-005",
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    name: "Paula Wilkinson",
    time: "8:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "Follow-up",
    status: "Confirmed",
    doctorFilter: "Dr.Terry",
    appointmentDate: "2026-07-28",
  },
];

/* ---------- Reusable subcomponents ---------- */

function StatCard({ icon, label, value, trend, trendColor }) {
  return (
    <div
      className="
        flex-1 h-[172px]
        flex flex-col gap-[32px]
        rounded-[12px] p-6
        bg-white
        [box-shadow:0px_0px_4px_0px_#00000040]
      "
    >
      <div className="w-full flex items-center justify-between">
        <span className="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center shrink-0 bg-[#E8EBFC]">
          <img src={icon} alt="" className="w-6 h-6" />
        </span>

        <span
          className="
            flex items-center gap-[2px]
            font-['IBM_Plex_Sans']
            text-[12px]
            font-bold
            leading-[16px]
          "
          style={{ color: trendColor }}
        >
          <span className="text-[16px] leading-none">↗</span>
          {trend}
        </span>
      </div>

      <div className="flex flex-col gap-[8px]">
        <span
          className="
            font-['IBM_Plex_Sans']
            text-[12px]
            font-medium
            leading-[16px]
            text-[#C1C5CD]
          "
        >
          {label}
        </span>

        <span
          className="
            font-['IBM_Plex_Sans']
            text-[20px]
            font-bold
            leading-[100%]
            tracking-[-0.025em]
            text-[#4A4F5A]
          "
        >
          {value}
        </span>
      </div>
    </div>
  );
}

function FilterTab({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 h-[36px]
        rounded-full
        font-['IBM_Plex_Sans']
        text-[13px]
        font-medium
        transition-colors

        ${
          active
            ? "bg-[#0018A6] text-white"
            : "border border-[#DFE1E6] text-[#4D5260] hover:bg-[#F5F6F8]"
        }
      `}
    >
      {label}
    </button>
  );
}

function PatientRow({ patient }) {
  return (
    <tr className="border-b border-[#F0F1F4] last:border-b-0">
      {/* Doctor Name */}
      <td className="py-3.5 px-3">
        <div className="flex items-center gap-3">
          <div className="w-[28px] h-[28px] rounded-full overflow-hidden shrink-0">
            <img
              src={patient.doctorImage}
              alt={patient.doctor}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-[2px]">
            <span
              className="
                font-['IBM_Plex_Sans']
                text-[13px]
                font-semibold
                text-[#4A4F5A]
              "
            >
              {patient.doctor}
            </span>

            <span
              className="
                font-['IBM_Plex_Sans']
                text-[10px]
                text-[#B0B4BC]
              "
            >
              {patient.specialty}
            </span>
          </div>
        </div>
      </td>

      {/* Patient Name */}
      <td
        className="
          py-3.5 px-3
          font-['IBM_Plex_Sans']
          text-[12px]
          text-[#8F95A1]
        "
      >
        {patient.name}
      </td>

      {/* Time Visit */}
      <td
        className="
          py-3.5 px-3
          font-['IBM_Plex_Sans']
          text-[12px]
          text-[#8F95A1]
        "
      >
        {patient.time}
      </td>

      {/* Date */}
      <td
        className="
          py-3.5 px-3
          font-['IBM_Plex_Sans']
          text-[12px]
          text-[#8F95A1]
        "
      >
        {patient.date}
      </td>

      {/* Type */}
      <td
        className="
          py-3.5 px-3
          font-['IBM_Plex_Sans']
          text-[12px]
          text-[#8F95A1]
        "
      >
        {patient.type}
      </td>

      {/* State */}
      <td className="py-3.5 px-3">
        <span
          className={`
            inline-flex
            items-center
            justify-center
            px-2.5
            py-1
            rounded-[5px]
            font-['IBM_Plex_Sans']
            text-[10px]
            font-medium

            ${
              patient.state === "Follow-up"
                ? "bg-[#FDE9E9] text-[#F04444]"
                : "bg-[#E4F5EA] text-[#159447]"
            }
          `}
        >
          {patient.state}
        </span>
      </td>

      {/* Action */}
      <td className="py-3.5 px-3">
        <button
          type="button"
          onClick={() => console.log("Delete appointment:", patient.id)}
          className="
            w-[24px]
            h-[24px]
            rounded-[6px]
            bg-[#FDE9E9]
            flex
            items-center
            justify-center
            hover:bg-[#F9D5D5]
            transition-colors
          "
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7H20"
              stroke="#F04444"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M10 11V17M14 11V17"
              stroke="#F04444"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M6 7L7 20H17L18 7"
              stroke="#F04444"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M9 7V4H15V7"
              stroke="#F04444"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}

/* ---------- Page ---------- */

function AdminAppointment() {
  /* ---------- Filters ---------- */

  const [activeFilter, setActiveFilter] = useState("All");

  const [patients] = useState(PATIENTS);

  const [selectedDoctor, setSelectedDoctor] = useState("All Doctors");

  const [showDoctorFilter, setShowDoctorFilter] = useState(false);

  const [selectedDate, setSelectedDate] = useState("2026-07-28");

  /* ---------- Filtering ---------- */

  const filteredPatients = patients.filter((patient) => {
    const statusMatch =
      activeFilter === "All" || patient.status === activeFilter;

    const doctorMatch =
      selectedDoctor === "All Doctors" ||
      patient.doctorFilter === selectedDoctor;

    const dateMatch =
      selectedDate === "" || patient.appointmentDate === selectedDate;

    return statusMatch && doctorMatch && dateMatch;
  });

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main
        className="
          flex-1
          min-w-0
          flex
          flex-col
          overflow-hidden
          bg-white
        "
      >
        <Navbar />

        {/* Scrollable content */}
        <div
          className="
            flex-1
            min-h-0
            overflow-y-auto
            px-6
            pb-6
          "
        >
          <div
            className="
              w-full
              flex
              flex-col
              gap-6
              mt-6
            "
          >
            {/* ================= STAT CARDS ================= */}

            <div className="w-full flex gap-4">
              <div className="w-full flex items-center gap-4">
                {STATS.map((stat) => (
                  <StatCard key={stat.id} {...stat} />
                ))}
              </div>
            </div>

            {/* ================= FILTERS ================= */}

            <div
              className="
                w-full
                flex
                items-center
                justify-between
              "
            >
              {/* LEFT — Status Filters */}

              <div className="flex items-center gap-3">
                {FILTERS.map((filter) => (
                  <FilterTab
                    key={filter}
                    label={filter}
                    active={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                  />
                ))}
              </div>

              {/* RIGHT — Doctor + Date */}

              <div className="flex items-center gap-3">
                {/* Filter By Doctor */}

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDoctorFilter(!showDoctorFilter)}
                    className="
                      h-[36px]
                      px-4
                      rounded-[10px]
                      border
                      border-[#DFE1E6]
                      bg-white
                      flex
                      items-center
                      gap-2
                      font-['IBM_Plex_Sans']
                      text-[13px]
                      font-medium
                      text-[#4D5260]
                    "
                  >
                    {/* Filter icon */}

                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 5H20L14 12V18L10 20V12L4 5Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {selectedDoctor}

                    {/* Arrow */}

                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Doctor Dropdown */}

                  {showDoctorFilter && (
                    <div
                      className="
                        absolute
                        right-0
                        top-[42px]
                        z-20
                        w-[170px]
                        rounded-[10px]
                        border
                        border-[#DFE1E6]
                        bg-white
                        shadow-lg
                        overflow-hidden
                      "
                    >
                      {["All Doctors", "Dr.Terry"].map((doctor) => (
                        <button
                          key={doctor}
                          type="button"
                          onClick={() => {
                            setSelectedDoctor(doctor);

                            setShowDoctorFilter(false);
                          }}
                          className="
                            w-full
                            px-4
                            py-2.5
                            text-left
                            font-['IBM_Plex_Sans']
                            text-[13px]
                            text-[#4D5260]
                            hover:bg-[#F5F6F8]
                          "
                        >
                          {doctor}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Date */}

                <label
                  className="
                    relative
                    h-[36px]
                    px-4
                    rounded-[10px]
                    border
                    border-[#DFE1E6]
                    bg-white
                    flex
                    items-center
                    gap-2
                    cursor-pointer
                    font-['IBM_Plex_Sans']
                    text-[13px]
                    font-medium
                    text-[#4D5260]
                  "
                >
                  {/* Calendar icon */}

                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="17"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />

                    <path
                      d="M16 2V6M8 2V6M3 10H21"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>

                  {selectedDate
                    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )
                    : "Select Date"}

                  {/* Arrow */}

                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Native date picker */}

                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      opacity-0
                      cursor-pointer
                    "
                  />
                </label>
              </div>
            </div>

            {/* ================= TABLE ================= */}

            <div className="w-full bg-white">
              <div className="w-full overflow-hidden">
                <table
                  className="
                    w-full
                    border-collapse
                    table-fixed
                  "
                >
                  {/* Table Header */}

                  <thead>
                    <tr className="bg-[#F7F8FB]">
                      <th
                        className="
                          w-[16%]
                          py-2.5
                          px-3
                          text-left
                          font-['IBM_Plex_Sans']
                          text-[11px]
                          font-medium
                          text-[#7F8490]
                        "
                      >
                        Doctor Name
                      </th>

                      <th
                        className="
                          w-[18%]
                          py-2.5
                          px-3
                          text-left
                          font-['IBM_Plex_Sans']
                          text-[11px]
                          font-medium
                          text-[#7F8490]
                        "
                      >
                        Patient Name
                      </th>

                      <th
                        className="
                          w-[13%]
                          py-2.5
                          px-3
                          text-left
                          font-['IBM_Plex_Sans']
                          text-[11px]
                          font-medium
                          text-[#7F8490]
                        "
                      >
                        Time Visit
                      </th>

                      <th
                        className="
                          w-[17%]
                          py-2.5
                          px-3
                          text-left
                          font-['IBM_Plex_Sans']
                          text-[11px]
                          font-medium
                          text-[#7F8490]
                        "
                      >
                        Date
                      </th>

                      <th
                        className="
                          w-[17%]
                          py-2.5
                          px-3
                          text-left
                          font-['IBM_Plex_Sans']
                          text-[11px]
                          font-medium
                          text-[#7F8490]
                        "
                      >
                        Type
                      </th>

                      <th
                        className="
                          w-[10%]
                          py-2.5
                          px-3
                          text-left
                          font-['IBM_Plex_Sans']
                          text-[11px]
                          font-medium
                          text-[#7F8490]
                        "
                      >
                        State
                      </th>

                      <th
                        className="
                          w-[9%]
                          py-2.5
                          px-3
                          text-left
                          font-['IBM_Plex_Sans']
                          text-[11px]
                          font-medium
                          text-[#7F8490]
                        "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}

                  <tbody>
                    {filteredPatients.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="
                            py-10
                            text-center
                            font-['IBM_Plex_Sans']
                            text-[13px]
                            text-[#A7ABB5]
                          "
                        >
                          No appointments match this filter
                        </td>
                      </tr>
                    ) : (
                      filteredPatients.map((patient) => (
                        <PatientRow key={patient.id} patient={patient} />
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* ================= PAGINATION ================= */}

              <div
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-4
                  py-5
                "
              >
                {/* Previous */}

                <button
                  type="button"
                  className="
                    h-[20px]
                    px-3
                    rounded-full
                    bg-[#EEF0FA]
                    text-[#737887]
                    flex
                    items-center
                    gap-1
                    font-['IBM_Plex_Sans']
                    text-[9px]
                    font-medium
                    hover:bg-[#E3E6F5]
                    transition-colors
                  "
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Previous
                </button>

                {/* Page Number */}

                <span
                  className="
                    font-['IBM_Plex_Sans']
                    text-[10px]
                    text-[#A7ABB5]
                  "
                >
                  1
                </span>

                {/* Next */}

                <button
                  type="button"
                  className="
                    h-[20px]
                    px-4
                    rounded-full
                    bg-[#0018A6]
                    text-white
                    flex
                    items-center
                    gap-1
                    font-['IBM_Plex_Sans']
                    text-[9px]
                    font-medium
                    hover:bg-[#00148C]
                    transition-colors
                  "
                >
                  Next
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 6L15 12L9 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminAppointment;
