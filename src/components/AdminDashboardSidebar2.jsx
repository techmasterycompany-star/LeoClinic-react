import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Arrow from "../assets/SidebarIcons/arrow.png";
import Logo from "../assets/SidebarIcons/logo.png";
import Appointment from "../assets/SidebarIcons/appointment.png";
import Doctor from "../assets/SidebarIcons/Doctor.png";
import Message from "../assets/SidebarIcons/message.png";
import Overview from "../assets/SidebarIcons/overwiev.png";
import Payment from "../assets/SidebarIcons/payment.png";
import Schedule from "../assets/SidebarIcons/schadule.png";
import Settings from "../assets/SidebarIcons/setting.png";
import HelpCenter from "../assets/SidebarIcons/help-center.png";
import Logout from "../assets/SidebarIcons/logout.png";
import Patient from "../assets/SidebarIcons/patient.png";

// Central nav config — add/remove items here, routes/pages can be built out later
const NAV_ITEMS = [
  { label: "Overview", icon: Overview, path: "/admin/overview" },
  { label: "Appointment", icon: Appointment, path: "/admin/appointments" },
  { label: "Doctor", icon: Doctor, path: "/admin/doctors" },
  { label: "Patient", icon: Patient, path: "/admin/patients" },
  { label: "Billing", icon: Payment, path: "/admin/billing" },
  { label: "Analytics", icon: Message, path: "/admin/analytics" },
];
function AdminDashboardSidebar2() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hook into your real auth/logout flow (clear token, call API, etc.)
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
      {/* ================= Header ================= */}
      <div className="w-full h-[110px] shrink-0 px-6 flex items-center justify-between rounded-tl-[32px]">
        <img src={Logo} alt="LeoClinic" className="w-88px h-30px gap-4px" />
        <button type="button">
          <img
            src={Arrow}
            alt="Collapse sidebar"
            className="w-[24px] h-[24px]"
          />
        </button>
      </div>

      {/* ================= Divider ================= */}
      <div className="mx-6 shrink-0 border-t border-[#6B707B]" />

      {/* ================= Navigation ================= */}
      <nav className="w-full px-6 mt-6">
        <ul
          className="
      w-full
      flex
      flex-col
      gap-8px
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
                  `w-full h-full flex items-center gap-3 px-3 rounded-lg text-white transition-colors
                  duration-200 ${
                    isActive ? "bg-[#0018A6]" : "hover:bg-[#0018A6]/50"
                  }`
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

      {/* ================= Bottom ================= */}
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
        {/* Settings */}
        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `w-full h-[42px] flex items-center gap-1 p-3 rounded-lg
     font-['IBM_Plex_Sans'] font-normal text-sm
     leading-[14px] tracking-[-0.35px] text-white
     transition-colors duration-200
     ${isActive ? "bg-[#000A5A]" : "hover:bg-[#000A5A]/60"}`
          }
        >
          <img src={Settings} alt="" className="w-[18px] h-[18px]" />
          <span>Settings</span>
        </NavLink>

        {/* Help Center */}
        <NavLink
          to="/admin/help-center"
          className={({ isActive }) =>
            `w-full h-[42px] flex items-center gap-1 p-3 rounded-lg
     font-['IBM_Plex_Sans'] font-normal text-sm
     leading-[14px] tracking-[-0.35px] text-white
     transition-colors duration-200
     ${isActive ? "bg-[#000A5A]" : "hover:bg-[#000A5A]/60"}`
          }
        >
          <img src={HelpCenter} alt="" className="w-[18px] h-[18px]" />
          <span>Help Center</span>
        </NavLink>

        {/* Log out */}
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
          <img src={Logout} alt="" className="w-[18px] h-[18px]" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
}

export default AdminDashboardSidebar2;
