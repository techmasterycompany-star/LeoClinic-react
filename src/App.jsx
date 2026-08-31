import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import DrOverview from "./pages/DrOverview";
import PatientView from "./pages/patientView";
import Messages from "./pages/message";

//import AddPrescription from "./pages/addPrescription";
//import AdminDrList from "./pages/AdminDrList";
//import AdminDrProfile from "./pages/AdminDrProfile";
//import PatientAppoinment from "./pages/PatientAppoinment";
//import PatientDoctorProfile from "./pages/PatientDoctorProfile";
//import AdminAppoinment from "./pages/AdminAppoinment";
//import AdminOverview from "./pages/AdminOverview";
//import Billing from "./pages/Adminbilling"
//import Patient from "./pages/PatientPage";
//import PatientInfo from "./pages/PatientInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<DrOverview />} />
        <Route path="/patient" element={<PatientView />} />
        <Route path="/messages" element={<Messages />} />



        {/*        <Route path="/admin/overview" element={<AdminOverview />} />
        <Route path="/admin/appointments" element={<AdminAppoinment />} />
        <Route path="/admin/doctors" element={<AdminDrList />} />
        <Route path="/admin/doctors/:doctorId" element={<AdminDrProfile />} />       
        <Route path="/admin/billing" element={<Billing/>} />
        <Route path="/admin/patient" element={<Patient/>} />
        <Route path="/admin/patient/:patientId" element={<PatientInfo />}/>
  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
