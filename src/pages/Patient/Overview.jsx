import { Link } from "react-router-dom";
import PatientSidebar from "../../components/PatientDashboardSidebar";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";
const appointments = [
  {
    doctor: "Dr. Sarah Legend",
    specialty: "Child psychologist",
    date: "18 Aug 2026",
    time: "10:00 AM",
    image: "/images/patient/doctor-sarah-legend.png",
  },
  {
    doctor: "Dr. Ben Affleck",
    specialty: "Military psychologist",
    date: "22 Aug 2026",
    time: "02:30 PM",
    image: "/images/patient/doctor-ben-affleck.png",
  },
];

const doctors = [
  {
    name: "Dr. Sarah Legend",
    specialty: "Child psychologist",
    image: "/images/patient/doctor-sarah-legend.png",
  },
  {
    name: "Dr. Ben Affleck",
    specialty: "Military psychologist",
    image: "/images/patient/doctor-ben-affleck.png",
  },
  {
    name: "Dr. Sam Wallfolk",
    specialty: "Clinical psychologist",
    image: "/images/patient/doctor-sam-wallfolk.png",
  },
];

function Overview() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8F9FC]">
      <PatientSidebar />
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AdminDrProfileNavbar />
        <div className="flex-1 overflow-y-auto">
          <div className="min-h-screen ...">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">
                <div>
                  <p className="text-sm text-[#8A909C] mb-2">Welcome back</p>
                  <h1 className="text-3xl font-bold text-[#292D38]">
                    Good Morning, Patient
                  </h1>
                  <p className="text-sm text-[#8A909C] mt-2">
                    Manage your appointments and healthcare from here.
                  </p>
                </div>

                <Link
                  to="/patient/new-appointment"
                  className="h-12 px-6 rounded-xl bg-[#1026B8] text-white flex items-center justify-center text-sm font-medium"
                >
                  + New Appointment
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                <div className="bg-white border border-[#E9ECF3] rounded-2xl p-6">
                  <p className="text-sm text-[#8A909C]">Upcoming</p>
                  <p className="text-3xl font-bold text-[#292D38] mt-2">2</p>
                </div>

                <div className="bg-white border border-[#E9ECF3] rounded-2xl p-6">
                  <p className="text-sm text-[#8A909C]">Completed Visits</p>
                  <p className="text-3xl font-bold text-[#292D38] mt-2">12</p>
                </div>

                <div className="bg-white border border-[#E9ECF3] rounded-2xl p-6">
                  <p className="text-sm text-[#8A909C]">Messages</p>
                  <p className="text-3xl font-bold text-[#292D38] mt-2">4</p>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-6">
                <section className="bg-white border border-[#E9ECF3] rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-semibold text-[#292D38]">
                        Upcoming Appointments
                      </h2>
                      <p className="text-sm text-[#8A909C] mt-1">
                        Your next scheduled visits
                      </p>
                    </div>

                    <Link
                      to="/patient/appointment"
                      className="text-sm font-medium text-[#1026B8]"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div
                        key={appointment.doctor}
                        className="border border-[#E9ECF3] rounded-xl p-5"
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={appointment.image}
                            alt={appointment.doctor}
                            className="w-14 h-14 rounded-full object-cover"
                          />

                          <div className="flex-1">
                            <h3 className="text-sm font-semibold text-[#292D38]">
                              {appointment.doctor}
                            </h3>
                            <p className="text-xs text-[#8A909C] mt-1">
                              {appointment.specialty}
                            </p>
                          </div>

                          <div className="hidden md:block">
                            <p className="text-xs text-[#A0A6B1]">Date</p>
                            <p className="text-sm font-medium text-[#4B4F59] mt-1">
                              {appointment.date}
                            </p>
                          </div>

                          <div className="hidden md:block">
                            <p className="text-xs text-[#A0A6B1]">Time</p>
                            <p className="text-sm font-medium text-[#4B4F59] mt-1">
                              {appointment.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-white border border-[#E9ECF3] rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-semibold text-[#292D38]">
                        Doctors
                      </h2>
                      <p className="text-sm text-[#8A909C] mt-1">
                        Recommended doctors
                      </p>
                    </div>

                    <Link
                      to="/patient/doctors"
                      className="text-sm font-medium text-[#1026B8]"
                    >
                      View All
                    </Link>
                  </div>

                  <div className="space-y-4">
                    {doctors.map((doctor) => (
                      <div
                        key={doctor.name}
                        className="flex items-center gap-4 p-4 rounded-xl bg-[#F8F9FC]"
                      >
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />

                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-[#292D38]">
                            {doctor.name}
                          </h3>
                          <p className="text-xs text-[#8A909C] mt-1">
                            {doctor.specialty}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Overview;
