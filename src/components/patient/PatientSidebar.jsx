import { NavLink, useNavigate } from "react-router-dom";

const icons = {
  appointment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  ),
  overview: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.6 8.6 0 0 1-3.5-.7L4 20l1.7-3.8A7.3 7.3 0 0 1 4.5 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z" />
    </svg>
  ),
  payment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </svg>
  ),
  doctors: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="M18 4v4M16 6h4" />
    </svg>
  ),
  profile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  ),
  logout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M10 5H5v14h5M14 8l4 4-4 4M8 12h10" />
    </svg>
  ),
};

const links = [
  {
    name: "Appointment",
    path: "/patient/appointment",
    icon: icons.appointment,
  },
  {
    name: "Overview",
    path: "/patient/overview",
    icon: icons.overview,
  },
  {
    name: "Message",
    path: "/patient/message",
    icon: icons.message,
  },
  {
    name: "Payment",
    path: "/patient/payment",
    icon: icons.payment,
  },
  {
    name: "Dr List",
    path: "/patient/doctors",
    icon: icons.doctors,
  },
  {
    name: "Profile",
    path: "/patient/profile",
    icon: icons.profile,
  },
];

function PatientSidebar() {
  const navigate = useNavigate();

  return (
    <aside className="fixed left-0 top-0 z-50 hidden lg:flex h-screen w-[250px] flex-col bg-[#1026B8] text-white">
      <div className="px-7 pt-8 pb-10">
        <h1 className="text-2xl font-bold">LeoClinic</h1>
        <p className="mt-1 text-xs text-[#C9D0FF]">Patient Dashboard</p>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex h-12 items-center gap-4 rounded-xl px-4 text-sm transition ${
                  isActive
                    ? "bg-white font-semibold text-[#1026B8]"
                    : "text-[#E1E5FF] hover:bg-[#263CC4]"
                }`
              }
            >
              <span className="h-5 w-5">{link.icon}</span>
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="p-4">
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="flex h-12 w-full items-center gap-4 rounded-xl px-4 text-sm text-[#E1E5FF] hover:bg-[#263CC4]"
        >
          <span className="h-5 w-5">{icons.logout}</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default PatientSidebar;