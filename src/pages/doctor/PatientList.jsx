import React from "react";
import DoctorSidebar from "../../components/doctor/DoctorSidebar";

const patients = [
  {
    id: "#P-001",
    name: "Robert Fox",
    phone: "+1 234 567 890",
    ageGender: "42 / Male",
    blood: "A+",
    visit: "12 Jan 2026",
    status: "In Treatment",
  },
  {
    id: "#P-002",
    name: "Jane Cooper",
    phone: "+1 345 678 901",
    ageGender: "29 / Female",
    blood: "O-",
    visit: "15 Jan 2026",
    status: "Discharged",
  },
  {
    id: "#P-003",
    name: "Cody Fisher",
    phone: "+1 456 789 012",
    ageGender: "Label",
    blood: "AB+",
    visit: "18 Jan 2026",
    status: "Follow Up",
  },
  {
    id: "#P-004",
    name: "Esther Howard",
    phone: "+1 567 890 123",
    ageGender: "Label",
    blood: "A-",
    visit: "19 Jan 2026",
    status: "Critical",
  },
];

const statusStyles = {
  "In Treatment": "bg-blue-100 text-blue-600",
  Discharged: "bg-emerald-100 text-emerald-600",
  "Follow Up": "bg-orange-100 text-orange-500",
  Critical: "bg-red-100 text-red-500",
};

function StatCard({ icon, value, title, percentage, negative }) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-xl">
          {icon}
        </div>

        <span
          className={`text-sm font-semibold ${
            negative ? "text-red-500" : "text-emerald-600"
          }`}
        >
          {negative ? "↘" : "↗"} {percentage}
        </span>
      </div>

      <p className="mt-8 text-sm text-gray-600">{title}</p>

      <h2 className="mt-1 text-3xl font-bold text-[#0b21ae]">{value}</h2>
    </div>
  );
}

export default function PatientList() {
  return (
    <div className="min-h-screen bg-white">
      <DoctorSidebar />

      <main className="ml-[216px] min-h-screen bg-white">
        {/* Header */}
        <header className="flex h-[122px] items-center justify-between bg-[#f7f8fc] px-12">
          <div>
            <h1 className="text-4xl font-bold text-gray-700">Doctor</h1>
            <p className="mt-2 text-sm text-gray-500">
              Welcome back, Dr.Sarah Johnson
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-14 w-[330px] items-center rounded-full border border-gray-200 bg-white px-5 text-sm text-gray-400">
              <span className="mr-3 text-xl">⌕</span>
              Search by name, ID, or condition.
            </div>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              ◐
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              ◉
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
              ♧
            </button>

            <div className="flex h-14 w-[265px] items-center gap-3 rounded-full bg-white px-4">
              <div className="h-9 w-9 rounded-full bg-gray-200" />

              <div className="flex-1">
                <p className="text-sm text-gray-600">Dr.Sarah Johnson</p>
                <p className="text-xs text-gray-400">Category</p>
              </div>

              <span>⌄</span>
            </div>
          </div>
        </header>

        <section className="px-12 py-12">
          {/* Statistics */}
          <div className="grid grid-cols-4 gap-5">
            <StatCard
              icon="♧"
              title="Total Patients"
              value="2,845"
              percentage="+12.5%"
            />

            <StatCard
              icon="♡"
              title="Active Treatments"
              value="842"
              percentage="-3.4%"
              negative
            />

            <StatCard
              icon="♙"
              title="New This Month"
              value="123"
              percentage="+8.2%"
            />

            <StatCard
              icon="♧"
              title="Satisfied Patients"
              value="98%"
              percentage="+2.1%"
            />
          </div>

          {/* Filters */}
          <div className="mt-7 flex gap-3">
            {["All", "New", "In Treatment", "Follow Up"].map(
              (filter, index) => (
                <button
                  key={filter}
                  className={`rounded-xl px-4 py-2 text-sm ${
                    index === 0
                      ? "bg-[#0922b8] text-white"
                      : "border border-gray-200 bg-white text-gray-600 shadow-sm"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          {/* Directory Header */}
          <div className="mt-11 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-gray-600">
                Patient Directory
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Mange And Track Patient Information
              </p>
            </div>

            <div className="flex gap-5">
              <button className="h-11 rounded-full border border-gray-300 px-8 text-sm text-gray-500">
                ⇩ &nbsp; Export
              </button>

              <button className="h-11 rounded-full bg-[#0922b8] px-7 text-sm text-white">
                ⊕ &nbsp; Add Patient
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="mt-9 overflow-hidden">
            <div className="grid grid-cols-[1fr_1.5fr_1.3fr_1fr_1.2fr_1.2fr] bg-[#f7f8fc] px-8 py-4 text-xs uppercase text-gray-500">
              <span>PATIENT ID</span>
              <span>NAME</span>
              <span>AGE/GENDER</span>
              <span>Blood Group</span>
              <span>LAST VISIT</span>
              <span>STATUS</span>
            </div>

            <div>
              {patients.map((patient) => (
                <div
                  key={patient.id}
                  className="grid min-h-[105px] grid-cols-[1fr_1.5fr_1.3fr_1fr_1.2fr_1.2fr] items-center border-b border-gray-100 px-8 text-sm"
                >
                  <span className="text-gray-400">{patient.id}</span>

                  <div>
                    <p className="font-semibold text-gray-600">
                      {patient.name}
                    </p>
                    <p className="text-sm text-gray-400">
                      {patient.phone}
                    </p>
                  </div>

                  <span className="text-gray-400">
                    {patient.ageGender}
                  </span>

                  <span className="font-semibold text-gray-500">
                    {patient.blood}
                  </span>

                  <span className="text-gray-400">
                    {patient.visit}
                  </span>

                  <span
                    className={`rounded-lg px-5 py-2 text-center text-xs ${
                      statusStyles[patient.status]
                    }`}
                  >
                    {patient.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}