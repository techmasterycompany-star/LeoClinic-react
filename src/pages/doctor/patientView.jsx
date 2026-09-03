import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  Download,
  ChevronRight,
  Calendar,
  FileText,
  X,
} from "lucide-react";
import DrDashboardSidebar from "../../components/DrDashboardSidebar";
import AdminDrProfileNavbar from "../../components/AdminDrProfileNavbar";
import ProfilePicture from "../../assets/DrDashboard/profile.png";

const PATIENT = {
  name: "Irma Schamberger",
  patientId: "01546910056",
  gender: "Female",
  birthday: "Oct 12, 1999",
  number: "(0106) 6181852",
  address: "004 Strosin Course",
  city: "Cairo",
  registrationDate: "Oct 12, 1999",
  pastAppointments: 2,
  upcomingAppointments: 1,
};

const VISITS = {
  previous: [
    { id: 1, date: "1 Jun 2026", time: "7:30 Pm", type: "New Visit" },
    { id: 2, date: "15 Jun 2026", time: "5:30 Pm", type: "Follow-Up" },
  ],
  request: [{ id: 3, date: "-", time: "-", type: "Consultation" }],
  confirmed: [
    { id: 4, date: "20 Jun 2026", time: "6:00 Pm", type: "New Visit" },
  ],
};

const INITIAL_PRESCRIPTIONS = [
  {
    id: 1,
    title: "Prescriptions #1",
    date: "15 Jul 2026",
    items: ["Amoxicilline 500g", "Panadol extra", "Mouth Wash"],
  },
  {
    id: 2,
    title: "Prescriptions #2",
    date: "2 Jul 2026",
    items: ["Ibuprofen 400mg", "Chlorhexidine Rinse"],
  },
];

const INITIAL_FILES = [
  { id: 1, name: "Periapical X-ray" },
  { id: 2, name: "Panormic X-ray" },
  { id: 3, name: "Cpct Scan" },
  { id: 4, name: "TMJ X-ray" },
];

function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 py-6">
      <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-800">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, textarea }) {
  return (
    <label className="mb-3 block">
      <span className="mb-1 block text-xs font-medium text-slate-500">
        {label}
      </span>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full rounded-lg border border-[#F0F1F5] px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-[#F0F1F5] px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2"
        />
      )}
    </label>
  );
}

