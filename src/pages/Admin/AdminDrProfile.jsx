import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Sidebar from "../../components/AdminDashboardSidebar1";
import Navbar from "../../components/AdminDrProfileNavbar";
import DrProfileCard from "../../assets/drProfile.png";

import CompletedIcon from "../../assets/completed.png";
import PatientsIcon from "../../assets/SidebarIcons/patients.png";
import ReviewsIcon from "../../assets/reviews.png";
import AttendanceIcon from "../../assets/attendance.png";
import DetailsIcon from "../../assets/DetailsIcon.png";
import ChevronLeftIcon from "../../assets/leftArrow.png";
import ChevronRightIcon from "../../assets/circle-arrow-left-01.png";

const DAYS = [
  { day: "Sat", date: 1 },
  { day: "sun", date: 2 },
  { day: "Mon", date: 3 },
  { day: "Tue", date: 4 },
];

const APPOINTMENTS_BY_DATE = {
  1: [
    {
      name: "Omar Khaled",
      note: "Routine Checkup",
      time: "10:00 Am",
    },
    {
      name: "Lina Nasser",
      note: "Follow-up Visit",
      time: "11:30 Am",
    },
  ],
  2: [],
  3: [
    {
      name: "Sarah Ali",
      note: "Chest Pain Evaluation",
      time: "9:00 Am",
    },
    {
      name: "Sarah Ali",
      note: "Chest Pain Evaluation",
      time: "9:00 Am",
    },
    {
      name: "Sarah Ali",
      note: "Chest Pain Evaluation",
      time: "9:00 Am",
    },
    {
      name: "Sarah Ali",
      note: "Chest Pain Evaluation",
      time: "9:00 Am",
    },
  ],
  4: [
    {
      name: "Mona Adel",
      note: "ECG Review",
      time: "1:00 Pm",
    },
  ],
};

const DOCTORS = [
  {
    id: "DOC-1042",
    name: "Dr. Terry Wallis",
    specialty: "Interventional Cardiologist",
    department: "Cardiology",
    phone: "+20 100 123 4567",
    status: "Available",
    experience: "8 Years",
    joinDate: "21 Sep 2021",
    email: "DR.RY@hospital.com",
  },
  {
    id: "DOC-1043",
    name: "Dr. Amina Yousef",
    specialty: "Interventional Cardiologist",
    department: "Dermatology",
    phone: "+20 100 123 4567",
    status: "Busy",
    experience: "9 Years",
    joinDate: "21 Sep 2021",
    email: "amina.yousef@hospital.com",
  },
  {
    id: "DOC-1044",
    name: "Dr. Karim Adel",
    specialty: "Interventional Cardiologist",
    department: "Orthopedics",
    phone: "+20 100 123 4567",
    status: "On Leave",
    experience: "10 Years",
    joinDate: "21 Sep 2021",
    email: "karim.adel@hospital.com",
  },
  {
    id: "DOC-1045",
    name: "Dr. Salma Nabil",
    specialty: "Interventional Cardiologist",
    department: "Pediatrics",
    phone: "+20 100 123 4567",
    status: "Off Duty",
    experience: "11 Years",
    joinDate: "21 Sep 2021",
    email: "salma.nabil@hospital.com",
  },
  {
    id: "DOC-1046",
    name: "Dr. Omar Farouk",
    specialty: "Interventional Cardiologist",
    department: "Cardiology",
    phone: "+20 100 123 4567",
    status: "Available",
    experience: "12 Years",
    joinDate: "21 Sep 2021",
    email: "omar.farouk@hospital.com",
  },
  {
    id: "DOC-1047",
    name: "Dr. Nour Hassan",
    specialty: "Interventional Cardiologist",
    department: "Dermatology",
    phone: "+20 100 123 4567",
    status: "Busy",
    experience: "13 Years",
    joinDate: "21 Sep 2021",
    email: "nour.hassan@hospital.com",
  },
  {
    id: "DOC-1048",
    name: "Dr. Youssef Ali",
    specialty: "Interventional Cardiologist",
    department: "Orthopedics",
    phone: "+20 100 123 4567",
    status: "On Leave",
    experience: "14 Years",
    joinDate: "21 Sep 2021",
    email: "youssef.ali@hospital.com",
  },
  {
    id: "DOC-1049",
    name: "Dr. Mariam Sami",
    specialty: "Interventional Cardiologist",
    department: "Pediatrics",
    phone: "+20 100 123 4567",
    status: "Off Duty",
    experience: "15 Years",
    joinDate: "21 Sep 2021",
    email: "mariam.sami@hospital.com",
  },
  {
    id: "DOC-1050",
    name: "Dr. Hassan Tarek",
    specialty: "Interventional Cardiologist",
    department: "Cardiology",
    phone: "+20 100 123 4567",
    status: "Available",
    experience: "16 Years",
    joinDate: "21 Sep 2021",
    email: "hassan.tarek@hospital.com",
  },
  {
    id: "DOC-1051",
    name: "Dr. Laila Fahmy",
    specialty: "Interventional Cardiologist",
    department: "Dermatology",
    phone: "+20 100 123 4567",
    status: "Busy",
    experience: "17 Years",
    joinDate: "21 Sep 2021",
    email: "laila.fahmy@hospital.com",
  },
  {
    id: "DOC-1052",
    name: "Dr. Ziad Kamal",
    specialty: "Interventional Cardiologist",
    department: "Orthopedics",
    phone: "+20 100 123 4567",
    status: "On Leave",
    experience: "8 Years",
    joinDate: "21 Sep 2021",
    email: "ziad.kamal@hospital.com",
  },
  {
    id: "DOC-1053",
    name: "Dr. Rania Adly",
    specialty: "Interventional Cardiologist",
    department: "Pediatrics",
    phone: "+20 100 123 4567",
    status: "Off Duty",
    experience: "9 Years",
    joinDate: "21 Sep 2021",
    email: "rania.adly@hospital.com",
  },
];

