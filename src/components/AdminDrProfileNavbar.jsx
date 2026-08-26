import React, { useState } from "react";

import frame1 from "../assets/Navbar/Darkmood.png";
import frame2 from "../assets/Navbar/Language.png";
import frame3 from "../assets/Navbar/notification.png";
import ProfilePicture from "../assets/profilePic.png";
import Dropdown from "../assets/arrow-down-01.png";

function AdminDrProfileNavbar({
  title = "Doctors",
  subtitle = "Manage All doctors and their information",
  searchPlaceholder = "Search",
  onSearchChange,
}) {
  const [searchTerm, setSearchTerm] = useState("");

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
      {/* ================= Main Navbar Container ================= */}
      <div
        className="
          w-full
          h-[80px]
          flex
          items-center
          justify-between
        "
      >
        {/* ================= LEFT SECTION ================= */}
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
          {/* Dynamic Title */}
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

          {/* Dynamic Subtitle */}
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

        {/* ================= RIGHT SECTION ================= */}
        <div
          className="
            w-[740px]
            h-[72px]
            flex
            items-center
            gap-6
          "
        >
          {/* ================= REAL SEARCH ================= */}
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
            {/* Search Icon */}
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

            {/* Actual Input */}
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

          {/* ================= CONTROLS ================= */}
          <div
            className="
              w-[389px]
              h-[72px]
              flex
              items-center
              gap-2
            "
          >
            {/* ================= DARK MODE ================= */}
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

            {/* ================= LANGUAGE ================= */}
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

            {/* ================= NOTIFICATIONS ================= */}
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

            {/* ================= PROFILE ================= */}
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
              {/* Profile Content */}
              <div
                className="
                  w-[163px]
                  h-[48px]
                  flex
                  items-center
                  gap-2
                "
              >
                {/* Profile Picture */}
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

                {/* Name + Role */}
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

              {/* Profile Dropdown Arrow ONLY */}
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