import DoctorSidebar from "../DrDashboardSidebar";

function DoctorLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <DoctorSidebar />
      <main className="min-h-screen lg:ml-[250px]">{children}</main>
    </div>
  );
}

export default DoctorLayout;