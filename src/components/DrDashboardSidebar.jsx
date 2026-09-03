import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Arrow from "../assets/SidebarIcons/arrow.png";
import Logo from "../assets/SidebarIcons/logo.png";
import Appointment from "../assets/SidebarIcons/appointment.png";
import Patient from "../assets/SidebarIcons/patient.png";
import Message from "../assets/SidebarIcons/message.png";
import Overview from "../assets/SidebarIcons/overwiev.png";
import Schedule from "../assets/SidebarIcons/schadule.png";
import Settings from "../assets/SidebarIcons/setting.png";
import HelpCenter from "../assets/SidebarIcons/help-center.png";
import Logout from "../assets/SidebarIcons/logout.png";
import MyRequest from "../assets/SidebarIcons/myRequest.png";

const NAV_ITEMS = [
  {
    label: "Overview",
    icon: Overview,
    path: "/doctor/overview",
  },
  {
    label: "Appointment",
    icon: Appointment,
    path: "/doctor/slot",
  },
  {
    label: "Patient List",
    icon: Patient,
    path: "/doctor/patients",
  },
  {
    label: "My requests",
    icon: MyRequest,
    path: "/doctor/request",
  },
  {
    label: "Messages",
    icon: Message,
    path: "/doctor/messages",
  },
  {
    label: "Schedule",
    icon: Schedule,
    path: "/doctor/schedule",
  },
];

function DrDashboardSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <div
      className="
        w-[264px]
        h-screen
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
          className="w-[88px] h-[30px]"
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
            gap-[8px]
            font-['IBM_Plex_Sans']
            font-normal
            text-sm
            tracking-[-0.35px]
          "
        >
          {NAV_ITEMS.map((item) => (
            <li
              key={item.path}
              className="w-full h-[42px]"
            >
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
                    ${isActive ? "bg-[#000A5A]" : ""}
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
          to="/settings"
          className={({ isActive }) =>
            `
              w-full
              h-[42px]
              flex
              items-center
              gap-1
              p-3
              rounded-lg
              font-['IBM_Plex_Sans']
              font-normal
              text-sm
              leading-[14px]
              tracking-[-0.35px]
              text-white
              ${isActive ? "bg-[#000A5A]" : ""}
            `
          }
        >
          <img
            src={Settings}
            alt=""
            className="w-[18px] h-[18px]"
          />

          <span>Settings</span>
        </NavLink>

        <NavLink
          to="/help-center"
          className={({ isActive }) =>
            `
              w-full
              h-[42px]
              flex
              items-center
              gap-1
              p-3
              rounded-lg
              font-['IBM_Plex_Sans']
              font-normal
              text-sm
              leading-[14px]
              tracking-[-0.35px]
              text-white
              ${isActive ? "bg-[#000A5A]" : ""}
            `
          }
        >
          <img
            src={HelpCenter}
            alt=""
            className="w-[18px] h-[18px]"
          />

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
            gap-1
            p-3
            rounded-lg
            font-['IBM_Plex_Sans']
            font-normal
            text-sm
            leading-[14px]
            tracking-[-0.35px]
            text-white
          "
        >
          <img
            src={Logout}
            alt=""
            className="w-[18px] h-[18px]"
          />

          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}

export default DrDashboardSidebar;