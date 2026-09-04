import PatientSidebar from "../../components/PatientDashboardSidebar";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";

const payments = [
  {
    id: 1,
    doctor: "Dr. Ahmed Hassan",
    service: "Cardiology Consultation",
    date: "18 Aug 2026",
    amount: "$50",
    status: "Paid",
    image: "/images/patient/patient-eleanor-pena.png",
  },
  {
    id: 2,
    doctor: "Dr. Sarah Legend",
    service: "Dental Consultation",
    date: "22 Aug 2026",
    amount: "$40",
    status: "Pending",
    image: "/images/patient/doctor-sarah-message.png",
  },
  {
    id: 3,
    doctor: "Dr. Sam Wallfolk",
    service: "Clinical Consultation",
    date: "30 Aug 2026",
    amount: "$35",
    status: "Paid",
    image: "/images/patient/doctor-sam-wallfolk.png",
  },
];

function Payment() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8F9FC]">
      <PatientSidebar />
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <AdminDrProfileNavbar />
        <div className="flex-1 overflow-y-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Payments</h1>

      <div className="space-y-4">
        {payments.map((payment) => (
          <div
            key={payment.id}
            className="bg-white border rounded-xl p-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={payment.image}
                alt={payment.doctor}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h2 className="font-medium">{payment.doctor}</h2>
                <p className="text-sm text-gray-500">{payment.service}</p>
                <p className="text-sm text-gray-400">{payment.date}</p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">{payment.amount}</p>

              <span
                className={`text-sm ${
                  payment.status === "Paid"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                {payment.status}
              </span>
            </div>
          </div>
        ))}
            </div>
        </div>
      </main>
    </div>
  );
}

export default Payment;