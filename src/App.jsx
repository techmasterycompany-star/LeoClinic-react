import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

<<<<<<< Updated upstream
import "./App.css";

import DrOverview from "./pages/DrOverview";
import PatientView from "./pages/patientView";
import Messages from "./pages/message";

import AddPrescription from "./pages/addPrescription";
import AdminDrList from "./pages/AdminDrList";
import AdminDrProfile from "./pages/AdminDrProfile";
import PatientAppoinment from "./pages/PatientAppoinment";
import PatientDoctorProfile from "./pages/PatientDoctorProfile";
import AdminAppoinment from "./pages/AdminAppoinment";
import AdminOverview from "./pages/AdminOverview";
import Billing from "./pages/Adminbilling";
import Patient from "./pages/PatientPage";
import PatientInfo from "./pages/PatientInfo";
=======
import Login from "./pages/auth/Login";
import AdminLogin from "./pages/auth/AdminLogin";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Verification from "./pages/auth/Verification";
import ChangePassword from "./pages/auth/ChangePassword";
import PasswordChanged from "./pages/auth/PasswordChanged";
import NewAppointment from "./components/patient/NewAppointment";
import DoctorList from "./components/patient/DoctorList";
import Overview from "./components/patient/Overview";
import Slot from "./pages/doctor/Slot";
import Request from "./pages/doctor/Request";
import PatientList from "./pages/doctor/PatientList";
import PatientInfo from "./pages/doctor/PatientInfo";
>>>>>>> Stashed changes

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< Updated upstream
        <Route path="/" element={<Navigate to="/admin/overview" replace />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/password-changed" element={<PasswordChanged />} />
        <Route path="/patient/new-appointment" element={<NewAppointment />} />
        <Route path="/patient/doctors" element={<DoctorList />} />
        <Route path="/patient/overview" element={<Overview />} />
        <Route path="/doctor/slot" element={<Slot />} />
        <Route path="/doctor/request" element={<Request />} />
        <Route path="/doctor/patients" element={<PatientList />} />
        <Route path="/doctor/patients/:id" element={<PatientInfo />} /> 
>>>>>>> Stashed changes

        <Route path="/overview" element={<DrOverview />} />
        <Route path="/patient" element={<PatientView />} />
        <Route path="/messages" element={<Messages />} />

        <Route path="/admin/overview" element={<AdminOverview />} />
        <Route path="/admin/appointments" element={<AdminAppoinment />} />
        <Route path="/admin/doctors" element={<AdminDrList />} />
        <Route path="/admin/doctors/:doctorId" element={<AdminDrProfile />} />
        <Route path="/admin/billing" element={<Billing />} />
        <Route path="/admin/patient" element={<Patient />} />
        <Route path="/admin/patient/:patientId" element={<PatientInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
