import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Arrow from "../assets/SidebarIcons/arrow.png";
import Logo from "../assets/SidebarIcons/logo.png";
import Appointment from "../assets/SidebarIcons/appointment.png";
import Doctor from "../assets/SidebarIcons/Doctor.png";
import Message from "../assets/SidebarIcons/message.png";
import Overview from "../assets/SidebarIcons/overwiev.png";
import Payment from "../assets/SidebarIcons/payment.png";
import Patient from "../assets/SidebarIcons/patient.png";
import Settings from "../assets/SidebarIcons/setting.png";
import HelpCenter from "../assets/SidebarIcons/help-center.png";
import Logout from "../assets/SidebarIcons/logout.png";
import Schedule from "../assets/SidebarIcons/schadule.png";

const NAV_ITEMS = [
  {
    label: "Overview",
    icon: Overview,
    path: "/admin/overview",
  },
  {
    label: "Appointment",
    icon: Appointment,
    path: "/admin/appointments",
  },
  {
    label: "Doctor",
    icon: Doctor,
    path: "/admin/doctors",
  },
  {
    label: "Patient",
    icon: Patient,
    path: "/admin/patient",
  },
  {
    label: "Billing",
    icon: Payment,
    path: "/admin/billing",
  },
  {
    label: "Messages",
    icon: Message,
    path: "/admin/messages",
  },
  {
    label: "Schedule",
    icon: Schedule,
    path: "/admin/schedule",
  },
  { label: "Analytics", icon: Message, path: "/admin/analytics" },
];

function AdminDashboardSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");

    // Later:
    // clear token
    // clear user data
    // call logout API

    navigate("/login");
  };

  return (
    <div
      className="
        w-[264px]
        h-screen
        shrink-0
        flex
        flex-col
        rounded-tl-[32px]
        rounded-bl-[32px]
        bg-[linear-gradient(220.76deg,#000A5A_69.16%,#326BE5_80.36%,#7D8DE8_100%)]
      "
    >
      <div
        className="
          w-full
          h-[110px]
          shrink-0
          px-6
          flex
          items-center
          justify-between
          rounded-tl-[32px]
        "
      >
        <img
          src={Logo}
          alt="LeoClinic"
          className="w-[88px] h-[30px] object-contain"
        />

        <button type="button">
          <img
            src={Arrow}
            alt="Collapse sidebar"
            className="w-[24px] h-[24px]"
          />
        </button>
      </div>

      <div className="mx-6 shrink-0 border-t border-[#6B707B]" />
      <nav className="w-full px-6 mt-6">
        <ul
          className="
            w-full
            flex
            flex-col
            gap-2
            font-['IBM_Plex_Sans']
            font-normal
            text-sm
            tracking-[-0.35px]
          "
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.path} className="w-full h-[42px]">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
                    w-full
                    h-full
                    flex
                    items-center
                    gap-3
                    px-3
                    rounded-lg
                    text-white
                    transition-colors
                    duration-200
                    ${isActive ? "bg-[#0018A6]" : "hover:bg-[#0018A6]/50"}
                  `
                }
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-[18px] h-[18px] object-contain"
                />

                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className="
          w-full
          mt-auto
          h-[158px]
          px-6
          pb-4
          flex
          flex-col
          justify-end
          rounded-bl-[32px]
          shrink-0
        "
      >
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `
              w-full
              h-[42px]
              flex
              items-center
              gap-2
              p-3
              rounded-lg
              font-['IBM_Plex_Sans']
              font-normal
              text-sm
              leading-[14px]
              tracking-[-0.35px]
              text-white
              transition-colors
              duration-200
              ${isActive ? "bg-[#0018A6]" : "hover:bg-[#0018A6]/50"}
            `
          }
        >
          <img src={Settings} alt="" className="w-[18px] h-[18px]" />

          <span>Settings</span>
        </NavLink>

        <NavLink
          to="/admin/help-center"
          className={({ isActive }) =>
            `
              w-full
              h-[42px]
              flex
              items-center
              gap-2
              p-3
              rounded-lg
              font-['IBM_Plex_Sans']
              font-normal
              text-sm
              leading-[14px]
              tracking-[-0.35px]
              text-white
              transition-colors
              duration-200
              ${isActive ? "bg-[#0018A6]" : "hover:bg-[#0018A6]/50"}
            `
          }
        >
          <img src={HelpCenter} alt="" className="w-[18px] h-[18px]" />

          <span>Help Center</span>
        </NavLink>

        <button
          type="button"
          onClick={handleLogout}
          className="
            w-full
            h-[42px]
            flex
            items-center
            gap-2
            p-3
            rounded-lg
            font-['IBM_Plex_Sans']
            font-normal
            text-sm
            leading-[14px]
            tracking-[-0.35px]
            text-white
            hover:bg-[#0018A6]/50
            transition-colors
            duration-200
          "
        >
          <img src={Logout} alt="" className="w-[18px] h-[18px]" />

          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}

export default AdminDashboardSidebar;