function InfoItem({ label, value }) {
  return (
    <div className="flex flex-col gap-[2px] pb-2 border-b border-[#EEF0F3] w-full">
      <span className="font-['IBM_Plex_Sans'] text-[12px] leading-[20px] text-[#A7ABB5]">
        {label}
      </span>

      <span className="font-['IBM_Plex_Sans'] text-[14px] font-medium leading-[20px] text-[#4D5260] whitespace-nowrap">
        {value}
      </span>
    </div>
  );
}

function StatCard({ icon, iconBg, label, value }) {
  return (
    <div className="flex-1 h-full rounded-[24px] border border-[#DFE1E6] px-6 flex items-center gap-4 bg-white">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        <img
          src={icon}
          alt=""
          className="w-5 h-5 object-contain"
        />
      </div>

      <div className="flex flex-col gap-[2px]">
        <span className="font-['IBM_Plex_Sans'] text-[13px] text-[#686D7A] whitespace-nowrap">
          {label}
        </span>

        <span className="font-['IBM_Plex_Sans'] text-[18px] font-semibold text-[#161719]">
          {value}
        </span>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="w-full h-[58px] shrink-0 flex items-center justify-between gap-[24px] rounded-[8px] border border-[#EEF0F3] pt-3 pr-4 pb-3 pl-4">
      <div className="flex items-center gap-2">
        <img src={DetailsIcon} alt="" className="w-5 h-5" />

        <span className="font-['IBM_Plex_Sans'] text-[14px] text-[#686D7A]">
          {label}
        </span>
      </div>

      <span className="font-['IBM_Plex_Sans'] text-[14px] font-medium text-[#161719]">
        {value}
      </span>
    </div>
  );
}

function DayTab({ day, date, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`
        w-[101px] h-[70px] shrink-0
        flex flex-col items-center justify-center gap-[2px]
        rounded-[12px] pt-4 pb-4
        font-['IBM_Plex_Sans'] text-[12px]
        transition-colors
        ${
          active
            ? "bg-[#0018A6] text-white"
            : "text-[#A7ABB5] hover:bg-[#F5F6F8]"
        }
      `}
    >
      <span>{day}</span>
      <span className="text-[14px] font-semibold">
        {date}
      </span>
    </button>
  );
}

