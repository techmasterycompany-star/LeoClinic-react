import React, { useMemo, useState } from "react";
import Sidebar from "../../components/AdminDashboardSidebar1";
import Navbar from "../../components/AdminDrProfileNavbar";
import { useParams, Navigate } from "react-router-dom";

import {
  Pencil,
  Phone,
  Mail,
  IdCard,
  Calendar,
  Plus,
  Trash2,
  X,
} from "lucide-react";

const COLORS = {
  primary: "#0018A6",
  white: "#FFFFFF",
  surface: "#F8F9FC",
  stroke: "#F0F1F5",
};

const PATIENTS_INFO = {
  "P-001": {
    initials: "RF",
    name: "Robert Fox",
    id: "#P-001",
    status: "Approved",
    memberSince: "Jun 2026",
    phone: "+1 234 567 890",
    email: "robert.fox@clinic.mail",
    nationalId: "3031 2212 4027 88",
    dob: "12 Jan 1984 · 42y",
  },

  "P-002": {
    initials: "JC",
    name: "Jane Cooper",
    id: "#P-002",
    status: "Approved",
    memberSince: "Jun 2026",
    phone: "+1 345 678 901",
    email: "jane.cooper@clinic.mail",
    nationalId: "3031 2212 4027 89",
    dob: "15 Jan 1997 · 29y",
  },

  "P-003": {
    initials: "CF",
    name: "Cody Fisher",
    id: "#P-003",
    status: "Approved",
    memberSince: "Jun 2026",
    phone: "+1 456 789 012",
    email: "cody.fisher@clinic.mail",
    nationalId: "3031 2212 4027 90",
    dob: "18 Jan 2026 · 30y",
  },
};

const STATS = [
  {
    label: "Open balance",
    value: "1.250 EGP",
  },
  {
    label: "Visits",
    value: "14",
  },
  {
    label: "Next Visit",
    value: "12 Aug",
  },
  {
    label: "Cancelled",
    value: "2",
  },
];

const TABS = [
  "Medical History",
  "Appointments",
  "Treatments",
  "Financial",
  "Orthodontic",
];

const INITIAL_RECORDS = [
  {
    id: 3,
    date: "18 Jul 2026",
    type: "Surgery",
    diagnosis: "Impacted Tooth",
    treatment: "Tooth #25 — Mesial, Distal",
    notes:
      "1. Surgical exposure planned. Patient tolerated local anesthesia well.",
  },

  {
    id: 2,
    date: "02 Jul 2026",
    type: "Hygiene",
    diagnosis: "Moderate Gingivitis",
    treatment: "Full-mouth scaling & polishing",
    notes: "1. Home care instructions given, recall in 3 months.",
  },
];

const TYPE_STYLES = {
  Surgery: "bg-red-50 text-red-500",
  Hygiene: "bg-pink-50 text-pink-500",
  Consultation: "bg-blue-50 text-blue-600",
  Checkup: "bg-emerald-50 text-emerald-600",
};

