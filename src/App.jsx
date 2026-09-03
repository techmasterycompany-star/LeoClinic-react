import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

// Auth Guard
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Layout Components
import DoctorLayout from "./components/doctor/DoctorLayout";
import PatientLayout from "./components/patient/PatientLayout";

// Auth Pages
import Login from "./pages/auth/Login";
import AdminLogin from "./pages/auth/AdminLogin";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Verification from "./pages/auth/Verification";
import ChangePassword from "./pages/auth/ChangePassword";
import PasswordChanged from "./pages/auth/PasswordChanged";

// Admin Pages
import AdminOverview from "./pages/Admin/AdminOverview";
import AdminAppoinment from "./pages/Admin/AdminAppoinment";
import AdminDrList from "./pages/Admin/AdminDrList";
import AdminDrProfile from "./pages/Admin/AdminDrProfile";
import Billing from "./pages/Admin/Adminbilling";
import PatientPage from "./pages/Admin/PatientPage";
import AdminPatientInfo from "./pages/Admin/PatientInfo";

// Doctor Pages
import DrOverview from "./pages/doctor/DrOverview";
import PatientView from "./pages/doctor/patientView";
import Messages from "./pages/doctor/message";
import AddPrescription from "./pages/doctor/addPrescription";
import Slot from "./pages/doctor/Slot";
import Request from "./pages/doctor/Request";
import Schedule from "./pages/doctor/Schedule";
import DoctorPatientList from "./pages/doctor/PatientList";
import DoctorPatientInfo from "./pages/doctor/PatientInfo";

// Patient Pages
import PatientOverview from "./pages/Patient/Overview";
import NewAppointment from "./pages/Patient/NewAppointment";
import DoctorList from "./pages/Patient/DoctorList";
import PatientDoctorProfile from "./pages/Patient/PatientDoctorProfile";
import PatientAppoinment from "./pages/Patient/PatientAppoinment";
import PatientMessage from "./pages/Patient/Message";
import Payment from "./pages/Patient/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Landing: Directs to Login as requested */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* --- Public Auth Routes --- */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/password-changed" element={<PasswordChanged />} />

        {/* --- Patient Routes (Wrapped in PatientLayout) --- */}
        <Route element={<ProtectedRoute allowedRoles={["PATIENT"]} />}>
          <Route path="/patient" element={<PatientLayout />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<PatientOverview />} />
            <Route path="new-appointment" element={<NewAppointment />} />
            <Route path="doctors" element={<DoctorList />} />
            <Route
              path="doctors/:doctorId"
              element={<PatientDoctorProfile />}
            />
            <Route path="appointments" element={<PatientAppoinment />} />
            <Route path="messages" element={<PatientMessage />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Route>

        {/* --- Doctor Routes (Wrapped in DoctorLayout) --- */}
        <Route element={<ProtectedRoute allowedRoles={["DOCTOR"]} />}>
          <Route path="/doctor" element={<DoctorLayout />}>
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<DrOverview />} />
            <Route path="slot" element={<Slot />} />
            <Route path="request" element={<Request />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="patients" element={<DoctorPatientList />} />
            <Route path="patients/:id" element={<DoctorPatientInfo />} />
            <Route path="patient-view" element={<PatientView />} />
            <Route path="messages" element={<Messages />} />
            <Route path="add-prescription" element={<AddPrescription />} />
          </Route>
        </Route>

        {/* --- Admin Routes --- */}
        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/admin">
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<AdminOverview />} />
            <Route path="appointments" element={<AdminAppoinment />} />
            <Route path="doctors" element={<AdminDrList />} />
            <Route path="doctors/:doctorId" element={<AdminDrProfile />} />
            <Route path="billing" element={<Billing />} />
            <Route path="patients" element={<PatientPage />} />
            <Route path="patients/:patientId" element={<AdminPatientInfo />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
