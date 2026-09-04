import { useState } from "react";
import DrDashboardSidebar from "../../components/DrDashboardSidebar";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";

const days = [
  { day: "Mon", date: "18" },
  { day: "Tue", date: "19" },
  { day: "Wed", date: "20" },
  { day: "Thu", date: "21" },
  { day: "Fri", date: "22" },
  { day: "Sat", date: "23" },
  { day: "Sun", date: "24" },
];

const appointments = [
  {
    time: "09:00 AM",
    patient: "Robert Fox",
    type: "In Clinic",
    status: "Confirmed",
  },
  {
    time: "10:30 AM",
    patient: "Jane Cooper",
    type: "Online",
    status: "Confirmed",
  },
  {
    time: "12:00 PM",
    patient: "Cody Fisher",
    type: "In Clinic",
    status: "Pending",
  },
  {
    time: "02:30 PM",
    patient: "Esther Howard",
    type: "Online",
    status: "Confirmed",
  },
  {
    time: "04:00 PM",
    patient: "Kristin Watson",
    type: "In Clinic",
    status: "Pending",
  },
];

function Schedule() {
  const [selectedDay, setSelectedDay] = useState("18");

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8F9FC]">
      <DrDashboardSidebar />
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AdminDrProfileNavbar />
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-screen bg-white p-6 lg:p-10">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
                <div>
        
                </div>

                <button
                  type="button"
                  className="h-11 px-6 rounded-full bg-[#1026B8] text-white text-sm font-medium"
                >
                  + Add Availability
                </button>
              </div>

              <div className="flex items-center justify-between mb-5">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full border border-[#E4E6EB] flex items-center justify-center text-[#68707D]"
                >
                  ‹
                </button>

                <h2 className="text-lg font-semibold text-[#3F444F]">
                  August 2026
                </h2>

                <button
                  type="button"
                  className="w-10 h-10 rounded-full border border-[#E4E6EB] flex items-center justify-center text-[#68707D]"
                >
                  ›
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-7">
                {days.map((item) => (
                  <button
                    key={item.date}
                    type="button"
                    onClick={() => setSelectedDay(item.date)}
                    className={`rounded-xl py-4 transition ${
                      selectedDay === item.date
                        ? "bg-[#1026B8] text-white"
                        : "bg-[#F7F8FC] text-[#656C78]"
                    }`}
                  >
                    <p className="text-xs">{item.day}</p>
                    <p className="text-lg font-semibold mt-1">{item.date}</p>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-[1fr_330px] gap-6">
                <div className="border border-[#E4E7ED] rounded-2xl overflow-hidden">
                  <div className="p-6 border-b border-[#E4E7ED] flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-semibold text-[#3F444F]">
                        Monday, August 18
                      </h2>
                      <p className="text-xs text-[#969CAA] mt-1">
                        5 appointments scheduled
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-sm font-medium text-[#1026B8]"
                    >
                      Today
                    </button>
                  </div>

                  <div>
                    {appointments.map((appointment) => (
                      <div
                        key={`${appointment.time}-${appointment.patient}`}
                        className="grid grid-cols-[90px_1fr_auto] items-center gap-5 p-5 border-b border-[#F0F1F4] last:border-b-0"
                      >
                        <p className="text-xs font-medium text-[#727986]">
                          {appointment.time}
                        </p>

                        <div>
                          <h3 className="text-sm font-semibold text-[#414650]">
                            {appointment.patient}
                          </h3>
                          <p className="text-xs text-[#969CAA] mt-1">
                            {appointment.type}
                          </p>
                        </div>

                        <span
                          className={`px-4 py-2 rounded-full text-[11px] ${
                            appointment.status === "Confirmed"
                              ? "bg-[#DDF3EA] text-[#07935A]"
                              : "bg-[#FFF0D2] text-[#D99100]"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-[#E4E7ED] rounded-2xl p-6 h-fit">
                  <h2 className="text-lg font-semibold text-[#414650]">
                    Working Hours
                  </h2>

                  <p className="text-xs text-[#969CAA] mt-1 mb-6">
                    Your availability for this day
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-[#F7F8FC]">
                      <div>
                        <p className="text-sm font-medium text-[#414650]">
                          Morning
                        </p>
                        <p className="text-xs text-[#969CAA] mt-1">
                          09:00 AM - 12:00 PM
                        </p>
                      </div>

                      <span className="w-2.5 h-2.5 rounded-full bg-[#07935A]" />
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-xl bg-[#F7F8FC]">
                      <div>
                        <p className="text-sm font-medium text-[#414650]">
                          Afternoon
                        </p>
                        <p className="text-xs text-[#969CAA] mt-1">
                          02:00 PM - 05:00 PM
                        </p>
                      </div>

                      <span className="w-2.5 h-2.5 rounded-full bg-[#07935A]" />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full h-11 mt-6 rounded-full border border-[#1026B8] text-[#1026B8] text-sm font-medium"
                  >
                    Edit Working Hours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Schedule;
