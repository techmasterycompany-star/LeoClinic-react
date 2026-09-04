import { useState } from "react";
import { useState } from "react";
import PatientSidebar from "../../components/PatientDashboardSidebar";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";
const conversations = [
  {
    id: 1,
    name: "Dr. Sarah Legend",
    specialty: "Dentist",
    message: "Your appointment is confirmed.",
    time: "10:30 AM",
    unread: 2,
    image: "/images/patient/doctor-sarah-message.png",
  },
  {
    id: 2,
    name: "Dr. Ben Affleck",
    specialty: "Military psychologist",
    message: "Please bring your previous reports.",
    time: "Yesterday",
    unread: 1,
    image: "/images/patient/doctor-ben-affleck.png",
  },
  {
    id: 3,
    name: "Dr. Sam Wallfolk",
    specialty: "Clinical psychologist",
    message: "See you at your next visit.",
    time: "Monday",
    unread: 0,
    image: "/images/patient/doctor-sam-wallfolk.png",
  },
];

function Message() {
  const [selected, setSelected] = useState(conversations[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8F9FC]">
      <PatientSidebar />
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AdminDrProfileNavbar />
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-screen ...">
            <div className="max-w-[1200px] mx-auto">
              <h1 className="text-3xl font-bold text-[#292D38] mb-8">
                Messages
              </h1>

              <div className="bg-white border border-[#E9ECF3] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-[360px_1fr] min-h-[650px]">
                <div className="border-r border-[#E9ECF3]">
                  <div className="p-5 border-b border-[#E9ECF3]">
                    <input
                      placeholder="Search messages"
                      className="w-full h-11 rounded-xl bg-[#F7F8FC] border border-[#E5E8EF] px-4 text-sm outline-none"
                    />
                  </div>

                  {conversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      type="button"
                      onClick={() => setSelected(conversation)}
                      className={`w-full text-left p-5 border-b border-[#F0F1F5] flex gap-4 ${
                        selected.id === conversation.id
                          ? "bg-[#F2F4FF]"
                          : "bg-white"
                      }`}
                    >
                      <img
                        src={conversation.image}
                        alt={conversation.name}
                        className="w-11 h-11 rounded-full object-cover shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between gap-2">
                          <p className="text-sm font-semibold text-[#292D38] truncate">
                            {conversation.name}
                          </p>

                          <span className="text-[11px] text-[#9AA1AE]">
                            {conversation.time}
                          </span>
                        </div>

                        <p className="text-xs text-[#8A909C] mt-1">
                          {conversation.specialty}
                        </p>

                        <p className="text-xs text-[#7B818C] mt-2 truncate">
                          {conversation.message}
                        </p>
                      </div>

                      {conversation.unread > 0 && (
                        <span className="w-5 h-5 rounded-full bg-[#1026B8] text-white text-[10px] flex items-center justify-center">
                          {conversation.unread}
                        </span>
                      )}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col">
                  <div className="p-6 border-b border-[#E9ECF3] flex items-center gap-4">
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                      <h2 className="font-semibold text-[#292D38]">
                        {selected.name}
                      </h2>
                      <p className="text-xs text-[#8A909C] mt-1">
                        {selected.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 p-7 space-y-5">
                    <div className="flex">
                      <div className="max-w-[70%] bg-[#F1F3F7] rounded-2xl rounded-tl-none p-4">
                        <p className="text-sm text-[#4B4F59]">
                          Hello, how can I help you today?
                        </p>
                        <span className="text-[10px] text-[#9AA1AE] mt-2 block">
                          10:25 AM
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-[70%] bg-[#1026B8] text-white rounded-2xl rounded-tr-none p-4">
                        <p className="text-sm">
                          I would like to ask about my upcoming appointment.
                        </p>
                        <span className="text-[10px] text-[#DCE2FF] mt-2 block">
                          10:28 AM
                        </span>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="max-w-[70%] bg-[#F1F3F7] rounded-2xl rounded-tl-none p-4">
                        <p className="text-sm text-[#4B4F59]">
                          Your appointment is confirmed. You can come at the
                          scheduled time.
                        </p>
                        <span className="text-[10px] text-[#9AA1AE] mt-2 block">
                          10:30 AM
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 border-t border-[#E9ECF3] flex gap-3">
                    <input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write a message..."
                      className="flex-1 h-12 rounded-xl bg-[#F7F8FC] border border-[#E5E8EF] px-4 text-sm outline-none"
                    />

                    <button
                      type="button"
                      onClick={() => setMessage("")}
                      className="h-12 px-6 rounded-xl bg-[#1026B8] text-white text-sm font-medium"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Message;
