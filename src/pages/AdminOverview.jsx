import React from "react";
import Sidebar from "../components/AdminDashboardSidebar1";
import Navbar from "../components/AdminDrProfileNavbar";
import TotalDoctorsIcon from "../assets/overviewpage/totalDr.png";
import TotalPatientsIcon from "../assets/overviewpage/totalPatient.png";
import AppointmentsIcon from "../assets/overviewpage/totalAppoiments.png";
import RevenueIcon from "../assets/overviewpage/revenue.png";

function AdminOverview() {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <div className="shrink-0 h-screen">
        <Sidebar />
      </div>

      <main className="flex-1 min-w-0 min-h-0 flex flex-col overflow-hidden">
        <div className="shrink-0">
          <Navbar />
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
          <div
            className="
              w-full
              max-w-[1128px]
              mx-auto
              flex
              flex-col
              gap-6
    pt-[34px]
    pb-8
            "
          >
            <section
              className="
    w-full
    h-[190px]
    shrink-0
    flex
    items-center
    justify-between
  "
            >
              <div
                className="
      w-[272px]
      h-[190px]
      shrink-0
      rounded-[24px]
      p-6
      bg-white
      shadow-[0px_0px_4px_0px_#00000040]
      flex
      flex-col
      gap-8
    "
              >
                <div className="w-full h-[42px] flex items-center justify-between">
                  <div
                    className="
          w-[42px]
          h-[42px]
          shrink-0
          rounded-[12px]
          bg-[#E8F3FC]
          flex
          items-center
          justify-center
        "
                  >
                    <img
                      src={TotalDoctorsIcon}
                      alt=""
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>

                  <div
                    className="
          w-[71px]
          h-[42px]
          flex
          items-center
          justify-end
          gap-[2px]
          font-['IBM_Plex_Sans']
          text-[12px]
          font-semibold
          text-[#009E60]
        "
                  >
                    <span className="text-[18px] leading-none">↗</span>

                    <span>+12.5%</span>
                  </div>
                </div>

                <div
                  className="
        w-[97px]
        h-[68px]
        flex
        flex-col
        gap-2
      "
                >
                  <span
                    className="
          w-[97px]
          h-[24px]
          font-['IBM_Plex_Sans']
          text-[16px]
          font-medium
          leading-[24px]
          text-[#2D3039]
          whitespace-nowrap
        "
                  >
                    Total Doctors
                  </span>

                  <span
                    className="
          w-[97px]
          h-[36px]
          font-['IBM_Plex_Sans']
          text-[24px]
          font-bold
          leading-[36px]
          text-[#6B707B]
        "
                  >
                    152
                  </span>
                </div>
              </div>

              <div
                className="
      w-[272px]
      h-[190px]
      shrink-0
      rounded-[24px]
      p-6
      bg-white
      shadow-[0px_0px_4px_0px_#00000040]
      flex
      flex-col
      gap-8
    "
              >
                <div className="w-full h-[42px] flex items-center justify-between">
                  <div
                    className="
          w-[42px]
          h-[42px]
          shrink-0
          rounded-[12px]
          bg-[#E7F9EF]
          flex
          items-center
          justify-center
        "
                  >
                    <img
                      src={TotalPatientsIcon}
                      alt=""
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>

                  <div
                    className="
          w-[71px]
          h-[42px]
          flex
          items-center
          justify-end
          gap-[2px]
          font-['IBM_Plex_Sans']
          text-[12px]
          font-semibold
          text-[#009E60]
        "
                  >
                    <span className="text-[18px] leading-none">↗</span>

                    <span>+12.5%</span>
                  </div>
                </div>

                <div
                  className="
        w-[97px]
        h-[68px]
        flex
        flex-col
        gap-2
      "
                >
                  <span
                    className="
          w-[97px]
          h-[24px]
          font-['IBM_Plex_Sans']
          text-[16px]
          font-medium
          leading-[24px]
          text-[#2D3039]
          whitespace-nowrap
        "
                  >
                    Total Patients
                  </span>

                  <span
                    className="
          w-[97px]
          h-[36px]
          font-['IBM_Plex_Sans']
          text-[24px]
          font-bold
          leading-[36px]
          text-[#6B707B]
        "
                  >
                    138
                  </span>
                </div>
              </div>

              <div
                className="
      w-[272px]
      h-[190px]
      shrink-0
      rounded-[24px]
      p-6
      bg-white
      shadow-[0px_0px_4px_0px_#00000040]
      flex
      flex-col
      gap-8
    "
              >
                <div className="w-full h-[42px] flex items-center justify-between">
                  <div
                    className="
          w-[42px]
          h-[42px]
          shrink-0
          rounded-[12px]
          bg-[#FCE9E9]
          flex
          items-center
          justify-center
        "
                  >
                    <img
                      src={AppointmentsIcon}
                      alt=""
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>

                  <div
                    className="
          w-[71px]
          h-[42px]
          flex
          items-center
          justify-end
          gap-[2px]
          font-['IBM_Plex_Sans']
          text-[12px]
          font-semibold
          text-[#009E60]
        "
                  >
                    <span className="text-[18px] leading-none">↗</span>

                    <span>+12.5%</span>
                  </div>
                </div>

                <div
                  className="
        w-[97px]
        h-[68px]
        flex
        flex-col
        gap-2
      "
                >
                  <span
                    className="
          w-[97px]
          h-[24px]
          font-['IBM_Plex_Sans']
          text-[16px]
          font-medium
          leading-[24px]
          text-[#2D3039]
          whitespace-nowrap
        "
                  >
                    Today's Appointments
                  </span>

                  <span
                    className="
          w-[97px]
          h-[36px]
          font-['IBM_Plex_Sans']
          text-[24px]
          font-bold
          leading-[36px]
          text-[#6B707B]
        "
                  >
                    7
                  </span>
                </div>
              </div>

              <div
                className="
      w-[272px]
      h-[190px]
      shrink-0
      rounded-[24px]
      p-6
      bg-white
      shadow-[0px_0px_4px_0px_#00000040]
      flex
      flex-col
      gap-8
    "
              >
                <div className="w-full h-[42px] flex items-center justify-between">
                  <div
                    className="
          w-[42px]
          h-[42px]
          shrink-0
          rounded-[12px]
          bg-[#FDF3E2]
          flex
          items-center
          justify-center
        "
                  >
                    <img
                      src={RevenueIcon}
                      alt=""
                      className="w-[20px] h-[20px] object-contain"
                    />
                  </div>

                  <div
                    className="
          w-[71px]
          h-[42px]
          flex
          items-center
          justify-end
          gap-[2px]
          font-['IBM_Plex_Sans']
          text-[12px]
          font-semibold
          text-[#009E60]
        "
                  >
                    <span className="text-[18px] leading-none">↗</span>

                    <span>+12.5%</span>
                  </div>
                </div>

                <div
                  className="
        w-[97px]
        h-[68px]
        flex
        flex-col
        gap-2
      "
                >
                  <span
                    className="
          w-[97px]
          h-[24px]
          font-['IBM_Plex_Sans']
          text-[16px]
          font-medium
          leading-[24px]
          text-[#2D3039]
          whitespace-nowrap
        "
                  >
                    Revenue Today
                  </span>

                  <span
                    className="
          w-[97px]
          h-[36px]
          font-['IBM_Plex_Sans']
          text-[24px]
          font-bold
          leading-[36px]
          text-[#6B707B]
        "
                  >
                    $12,480
                  </span>
                </div>
              </div>
            </section>

            <section
              className="
    w-full
    h-[482px]
    shrink-0
    grid
    grid-cols-[595px_1fr]
    gap-6
  "
            >
              <div
                className="
      w-[595px]
      h-[482px]
      shrink-0
      rounded-[12px]
      p-4
      bg-white
      border
      border-[#F0F1F5]
      shadow-[0px_0px_20.6px_0px_#7070F32B]
      overflow-hidden
    "
              >
                <div className="w-[563px] h-[110px] flex flex-col gap-5">
                  <div className="h-[50px] flex flex-col">
                    <h2
                      className="
            font-['IBM_Plex_Sans']
            text-[16px]
            font-bold
            text-[#4A4F5A]
          "
                    >
                      Appointments
                    </h2>

                    <p
                      className="
            mt-1
            font-['IBM_Plex_Sans']
            text-[10px]
            text-[#A7ABB5]
          "
                    >
                      View and manage all appointment bookings in the system
                    </p>
                  </div>

                  <div className="h-[40px] flex items-center gap-5">
                    <button
                      type="button"
                      className="
            w-[114px]
            h-[26px]
            rounded-full
            bg-[#0018A6]
            text-white
            font-['IBM_Plex_Sans']
            text-[10px]
            font-medium
          "
                    >
                      Today's
                    </button>

                    <button
                      type="button"
                      className="
            flex
            items-center
            gap-2
            font-['IBM_Plex_Sans']
            text-[10px]
            font-medium
            text-[#4A4F5A]
          "
                    >
                      <span className="text-[#C1C5CD]">○</span>
                      Upcoming
                    </button>
                  </div>
                </div>

                <div className="w-[563px] h-[268px] flex flex-col gap-5">
                  <div className="w-full overflow-hidden">
                    <table className="w-full table-fixed border-collapse">
                      <thead>
                        <tr className="bg-[#F7F8FB]">
                          <th
                            className="
                  w-[70px]
                  text-left
                  px-2
                  py-2
                  text-[9px]
                  font-medium
                  text-[#7F8490]
                "
                          >
                            Patient Name
                          </th>

                          <th
                            className="
                  w-[65px]
                  text-left
                  px-2
                  py-2
                  text-[9px]
                  font-medium
                  text-[#7F8490]
                "
                          >
                            Time Visit
                          </th>

                          <th
                            className="
                  w-[105px]
                  text-left
                  px-2
                  py-2
                  text-[9px]
                  font-medium
                  text-[#7F8490]
                "
                          >
                            Doctor Name
                          </th>

                          <th
                            className="
                  w-[75px]
                  text-left
                  px-2
                  py-2
                  text-[9px]
                  font-medium
                  text-[#7F8490]
                "
                          >
                            Department
                          </th>

                          <th
                            className="
                  w-[70px]
                  text-left
                  px-2
                  py-2
                  text-[9px]
                  font-medium
                  text-[#7F8490]
                "
                          >
                            State
                          </th>

                          <th
                            className="
                  w-[70px]
                  text-left
                  px-2
                  py-2
                  text-[9px]
                  font-medium
                  text-[#7F8490]
                "
                          >
                            Action
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {[
                          [
                            "Anita Up",
                            "5:00 Pm",
                            "Dr.Terry",
                            "Cardiology",
                            "Completed",
                          ],
                          ["Levi Toy", "5:30 Pm", "Dr.Jenny", "ENT", "Waiting"],
                          [
                            "Roy Rins",
                            "6:00 Pm",
                            "Dr. Devin",
                            "Dermato",
                            "Confirmed",
                          ],
                        ].map((row, index) => (
                          <tr key={index} className="border-b border-[#F0F1F5]">
                            <td
                              className="
                    px-2
                    py-3
                    text-[9px]
                    text-[#686D7A]
                    whitespace-nowrap
                  "
                            >
                              {row[0]}
                            </td>

                            <td
                              className="
                    px-2
                    py-3
                    text-[9px]
                    text-[#686D7A]
                    whitespace-nowrap
                  "
                            >
                              {row[1]}
                            </td>

                            <td className="px-2 py-2">
                              <div className="flex items-center gap-2">
                                <div
                                  className="
                        w-[24px]
                        h-[24px]
                        rounded-full
                        bg-[#E8EBF5]
                        shrink-0
                        flex
                        items-center
                        justify-center
                        text-[8px]
                        text-[#686D7A]
                      "
                                >
                                  👤
                                </div>

                                <div className="flex flex-col">
                                  <span
                                    className="
                          text-[9px]
                          text-[#4A4F5A]
                          whitespace-nowrap
                        "
                                  >
                                    {row[2]}
                                  </span>

                                  <span
                                    className="
                          text-[7px]
                          text-[#B2B5BD]
                        "
                                  >
                                    Dentistry
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td
                              className="
                    px-2
                    py-3
                    text-[9px]
                    text-[#686D7A]
                    whitespace-nowrap
                  "
                            >
                              {row[3]}
                            </td>

                            <td className="px-2 py-3">
                              <span
                                className={`
                      inline-flex
                      px-2
                      py-1
                      rounded-[5px]
                      text-[8px]
                      whitespace-nowrap

                      ${
                        row[4] === "Completed"
                          ? "bg-[#E4F5EA] text-[#159447]"
                          : row[4] === "Waiting"
                            ? "bg-[#FDF3E2] text-[#C98A1F]"
                            : "bg-[#E8F3FC] text-[#0072C3]"
                      }
                    `}
                              >
                                {row[4]}
                              </span>
                            </td>

                            <td className="px-2 py-2">
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  className="
                        w-[24px]
                        h-[24px]
                        rounded-[5px]
                        bg-[#E4F5EA]
                        text-[#159447]
                        flex
                        items-center
                        justify-center
                        text-[11px]
                      "
                                >
                                  ✎
                                </button>

                                <button
                                  type="button"
                                  className="
                        w-[24px]
                        h-[24px]
                        rounded-[5px]
                        bg-[#FCE9E9]
                        text-[#F45B69]
                        flex
                        items-center
                        justify-center
                        text-[10px]
                      "
                                >
                                  🗑
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div
                    className="
          flex
          items-center
          justify-center
          gap-4
          mt-1
        "
                  >
                    <button
                      type="button"
                      className="
            px-4
            h-[20px]
            rounded-full
            bg-[#EEF0FA]
            text-[#737887]
            text-[8px]
          "
                    >
                      ‹ Previous
                    </button>

                    <span className="text-[9px] text-[#A7ABB5]">1</span>

                    <button
                      type="button"
                      className="
            px-4
            h-[20px]
            rounded-full
            bg-[#0018A6]
            text-white
            text-[8px]
          "
                    >
                      Next ›
                    </button>
                  </div>
                </div>
              </div>

              <div
                className="
      w-full
      h-[482px]
      bg-white
      rounded-[12px]
      border
      border-[#F0F1F5]
      shadow-[0px_0px_20.6px_0px_#7070F32B]
      p-4
      overflow-hidden
    "
              >
                <div className="flex items-center justify-between">
                  <h2
                    className="
          font-['IBM_Plex_Sans']
          text-[16px]
          font-bold
          text-[#4A4F5A]
        "
                  >
                    Patient Visits
                  </h2>

                  <button
                    type="button"
                    className="
          px-3
          py-1
          rounded-full
          bg-[#EEF0FA]
          text-[9px]
          text-[#686D7A]
        "
                  >
                    This month⌄
                  </button>
                </div>

                <div className="mt-5 flex gap-4 text-[9px]">
                  <span className="text-[#0072C3]">● New Patients</span>

                  <span className="text-[#1FA959]">● Returning Patients</span>
                </div>

                <div className="relative mt-5 h-[300px]">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#4A4F5A]">
                      Total Visits
                    </span>

                    <span className="text-[10px] font-bold text-[#0018A6]">
                      1,070 Patients
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 500 230"
                    className="w-full h-[240px] mt-3"
                    preserveAspectRatio="none"
                  >
                    <line x1="40" y1="30" x2="480" y2="30" stroke="#F0F1F5" />

                    <line x1="40" y1="90" x2="480" y2="90" stroke="#F0F1F5" />

                    <line x1="40" y1="150" x2="480" y2="150" stroke="#F0F1F5" />

                    <path
                      d="
            M40 90
            C80 50, 110 120, 150 110
            C190 100, 200 35, 250 40
            C310 45, 340 100, 390 80
            C430 65, 450 85, 480 110
          "
                      fill="none"
                      stroke="#009E60"
                      strokeWidth="3"
                    />

                    <path
                      d="
            M40 70
            C80 60, 100 115, 150 125
            C200 135, 230 105, 270 110
            C320 115, 350 70, 390 90
            C430 110, 450 120, 480 115
          "
                      fill="none"
                      stroke="#2929E8"
                      strokeWidth="3"
                    />

                    <line
                      x1="290"
                      y1="25"
                      x2="290"
                      y2="175"
                      stroke="#D8DCE8"
                      strokeDasharray="5 5"
                    />

                    <circle cx="290" cy="40" r="6" fill="#F45B69" />
                  </svg>

                  <div
                    className="
          absolute
          bottom-0
          left-8
          right-0
          flex
          justify-between
          text-[9px]
          text-[#8F95A1]
        "
                  >
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="
    w-full
    h-[333px]
    shrink-0
    grid
    grid-cols-[595px_509px]
    gap-6
    py-4
  "
            >
              <div
                className="
      w-[595px]
      h-[301px]
      bg-white
      rounded-[12px]
      border border-[#F0F1F5]
      shadow-[0px_0px_20.6px_0px_#7070F32B]
      p-4
    "
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h2
                      className="
            font-['IBM_Plex_Sans']
            text-[16px]
            font-bold
            leading-[24px]
            text-[#4A4F5A]
          "
                    >
                      Appointments by Department
                    </h2>

                    <p
                      className="
            mt-1
            font-['IBM_Plex_Sans']
            text-[10px]
            leading-[16px]
            text-[#A7ABB5]
          "
                    >
                      Distribution of appointments across departments
                    </p>
                  </div>

                  <button
                    className="
          h-[28px]
          px-3
          rounded-full
          bg-[#EEF0FA]
          text-[10px]
          text-[#686D7A]
          flex
          items-center
          gap-2
        "
                  >
                    This week
                    <span>⌄</span>
                  </button>
                </div>

                <div className="mt-7 flex flex-col gap-4">
                  {[
                    ["Cardiology", 48, "w-[90%]", "bg-[#009E60]"],
                    ["Pediatrics", 40, "w-[76%]", "bg-[#0072C3]"],
                    ["Dermatology", 31, "w-[59%]", "bg-[#F9A825]"],
                    ["Neurology", 18, "w-[34%]", "bg-[#DA1E28]"],
                  ].map(([name, number, width, color]) => (
                    <div key={name} className="flex items-center gap-3">
                      <span
                        className="
              w-[80px]
              shrink-0
              text-[12px]
              leading-[20px]
              text-[#686D7A]
            "
                      >
                        {name}
                      </span>

                      <div
                        className="
              flex-1
              h-[8px]
              bg-[#F0F1F5]
              rounded-full
              overflow-hidden
            "
                      >
                        <div
                          className={`h-full rounded-full ${width} ${color}`}
                        />
                      </div>

                      <span
                        className="
              w-[32px]
              shrink-0
              text-[14px]
              font-bold
              text-[#0018A6]
            "
                      >
                        {number}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="
        ml-[80px]
        mr-[32px]
        mt-4
        flex
        justify-between
        text-[10px]
        text-[#8F95A1]
      "
                >
                  <span>0</span>
                  <span>10</span>
                  <span>20</span>
                  <span>30</span>
                  <span>40</span>
                  <span>50</span>
                </div>
              </div>

              <div
                className="
      w-[509px]
      h-[301px]
      bg-white
      rounded-[12px]
      border border-[#F0F1F5]
      shadow-[0px_0px_20.6px_0px_#7070F32B]
      p-4
    "
              >
                <h2
                  className="
        font-['IBM_Plex_Sans']
        text-[16px]
        font-bold
        leading-[24px]
        text-[#4A4F5A]
      "
                >
                  Doctor Availability
                </h2>

                <div
                  className="
        mt-4
        grid
        grid-cols-[1.2fr_1fr_0.8fr]
        items-center
        h-[32px]
        px-2
        bg-[#F7F8FB]
        text-[10px]
        text-[#7F8490]
      "
                >
                  <span>Doctor Name</span>
                  <span>Department</span>
                  <span>Status</span>
                </div>

                {[
                  ["Dr.Terry", "Cardiology", "Available"],
                  ["Dr.Jenny", "ENT", "Busy"],
                  ["Dr. Devin", "Dermatology", "On Leave"],
                ].map(([doctor, department, status]) => (
                  <div
                    key={doctor}
                    className="
          grid
          grid-cols-[1.2fr_1fr_0.8fr]
          items-center
          h-[55px]
          px-2
          border-b
          border-[#F0F1F5]
        "
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-[28px] h-[28px] rounded-full bg-[#E8EBF0]" />

                      <div className="flex flex-col">
                        <span className="text-[11px] text-[#686D7A]">
                          {doctor}
                        </span>

                        <span className="text-[8px] text-[#C1C5CD]">
                          Dentistry
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] text-[#686D7A]">
                      {department}
                    </span>

                    <span
                      className={`
            text-center
            px-3
            py-2
            rounded-[5px]
            text-[10px]
            ${
              status === "Available"
                ? "bg-[#E4F5EA] text-[#159447]"
                : status === "Busy"
                  ? "bg-[#FDF3E2] text-[#C98A1F]"
                  : "bg-[#E8F3FC] text-[#0072C3]"
            }
          `}
                    >
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="
    w-full
    h-[343px]
    shrink-0
    rounded-[12px]
    p-4
    bg-white
    shadow-[0px_0px_20.6px_0px_#7070F32B]
  "
            >
              <div className="w-full h-[24px] flex items-center justify-between">
                <h2
                  className="
        font-['IBM_Plex_Sans']
        font-bold
        text-[22px]
        leading-[22px]
        tracking-[-2.5%]
        text-[#2D3039]
      "
                >
                  Recent Activities
                </h2>

                <button
                  type="button"
                  className="
        font-['IBM_Plex_Sans']
        font-bold
        text-[14px]
        leading-[14px]
        tracking-[-2.5%]
        text-[#0018A6]
        underline
      "
                >
                  View All
                </button>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {[
                  "New patient Sarah Ahmed registered",
                  "New patient Sarah Ahmed registered",
                  "New patient Sarah Ahmed registered",
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="
          w-full
          h-[72px]
          rounded-[8px]
          border
          border-[#DFE1E6]
          p-3
          flex
          items-center
          gap-6
        "
                  >
                    <div
                      className="
            w-[28px]
            h-[28px]
            shrink-0
            rounded-[7px]
            bg-[#E8F3FC]
            flex
            items-center
            justify-center
            text-[#0072C3]
          "
                    >
                      <span className="text-[14px]">▧</span>
                    </div>

                    <div className="flex flex-col justify-center">
                      <span
                        className="
              font-['IBM_Plex_Sans']
              font-medium
              text-[12px]
              leading-[18px]
              text-[#4A4F5A]
            "
                      >
                        {activity}
                      </span>

                      <span
                        className="
              mt-1
              font-['IBM_Plex_Sans']
              text-[11px]
              leading-[16px]
              text-[#A7ABB5]
            "
                      >
                        Aug 05, 2026, 09:15 AM
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
export default AdminOverview;