function DetailField({ label, value }) {
  return (
    <div className="border-b border-[#F0F1F5] pb-2">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-[#4A4F5A]">{value}</p>
    </div>
  );
}

function SendMessageModal({ patientName, onClose }) {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Modal title="Message sent" onClose={onClose}>
        <p className="text-sm text-slate-500">
          Your message to {patientName} has been sent.
        </p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-[#0018A6] px-4 py-2 text-sm font-medium text-white"
          >
            Done
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title={`Message ${patientName}`} onClose={onClose}>
      <Field label="Message" value={message} onChange={setMessage} textarea />
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="rounded-full border border-[#F0F1F5] px-4 py-2 text-sm font-medium text-slate-600"
        >
          Cancel
        </button>
        <button
          onClick={() => setSent(true)}
          disabled={!message.trim()}
          className="rounded-full bg-[#0018A6] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          Send
        </button>
      </div>
    </Modal>
  );
}

function EditVisitModal({ visit, onClose, onSave }) {
  const [draft, setDraft] = useState(visit);
  return (
    <Modal title="Edit visit" onClose={onClose}>
      <Field
        label="Date"
        value={draft.date}
        onChange={(v) => setDraft({ ...draft, date: v })}
      />
      <Field
        label="Time"
        value={draft.time}
        onChange={(v) => setDraft({ ...draft, time: v })}
      />
      <Field
        label="Type"
        value={draft.type}
        onChange={(v) => setDraft({ ...draft, type: v })}
      />
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="rounded-full border border-[#F0F1F5] px-4 py-2 text-sm font-medium text-slate-600"
        >
          Cancel
        </button>
        <button
          onClick={() => onSave(draft)}
          className="rounded-full bg-[#0018A6] px-4 py-2 text-sm font-medium text-white"
        >
          Save changes
        </button>
      </div>
    </Modal>
  );
}

function ConfirmDeleteModal({ title, description, onCancel, onConfirm }) {
  return (
    <Modal title={title} onClose={onCancel}>
      <p className="mb-5 text-sm text-slate-500">{description}</p>
      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="rounded-full border border-[#F0F1F5] px-4 py-2 text-sm font-medium text-slate-600"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

function AddPrescriptionModal({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [itemsText, setItemsText] = useState("");

  const handleSave = () => {
    onSave({
      title,
      date,
      items: itemsText
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
    });
  };

  return (
    <Modal title="Add prescription" onClose={onClose}>
      <Field label="Title" value={title} onChange={setTitle} />
      <Field label="Date" value={date} onChange={setDate} />
      <Field
        label="Items (comma separated)"
        value={itemsText}
        onChange={setItemsText}
        textarea
      />
      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="rounded-full border border-[#F0F1F5] px-4 py-2 text-sm font-medium text-slate-600"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={!title || !date}
          className="rounded-full bg-[#0018A6] px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
        >
          Save prescription
        </button>
      </div>
    </Modal>
  );
}

function PatientProfileCard({ patient, onSendMessage }) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-[32px] border border-[#F0F1F5] bg-white p-6 box-border md:flex-row">
      <div className="flex w-full flex-col gap-4 md:w-[218px]">
        <img
          src={ProfilePicture}
          alt={patient.name}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <p className="text-base font-semibold text-slate-800">
            {patient.name}
          </p>
          <p className="text-sm text-[#4A4F5A]">{patient.patientId}</p>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <p className="text-lg font-bold text-slate-800">
              {patient.pastAppointments}
            </p>
            <p className="text-xs text-slate-400">past</p>
          </div>
          <span className="h-8 w-px bg-[#F0F1F5]" />
          <div>
            <p className="text-lg font-bold text-slate-800">
              {patient.upcomingAppointments}
            </p>
            <p className="text-xs text-slate-400">Upcoming</p>
          </div>
        </div>

        <button
          onClick={onSendMessage}
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#0018A6] text-sm font-semibold text-white transition hover:opacity-90"
        >
          Send Message
        </button>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-4">
        <DetailField label="Gender" value={patient.gender} />
        <DetailField label="Birthday" value={patient.birthday} />
        <DetailField label="Number" value={patient.number} />
        <DetailField label="Address" value={patient.address} />
        <DetailField label="City" value={patient.city} />
        <DetailField
          label="Registration Date"
          value={patient.registrationDate}
        />
      </div>
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

function VisitsSection() {
  const [activeTab, setActiveTab] = useState("previous");
  const [visits, setVisits] = useState(VISITS);
  const [editVisit, setEditVisit] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const tabs = [
    { key: "previous", label: "Previous Visits" },
    { key: "request", label: "Request" },
    { key: "confirmed", label: "Confirmed" },
  ];

  const rows = visits[activeTab];

  const updateActive = (updater) =>
    setVisits((prev) => ({ ...prev, [activeTab]: updater(prev[activeTab]) }));

  const saveEdit = (draft) => {
    updateActive((list) => list.map((r) => (r.id === draft.id ? draft : r)));
    setEditVisit(null);
  };

  const confirmDelete = () => {
    updateActive((list) => list.filter((r) => r.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center gap-2 rounded-[14px] bg-[#F0F1F5] p-1">
        {tabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition ${
                isActive
                  ? "bg-white text-slate-800 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {["Date", "Time", "Type", "Action"].map((col) => (
              <th
                key={col}
                className="border-b border-[#F0F1F5] px-3 py-3 text-left text-xs font-medium text-slate-400"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border-b border-[#F0F1F5] px-3 py-4 text-sm text-slate-600">
                {row.date}
              </td>
              <td className="border-b border-[#F0F1F5] px-3 py-4 text-sm text-slate-600">
                {row.time}
              </td>
              <td className="border-b border-[#F0F1F5] px-3 py-4 text-sm text-slate-600">
                {row.type}
              </td>
              <td className="border-b border-[#F0F1F5] px-3 py-4">
                <RowActions
                  onEdit={() => setEditVisit(row)}
                  onDelete={() => setDeleteId(row.id)}
                />
              </td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td
                colSpan={4}
                className="px-3 py-10 text-center text-sm text-slate-400"
              >
                No visits to show.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {editVisit && (
        <EditVisitModal
          visit={editVisit}
          onClose={() => setEditVisit(null)}
          onSave={saveEdit}
        />
      )}
      {deleteId !== null && (
        <ConfirmDeleteModal
          title="Delete visit"
          description="This visit will be permanently removed. This action can't be undone."
          onCancel={() => setDeleteId(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}

function PrescriptionsCard() {
  const [prescriptions, setPrescriptions] = useState(INITIAL_PRESCRIPTIONS);
  const [showAll, setShowAll] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  const visible = showAll ? prescriptions : prescriptions.slice(0, 1);

  const handleAdd = (draft) => {
    setPrescriptions((prev) => [{ id: prev.length + 1, ...draft }, ...prev]);
    setAddOpen(false);
    setShowAll(true);
  };

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl border border-[#F0F1F5] bg-white px-4 py-6 box-border">
      <div className="flex items-center justify-between">
        <div>
          <p className="flex items-center gap-2 text-base font-semibold text-slate-800">
            <FileText size={16} className="text-[#0018A6]" />
            Prescriptions
          </p>
          <p className="mt-1 text-xs text-slate-400">
            All prescriptions for this patient
          </p>
        </div>
        {prescriptions.length > 1 && (
          <button
            onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-1 text-sm font-medium text-[#0018A6]"
          >
            {showAll ? "Show less" : "See all"}
            <ChevronRight size={14} />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {visible.map((p) => (
          <div
            key={p.id}
            className="flex flex-col gap-4 rounded-lg border border-[#F0F1F5] px-4 py-3"
          >
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                <FileText size={14} className="text-[#0018A6]" />
                {p.title}
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                <Calendar size={12} />
                {p.date}
              </p>
            </div>

            <p className="text-xs text-slate-500">{p.items.join(" · ")}</p>

            <button
              onClick={() =>
                downloadTextFile(`${p.title}.txt`, p.items.join("\n"))
              }
              className="flex h-10 w-[154px] items-center justify-center gap-2 rounded-full border border-[#F0F1F5] text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <Download size={14} />
              Download
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setAddOpen(true)}
        className="flex h-12 w-full items-center justify-center rounded-full border border-[#0018A6] bg-[#0018A6] text-sm font-semibold text-white transition hover:opacity-90"
      >
        Add Prescriptions
      </button>

      {addOpen && (
        <AddPrescriptionModal
          onClose={() => setAddOpen(false)}
          onSave={handleAdd}
        />
      )}
    </div>
  );
}

function FilesCard() {
  const [files, setFiles] = useState(INITIAL_FILES);
  const [deleteId, setDeleteId] = useState(null);

  const confirmDelete = () => {
    setFiles((prev) => prev.filter((f) => f.id !== deleteId));
    setDeleteId(null);
  };

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl border border-[#F0F1F5] bg-white px-4 py-6 box-border">
      <p className="flex items-center gap-2 text-base font-semibold text-slate-800">
        <FileText size={16} className="text-[#0018A6]" />
        Files / Documents
      </p>

      <div className="flex flex-col gap-4">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between rounded-lg border border-[#F0F1F5] px-4 py-3"
          >
            <span className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <FileText size={16} className="text-slate-400" />
              {file.name}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  downloadTextFile(
                    `${file.name}.txt`,
                    `Placeholder file for ${file.name}`,
                  )
                }
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#0018A6] transition hover:bg-blue-100"
                aria-label="Download"
              >
                <Download size={14} />
              </button>
              <button
                onClick={() => setDeleteId(file.id)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-100"
                aria-label="Delete"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
        {files.length === 0 && (
          <p className="py-6 text-center text-sm text-slate-400">
            No files uploaded.
          </p>
        )}
      </div>

      {deleteId !== null && (
        <ConfirmDeleteModal
          title="Delete file"
          description="This file will be permanently removed. This action can't be undone."
          onCancel={() => setDeleteId(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}

function PatientDetailWorkspaceContent() {
  const [messageOpen, setMessageOpen] = useState(false);

  return (
    <div className="w-full min-h-full px-8 py-6 box-border">
      <div className="flex w-full flex-col gap-8 xl:flex-row">
        <div className="flex w-full flex-col gap-8 xl:w-[57%]">
          <PatientProfileCard
            patient={PATIENT}
            onSendMessage={() => setMessageOpen(true)}
          />
          <VisitsSection />
        </div>

        <div className="flex w-full flex-col gap-6 xl:w-[40%]">
          <PrescriptionsCard />
          <FilesCard />
        </div>
      </div>

      {messageOpen && (
        <SendMessageModal
          patientName={PATIENT.name}
          onClose={() => setMessageOpen(false)}
        />
      )}
    </div>
  );
}

function PatientDetail() {
  return (
    <div className="w-full h-screen flex bg-[#F7F8FC] overflow-hidden">
      <DrDashboardSidebar />

      <div className="flex-1 min-w-0 h-full flex flex-col">
        <AdminDrProfileNavbar />

        <main className="flex-1 min-w-0 overflow-y-auto bg-[#F7F8FC]">
          <PatientDetailWorkspaceContent />
        </main>
      </div>
    </div>
  );
}

export default PatientDetail;