function IconBadge({ icon: Icon }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
      <Icon size={16} strokeWidth={2} />
    </span>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <IconBadge icon={icon} />

      <div className="flex min-w-0 flex-col leading-tight">
        <span className="text-xs text-slate-400">{label}</span>

        <span className="truncate text-sm font-medium text-slate-700">
          {value}
        </span>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div
      className="
        flex
        h-full
        min-h-[150px]
        flex-col
        justify-center
        gap-2
        rounded-[24px]
        border
        bg-white
        px-6
        py-6
        box-border
      "
      style={{
        borderColor: COLORS.stroke,
      }}
    >
      <span className="text-xs text-slate-400">{label}</span>

      <span
        className="text-2xl font-bold"
        style={{
          color: COLORS.primary,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-900/40
        px-4
        py-6
      "
    >
      <div
        className="
          w-full
          max-w-md
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-800">{title}</h3>

          <button
            onClick={onClose}
            className="
              rounded-full
              p-1
              text-slate-400
              hover:bg-slate-100
              hover:text-slate-600
            "
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }) {
  return (
    <label className="mb-3 block">
      <span className="mb-1 block text-xs font-medium text-slate-500">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-lg
          border
          px-3
          py-2
          text-sm
          text-slate-700
          outline-none
          focus:ring-2
        "
        style={{
          borderColor: COLORS.stroke,
        }}
      />
    </label>
  );
}

function PatientHeaderCard({ patient, onSave }) {
  const [editOpen, setEditOpen] = useState(false);
  const [draft, setDraft] = useState(patient);

  const openEdit = () => {
    setDraft(patient);
    setEditOpen(true);
  };

  const save = () => {
    const updatedPatient = {
      ...draft,
      initials: draft.name
        .split(" ")
        .filter(Boolean)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    };

    onSave(updatedPatient);
    setEditOpen(false);
  };

  return (
    <>
      <div
        className="
          flex
          h-full
          w-full
          flex-col
          justify-between
          gap-5
          rounded-[24px]
          border
          bg-white
          p-5
          box-border
        "
        style={{
          borderColor: COLORS.stroke,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                text-lg
                font-bold
                text-white
              "
              style={{
                backgroundColor: COLORS.primary,
              }}
            >
              {patient.initials}
            </div>

            <div className="min-w-0">
              <p className="truncate text-base font-semibold text-slate-800">
                {patient.name}
              </p>

              <p className="text-xs text-slate-400">ID · {patient.id}</p>
            </div>
          </div>

          <button
            onClick={openEdit}
            className="
              flex
              h-8
              shrink-0
              items-center
              gap-2
              rounded-full
              px-4
              text-xs
              font-medium
              text-white
              transition
              hover:opacity-90
            "
            style={{
              backgroundColor: COLORS.primary,
            }}
          >
            <Pencil size={13} />
            Edit
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span
            className="
              rounded-full
              bg-emerald-50
              px-3
              py-1
              text-xs
              font-medium
              text-emerald-600
            "
          >
            {patient.status}
          </span>

          <span
            className="
              rounded-full
              px-3
              py-1
              text-xs
              font-medium
              text-slate-500
            "
            style={{
              backgroundColor: COLORS.surface,
            }}
          >
            Member since {patient.memberSince}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactItem icon={Phone} label="Phone" value={patient.phone} />

          <ContactItem icon={Mail} label="Email" value={patient.email} />

          <ContactItem
            icon={IdCard}
            label="National ID"
            value={patient.nationalId}
          />

          <ContactItem
            icon={Calendar}
            label="Date of birth"
            value={patient.dob}
          />
        </div>
      </div>

      {editOpen && (
        <Modal title="Edit patient" onClose={() => setEditOpen(false)}>
          <Field
            label="Full name"
            value={draft.name}
            onChange={(value) =>
              setDraft({
                ...draft,
                name: value,
              })
            }
          />

          <Field
            label="Phone"
            value={draft.phone}
            onChange={(value) =>
              setDraft({
                ...draft,
                phone: value,
              })
            }
          />

          <Field
            label="Email"
            value={draft.email}
            onChange={(value) =>
              setDraft({
                ...draft,
                email: value,
              })
            }
          />

          <Field
            label="National ID"
            value={draft.nationalId}
            onChange={(value) =>
              setDraft({
                ...draft,
                nationalId: value,
              })
            }
          />

          <Field
            label="Date of birth"
            value={draft.dob}
            onChange={(value) =>
              setDraft({
                ...draft,
                dob: value,
              })
            }
          />

          <div className="mt-4 flex justify-end gap-2">
            <button
              onClick={() => setEditOpen(false)}
              className="
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                text-slate-600
              "
              style={{
                borderColor: COLORS.stroke,
              }}
            >
              Cancel
            </button>

            <button
              onClick={save}
              className="
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                text-white
              "
              style={{
                backgroundColor: COLORS.primary,
              }}
            >
              Save changes
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

function TabBar({ activeTab, setActiveTab, onAddRecord }) {
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        xl:flex-row
        xl:items-center
        xl:justify-between
      "
    >
      <div className="flex flex-wrap items-center gap-2">
        {TABS.map((tab) => {
          const active = tab === activeTab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-medium
                transition
                ${
                  active
                    ? "border-[#0018A6] bg-[#0018A6] text-white"
                    : "text-slate-500 hover:bg-slate-50"
                }
              `}
              style={
                active
                  ? undefined
                  : {
                      borderColor: COLORS.stroke,
                    }
              }
            >
              {tab}
            </button>
          );
        })}
      </div>

      <button
        onClick={onAddRecord}
        className="
          flex
          w-fit
          items-center
          gap-2
          rounded-full
          px-5
          py-2
          text-sm
          font-medium
          text-white
          transition
          hover:opacity-90
        "
        style={{
          backgroundColor: COLORS.primary,
        }}
      >
        <Plus size={15} />
        Add Record
      </button>
    </div>
  );
}

function RecordRow({ record, isLast, onEdit, onDelete }) {
  return (
    <div className="relative flex gap-4 pb-6">
      <div className="flex shrink-0 flex-col items-center">
        <span
          className="
            mt-1
            h-2.5
            w-2.5
            shrink-0
            rounded-full
            bg-emerald-500
          "
        />

        {!isLast && (
          <span
            className="
              w-px
              flex-1
              bg-slate-200
            "
          />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div
          className="
            mb-3
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-sm text-slate-400">{record.date}</span>

            <span
              className={`
                rounded-full
                px-2.5
                py-0.5
                text-xs
                font-medium
                ${TYPE_STYLES[record.type] || "bg-slate-100 text-slate-500"}
              `}
            >
              {record.type}
            </span>

            <span className="text-sm text-slate-400">Record #{record.id}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onEdit(record)}
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-medium
                text-slate-500
                hover:bg-slate-50
              "
              style={{
                borderColor: COLORS.stroke,
              }}
            >
              <Pencil size={12} />
              Edit
            </button>

            <button
              onClick={() => onDelete(record.id)}
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-red-200
                px-3
                py-1
                text-xs
                font-medium
                text-red-500
                hover:bg-red-50
              "
            >
              <Trash2 size={12} />
              Delete
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="min-w-0">
            <p className="mb-1 text-xs text-slate-400">Diagnosis</p>

            <p className="text-sm font-medium text-slate-700">
              {record.diagnosis}
            </p>
          </div>

          <div className="min-w-0">
            <p className="mb-1 text-xs text-slate-400">Treatment</p>

            <p className="text-sm font-medium text-slate-700">
              {record.treatment}
            </p>
          </div>

          <div className="min-w-0">
            <p className="mb-1 text-xs text-slate-400">Notes</p>

            <p className="text-sm font-medium text-slate-700">{record.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecordModal({ initial, onClose, onSave }) {
  const [draft, setDraft] = useState(
    initial || {
      type: "Surgery",
      date: "",
      diagnosis: "",
      treatment: "",
      notes: "",
    },
  );

  return (
    <Modal title={initial ? "Edit record" : "Add record"} onClose={onClose}>
      <Field
        label="Date"
        value={draft.date}
        onChange={(value) =>
          setDraft({
            ...draft,
            date: value,
          })
        }
      />

      <label className="mb-3 block">
        <span className="mb-1 block text-xs font-medium text-slate-500">
          Type
        </span>

        <select
          value={draft.type}
          onChange={(e) =>
            setDraft({
              ...draft,
              type: e.target.value,
            })
          }
          className="
            w-full
            rounded-lg
            border
            px-3
            py-2
            text-sm
            text-slate-700
            outline-none
          "
          style={{
            borderColor: COLORS.stroke,
          }}
        >
          {Object.keys(TYPE_STYLES).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <Field
        label="Diagnosis"
        value={draft.diagnosis}
        onChange={(value) =>
          setDraft({
            ...draft,
            diagnosis: value,
          })
        }
      />

      <Field
        label="Treatment"
        value={draft.treatment}
        onChange={(value) =>
          setDraft({
            ...draft,
            treatment: value,
          })
        }
      />

      <Field
        label="Notes"
        value={draft.notes}
        onChange={(value) =>
          setDraft({
            ...draft,
            notes: value,
          })
        }
      />

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="
            rounded-full
            border
            px-4
            py-2
            text-sm
            font-medium
            text-slate-600
          "
          style={{
            borderColor: COLORS.stroke,
          }}
        >
          Cancel
        </button>

        <button
          onClick={() => onSave(draft)}
          disabled={!draft.diagnosis || !draft.date}
          className="
            rounded-full
            px-4
            py-2
            text-sm
            font-medium
            text-white
            disabled:opacity-40
          "
          style={{
            backgroundColor: COLORS.primary,
          }}
        >
          Save record
        </button>
      </div>
    </Modal>
  );
}

function ConfirmDeleteModal({ onCancel, onConfirm }) {
  return (
    <Modal title="Delete record" onClose={onCancel}>
      <p className="mb-5 text-sm text-slate-500">
        This record will be permanently removed from the patient's medical
        history. This action can't be undone.
      </p>

      <div className="flex justify-end gap-2">
        <button
          onClick={onCancel}
          className="
            rounded-full
            border
            px-4
            py-2
            text-sm
            font-medium
            text-slate-600
          "
          style={{
            borderColor: COLORS.stroke,
          }}
        >
          Cancel
        </button>

        <button
          onClick={onConfirm}
          className="
            rounded-full
            bg-red-500
            px-4
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-red-600
          "
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

function PatientWorkspaceContent({ selectedPatient }) {
  const [patient, setPatient] = useState(selectedPatient);

  const [activeTab, setActiveTab] = useState("Medical History");

  const [records, setRecords] = useState(INITIAL_RECORDS);

  const [recordModal, setRecordModal] = useState(null);

  const [pendingDeleteId, setPendingDeleteId] = useState(null);

  const nextRecordId = useMemo(() => {
    if (!records.length) {
      return 1;
    }

    return Math.max(...records.map((record) => record.id)) + 1;
  }, [records]);

  const handleSaveRecord = (draft) => {
    if (!recordModal) {
      return;
    }

    if (recordModal.mode === "edit") {
      setRecords((previousRecords) =>
        previousRecords.map((record) =>
          record.id === draft.id ? draft : record,
        ),
      );
    } else {
      setRecords((previousRecords) => [
        {
          ...draft,
          id: nextRecordId,
        },
        ...previousRecords,
      ]);
    }

    setRecordModal(null);
  };

  const handleDelete = (id) => {
    setPendingDeleteId(id);
  };

  const confirmDelete = () => {
    setRecords((previousRecords) =>
      previousRecords.filter((record) => record.id !== pendingDeleteId),
    );

    setPendingDeleteId(null);
  };

  return (
    <div className="box-border min-h-full w-full px-8 py-5">
      <section
        className="
          grid
          w-full
          grid-cols-1
          gap-5
          xl:grid-cols-[52%_1fr]
          xl:items-stretch
        "
      >
        <PatientHeaderCard patient={patient} onSave={setPatient} />

        <div
          className="
            grid
            h-full
            w-full
            grid-cols-1
            gap-5
            sm:grid-cols-2
          "
        >
          {STATS.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </section>

      <section className="mt-8">
        <TabBar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onAddRecord={() =>
            setRecordModal({
              mode: "add",
            })
          }
        />
      </section>

      <section className="mt-6">
        {activeTab !== "Medical History" ? (
          <div
            className="
              flex
              h-40
              items-center
              justify-center
              rounded-2xl
              border
              text-sm
              text-slate-400
            "
            style={{
              borderColor: COLORS.stroke,
              backgroundColor: COLORS.surface,
            }}
          >
            No {activeTab.toLowerCase()} records yet.
          </div>
        ) : records.length === 0 ? (
          <div
            className="
              flex
              h-40
              items-center
              justify-center
              rounded-2xl
              border
              text-sm
              text-slate-400
            "
            style={{
              borderColor: COLORS.stroke,
              backgroundColor: COLORS.surface,
            }}
          >
            No medical history recorded yet.
          </div>
        ) : (
          <div
            className="
              w-full
              rounded-[24px]
              border
              bg-white
              p-5
              sm:p-6
            "
            style={{
              borderColor: COLORS.stroke,
            }}
          >
            {records.map((record, index) => (
              <RecordRow
                key={record.id}
                record={record}
                isLast={index === records.length - 1}
                onEdit={(selectedRecord) =>
                  setRecordModal({
                    mode: "edit",
                    record: selectedRecord,
                  })
                }
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </section>

      {recordModal && (
        <RecordModal
          initial={recordModal.record}
          onClose={() => setRecordModal(null)}
          onSave={handleSaveRecord}
        />
      )}

      {pendingDeleteId !== null && (
        <ConfirmDeleteModal
          onCancel={() => setPendingDeleteId(null)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}

function PatientInfo() {
  const { patientId } = useParams();

  const selectedPatient = PATIENTS_INFO[patientId];

  if (!selectedPatient) {
    return <Navigate to="/admin/patients" replace />;
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F7F8FC]">
      <Sidebar />

      <div className="flex h-full min-w-0 flex-1 flex-col">
        <Navbar />

        <main className="min-w-0 flex-1 overflow-y-auto bg-[#F7F8FC]">
          <PatientWorkspaceContent selectedPatient={selectedPatient} />
        </main>
      </div>
    </div>
  );
}

export default PatientInfo;
