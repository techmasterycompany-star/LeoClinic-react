import React, { useMemo, useState } from "react";
import { Pencil, Trash2, Clock, X } from "lucide-react";
import DrDashboardSidebar from "../../components/DrDashboardSidebar";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";
import DrRightSidebar from "../../components/DrRightSidebar";

const STATE_STYLES = {
  "New Visit": "bg-emerald-50 text-emerald-600",
  "Follow-up": "bg-red-50 text-red-500",
  Accepted: "bg-emerald-50 text-emerald-600",
};

const APPOINTMENTS_TODAY = [
  { id: 1, patient: "Anita Upton", time: "5:00 Pm", date: "20 May 2026", weekday: "Wednesday", type: "Online", state: "New Visit" },
  { id: 2, patient: "Levi Toy", time: "5:30 Pm", date: "20 May 2026", weekday: "Wednesday", type: "In the clinic", state: "New Visit" },
  { id: 3, patient: "Roy Bins", time: "6:00 Pm", date: "20 May 2026", weekday: "Wednesday", type: "In the clinic", state: "Follow-up" },
  { id: 4, patient: "Jan Johns", time: "6:30 Pm", date: "20 May 2026", weekday: "Wednesday", type: "Online", state: "Follow-up" },
];

const APPOINTMENTS_UPCOMING = [
  { id: 5, patient: "Mona Adel", time: "10:00 Am", date: "21 May 2026", weekday: "Thursday", type: "Online", state: "New Visit" },
  { id: 6, patient: "Karim Fahmy", time: "11:30 Am", date: "22 May 2026", weekday: "Friday", type: "In the clinic", state: "Follow-up" },
];

const INITIAL_REQUESTS = [
  { id: 1, patient: "Anita Upton", time: "5:00 Pm", date: "20 May 2026", weekday: "Wednesday", type: "Online", status: "new" },
  { id: 2, patient: "Levi Toy", time: "5:30 Pm", date: "20 May 2026", weekday: "Wednesday", type: "In the clinic", status: "waiting" },
  { id: 3, patient: "Roy Bins", time: "-", date: "-", weekday: "", type: "In the clinic", status: "needs_slot" },
];

function SectionHeader({ title, description }) {
  return (
    <div className="mb-5">
      <h2 className="text-[28px] font-medium leading-none text-[#4A4F5A]">{title}</h2>
      <p className="mt-2 text-sm text-[#6B707B]">{description}</p>
    </div>
  );
}

