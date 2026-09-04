import { Outlet } from "react-router-dom";
import PatientSidebar from "../PatientDashboardSidebar";
import AdminDrProfileNavbar from "../AdminDrProfileNavbar";

function PatientLayout() {
  return (
    <div className="min-h-screen bg-white">
      <PatientSidebar />

      <main className="min-h-screen lg:ml-[250px] flex flex-col bg-white">
        <AdminDrProfileNavbar />

        <div className="flex-1 min-h-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default PatientLayout;
