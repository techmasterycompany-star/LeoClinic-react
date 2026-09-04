import React from "react";
import DrDashboardSidebar from "../../components/DrDashboardSidebar";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";

const vitals = [
  ["♡", "118/76", "mmHg", "Blood pressure", "Normal"],
  ["⌁", "72", "bpm", "Pulse", "Regular"],
  ["≋", "98", "%", "SpO₂", "Room air"],
  ["◯", "94", "mg/dL", "Blood glucose", "Fasting"],
  ["▣", "6", "/10", "Pain score", "Upper right"],
  ["♨", "36.7", "°C", "Temperature", "Afebrile"],
];

const history = [
  ["Asthma", "Since 2012", "Controlled"],
  ["Iron-deficiency anemia", "Since 2020", "Monitored"],
  ["Bruxism", "Since 2023", "Active"],
  ["Smoking", "Since -", "Never"],
  ["Pregnancy", "Since -", "No"],
];

const files = ["Periapical X-ray", "Panormic X-ray", "Cpct Scan", "TMJ X-ray"];

const notes = [
  "Sensitivity on upper right molar, reacts to cold. Percussion positive on 16, cold test lingering — pulpitis confirmed.",
  '"Vitals stable (BP: 118/76, HR: 72 bpm, Temp: 36.7°C). Active bruxism noted; discussed nightguard options and referred for further wear."',
  "Allergic history with Cataflam and penicillin — prescribe paracetamol + clindamycin instead.",
];

function Section({ title, children, className = "" }) {
  return (
    <section
      className={`rounded-3xl border border-gray-200 bg-white p-5 ${className}`}
    >
      {children}
    </section>
  );
}

