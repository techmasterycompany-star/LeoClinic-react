import { useState } from "react";
import DoctorLayout from "../../components/doctor/DoctorLayout";

const dates = [
  { day: "Today", date: "", slots: "No slots available" },
  { day: "Tomorrow", date: "10 Feb Tuesday", slots: "" },
  { day: "Sat. 19 Mar", date: "", slots: "16 slots available" },
  { day: "Sat. 20 Mar", date: "", slots: "No slots available" },
];

const times = [
  "09:00 AM",
  "09:00 AM",
  "09:00 AM",
  "09:00 AM",
  "09:00 AM",
  "09:00 AM",
];

function Slot() {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(2);

  return (
    <DoctorLayout>
      <div className="min-h-screen bg-white">
        <div className="bg-[#F7F8FC] px-6 lg:px-8 py-7">
          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
            <div>
              <h1 className="text-[30px] font-bold text-[#4C515D]">
                Book New Appointment
              </h1>
              <p className="text-sm text-[#8C929E] mt-1">Pick a Slot</p>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-full xl:w-[330px] h-12 bg-white rounded-full border border-[#E3E5EA] flex items-center px-5">
                <span className="text-xl text-[#A4AAB5]">⌕</span>
                <span className="text-sm text-[#A4AAB5] ml-3">
                  Search by name .
                </span>
              </div>

              <button className="w-12 h-12 bg-white rounded-full shadow-sm text-xl text-[#777E89]">
                ♧
              </button>

              <div className="h-12 px-5 rounded-full bg-white flex items-center gap-3 min-w-[180px]">
                <div className="w-8 h-8 rounded-full bg-[#E5E5E5] flex items-center justify-center text-xs">
                  S
                </div>
                <span className="text-sm text-[#858B96]">
                  Sara Ibrahim
                </span>
                <span className="ml-auto text-[#8B919B]">⌄</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 lg:px-8 py-8">
          <div className="flex justify-end mb-5">
            <button className="h-10 px-6 rounded-full bg-[#1026B8] text-white text-sm font-semibold">
              ⊕ &nbsp; Add New Appointment
            </button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1.3fr_.8fr] gap-5">
            <div className="bg-[#1026B8] rounded-[30px] p-7 text-white">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-7">
                <div className="text-center border-b md:border-b-0 md:border-r border-white/70 pb-6 md:pb-0">
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#E6E8EC] flex items-center justify-center text-3xl">
                    👩
                  </div>

                  <h2 className="font-semibold text-sm mt-4">
                    Irma Schamberger
                  </h2>

                  <p className="text-xs mt-2">01546910056</p>

                  <p className="text-sm mt-7">Appointment</p>

                  <div className="flex justify-center items-center gap-8 mt-5">
                    <div>
                      <p className="text-lg font-semibold">5</p>
                      <p className="text-xs">past</p>
                    </div>

                    <div className="h-8 w-px bg-white" />

                    <div>
                      <p className="text-lg font-semibold">1</p>
                      <p className="text-xs">Upcoming</p>
                    </div>
                  </div>

                  <button className="mt-6 h-10 w-full max-w-[210px] rounded-full bg-white text-[#454A55] text-sm">
                    Send a message
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <p className="text-sm">Gender</p>
                    <p className="font-medium text-sm mt-2">Female</p>
                    <div className="h-px bg-white mt-3" />
                  </div>

                  <div>
                    <p className="text-sm">Birthday</p>
                    <p className="font-medium text-sm mt-2">
                      Oct 12 ,1999
                    </p>
                    <div className="h-px bg-white mt-3" />
                  </div>

                  <div>
                    <p className="text-sm">Number</p>
                    <p className="font-medium text-sm mt-2">
                      (0106) 6181852
                    </p>
                    <div className="h-px bg-white mt-3" />
                  </div>

                  <div>
                    <p className="text-sm">Address</p>
                    <p className="font-medium text-sm mt-2">
                      004 Strosin Course
                    </p>
                    <div className="h-px bg-white mt-3" />
                  </div>

                  <div>
                    <p className="text-sm">City</p>
                    <p className="font-medium text-sm mt-2">Cairo</p>
                    <div className="h-px bg-white mt-3" />
                  </div>

                  <div>
                    <p className="text-sm">Registration Date</p>
                    <p className="font-medium text-sm mt-2">
                      Oct 12 ,1999
                    </p>
                    <div className="h-px bg-white mt-3" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F7FA] rounded-[28px] p-6">
              {[
                ["Reason for Visit", "Chest pain and shortness of breath."],
                ["Symptoms", "Chest pain\nDizziness"],
                ["Duration of Symptoms", "Two Weak"],
                [
                  "Notes",
                  "Type 2 Diabetes\nTooth extraction under general anesthesia (2022)\nAllergic to Penicillin",
                ],
                ["Type", "Follow - Up"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="py-2 border-b border-[#E2E4E9] last:border-b-0"
                >
                  <p className="text-xs text-[#A0A6B1]">{title}</p>
                  <p className="text-xs text-[#454A55] mt-2 whitespace-pre-line leading-5">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border border-[#DDE0E6] rounded-[30px] p-6 overflow-x-auto">
            <h2 className="text-lg font-semibold text-[#4A4F5A] mb-8">
              Please book a slot and confirm the appointment
            </h2>

            <div className="min-w-[850px]">
              <div className="grid grid-cols-4 gap-5">
                {dates.map((date, index) => (
                  <button
                    key={date.day}
                    onClick={() => setSelectedDate(index)}
                    className={`text-left pb-3 border-b ${
                      selectedDate === index
                        ? "border-[#1026B8]"
                        : "border-transparent"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        selectedDate === index
                          ? "text-[#1026B8]"
                          : "text-[#535966]"
                      }`}
                    >
                      {date.day}
                    </p>

                    {date.date && (
                      <p className="text-xs text-[#1026B8] mt-2">
                        {date.date}
                      </p>
                    )}

                    {date.slots && (
                      <p className="text-xs text-[#858B96] mt-2">
                        {date.slots}
                      </p>
                    )}
                  </button>
                ))}
              </div>

              {[1, 2].map((row) => (
                <div
                  key={row}
                  className="grid grid-cols-[150px_repeat(6,1fr)] items-center gap-5 mt-8"
                >
                  <p className="text-base font-semibold text-[#111]">
                    Book a slot
                  </p>

                  {times.map((time, index) => (
                    <button
                      key={`${row}-${index}`}
                      onClick={() => setSelectedSlot(index)}
                      className={`h-11 rounded-full border text-sm font-semibold ${
                        index === 0 || index === 5
                          ? "bg-[#E7EAF9] border-[#E7EAF9] text-[#B8BDCE]"
                          : selectedSlot === index
                          ? "bg-[#1026B8] border-[#1026B8] text-white"
                          : "bg-white border-[#DCE0E7] text-[#6C727F]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-6">
            <button className="h-12 px-10 rounded-full border border-[#DCE0E6] text-sm text-[#555B66]">
              Cancel
            </button>

            <button className="h-12 px-12 rounded-full bg-[#1026B8] text-white text-sm">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </DoctorLayout>
  );
}

export default Slot;