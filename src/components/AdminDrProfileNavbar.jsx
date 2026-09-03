import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import frame1 from "../assets/Navbar/Darkmood.png";
import frame2 from "../assets/Navbar/Language.png";
import frame3 from "../assets/Navbar/notification.png";
import ProfilePicture from "../assets/profilePic.png";
import Dropdown from "../assets/arrow-down-01.png";

function AdminDrProfileNavbar({
  searchPlaceholder = "Search",
  onSearchChange,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const getPageInfo = () => {
    const path = location.pathname;

    if (path === "/admin/overview") {
      return {
        title: "Overview",
        subtitle: "Overview of your admin dashboard",
      };
    }

    if (path === "/admin/appointments") {
      return {
        title: "Appointments",
        subtitle: "Manage all appointments",
      };
    }

    if (path === "/admin/doctors") {
      return {
        title: "Doctors",
        subtitle: "Manage all doctors and their information",
      };
    }

    if (path.startsWith("/admin/doctors/")) {
      return {
        title: "Doctor Profile",
        subtitle: "View and manage doctor information",
      };
    }

    if (path === "/admin/billing") {
      return {
        title: "Billing",
        subtitle: "Manage billing and payments",
      };
    }

    if (path === "/admin/patient") {
      return {
        title: "Patients",
        subtitle: "Manage all patients and their information",
      };
    }

    if (path.startsWith("/admin/patient/")) {
      return {
        title: "Patient Profile",
        subtitle: "View and manage patient information",
      };
    }

    return {
      title: "Admin Dashboard",
      subtitle: "Manage your dashboard",
    };
  };

  const { title, subtitle } = getPageInfo();

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearchTerm(value);

    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <header
      className="
        w-full
        h-[120px]
        px-6
        py-5
        bg-[#F8F9FC]
        font-['IBM_Plex_Sans']
      "
    >
      <div
        className="
          w-full
          h-[80px]
          flex
          items-center
          justify-between
        "
      >
        {/* Page Title */}
        <div
          className="
            w-[261px]
            h-[80px]
            flex
            flex-col
            justify-center
            gap-2
          "
        >
          <h1
            className="
              h-[48px]
              font-medium
              text-[32px]
              leading-[48px]
              text-[#4D5260]
            "
          >
            {title}
          </h1>

          <p
            className="
              h-[24px]
              font-medium
              text-[14px]
              leading-[24px]
              text-[#686D7A]
              whitespace-nowrap
            "
          >
            {subtitle}
          </p>
        </div>

        {/* Right Side */}
        <div
          className="
            w-[740px]
            h-[72px]
            flex
            items-center
            gap-6
          "
        >
          {/* Search */}
          <div
            className="
              w-[327px]
              h-[48px]
              shrink-0
              relative
              flex
              items-center
            "
          >
            <svg
              className="
                absolute
                left-4
                w-[20px]
                h-[20px]
                text-[#A7ABB5]
                pointer-events-none
              "
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M16.5 16.5L21 21"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder={searchPlaceholder}
              className="
                w-full
                h-[48px]
                rounded-[24px]
                border
                border-[#DFE1E6]
                bg-white
                pl-[48px]
                pr-4
                outline-none
                font-['IBM_Plex_Sans']
                text-[14px]
                text-[#4D5260]
                placeholder:text-[#A7ABB5]
                focus:border-[#0018A6]
                focus:ring-1
                focus:ring-[#0018A6]
              "
            />
          </div>

          {/* Actions */}
          <div
            className="
              w-[389px]
              h-[72px]
              flex
              items-center
              gap-2
            "
          >
            {/* Dark Mode */}
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="
                w-[55px]
                h-[55px]
                shrink-0
                p-0
                border-0
                bg-transparent
                cursor-pointer
              "
            >
              <img
                src={frame1}
                alt="Dark mode"
                className="w-[55px] h-[55px] object-contain"
              />
            </button>

            {/* Language */}
            <button
              type="button"
              aria-label="Change language"
              className="
                w-[55px]
                h-[55px]
                shrink-0
                p-0
                border-0
                bg-transparent
                cursor-pointer
              "
            >
              <img
                src={frame2}
                alt="Language"
                className="w-[55px] h-[55px] object-contain"
              />
            </button>

            {/* Notifications */}
            <button
              type="button"
              aria-label="Notifications"
              className="
                w-[55px]
                h-[55px]
                shrink-0
                p-0
                border-0
                bg-transparent
                cursor-pointer
              "
            >
              <img
                src={frame3}
                alt="Notifications"
                className="w-[55px] h-[55px] object-contain"
              />
            </button>

            {/* Profile */}
            <button
              type="button"
              className="
                w-[221px]
                h-[72px]
                p-3
                shrink-0
                flex
                items-center
                gap-4
                rounded-[360px]
                bg-white
                cursor-pointer
              "
            >
              <div
                className="
                  w-[163px]
                  h-[48px]
                  flex
                  items-center
                  gap-2
                "
              >
                <img
                  src={ProfilePicture}
                  alt="Sarah Johnson"
                  className="
                    w-[48px]
                    h-[48px]
                    shrink-0
                    rounded-full
                    object-cover
                  "
                />

                <div
                  className="
                    flex
                    flex-col
                    justify-center
                    gap-0
                  "
                >
                  <span
                    className="
                      font-medium
                      text-[14px]
                      leading-[20px]
                      text-[#686D7A]
                      whitespace-nowrap
                    "
                  >
                    Sarah Johnson
                  </span>

                  <span
                    className="
                      font-normal
                      text-[12px]
                      leading-[16px]
                      text-[#A7ABB5]
                    "
                  >
                    Admin
                  </span>
                </div>
              </div>

              <img
                src={Dropdown}
                alt="Open profile menu"
                className="
                  w-[18px]
                  h-[18px]
                  shrink-0
                  object-contain
                "
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminDrProfileNavbar;