import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/AdminDashboardSidebar1";
import Navbar from "../components/AdminDrProfileNavbar";
import alarm from "../assets/PatientPage/alarm.png";
import upRightArrow from "../assets/PatientPage/arrow-up-right.png";
import heart from "../assets/PatientPage/Heart.png";
import add from "../assets/PatientPage/add.png";
import rate from "../assets/PatientPage/rate.png";
import downRightArrow from "../assets/PatientPage/arrow-down-right.png";

const patients = [
  {
    id: "#P-001",
    name: "Robert Fox",
    phone: "+1 234 567 890",
    age: "42",
    gender: "Male",
    blood: "A+",
    lastVisit: "12 Jan 2026",
    status: "In Treatment",
    isNew: true,
  },
  {
    id: "#P-002",
    name: "Jane Cooper",
    phone: "+1 345 678 901",
    age: "29",
    gender: "Female",
    blood: "O-",
    lastVisit: "15 Jan 2026",
    status: "Discharged",
    isNew: false,
  },
  {
    id: "#P-003",
    name: "Cody Fisher",
    phone: "+1 456 789 012",
    age: "Label",
    gender: "",
    blood: "AB+",
    lastVisit: "18 Jan 2026",
    status: "Follow Up",
    isNew: true,
  },
];

const statistics = [
  {
    title: "Total Patients",
    value: "2,845",
    change: "+12.5%",
    icon: alarm,
    arrow: upRightArrow,
    changeColor: "text-[#18A87A]",
  },
  {
    title: "Active Treatments",
    value: "842",
    change: "-3.4%",
    icon: heart,
    arrow: downRightArrow,
    changeColor: "text-[#F15B5B]",
  },
  {
    title: "New This Month",
    value: "123",
    change: "+8.2%",
    icon: add,
    arrow: upRightArrow,
    changeColor: "text-[#18A87A]",
  },
  {
    title: "Satisfied Patients",
    value: "98%",
    change: "+2.1%",
    icon: rate,
    arrow: upRightArrow,
    changeColor: "text-[#18A87A]",
  },
];

