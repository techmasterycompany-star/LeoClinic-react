import DoctorLayout from "../../components/doctor/DoctorLayout";

const requests = [
  {
    name: "Franklin Gutkow III",
    time: "4:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "Waiting",
  },
  {
    name: "Marie Jaskolski",
    time: "5:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "Accept",
  },
  {
    name: "Jackie Larkin",
    time: ".",
    date: ".",
    type: "Online",
    state: "Pick A Slot",
  },
  {
    name: "Jeanne Schulist",
    time: "7:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "Accept",
  },
  {
    name: "Paula Wilkinson",
    time: "8:30 Pm",
    date: "28 jul 2026",
    type: "In the clinic",
    state: "Pick A Slot",
  },
];

function Request() {
  return (
    <DoctorLayout>
      <div className="min-h-screen bg-white">
        <div className="bg-[#F7F8FC] px-6 lg:px-8 py-7">
          <div className="flex items-center justify-between gap-5">
            <div>
              <h1 className="text-[30px] font-bold text-[#4C515D]">
                Patient
              </h1>
              <p className="text-sm text-[#7D8490] mt-1">
                Welcome back, Dr.Sarah Johnson
              </p>
            </div>

            <div className="flex items-center gap-5">
              <div className="hidden md:flex w-[330px] h-12 bg-white rounded-full border border-[#E3E5EA] items-center px-5">
                <span className="text-xl text-[#A4AAB5]">⌕</span>
                <span className="text-sm text-[#A4AAB5] ml-3">
                  Search by name .
                </span>
              </div>

              <button className="w-12 h-12 bg-white rounded-full shadow-sm text-xl text-[#777E89]">
                ♧
              </button>

              <div className="hidden sm:flex h-12 px-5 rounded-full bg-white items-center gap-3 min-w-[180px]">
                <div className="w-8 h-8 rounded-full bg-[#E6E6E6] flex items-center justify-center text-xs">
                  S
                </div>
                <span className="text-sm text-[#858B96]">
                  Dr.Sarah Johnson
                </span>
                <span className="ml-auto text-[#8B919B]">⌄</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[1fr_325px]">
          <div className="px-6 lg:px-8 py-8">
            <h2 className="text-[28px] font-semibold text-[#505560]">
              My requests
            </h2>

            <p className="text-sm text-[#727985] mt-2 mb-7">
              View and manage all requests in the system
            </p>

            <div className="overflow-x-auto">
              <div className="min-w-[760px]">
                <div className="grid grid-cols-[1.3fr_1fr_1fr_1.1fr_.8fr_.5fr] bg-[#F7F8FC] px-3 py-3 text-xs text-[#707783]">
                  <span>Patient Name</span>
                  <span>Time Visit</span>
                  <span>Date</span>
                  <span>Type</span>
                  <span>State</span>
                  <span>Action</span>
                </div>

                {requests.map((request) => (
                  <div
                    key={request.name}
                    className="grid grid-cols-[1.3fr_1fr_1fr_1.1fr_.8fr_.5fr] items-center px-3 py-5 min-h-[72px]"
                  >
                    <span className="text-sm text-[#9096A2]">
                      {request.name}
                    </span>

                    <span className="text-sm text-[#9096A2]">
                      {request.time}
                    </span>

                    <span className="text-sm text-[#9096A2]">
                      {request.date}
                    </span>

                    <span className="text-sm text-[#9096A2]">
                      {request.type}
                    </span>

                    <span>
                      {request.state === "Waiting" && (
                        <span className="inline-flex px-4 py-2 rounded-md bg-[#FFF1D7] text-[#E9A02B] text-xs">
                          Waiting
                        </span>
                      )}

                      {request.state === "Accept" && (
                        <span className="inline-flex px-4 py-2 rounded-md bg-[#DCF3E7] text-[#07965D] text-xs">
                          Accept
                        </span>
                      )}

                      {request.state === "Pick A Slot" && (
                        <button className="text-sm font-semibold text-[#1026B8]">
                          Pick A Slot
                        </button>
                      )}
                    </span>

                    <button className="w-8 h-8 rounded-lg bg-[#FFE7E9] text-[#FF4B55] text-sm">
                      ♧
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 mt-8">
              <button className="px-5 h-7 rounded-full bg-[#E9ECFA] text-xs text-[#777E8C]">
                ‹ &nbsp; Previous
              </button>

              <span className="text-xs text-[#B1B5BE]">1</span>

              <button className="px-6 h-7 rounded-full bg-[#1026B8] text-white text-xs">
                Next &nbsp; ›
              </button>
            </div>
          </div>

          <aside className="bg-gradient-to-b from-white via-[#E7E8F3] to-[#1026B8] px-6 py-8 min-h-[700px]">
            <h2 className="text-base font-semibold text-[#353A45] mb-6">
              Notifications
            </h2>

            <div className="border border-[#1026B8] rounded-[24px] p-5 bg-white/20">
              <h3 className="text-base font-semibold text-[#3D424D]">
                Next Appointment
              </h3>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-9 h-9 rounded-full border border-[#6F7480] flex items-center justify-center">
                  ♙
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#3D424D]">
                    Patient
                  </p>
                  <p className="text-xs text-[#9A9FA9] mt-1">
                    Patient Name
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 text-xs text-[#656B76]">
                <span className="text-lg">▣</span>
                <span>Thursday<br />27/8/2026</span>
                <span className="h-7 w-px bg-[#BFC2CA]" />
                <span>8:00 PM</span>
              </div>

              <button className="w-full h-10 mt-6 rounded-full bg-[#1026B8] text-white text-sm">
                Join Now
              </button>
            </div>

            <div className="border border-[#1026B8] rounded-[24px] p-5 bg-white/10 mt-6">
              <h3 className="text-base font-semibold text-[#3D424D]">
                Confirm Request
              </h3>

              <div className="flex items-center gap-4 mt-6">
                <div className="w-9 h-9 rounded-full border border-[#6F7480] flex items-center justify-center">
                  ♙
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#3D424D]">
                    Patient
                  </p>
                  <p className="text-xs text-[#9A9FA9] mt-1">
                    Patient Name
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 text-xs text-[#656B76]">
                <span className="text-lg">▣</span>
                <span>Thursday<br />27/8/2026</span>
                <span className="h-7 w-px bg-[#BFC2CA]" />
                <span>8:00 PM</span>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 h-10 rounded-full bg-[#00A56A] text-white text-sm">
                  ✓ &nbsp; Accept
                </button>

                <button className="flex-1 h-10 rounded-full border border-white text-white text-sm">
                  × &nbsp; Decline
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <div className="text-7xl">🩺</div>
            </div>
          </aside>
        </div>
      </div>
    </DoctorLayout>
  );
}

export default Request;