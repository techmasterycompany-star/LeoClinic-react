import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import AddPrescription from "./pages/addPrescription";
import AdminDrProfile from "./pages/AdminDrProfile";
import PatientAppoinment from "./pages/PatientAppoinment";
import PatientDoctorProfile from "./pages/PatientDoctorProfile";
import AdminAppoinment from "./pages/AdminAppoinment";
import AdminOverview from "./pages/AdminOverview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= ADMIN ================= */}

        <Route path="/" element={<Navigate to="/admin/overview" replace />} />

        <Route path="/admin/overview" element={<AdminOverview />} />
        <Route path="/admin/appointments" element={<AdminAppoinment />} />
        <Route path="/admin/doctors" element={<AdminDrProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
