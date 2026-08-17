// import React from "react";
import Search from "./assets/NavIcons/Search bar.png";
import frame1 from "./assets/NavIcons/Frame 1.png";
import frame2 from "./assets/NavIcons/Frame 2.png";
import frame3 from "./assets/NavIcons/Frame 3.png";
import ProfilePicture from "./assets/NavIcons/profilePic.png";
import Dropdown from "./assets/NavIcons/arrow-down-01.png";

function AdminDrProfileNavbar() {
  return (
    <header
      className="
        w-full
        h-[120px]
        px-6
        py-5
        bg-[#F8F9FC]
        font-['IBM Plex Sans']
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
          <h1
            className="
              h-[48px]
              font-medium
              text-[32px]
              leading-[48px]
              text-[#4D5260]
            "
          >
            Analytics
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
            Welcome back, Dr. Sarah Johnson
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
          {/* ================= SEARCH ================= */}
          <div
            className="
              w-[327px]
              h-[48px]
              shrink-0
              flex
              items-center
            "
          >
            <img
              src={Search}
              alt="Search"
              className="
                w-[327px]
                h-[48px]
                object-contain
              "
            />
          </div>

          {/* ================= CONTROLS ================= */}
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
            {/* Dark Mode */}
            <button
              type="button"
              className="
      w-[55px]
      h-[55px]
      shrink-0
      p-0
      border-0
      bg-transparent
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
              className="
      w-[55px]
      h-[55px]
      shrink-0
      p-0
      border-0
      bg-transparent
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
              className="
      w-[55px]
      h-[55px]
      shrink-0
      p-0
      border-0
      bg-transparent
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

              {/* Dropdown */}
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