function PatientRow({ name, note, time }) {
  return (
    <div
      className="w-full h-[74px] shrink-0 flex items-center justify-between gap-[24px] rounded-[8px] p-4 border-l-[3px]"
      style={{ borderLeftColor: "#00875A" }}
    >
      <div className="flex flex-col gap-[2px]">
        <span className="font-['IBM_Plex_Sans'] text-[14px] font-medium text-[#161719]">
          {name}
        </span>

        <span className="font-['IBM_Plex_Sans'] text-[12px] text-[#A7ABB5]">
          {note}
        </span>
      </div>

      <span className="font-['IBM_Plex_Sans'] text-[13px] text-[#686D7A] whitespace-nowrap">
        {time}
      </span>
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[20px] w-[420px] max-w-[90vw] p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-['IBM_Plex_Sans'] text-[16px] font-medium text-[#161719]">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-[#A7ABB5] text-[18px] leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

function DoctorProfile() {
  const { doctorId } = useParams();
  const location = useLocation();

  const selectedDoctor =
    location.state?.doctor ||
    DOCTORS.find((doctor) => doctor.id === doctorId) ||
    DOCTORS[0];

  const [selectedDayIndex, setSelectedDayIndex] = useState(2);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState("");

  const [profile, setProfile] = useState({
    name: selectedDoctor.name,
    specialty: selectedDoctor.specialty,
    phone: selectedDoctor.phone,
    email: selectedDoctor.email,
  });

  const selectedDate = DAYS[selectedDayIndex].date;
  const appointments =
    APPOINTMENTS_BY_DATE[selectedDate] || [];

  const goPrevDay = () => {
    setSelectedDayIndex((i) => Math.max(i - 1, 0));
  };

  const goNextDay = () => {
    setSelectedDayIndex((i) =>
      Math.min(i + 1, DAYS.length - 1)
    );
  };

  const handleProfileSave = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    setProfile({
      name: form.get("name"),
      specialty: form.get("specialty"),
      phone: form.get("phone"),
      email: form.get("email"),
    });

    setIsEditOpen(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!messageText.trim()) return;

    console.log(
      `Sending message to ${profile.name}:`,
      messageText
    );

    setMessageText("");
    setIsMessageOpen(false);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 min-w-0 flex flex-col overflow-hidden bg-white">
        <Navbar />

        <div className="shrink-0 px-6 mt-8">
          <div className="w-[124px] h-[24px] flex items-center gap-[5px] font-['IBM_Plex_Sans'] text-[12px] leading-[24px] text-[#4D5260]">
            <span className="text-[#A7ABB5]">&lt;</span>
            <span>Doctor Profile</span>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6">
          <div className="w-full flex flex-col gap-6 mt-6">
            <div className="w-full h-[431px] shrink-0 rounded-[32px] border border-[#DFE1E6] p-8 bg-white">
              <div className="w-full flex justify-end">
                <span className="w-[72px] h-[30px] flex items-center justify-center rounded-full bg-[#E7F9EF] text-[#1FA959] font-['IBM_Plex_Sans'] text-[12px] font-medium">
                  {selectedDoctor.status}
                </span>
              </div>

              <div className="w-full h-[319px] flex items-start mt-6">
                <div className="w-[282px] h-[319px] shrink-0 flex flex-col items-center">
                  <div className="w-[282px] h-[174px] p-3 flex flex-col items-center gap-[10px]">
                    <img
                      src={DrProfileCard}
                      alt={profile.name}
                      className="w-[96px] h-[96px] rounded-full object-cover"
                    />

                    <div className="w-auto h-[44px] flex flex-col items-center gap-[2px]">
                      <span className="font-['IBM_Plex_Sans'] text-[16px] font-medium leading-[20px] text-[#4D5260] whitespace-nowrap">
                        {profile.name}
                      </span>

                      <span className="font-['IBM_Plex_Sans'] text-[14px] font-normal leading-[24px] text-[#686D7A] whitespace-nowrap">
                        {profile.specialty}
                      </span>
                    </div>
                  </div>

                  <p className="w-[250px] mt-2 text-center font-['IBM_Plex_Sans'] text-[14px] font-normal leading-[24px] text-[#686D7A]">
                    Experienced healthcare professional focused on patient
                    well-being and clinical excellence.
                  </p>

                  <div className="w-[282px] h-[40px] mt-[16px] flex gap-2">
                    <button
                      type="button"
                      onClick={() => setIsEditOpen(true)}
                      className="w-[137px] h-[40px] flex items-center justify-center px-4 rounded-full border border-[#E8EBFC] bg-[#E8EBFC] font-['IBM_Plex_Sans'] text-[14px] text-[#4D5260]"
                    >
                      Edit profile
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsMessageOpen(true)}
                      className="w-[137px] h-[40px] flex items-center justify-center px-4 rounded-full border border-[#0018A6] bg-[#0018A6] font-['IBM_Plex_Sans'] text-[14px] text-[#FFFFFF]"
                    >
                      Message
                    </button>
                  </div>
                </div>

                <div className="mx-[32px] h-[290px] w-px shrink-0 bg-[#DFE1E6]" />

                <div className="w-[716px] h-[272px] shrink-0 flex gap-4 justify-between">
                  <div className="w-[169px] h-[272px] shrink-0 flex flex-col gap-[39px]">
                    <InfoItem label="Gender" value="Male" />
                    <InfoItem
                      label="Phone Number"
                      value={profile.phone}
                    />
                    <InfoItem
                      label="Address"
                      value="Nasr City, Cairo, Egypt"
                    />
                  </div>

                  <div className="w-[144.5px] h-[272px] shrink-0 flex flex-col gap-[43px]">
                    <InfoItem
                      label="Date of Birth"
                      value="Oct 12, 1999"
                    />
                    <InfoItem
                      label="Work Email"
                      value={profile.email}
                    />
                    <InfoItem
                      label="Join Date"
                      value={selectedDoctor.joinDate}
                    />
                  </div>

                  <div className="w-[144.5px] h-[272px] shrink-0 flex flex-col gap-[43px]">
                    <InfoItem
                      label="Age"
                      value="42 Years"
                    />
                    <InfoItem
                      label="Nationality"
                      value="Egyptian"
                    />
                    <InfoItem
                      label="#ID"
                      value={selectedDoctor.id}
                    />
                  </div>

                  <div className="w-[210px] h-[272px] shrink-0 flex flex-col gap-[43px]">
                    <InfoItem
                      label="Blood Group"
                      value="O+"
                    />
                    <InfoItem
                      label="Emergency Contact Name"
                      value="Mohamed Hassan"
                    />
                    <InfoItem
                      label="Emergency Contact Number"
                      value="+20 101 987 6543"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[112px] shrink-0 flex gap-4">
              <StatCard
                icon={CompletedIcon}
                iconBg="#E7F9EF"
                label="Completed Appointments"
                value="97%"
              />

              <StatCard
                icon={PatientsIcon}
                iconBg="#EAF2FE"
                label="Total Patients"
                value="138"
              />

              <StatCard
                icon={ReviewsIcon}
                iconBg="#FEF6E7"
                label="Reviews"
                value="4.8 / 5.0"
              />

              <StatCard
                icon={AttendanceIcon}
                iconBg="#E7F9EF"
                label="Attendance Rate"
                value="99%"
              />
            </div>

            <div className="w-full max-w-[1128px] h-[522px] shrink-0 flex gap-[20px]">
              <div className="flex-1 h-[522px] flex flex-col justify-between rounded-[24px] border border-[#DFE1E6] p-4">
                <div className="w-full h-[32px] shrink-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={DetailsIcon}
                      alt=""
                      className="w-5 h-5"
                    />

                    <span className="font-['IBM_Plex_Sans'] text-[14px] font-medium text-[#4D5260]">
                      Professional Details
                    </span>
                  </div>
                </div>

                <DetailRow
                  label="Department"
                  value={selectedDoctor.department}
                />

                <DetailRow
                  label="Specialty"
                  value={selectedDoctor.specialty}
                />

                <DetailRow
                  label="Employment Type"
                  value="Full-Time"
                />

                <DetailRow
                  label="Years of Experience"
                  value={selectedDoctor.experience}
                />

                <DetailRow
                  label="Qualification"
                  value="MBBS, MD Cardiology"
                />

                <DetailRow
                  label="Medical License Number"
                  value="MED-458932"
                />
              </div>

              <div className="flex-1 h-[522px] flex flex-col gap-[18px] rounded-[24px] border border-[#DFE1E6] p-4">
                <div className="w-full h-[32px] shrink-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={DetailsIcon}
                      alt=""
                      className="w-5 h-5"
                    />

                    <span className="font-['IBM_Plex_Sans'] text-[14px] font-medium text-[#4D5260]">
                      Today's Patient
                    </span>
                  </div>
                </div>

                <div className="w-full h-[70px] shrink-0 flex items-center gap-[8px]">
                  <button
                    type="button"
                    onClick={goPrevDay}
                    disabled={selectedDayIndex === 0}
                    className="w-[32px] h-[32px] shrink-0 flex items-center justify-center disabled:opacity-30"
                  >
                    <img
                      src={ChevronLeftIcon}
                      alt="Previous day"
                      className="w-4 h-4"
                    />
                  </button>

                  {DAYS.map((d, i) => (
                    <DayTab
                      key={d.date}
                      day={d.day}
                      date={d.date}
                      active={i === selectedDayIndex}
                      onClick={() =>
                        setSelectedDayIndex(i)
                      }
                    />
                  ))}

                  <button
                    type="button"
                    onClick={goNextDay}
                    disabled={
                      selectedDayIndex === DAYS.length - 1
                    }
                    className="w-[32px] h-[32px] shrink-0 flex items-center justify-center disabled:opacity-30"
                  >
                    <img
                      src={ChevronRightIcon}
                      alt="Next day"
                      className="w-4 h-4"
                    />
                  </button>
                </div>

                <div className="flex flex-col gap-[18px] overflow-y-auto">
                  {appointments.length === 0 ? (
                    <p className="font-['IBM_Plex_Sans'] text-[13px] text-[#A7ABB5] text-center mt-6">
                      No appointments for this day
                    </p>
                  ) : (
                    appointments.map((a, i) => (
                      <PatientRow
                        key={`${a.name}-${i}`}
                        name={a.name}
                        note={a.note}
                        time={a.time}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {isEditOpen && (
        <Modal
          title="Edit profile"
          onClose={() => setIsEditOpen(false)}
        >
          <form
            onSubmit={handleProfileSave}
            className="flex flex-col gap-3"
          >
            <div>
              <label className="block text-[12px] text-[#A7ABB5] mb-1">
                Name
              </label>

              <input
                name="name"
                defaultValue={profile.name}
                className="w-full h-[38px] px-3 rounded-[8px] border border-[#DFE1E6] text-[14px] text-[#161719]"
              />
            </div>

            <div>
              <label className="block text-[12px] text-[#A7ABB5] mb-1">
                Specialty
              </label>

              <input
                name="specialty"
                defaultValue={profile.specialty}
                className="w-full h-[38px] px-3 rounded-[8px] border border-[#DFE1E6] text-[14px] text-[#161719]"
              />
            </div>

            <div>
              <label className="block text-[12px] text-[#A7ABB5] mb-1">
                Phone number
              </label>

              <input
                name="phone"
                defaultValue={profile.phone}
                className="w-full h-[38px] px-3 rounded-[8px] border border-[#DFE1E6] text-[14px] text-[#161719]"
              />
            </div>

            <div>
              <label className="block text-[12px] text-[#A7ABB5] mb-1">
                Work email
              </label>

              <input
                name="email"
                type="email"
                defaultValue={profile.email}
                className="w-full h-[38px] px-3 rounded-[8px] border border-[#DFE1E6] text-[14px] text-[#161719]"
              />
            </div>

            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => setIsEditOpen(false)}
                className="flex-1 h-[40px] rounded-full border border-[#DFE1E6] text-[14px] text-[#4D5260]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex-1 h-[40px] rounded-full bg-[#0018A6] text-white text-[14px]"
              >
                Save changes
              </button>
            </div>
          </form>
        </Modal>
      )}

      {isMessageOpen && (
        <Modal
          title={`Message ${profile.name}`}
          onClose={() => setIsMessageOpen(false)}
        >
          <form
            onSubmit={handleSendMessage}
            className="flex flex-col gap-3"
          >
            <textarea
              value={messageText}
              onChange={(e) =>
                setMessageText(e.target.value)
              }
              placeholder="Write your message..."
              rows={4}
              className="w-full px-3 py-2 rounded-[8px] border border-[#DFE1E6] text-[14px] text-[#161719] resize-none"
            />

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsMessageOpen(false)}
                className="flex-1 h-[40px] rounded-full border border-[#DFE1E6] text-[14px] text-[#4D5260]"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={!messageText.trim()}
                className="flex-1 h-[40px] rounded-full bg-[#0018A6] text-white text-[14px] disabled:opacity-40"
              >
                Send
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default DoctorProfile;