function StatCard({ title, value, change, icon, arrow, changeColor }) {
  return (
    <div
      className="
        w-full
        h-[198px]
        p-[32px_48px]
        bg-white
        border
        border-[#F0F1F5]
        rounded-[24px]
        box-border
        flex
        flex-col
        justify-between
      "
    >
      <div className="flex items-start justify-between">
        <div
          className="
            w-8
            h-8
            rounded-[9px]
            bg-[#EEF1F7]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          <img src={icon} alt="" className="w-8 h-8 object-contain" />
        </div>

        <div
          className={`
            flex
            items-center
            gap-1
            text-[11px]
            font-medium
            ${changeColor}
          `}
        >
          <img src={arrow} alt="" className="w-3 h-3 object-contain" />

          <span>{change}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p
          className="
            m-0
            text-[11px]
            leading-[16px]
            font-normal
            text-[#555B68]
          "
        >
          {title}
        </p>

        <h3
          className="
            m-0
            text-[22px]
            leading-[28px]
            font-bold
            text-[#1738C7]
          "
        >
          {value}
        </h3>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    "In Treatment": "bg-[#B8DCF3] text-[#2882B8]",
    Discharged: "bg-[#B4DDCF] text-[#29926F]",
    "Follow Up": "bg-[#FFE5B5] text-[#D99A20]",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        w-[145px]
        h-[32px]
        rounded-[6px]
        text-[10px]
        leading-none
        font-normal
        ${styles[status]}
      `}
    >
      {status}
    </span>
  );
}

function Patient() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = React.useState("All");
  const [search, setSearch] = React.useState("");

  const filteredPatients = patients.filter((patient) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      patient.name.toLowerCase().includes(searchValue) ||
      patient.id.toLowerCase().includes(searchValue) ||
      patient.phone.toLowerCase().includes(searchValue);

    const matchesTab =
      activeTab === "All" ||
      (activeTab === "New" && patient.isNew) ||
      (activeTab === "In Treatment" && patient.status === "In Treatment") ||
      (activeTab === "Follow Up" && patient.status === "Follow Up");

    return matchesSearch && matchesTab;
  });

  return (
    <div className="w-full h-screen flex bg-[#F7F8FC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 min-w-0 h-full flex flex-col">
        <Navbar />

        <main className="flex-1 min-w-0 overflow-y-auto bg-[#F7F8FC]">
          <div className="w-full min-h-full px-8 py-5 box-border">
            <section className="w-full h-[198px] grid grid-cols-4 gap-5">
              {statistics.map((stat) => (
                <StatCard
                  key={stat.title}
                  title={stat.title}
                  value={stat.value}
                  change={stat.change}
                  icon={stat.icon}
                  arrow={stat.arrow}
                  changeColor={stat.changeColor}
                />
              ))}
            </section>

            <section className="w-full mt-6 flex flex-col gap-6">
              <div className="w-full h-[39px] flex items-center gap-4">
                <button
                  onClick={() => setActiveTab("All")}
                  className={`
      w-[35px]
      h-[37px]
      p-2
      rounded-[12px]
      flex
      items-center
      justify-center
      text-[13px]
      font-medium
      border
      cursor-pointer
      box-border
      ${
        activeTab === "All"
          ? "bg-[#0018A6] text-white border-[#0018A6]"
          : "bg-white text-[#68707D] border-[#F0F1F5]"
      }
    `}
                >
                  All
                </button>

                <button
                  onClick={() => setActiveTab("New")}
                  className={`
      w-[51px]
      h-[39px]
      p-2
      rounded-[12px]
      flex
      items-center
      justify-center
      text-[13px]
      font-medium
      border
      cursor-pointer
      box-border
      ${
        activeTab === "New"
          ? "bg-[#0018A6] text-white border-[#0018A6]"
          : "bg-white text-[#68707D] border-[#F0F1F5]"
      }
    `}
                >
                  New
                </button>

                <button
                  onClick={() => setActiveTab("In Treatment")}
                  className={`
      w-[110px]
      h-[39px]
      p-2
      rounded-[12px]
      flex
      items-center
      justify-center
      text-[13px]
      font-medium
      border
      cursor-pointer
      box-border
      whitespace-nowrap
      ${
        activeTab === "In Treatment"
          ? "bg-[#0018A6] text-white border-[#0018A6]"
          : "bg-white text-[#68707D] border-[#F0F1F5]"
      }
    `}
                >
                  In Treatment
                </button>

                <button
                  onClick={() => setActiveTab("Follow Up")}
                  className={`
      w-[88px]
      h-[39px]
      p-2
      rounded-[12px]
      flex
      items-center
      justify-center
      text-[13px]
      font-medium
      border
      cursor-pointer
      box-border
      whitespace-nowrap
      ${
        activeTab === "Follow Up"
          ? "bg-[#0018A6] text-white border-[#0018A6]"
          : "bg-white text-[#68707D] border-[#F0F1F5]"
      }
    `}
                >
                  Follow Up
                </button>
              </div>

              <div className="w-full min-h-[96px] py-4 flex items-center justify-between box-border">
                <div>
                  <h2 className="m-0 mb-1 text-[18px] font-bold text-[#4D5563]">
                    Patient Directory
                  </h2>

                  <p className="m-0 text-[10px] text-[#969CA7]">
                    Mange And Track Patient Information
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-[250px] h-9 px-3 flex items-center gap-2 bg-white border border-[#E2E5EB] rounded-full">
                    <span className="text-[18px] text-[#A5ACB8]">⌕</span>

                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search..."
                      className="
                        w-full
                        h-full
                        outline-none
                        border-none
                        bg-transparent
                        text-[10px]
                        text-[#555B68]
                        placeholder:text-[#A5ACB8]
                      "
                    />
                  </div>

                  <button
                    className="
                      h-9
                      px-4
                      flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white
                      border
                      border-[#E2E5EB]
                      text-[10px]
                      text-[#68707D]
                      cursor-pointer
                    "
                  >
                    <span className="text-[14px]">⇩</span>
                    Export
                  </button>

                  <button
                    className="
                      h-9
                      px-4
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border-none
                      bg-[#0826B7]
                      text-white
                      text-[10px]
                      cursor-pointer
                    "
                  >
                    <span className="text-[16px]">+</span>
                    Add Patient
                  </button>
                </div>
              </div>

              <div
                className="
                  w-full
                  min-h-[448px]
                  p-[32px]
                  bg-[#F8F9FC]
                  box-border
                "
              >
                <div className="w-full overflow-hidden">
                  <div
                    className="
                      w-full
                      h-[34px]
                      grid
                      grid-cols-[15%_18%_17%_17%_16%_17%]
                      items-center
                      bg-[#F8F9FC]
                    "
                  >
                    <div
                      className="
                        pl-[50px]
                        text-[10px]
                        leading-none
                        font-medium
                        text-[#777E8B]
                      "
                    >
                      PATIENT ID
                    </div>

                    <div
                      className="
                        pl-[15px]
                        text-[10px]
                        leading-none
                        font-medium
                        text-[#777E8B]
                      "
                    >
                      NAME
                    </div>

                    <div
                      className="
                        pl-[15px]
                        text-[10px]
                        leading-none
                        font-medium
                        text-[#777E8B]
                      "
                    >
                      AGE/GENDER
                    </div>

                    <div
                      className="
                        pl-[15px]
                        text-[10px]
                        leading-none
                        font-medium
                        text-[#777E8B]
                      "
                    >
                      Blood Group
                    </div>

                    <div
                      className="
                        pl-[15px]
                        text-[10px]
                        leading-none
                        font-medium
                        text-[#777E8B]
                      "
                    >
                      LAST VISIT
                    </div>

                    <div
                      className="
                        pl-[15px]
                        text-[10px]
                        leading-none
                        font-medium
                        text-[#777E8B]
                      "
                    >
                      STATUS
                    </div>
                  </div>

                  <div className="w-full bg-white">
                    {filteredPatients.length > 0 ? (
                      filteredPatients.map((patient) => (
                        <div
                          key={patient.id}
                          className="
                            w-full
                            h-[125px]
                            grid
                            grid-cols-[15%_18%_17%_17%_16%_17%]
                            items-center
                            bg-white
                          "
                        >
                          <button
                            onClick={() =>
                              navigate(
                                `/admin/patient/${patient.id.replace("#", "")}`,
                              )
                            }
                            className="
    pl-[60px]
    text-[11px]
    leading-[16px]
    font-normal
    text-[#0018A6]
    hover:underline
    cursor-pointer
    bg-transparent
    border-none
    p-0
  "
                          >
                            {patient.id}
                          </button>

                          <div className="pl-[15px] flex flex-col gap-[2px]">
                            <span
                              className="
                                text-[11px]
                                leading-[16px]
                                font-semibold
                                text-[#555B66]
                              "
                            >
                              {patient.name}
                            </span>

                            <span
                              className="
                                text-[10px]
                                leading-[14px]
                                font-normal
                                text-[#A4A9B2]
                              "
                            >
                              {patient.phone}
                            </span>
                          </div>

                          <div
                            className="
                              pl-[15px]
                              text-[11px]
                              leading-[16px]
                              font-normal
                              text-[#858B95]
                            "
                          >
                            {patient.age}

                            {patient.gender && ` / ${patient.gender}`}
                          </div>

                          <div
                            className="
                              pl-[15px]
                              text-[11px]
                              leading-[16px]
                              font-semibold
                              text-[#858B95]
                            "
                          >
                            {patient.blood}
                          </div>

                          <div
                            className="
                              pl-[15px]
                              text-[11px]
                              leading-[16px]
                              font-normal
                              text-[#858B95]
                            "
                          >
                            {patient.lastVisit}
                          </div>

                          <div className="pl-[15px]">
                            <StatusBadge status={patient.status} />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div
                        className="
                          w-full
                          h-[200px]
                          flex
                          items-center
                          justify-center
                          bg-white
                          text-[11px]
                          text-[#9AA0AB]
                        "
                      >
                        No patients found
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Patient;