export default function PatientInfo() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8F9FC]">
      <DrDashboardSidebar />

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AdminDrProfileNavbar />

        <div className="flex-1 overflow-y-auto bg-[#fafbfe]">
          <div className="p-7">
            <div className="grid grid-cols-[1.7fr_1fr] gap-5">
              {/* LEFT */}
              <div className="space-y-5">
                {/* Patient Profile */}
                <Section>
                  <div className="grid grid-cols-[190px_1fr] gap-7">
                    <div className="border-r border-gray-200 pr-6 text-center">
                      <div className="mx-auto h-20 w-20 rounded-full bg-gray-200" />

                      <h3 className="mt-3 text-xs font-semibold text-gray-600">
                        Irma Schamberger
                      </h3>

                      <p className="mt-1 text-[10px] text-gray-400">
                        01546910056
                      </p>

                      <p className="mt-5 text-xs text-gray-500">Appointment</p>

                      <div className="mt-4 flex justify-center gap-8">
                        <div>
                          <p className="text-lg font-semibold">5</p>
                          <p className="text-[9px] text-gray-400">past</p>
                        </div>

                        <div>
                          <p className="text-lg font-semibold">1</p>
                          <p className="text-[9px] text-gray-400">Upcoming</p>
                        </div>
                      </div>

                      <button className="mt-5 h-10 w-full rounded-full bg-[#0922b8] text-xs font-semibold text-white">
                        Send Message
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                      {[
                        ["Gender", "Female"],
                        ["Birthday", "Oct 12 ,1999"],
                        ["Number", "(0106) 6181852"],
                        ["Address", "004 Strosin Course"],
                        ["City", "Cairo"],
                        ["Registration Date", "Oct 12 ,1999"],
                      ].map(([label, value]) => (
                        <div key={label} className="border-b pb-3">
                          <p className="text-xs text-gray-400">{label}</p>
                          <p className="mt-2 text-xs font-semibold text-gray-600">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Section>

                {/* Vitals */}
                <Section>
                  <div className="flex justify-between">
                    <h2 className="text-xl font-semibold text-gray-600">
                      Vitals
                    </h2>

                    <span className="text-[10px] text-gray-400">
                      Recorded 26 Nov '25 · 08:52
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-4">
                    {vitals.map(([icon, value, unit, title, status]) => (
                      <div key={title} className="rounded-2xl bg-[#f0f1f6] p-4">
                        <div className="flex items-center gap-2">
                          <span>{icon}</span>
                          <span className="font-semibold text-gray-600">
                            {value}
                          </span>
                          <span className="text-xs text-gray-400">{unit}</span>
                        </div>

                        <p className="mt-3 text-[10px] text-gray-500">
                          {title}
                        </p>

                        <p className="mt-1 text-[10px] text-gray-400">
                          {status}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Notes */}
                <Section>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-600">
                      Notes
                    </h2>

                    <button className="text-xs text-gray-500">See All</button>
                  </div>

                  <div className="mt-4 space-y-3">
                    {notes.map((note, index) => (
                      <div key={index} className="rounded-xl bg-[#f0f1f6] p-4">
                        <p className="text-xs font-medium leading-relaxed text-blue-600">
                          {note}
                        </p>

                        <p className="mt-2 text-[9px] text-gray-400">
                          Drg. Adam H. · {20 - index * 3} Nov '25
                        </p>
                      </div>
                    ))}
                  </div>

                  <button className="mt-4 h-10 w-full rounded-full bg-[#0922b8] text-xs text-white">
                    ✎ &nbsp; Add Note
                  </button>
                </Section>
              </div>

              {/* RIGHT */}
              <div className="space-y-5">
                {/* Alerts */}
                <Section>
                  <h2 className="text-xl text-gray-600">Clinical alerts</h2>

                  <div className="mt-4 space-y-2">
                    {[
                      ["Allergy", "Cataflam (diclofenac) — severe rash"],
                      ["Allergy", "Penicillin - anaphylaxis,2021"],
                      ["Precaution", "Mild asthma - keep inhaler in reach"],
                      [
                        "Bleeding",
                        "On Low -dose aspirin, check INR before surgery",
                      ],
                    ].map(([type, text]) => (
                      <div
                        key={text}
                        className="rounded-xl border border-red-400 bg-red-50 p-3"
                      >
                        <div className="flex gap-3">
                          <span className="text-red-500">△</span>

                          <div>
                            <p className="text-xs font-semibold text-red-500">
                              {type}
                            </p>

                            <p className="text-[10px] text-gray-600">{text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Medical History */}
                <Section>
                  <h2 className="text-xl text-gray-600">Medical history</h2>

                  <div className="mt-4">
                    {history.map(([name, date, status]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between border-b py-3"
                      >
                        <div>
                          <p className="text-xs font-semibold text-gray-600">
                            {name}
                          </p>
                          <p className="text-[9px] text-gray-400">{date}</p>
                        </div>

                        <span className="rounded-full bg-gray-100 px-5 py-1 text-[10px] font-semibold text-gray-600">
                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                </Section>

                {/* Files */}
                <Section>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-600">
                      Files / Documents
                    </h2>

                    <button className="text-xs text-blue-700">
                      ＋ Add Files
                    </button>
                  </div>

                  <div className="mt-4 space-y-2">
                    {files.map((file) => (
                      <div
                        key={file}
                        className="flex items-center rounded-xl border border-gray-200 px-4 py-3"
                      >
                        <span className="text-gray-500">▤</span>

                        <span className="ml-3 flex-1 text-xs text-gray-600">
                          {file}
                        </span>

                        <button className="text-blue-600">↓</button>

                        <button className="ml-4 text-red-500">♧</button>
                      </div>
                    ))}
                  </div>
                </Section>
              </div>
            </div>

            {/* Treatment Timeline */}
            <Section className="mt-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-600">
                  Treatment timeline
                </h2>

                <button className="rounded-full bg-[#0922b8] px-6 py-2 text-xs text-white">
                  ＋ Schedule
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  ["26", "Nov '25", "Open Access – tooth 16"],
                  ["12", "Des '25", "Root Canal Prep"],
                  ["04", "Jan '26", "Crown Fitting – tooth 16"],
                ].map(([day, month, title]) => (
                  <div
                    key={title}
                    className="flex items-center rounded-2xl border border-gray-200 p-4"
                  >
                    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-[#0922b8] text-white">
                      <span className="text-xl font-bold">{day}</span>
                      <span className="text-xs">{month}</span>
                    </div>

                    <div className="ml-5">
                      <p className="text-xs font-semibold text-gray-600">
                        {title}
                      </p>

                      <p className="mt-2 text-[10px] text-gray-400">
                        Root Canal Treatment · 09:00 – 10:00
                      </p>

                      <p className="text-[10px] text-gray-400">
                        Drg. Adam H. with Jessica
                      </p>
                    </div>

                    <span className="ml-auto text-blue-600">▣</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}