function ToggleButtons({ active, onChange }) {
  const options = [
    { key: "today", label: "Today" },
    { key: "upcoming", label: "Up Coming" },
  ];

  return (
    <div className="mb-5 flex items-center gap-3">
      {options.map((opt) => {
        const isActive = active === opt.key;
        return (
          <button
            key={opt.key}
            onClick={() => onChange(opt.key)}
            className={`flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold transition ${
              isActive ? "bg-[#0018A6] text-white" : "border border-[#F0F1F5] bg-[#E8EBFC] text-[#0018A6]"
            }`}
          >
            {opt.key === "upcoming" && <Clock size={15} />}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function RowActions({ onEdit, onDelete }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onEdit}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition hover:bg-emerald-100"
        aria-label="Edit"
      >
        <Pencil size={14} />
      </button>
      <button
        onClick={onDelete}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
        aria-label="Delete"
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}

function Pagination({ page, totalPages, onChange }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className="rounded-full bg-[#F8F9FC] px-5 py-2 text-sm font-medium text-slate-400 disabled:opacity-50"
      >
        Previous
      </button>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F9FC] text-sm font-medium text-slate-500">
        {page}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        className="rounded-full bg-[#0018A6] px-5 py-2 text-sm font-medium text-white disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 py-6">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label className="mb-3 block">
      <span className="mb-1 block text-xs font-medium text-slate-500">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-[#F0F1F5] px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2"
      />
    </label>
  );
}

function EditAppointmentModal({ appointment, onClose, onSave }) {
  const [draft, setDraft] = useState(appointment);
  return (
    <Modal title="Edit appointment" onClose={onClose}>
      <Field label="Patient name" value={draft.patient} onChange={(v) => setDraft({ ...draft, patient: v })} />
      <Field label="Time visit" value={draft.time} onChange={(v) => setDraft({ ...draft, time: v })} />
      <Field label="Date" value={draft.date} onChange={(v) => setDraft({ ...draft, date: v })} />
      <Field label="Type" value={draft.type} onChange={(v) => setDraft({ ...draft, type: v })} />
      <div className="mt-4 flex justify-end gap-2">
        <button onClick={onClose} className="rounded-full border border-[#F0F1F5] px-4 py-2 text-sm font-medium text-slate-600">
          Cancel
        </button>
        <button onClick={() => onSave(draft)} className="rounded-full bg-[#0018A6] px-4 py-2 text-sm font-medium text-white">
          Save changes
        </button>
      </div>
    </Modal>
  );
}

function ConfirmDeleteModal({ onCancel, onConfirm }) {
  return (
    <Modal title="Delete appointment" onClose={onCancel}>
      <p className="mb-5 text-sm text-slate-500">This appointment will be permanently removed. This action can't be undone.</p>
      <div className="flex justify-end gap-2">
        <button onClick={onCancel} className="rounded-full border border-[#F0F1F5] px-4 py-2 text-sm font-medium text-slate-600">
          Cancel
        </button>
        <button onClick={onConfirm} className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
          Delete
        </button>
      </div>
    </Modal>
  );
}

function PickSlotModal({ onClose, onSave }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  return (
    <Modal title="Pick a slot" onClose={onClose}>
      <Field label="Date" value={date} onChange={setDate} />
      <Field label="Time" value={time} onChange={setTime} />
      <div className="mt-4 flex justify-end gap-2">
        <button onClick={onClose} className="rounded-full border border-[#F0F1F5] px-4 py-2 text-sm font-medium text-slate-600">
          Cancel
        </button>
        <button
          onClick={() => onSave({ date, time })}
          disabled={!date || !time}
          className="rounded-full bg-[#0018A6] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          Confirm slot
        </button>
      </div>
    </Modal>
  );
}

const COLUMNS = ["Patient Name", "Time Visit", "Date", "Type", "State", "Action"];

function AppointmentsSection() {
  const [activeTab, setActiveTab] = useState("today");
  const [rows, setRows] = useState({ today: APPOINTMENTS_TODAY, upcoming: APPOINTMENTS_UPCOMING });
  const [page, setPage] = useState(1);
  const [editRow, setEditRow] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const pageSize = 4;
  const activeRows = rows[activeTab];
  const totalPages = Math.max(1, Math.ceil(activeRows.length / pageSize));
  const pagedRows = activeRows.slice((page - 1) * pageSize, page * pageSize);

  const updateRows = (updater) => setRows((prev) => ({ ...prev, [activeTab]: updater(prev[activeTab]) }));

  const saveEdit = (draft) => {
    updateRows((list) => list.map((r) => (r.id === draft.id ? draft : r)));
    setEditRow(null);
  };

  const confirmDelete = () => {
    updateRows((list) => list.filter((r) => r.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <section>
      <SectionHeader title="Appointments" description="View and manage all appointment bookings in the system" />
      <ToggleButtons
        active={activeTab}
        onChange={(tab) => {
          setActiveTab(tab);
          setPage(1);
        }}
      />

      <div className="overflow-x-auto rounded-[24px] border border-[#F0F1F5] bg-white">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {COLUMNS.map((col) => (
                <th key={col} className="border-b border-[#F0F1F5] px-4 py-3 text-left text-xs font-medium text-slate-400">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pagedRows.map((row) => (
              <tr key={row.id}>
                <td className="border-b border-[#F0F1F5] px-4 py-4 text-sm font-medium text-slate-700">{row.patient}</td>
                <td className="border-b border-[#F0F1F5] px-4 py-4 text-sm text-slate-500">{row.time}</td>
                <td className="border-b border-[#F0F1F5] px-4 py-4 text-sm text-slate-500">
                  {row.date}
                  <span className="block text-xs text-slate-300">{row.weekday}</span>
                </td>
                <td className="border-b border-[#F0F1F5] px-4 py-4 text-sm text-slate-500">{row.type}</td>
                <td className="border-b border-[#F0F1F5] px-4 py-4">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATE_STYLES[row.state]}`}>{row.state}</span>
                </td>
                <td className="border-b border-[#F0F1F5] px-4 py-4">
                  <RowActions onEdit={() => setEditRow(row)} onDelete={() => setDeleteId(row.id)} />
                </td>
              </tr>
            ))}
            {pagedRows.length === 0 && (
              <tr>
                <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-sm text-slate-400">
                  No appointments to show.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>

      {editRow && <EditAppointmentModal appointment={editRow} onClose={() => setEditRow(null)} onSave={saveEdit} />}
      {deleteId !== null && <ConfirmDeleteModal onCancel={() => setDeleteId(null)} onConfirm={confirmDelete} />}
    </section>
  );
}

function RequestStatePill({ row, onAccept, onPickSlot }) {
  if (row.status === "accepted") {
    return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATE_STYLES.Accepted}`}>Accepted</span>;
  }
  if (row.status === "waiting") {
    return <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">waiting</span>;
  }
  if (row.status === "needs_slot") {
    return (
      <button onClick={onPickSlot} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-100">
        Pick a slot
      </button>
    );
  }
  return (
    <button onClick={onAccept} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600 hover:bg-emerald-100">
      Accept
    </button>
  );
}

function MyRequestsSection() {
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [page, setPage] = useState(1);
  const [editRow, setEditRow] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [slotRow, setSlotRow] = useState(null);

  const pageSize = 3;
  const totalPages = Math.max(1, Math.ceil(requests.length / pageSize));
  const pagedRows = useMemo(
    () => requests.slice((page - 1) * pageSize, page * pageSize),
    [requests, page]
  );

  const saveEdit = (draft) => {
    setRequests((prev) => prev.map((r) => (r.id === draft.id ? draft : r)));
    setEditRow(null);
  };

  const confirmDelete = () => {
    setRequests((prev) => prev.filter((r) => r.id !== deleteId));
    setDeleteId(null);
  };

  const acceptRequest = (id) => {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "accepted" } : r)));
  };

  const saveSlot = ({ date, time }) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === slotRow.id ? { ...r, date, time, status: "new" } : r))
    );
    setSlotRow(null);
  };

  return (
    <section className="mt-10">
      <SectionHeader title="My Requests" description="View and manage all requests in the system" />

      <div className="overflow-x-auto rounded-[24px] border border-[#F0F1F5] bg-white">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr>
              {COLUMNS.map((col) => (
                <th key={col} className="border-b border-[#F0F1F5] px-4 py-3 text-left text-xs font-medium text-slate-400">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pagedRows.map((row) => (
              <tr key={row.id}>
                <td className="border-b border-[#F0F1F5] px-4 py-4 text-sm font-medium text-slate-700">{row.patient}</td>
                <td className="border-b border-[#F0F1F5] px-4 py-4 text-sm text-slate-500">{row.time}</td>
                <td className="border-b border-[#F0F1F5] px-4 py-4 text-sm text-slate-500">
                  {row.date}
                  {row.weekday && <span className="block text-xs text-slate-300">{row.weekday}</span>}
                </td>
                <td className="border-b border-[#F0F1F5] px-4 py-4 text-sm text-slate-500">{row.type}</td>
                <td className="border-b border-[#F0F1F5] px-4 py-4">
                  <RequestStatePill row={row} onAccept={() => acceptRequest(row.id)} onPickSlot={() => setSlotRow(row)} />
                </td>
                <td className="border-b border-[#F0F1F5] px-4 py-4">
                  <RowActions onEdit={() => setEditRow(row)} onDelete={() => setDeleteId(row.id)} />
                </td>
              </tr>
            ))}
            {pagedRows.length === 0 && (
              <tr>
                <td colSpan={COLUMNS.length} className="px-4 py-10 text-center text-sm text-slate-400">
                  No requests to show.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4">
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>

      {editRow && <EditAppointmentModal appointment={editRow} onClose={() => setEditRow(null)} onSave={saveEdit} />}
      {deleteId !== null && <ConfirmDeleteModal onCancel={() => setDeleteId(null)} onConfirm={confirmDelete} />}
      {slotRow && <PickSlotModal onClose={() => setSlotRow(null)} onSave={saveSlot} />}
    </section>
  );
}

function DoctorDashboard() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8F9FC]">
      {/* Left Sidebar */}
      <DrDashboardSidebar />

      {/* Main Area */}
      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Navbar */}
        <AdminDrProfileNavbar />

        {/* Overview Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div>
            <AppointmentsSection />
            <MyRequestsSection />
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <DrRightSidebar />
    </div>
  );
}

export default DoctorDashboard;