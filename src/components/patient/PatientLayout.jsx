import PatientSidebar from "./PatientSidebar";

function PatientLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <PatientSidebar />
      <main className="min-h-screen lg:ml-[250px]">{children}</main>
    </div>
  );
}

export default PatientLayout;