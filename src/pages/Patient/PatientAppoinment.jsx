import React, { useRef, useState } from "react";
import Sidebar from "../../components/PatientDashboardSidebar.jsx";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";
import profile from "../../assets/profilePic.png";

const FILTERS = [
  { label: "All", count: null },
  { label: "Confirmed", count: 2 },
  { label: "Pending", count: 3 },
  { label: "Cancelled", count: 1 },
];

const APPOINTMENTS = [
  {
    id: 1,
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    time: "4:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "Follow-up",
    status: "Confirmed",
  },
  {
    id: 2,
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    time: "5:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "New visit",
    status: "Pending",
  },
  {
    id: 3,
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    time: "6:30 Pm",
    date: "28 jul 2026",
    type: "Online",
    state: "Follow-up",
    status: "Confirmed",
  },
  {
    id: 4,
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    time: "7:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "New visit",
    status: "Pending",
  },
  {
    id: 5,
    doctor: "Dr.Terry",
    specialty: "Dentistry",
    doctorImage: profile,
    time: "8:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "Follow-up",
    status: "Pending",
  },
];

function AdminAppointment() {
  const [activeFilter, setActiveFilter] = useState("All");

  const [selectedDoctor, setSelectedDoctor] = useState("All Doctors");

  const [showDoctorFilter, setShowDoctorFilter] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  const dateInputRef = useRef(null);

  const [appointments, setAppointments] = useState(APPOINTMENTS);

  const filteredAppointments = appointments.filter((appointment) => {
    const statusMatch =
      activeFilter === "All" || appointment.status === activeFilter;

    const doctorMatch =
      selectedDoctor === "All Doctors" || appointment.doctor === selectedDoctor;

    return statusMatch && doctorMatch;
  });

  const handleDelete = (id) => {
    setAppointments((current) =>
      current.filter((appointment) => appointment.id !== id),
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 min-w-0 flex flex-col overflow-hidden bg-white">
        <Navbar />

        <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6">
          <div
            className="
              w-full
              max-w-[1146px]
              h-[563px]
              flex
              flex-col
              gap-6
            "
          >
            <div
              className="
                w-full
                h-[40px]
                flex
                items-center
                justify-between
              "
            >
              <div
                className="
                  w-[493px]
                  h-[40px]
                  flex
                  items-center
                  gap-4
                "
              >
                {FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.label;

                  return (
                    <button
                      key={filter.label}
                      type="button"
                      onClick={() => setActiveFilter(filter.label)}
                      className={`
                        h-[39px]
                        px-2
                        rounded-[12px]

                        flex
                        items-center
                        justify-center
                        gap-1

                        font-['IBM_Plex_Sans']
                        text-[12px]
                        font-medium

                        transition-colors

                        ${
                          isActive
                            ? "w-[109.75px] bg-[#0018A6] text-white"
                            : "w-[111.75px] bg-white border border-[#F0F1F5] text-[#4D5260] hover:bg-[#F7F8FB]"
                        }
                      `}
                    >
                      {filter.label}

                      {filter.count !== null && <span>({filter.count})</span>}
                    </button>
                  );
                })}
              </div>

              <div
                className="
                  w-[611px]
                  h-[40px]
                  flex
                  items-center
                  justify-end
                  gap-4
                "
              >
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDoctorFilter(!showDoctorFilter)}
                    className="
                      w-[178px]
                      h-[40px]
                      px-4

                      rounded-[12px]
                      border
                      border-[#C1C5CD]

                      bg-white

                      flex
                      items-center
                      justify-between
                      gap-2

                      font-['IBM_Plex_Sans']
                      text-[12px]
                      font-medium
                      text-[#4D5260]
                    "
                  >
                    <div className="flex items-center gap-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 5H20L14 12V18L10 20V12L4 5Z"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <span>{selectedDoctor}</span>
                    </div>

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

                  {showDoctorFilter && (
                    <div
                      className="
                        absolute
                        right-0
                        top-[46px]
                        z-30

                        w-[178px]

                        rounded-[12px]
                        border
                        border-[#F0F1F5]

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
                            py-3

                            text-left

                            font-['IBM_Plex_Sans']
                            text-[12px]
                            text-[#4D5260]

                            hover:bg-[#F7F8FB]
                          "
                        >
                          {doctor}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className="
    relative
    w-[202px]
    h-[40px]
  "
                >
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
      px-4

      rounded-[12px]
      border
      border-[#C1C5CD]

      bg-white

      flex
      items-center
      justify-between

      cursor-pointer

      font-['IBM_Plex_Sans']
      text-[12px]
      font-medium
      text-[#4D5260]
    "
                  >
                    <div className="flex items-center gap-[10px]">
                      <svg
                        width="16"
                        height="16"
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
                          strokeWidth="1.7"
                        />

                        <path
                          d="M16 2V6M8 2V6M3 10H21"
                          stroke="currentColor"
                          strokeWidth="1.7"
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
                          : "May 28, 2026"}
                      </span>
                    </div>

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

                  <input
                    ref={dateInputRef}
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                    }}
                    className="
      absolute
      w-0
      h-0
      opacity-0
      pointer-events-none
    "
                  />
                </div>

                <button
                  type="button"
                  onClick={() => console.log("Add Appointment clicked")}
                  className="
                    w-[199px]
                    h-[40px]
                    px-4

                    rounded-[20px]
                    border
                    border-[#0018A6]

                    bg-[#0018A6]
                    text-white

                    flex
                    items-center
                    justify-center
                    gap-2

                    font-['IBM_Plex_Sans']
                    text-[12px]
                    font-medium

                    hover:bg-[#00148C]
                    transition-colors
                  "
                >
                  <span
                    className="
                      w-[16px]
                      h-[16px]
                      rounded-full
                      border
                      border-white

                      flex
                      items-center
                      justify-center

                      text-[12px]
                      leading-none
                    "
                  >
                    +
                  </span>
                  Add Appointment
                </button>
              </div>
            </div>

            <div className="w-full">
              <table
                className="
                  w-full
                  border-collapse
                  table-fixed
                "
              >
                <thead>
                  <tr
                    className="
                      h-[32px]
                      bg-[#F7F8FB]
                    "
                  >
                    <th
                      className="
                        w-[20%]
                        px-2
                        text-left

                        font-['IBM_Plex_Sans']
                        text-[10px]
                        font-medium
                        text-[#7F8490]
                      "
                    >
                      Doctor Name
                    </th>

                    <th
                      className="
                        w-[18%]
                        px-2
                        text-left

                        font-['IBM_Plex_Sans']
                        text-[10px]
                        font-medium
                        text-[#7F8490]
                      "
                    >
                      Time Visit
                    </th>

                    <th
                      className="
                        w-[18%]
                        px-2
                        text-left

                        font-['IBM_Plex_Sans']
                        text-[10px]
                        font-medium
                        text-[#7F8490]
                      "
                    >
                      Date
                    </th>

                    <th
                      className="
                        w-[20%]
                        px-2
                        text-left

                        font-['IBM_Plex_Sans']
                        text-[10px]
                        font-medium
                        text-[#7F8490]
                      "
                    >
                      Type
                    </th>

                    <th
                      className="
                        w-[14%]
                        px-2
                        text-left

                        font-['IBM_Plex_Sans']
                        text-[10px]
                        font-medium
                        text-[#7F8490]
                      "
                    >
                      State
                    </th>

                    <th
                      className="
                        w-[10%]
                        px-2
                        text-left

                        font-['IBM_Plex_Sans']
                        text-[10px]
                        font-medium
                        text-[#7F8490]
                      "
                    >
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredAppointments.map((appointment) => (
                    <tr
                      key={appointment.id}
                      className="
                          h-[53px]
                          border-b
                          border-[#F5F5F7]
                        "
                    >
                      <td className="px-2">
                        <div
                          className="
                              flex
                              items-center
                              gap-2
                            "
                        >
                          <div
                            className="
                                w-[24px]
                                h-[24px]
                                rounded-full
                                overflow-hidden
                                shrink-0
                              "
                          >
                            <img
                              src={appointment.doctorImage}
                              alt=""
                              className="
                                  w-full
                                  h-full
                                  object-cover
                                "
                            />
                          </div>

                          <div
                            className="
                                flex
                                flex-col
                                gap-[1px]
                              "
                          >
                            <span
                              className="
                                  font-['IBM_Plex_Sans']
                                  text-[11px]
                                  font-semibold
                                  text-[#4A4F5A]
                                "
                            >
                              {appointment.doctor}
                            </span>

                            <span
                              className="
                                  font-['IBM_Plex_Sans']
                                  text-[8px]
                                  text-[#B0B4BC]
                                "
                            >
                              {appointment.specialty}
                            </span>
                          </div>
                        </div>
                      </td>

                      <td
                        className="
                            px-2
                            font-['IBM_Plex_Sans']
                            text-[10px]
                            text-[#8F95A1]
                          "
                      >
                        {appointment.time}
                      </td>

                      <td
                        className="
                            px-2
                            font-['IBM_Plex_Sans']
                            text-[10px]
                            text-[#8F95A1]
                          "
                      >
                        {appointment.date}
                      </td>

                      <td
                        className="
                            px-2
                            font-['IBM_Plex_Sans']
                            text-[10px]
                            text-[#8F95A1]
                          "
                      >
                        {appointment.type}
                      </td>

                      <td className="px-2">
                        <span
                          className={`
                              inline-flex
                              items-center
                              justify-center

                              px-2
                              py-1

                              rounded-[5px]

                              font-['IBM_Plex_Sans']
                              text-[9px]
                              font-medium

                              ${
                                appointment.state === "Follow-up"
                                  ? "bg-[#FDE9E9] text-[#F04444]"
                                  : "bg-[#E4F5EA] text-[#159447]"
                              }
                            `}
                        >
                          {appointment.state}
                        </span>
                      </td>

                      <td className="px-2">
                        <button
                          type="button"
                          onClick={() => handleDelete(appointment.id)}
                          className="
                              w-[20px]
                              h-[20px]
                              rounded-[6px]
                              bg-[#FDE9E9]

                              flex
                              items-center
                              justify-center

                              hover:bg-[#F9D5D5]
                            "
                        >
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
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
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="
                w-full
                flex
                items-center
                justify-center
                gap-4
                mt-auto
              "
            >
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
                "
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
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

              <span
                className="
                  font-['IBM_Plex_Sans']
                  text-[9px]
                  text-[#A7ABB5]
                "
              >
                1
              </span>

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
                "
              >
                Next
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none">
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
      </main>
    </div>
  );
}

export default AdminAppointment;
