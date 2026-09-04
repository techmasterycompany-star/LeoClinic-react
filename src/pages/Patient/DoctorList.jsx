import { useNavigate } from "react-router-dom";
import PatientSidebar from "../../components/PatientDashboardSidebar";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";

const doctors = [
  {
    name: "Dr. Sarah Legend",
    specialty: "Child psychologist",
    location: "Chicago, USA",
    experience: "20 yrs of exp.",
    consultations: "2000+ consultations",
    price: "$120/h",
    status: "Offline",
    rating: "4.8",
    image: "/images/patient/doctor-sarah-legend.png",
    tags: ["Abuse", "Parenting", "Food", "+4"],
  },
  {
    name: "Dr. Ben Affleck",
    specialty: "Military psychologist",
    location: "Los Angeles, USA",
    experience: "4 yrs of exp.",
    consultations: "400+ consultations",
    price: "$50/h",
    status: "Online",
    rating: "4.8",
    image: "/images/patient/doctor-ben-affleck.png",
    tags: ["Abuse", "Food", "Mental Health", "+2"],
  },
  {
    name: "Dr. Sam Wallfolk",
    specialty: "Clinical psychologist",
    location: "New York, USA",
    experience: "10 yrs of exp.",
    consultations: "1000+ consultations",
    price: "$80/h",
    status: "Online/Offline",
    rating: "4.8",
    image: "/images/patient/doctor-sam-wallfolk.png",
    tags: ["Abuse", "Depression", "PTSD", "+3"],
  },
  {
    name: "Dr. Sarah Legend",
    specialty: "Child psychologist",
    location: "Chicago, USA",
    experience: "20 yrs of exp.",
    consultations: "2000+ consultations",
    price: "$120/h",
    status: "Offline",
    rating: "4.8",
    image: "/images/patient/doctor-sarah-legend.png",
    tags: ["Abuse", "Parenting", "Food", "+4"],
  },
  {
    name: "Dr. Ben Affleck",
    specialty: "Military psychologist",
    location: "Los Angeles, USA",
    experience: "4 yrs of exp.",
    consultations: "400+ consultations",
    price: "$50/h",
    status: "Online",
    rating: "4.8",
    image: "/images/patient/doctor-ben-affleck.png",
    tags: ["Abuse", "Food", "Mental Health", "+2"],
  },
  {
    name: "Dr. Sam Wallfolk",
    specialty: "Clinical psychologist",
    location: "New York, USA",
    experience: "10 yrs of exp.",
    consultations: "1000+ consultations",
    price: "$80/h",
    status: "Online/Offline",
    rating: "4.8",
    image: "/images/patient/doctor-sam-wallfolk.png",
    tags: ["Abuse", "Depression", "PTSD", "+3"],
  },
];

function DoctorList() {
  const navigate = useNavigate();

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
                  <h1 className="text-3xl font-bold text-[#292D38]">Doctors</h1>
                  <p className="text-sm text-[#8A909C] mt-2">
                    Find the best doctor for your needs
                  </p>
                </div>

                <div className="relative w-full md:w-[330px]">
                  <input
                    type="text"
                    placeholder="Search by name ..."
                    className="w-full h-12 rounded-full border border-[#E3E6ED] pl-5 pr-5 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="bg-[#F1F2F5] rounded-2xl p-6 mb-8">
                <p className="text-base text-[#424753] mb-5">
                  Find the best psychologist for yourself! Our specialists will
                  help you to find the best decisions for solving your problems!
                </p>

                <div className="bg-white rounded-2xl grid grid-cols-1 md:grid-cols-4">
                  <div className="p-5 border-b md:border-b-0 md:border-r border-[#E2E4E9]">
                    <p className="text-sm text-[#B0B5C0]">Type of counseling</p>
                    <p className="text-sm text-[#343945] mt-6">All Type</p>
                  </div>

                  <div className="p-5 border-b md:border-b-0 md:border-r border-[#E2E4E9]">
                    <p className="text-sm text-[#B0B5C0]">City</p>
                    <p className="text-sm text-[#343945] mt-6">All Cities</p>
                  </div>

                  <div className="p-5 border-b md:border-b-0 md:border-r border-[#E2E4E9]">
                    <p className="text-sm text-[#B0B5C0]">Age</p>
                    <p className="text-sm text-[#343945] mt-6">35+</p>
                  </div>

                  <div className="p-5">
                    <p className="text-sm text-[#B0B5C0]">Gender</p>
                    <p className="text-sm text-[#343945] mt-6">All</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {doctors.map((doctor, index) => (
                  <div
                    key={`${doctor.name}-${index}`}
                    className="border border-[#E0E3EA] rounded-2xl p-5 bg-white"
                  >
                    <div className="flex gap-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      <div>
                        <h2 className="text-base font-semibold text-[#292D38]">
                          {doctor.name}
                        </h2>
                        <p className="text-xs text-[#7E8490] mt-1">
                          {doctor.specialty}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <span className="bg-[#06945B] text-white text-xs rounded-md px-2 py-1">
                        ★ {doctor.rating}
                      </span>

                      <span className="text-xs text-[#707784]">
                        {doctor.location}
                      </span>
                    </div>

                    <div className="mt-4 space-y-2 text-xs text-[#7E8490]">
                      <p>{doctor.experience}</p>
                      <p>{doctor.consultations}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {doctor.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 rounded-full bg-[#EEF0FB] text-[11px] text-[#73798A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-end justify-between gap-4 mt-6">
                      <div>
                        <p className="text-sm font-semibold text-[#292D38]">
                          {doctor.price}
                        </p>
                        <p className="text-[10px] text-[#A1A6B0]">
                          {doctor.status}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => navigate("/patient/doctor-profile")}
                        className="flex-1 max-w-[220px] h-11 rounded-full bg-[#1026B8] text-white text-sm font-medium"
                      >
                        Book a Visit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DoctorList;
