import React, { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/AdminDashboardSidebar1";
import Navbar from "../../components/AdminDrProfileNavbar";

import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Printer,
  PlusCircle,
  ArrowUpRight,
  ArrowDownRight,
  ChevronLeft,
  ChevronRight,
  User,
  Users,
  CalendarX2,
  Stethoscope,
  X,
  Check,
} from "lucide-react";

const COLORS = {
  primary: "#0018A6",
  white: "#FFFFFF",
  surface: "#F8F9FC",
  stroke: "#F0F1F5",
  tableStroke: "#DFE1E6",
};

const PAGE_SIZE = 10;

const STATS = [
  {
    id: "total",
    icon: User,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    label: "Total Doctors",
    value: 152,
    change: 12.5,
  },
  {
    id: "active",
    icon: Users,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    label: "Active Doctors",
    value: 138,
    change: 12.5,
  },
  {
    id: "leave",
    icon: CalendarX2,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    label: "On Leave",
    value: 7,
    change: -2,
  },
  {
    id: "busy",
    icon: Stethoscope,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    label: "In Surgery / Busy",
    value: 5,
    change: 12.5,
  },
];

const STATUS_STYLES = {
  Available: "bg-emerald-50 text-emerald-600",
  Busy: "bg-amber-50 text-amber-600",
  "On Leave": "bg-blue-50 text-blue-600",
  "Off Duty": "bg-red-50 text-red-500",
};

const STATUS_OPTIONS = Object.keys(STATUS_STYLES);

export function buildMockDoctors() {
  const names = [
    "Dr. Terry Wallis",
    "Dr. Amina Yousef",
    "Dr. Karim Adel",
    "Dr. Salma Nabil",
    "Dr. Omar Farouk",
    "Dr. Nour Hassan",
    "Dr. Youssef Ali",
    "Dr. Mariam Sami",
    "Dr. Hassan Tarek",
    "Dr. Laila Fahmy",
    "Dr. Ziad Kamal",
    "Dr. Rania Adly",
  ];

  const statuses = ["Available", "Busy", "On Leave", "Off Duty"];
  const departments = [
    "Cardiology",
    "Dermatology",
    "Orthopedics",
    "Pediatrics",
  ];

  return names.map((name, i) => ({
    id: `DOC-${1042 + i}`,
    name,
    department: departments[i % departments.length],
    specialty: "Interventional Cardiologist",
    experience: `${8 + (i % 10)} Years`,
    phone: "+20 100 123 4567",
    status: statuses[i % statuses.length],
    joinDate: "21 Sep 2021",
    patientsToday: 12 + (i % 8),
  }));
}

const INITIAL_DOCTORS = buildMockDoctors();

function StatCard({ icon: Icon, iconBg, iconColor, label, value, change }) {
  const positive = change >= 0;

  return (
    <div className="flex h-[190px] flex-col justify-between gap-8 rounded-[24px] border bg-white p-6 box-border" style={{ borderColor: COLORS.stroke }}>
      <div className="flex items-center justify-between">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}>
          <Icon size={18} strokeWidth={2} />
        </span>

        <span className={`flex items-center gap-0.5 text-xs font-semibold ${positive ? "text-emerald-500" : "text-red-500"}`}>
          {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
          {Math.abs(change)}%
        </span>
      </div>

      <div>
        <p className="mb-1 text-sm text-slate-400">{label}</p>
        <p className="text-2xl font-bold text-slate-800">{value}</p>
      </div>
    </div>
  );
}

function Dropdown({
  label,
  icon: Icon,
  isOpen,
  onToggle,
  children,
  widthClass = "w-48",
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex h-12 items-center gap-2 rounded-full border px-4 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        style={{
          borderColor: COLORS.stroke,
          backgroundColor: COLORS.surface,
        }}
      >
        <Icon size={16} />
        {label}
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 z-30 mt-2 ${widthClass} rounded-xl border bg-white p-2 shadow-lg`}
          style={{ borderColor: COLORS.stroke }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function Toolbar({
  search,
  onSearchChange,
  statusFilter,
  onToggleStatus,
  onClearFilter,
  sortKey,
  onSortChange,
  filterOpen,
  setFilterOpen,
  sortOpen,
  setSortOpen,
  onPrint,
  onAddDoctor,
  totalAppointments,
}) {
  return (
    <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="flex flex-wrap items-center gap-4">
        <label className="relative">
          <Search
            size={16}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="search doctor List"
            className="h-12 w-[280px] rounded-full border bg-white py-3 pl-11 pr-5 text-sm text-slate-600 outline-none focus:ring-2 sm:w-[327px]"
            style={{ borderColor: COLORS.tableStroke }}
          />
        </label>

        <span className="text-sm text-slate-400">
          {totalAppointments} Total Appointments
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Dropdown
          label="Filter"
          icon={SlidersHorizontal}
          isOpen={filterOpen}
          onToggle={() => {
            setFilterOpen((o) => !o);
            setSortOpen(false);
          }}
        >
          <p className="mb-1 px-2 pt-1 text-xs font-medium text-slate-400">
            Status
          </p>

          {STATUS_OPTIONS.map((status) => {
            const active = statusFilter.includes(status);

            return (
              <button
                key={status}
                onClick={() => onToggleStatus(status)}
                className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-50"
              >
                {status}
                {active && <Check size={14} className="text-[#0018A6]" />}
              </button>
            );
          })}

          {statusFilter.length > 0 && (
            <button
              onClick={onClearFilter}
              className="mt-1 w-full rounded-lg px-2 py-2 text-left text-xs font-medium text-red-500 hover:bg-red-50"
            >
              Clear filter
            </button>
          )}
        </Dropdown>

        <Dropdown
          label="Sort By"
          icon={ArrowUpDown}
          isOpen={sortOpen}
          onToggle={() => {
            setSortOpen((o) => !o);
            setFilterOpen(false);
          }}
        >
          {[
            { key: "name", label: "Name (A–Z)" },
            { key: "experience", label: "Experience" },
            { key: "joinDate", label: "Join Date" },
          ].map((opt) => (
            <button
              key={opt.key}
              onClick={() => onSortChange(opt.key)}
              className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              {opt.label}
              {sortKey === opt.key && (
                <Check size={14} className="text-[#0018A6]" />
              )}
            </button>
          ))}
        </Dropdown>

        <button
          onClick={onPrint}
          className="flex h-12 items-center gap-2 rounded-full border px-4 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
          style={{ borderColor: COLORS.stroke }}
        >
          <Printer size={16} />
          Print
        </button>

        <button
          onClick={onAddDoctor}
          className="flex h-12 items-center gap-2 rounded-full px-4 text-sm font-medium text-white transition hover:opacity-90"
          style={{ backgroundColor: COLORS.primary }}
        >
          <PlusCircle size={16} />
          Add Doctor
        </button>
      </div>
    </div>
  );
}

const COLUMNS = [
  { key: "name", label: "Doctor Name" },
  { key: "id", label: "#ID" },
  { key: "department", label: "Department" },
  { key: "specialty", label: "Specialty" },
  { key: "experience", label: "Experience" },
  { key: "phone", label: "Phone" },
  { key: "status", label: "Status" },
  { key: "joinDate", label: "Join Date" },
  { key: "patientsToday", label: "Patients Today" },
];

function DoctorsTable({ doctors, onOpenDoctor, scrollRef, onScroll }) {
  return (
    <div ref={scrollRef} onScroll={onScroll} className="w-full overflow-x-auto">
      <table className="w-full min-w-[1000px] border-separate border-spacing-0">
        <thead>
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                className="border-b px-4 py-3 text-left text-xs font-medium text-slate-400"
                style={{ borderColor: COLORS.tableStroke }}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="group">
              <td
                className="border-b px-4 py-3"
                style={{ borderColor: COLORS.stroke }}
              >
                <button
                  onClick={() => onOpenDoctor(doctor)}
                  className="flex items-center gap-3 text-left"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {doctor.name
                      .replace("Dr. ", "")
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>

                  <span className="text-sm font-medium text-slate-700 group-hover:underline">
                    {doctor.name}
                  </span>
                </button>
              </td>

              <td
                className="border-b px-4 py-3 text-sm text-slate-500"
                style={{ borderColor: COLORS.stroke }}
              >
                {doctor.id}
              </td>

              <td
                className="border-b px-4 py-3 text-sm text-slate-500"
                style={{ borderColor: COLORS.stroke }}
              >
                {doctor.department}
              </td>

              <td
                className="border-b px-4 py-3 text-sm text-slate-500"
                style={{ borderColor: COLORS.stroke }}
              >
                {doctor.specialty}
              </td>

              <td
                className="border-b px-4 py-3 text-sm text-slate-500"
                style={{ borderColor: COLORS.stroke }}
              >
                {doctor.experience}
              </td>

              <td
                className="border-b px-4 py-3 text-sm text-slate-500"
                style={{ borderColor: COLORS.stroke }}
              >
                {doctor.phone}
              </td>

              <td
                className="border-b px-4 py-3"
                style={{ borderColor: COLORS.stroke }}
              >
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[doctor.status]}`}
                >
                  {doctor.status}
                </span>
              </td>

              <td
                className="border-b px-4 py-3 text-sm text-slate-500"
                style={{ borderColor: COLORS.stroke }}
              >
                {doctor.joinDate}
              </td>

              <td
                className="border-b px-4 py-3 text-sm text-slate-500"
                style={{ borderColor: COLORS.stroke }}
              >
                {doctor.patientsToday}
              </td>
            </tr>
          ))}

          {doctors.length === 0 && (
            <tr>
              <td
                colSpan={COLUMNS.length}
                className="px-4 py-10 text-center text-sm text-slate-400"
              >
                No doctors match your search or filter.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function TableScrollbar({ thumb, onStep }) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <button
        onClick={() => onStep(-1)}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100"
        aria-label="Scroll table left"
      >
        <ChevronLeft size={14} />
      </button>

      <div
        className="relative h-2 flex-1 rounded-full"
        style={{ backgroundColor: COLORS.stroke }}
      >
        <div
          className="absolute top-0 h-2 rounded-full transition-all"
          style={{
            backgroundColor: COLORS.primary,
            left: `${thumb.left}%`,
            width: `${thumb.width}%`,
          }}
        />
      </div>

      <button
        onClick={() => onStep(1)}
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100"
        aria-label="Scroll table right"
      >
        <ChevronRight size={14} />
      </button>
    </div>
  );
}

function Pagination({
  page,
  totalPages,
  total,
  pageSize,
  onPageChange,
}) {
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
      <p className="text-sm text-slate-400">
        Showing {start}–{end} of {total} doctors
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page <= 1}
          className="rounded-full border px-4 py-2 text-sm font-medium text-slate-500 disabled:opacity-40"
          style={{
            borderColor: COLORS.stroke,
            backgroundColor: COLORS.surface,
          }}
        >
          Previous
        </button>

        <span
          className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-slate-500"
          style={{ backgroundColor: COLORS.surface }}
        >
          {page}
        </span>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages}
          className="rounded-full px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
          style={{ backgroundColor: COLORS.primary }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4 py-6">
      <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-slate-800">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
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
        className="w-full rounded-lg border px-3 py-2 text-sm text-slate-700 outline-none focus:ring-2"
        style={{ borderColor: COLORS.stroke }}
      />
    </label>
  );
}

function AddDoctorModal({ onClose, onSave }) {
  const [draft, setDraft] = useState({
    name: "",
    department: "",
    specialty: "",
    experience: "",
    phone: "",
    status: "Available",
    joinDate: "",
    patientsToday: 0,
  });

  return (
    <Modal title="Add doctor" onClose={onClose}>
      <Field
        label="Full name"
        value={draft.name}
        onChange={(v) => setDraft({ ...draft, name: v })}
      />

      <Field
        label="Department"
        value={draft.department}
        onChange={(v) => setDraft({ ...draft, department: v })}
      />

      <Field
        label="Specialty"
        value={draft.specialty}
        onChange={(v) => setDraft({ ...draft, specialty: v })}
      />

      <Field
        label="Experience"
        value={draft.experience}
        onChange={(v) => setDraft({ ...draft, experience: v })}
      />

      <Field
        label="Phone"
        value={draft.phone}
        onChange={(v) => setDraft({ ...draft, phone: v })}
      />

      <Field
        label="Join date"
        value={draft.joinDate}
        onChange={(v) => setDraft({ ...draft, joinDate: v })}
      />

      <label className="mb-3 block">
        <span className="mb-1 block text-xs font-medium text-slate-500">
          Status
        </span>

        <select
          value={draft.status}
          onChange={(e) =>
            setDraft({ ...draft, status: e.target.value })
          }
          className="w-full rounded-lg border px-3 py-2 text-sm text-slate-700 outline-none"
          style={{ borderColor: COLORS.stroke }}
        >
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={onClose}
          className="rounded-full border px-4 py-2 text-sm font-medium text-slate-600"
          style={{ borderColor: COLORS.stroke }}
        >
          Cancel
        </button>

        <button
          onClick={() => onSave(draft)}
          disabled={!draft.name || !draft.department}
          className="rounded-full px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
          style={{ backgroundColor: COLORS.primary }}
        >
          Save doctor
        </button>
      </div>
    </Modal>
  );
}

function DoctorsWorkspaceContent() {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState(INITIAL_DOCTORS);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [addDoctorOpen, setAddDoctorOpen] = useState(false);
  const [thumb, setThumb] = useState({ left: 0, width: 100 });

  const scrollRef = useRef(null);

  const filteredDoctors = useMemo(() => {
    let result = doctors;

    if (search.trim()) {
      const q = search.trim().toLowerCase();

      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.id.toLowerCase().includes(q)
      );
    }

    if (statusFilter.length > 0) {
      result = result.filter((d) =>
        statusFilter.includes(d.status)
      );
    }

    if (sortKey === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else if (sortKey === "experience") {
      result = [...result].sort(
        (a, b) =>
          parseInt(b.experience, 10) -
          parseInt(a.experience, 10)
      );
    } else if (sortKey === "joinDate") {
      result = [...result].sort(
        (a, b) =>
          new Date(a.joinDate) - new Date(b.joinDate)
      );
    }

    return result;
  }, [doctors, search, statusFilter, sortKey]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredDoctors.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const pagedDoctors = filteredDoctors.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const handleToggleStatus = (status) => {
    setPage(1);

    setStatusFilter((prev) =>
      prev.includes(status)
        ? prev.filter((s) => s !== status)
        : [...prev, status]
    );
  };

  const handleSortChange = (key) => {
    setSortKey((prev) => (prev === key ? null : key));
    setSortOpen(false);
  };

  const handleAddDoctor = (draft) => {
    const newDoctor = {
      ...draft,
      id: `DOC-${1042 + doctors.length}`,
      patientsToday: Number(draft.patientsToday) || 0,
    };

    setDoctors((prev) => [newDoctor, ...prev]);
    setAddDoctorOpen(false);
    setPage(1);
  };

  const handleOpenDoctor = (doctor) => {
    navigate(`/admin/doctors/${doctor.id}`, {
      state: { doctor },
    });
  };

  const handleScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    const width = Math.max(
      10,
      (clientWidth / scrollWidth) * 100
    );

    const left =
      (scrollLeft /
        (scrollWidth - clientWidth || 1)) *
      (100 - width);

    setThumb({ left, width });
  };

  const handleScrollStep = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction * 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full min-h-full px-8 py-6 box-border">
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>

      <section className="mt-6">
        <Toolbar
          search={search}
          onSearchChange={(v) => {
            setSearch(v);
            setPage(1);
          }}
          statusFilter={statusFilter}
          onToggleStatus={handleToggleStatus}
          onClearFilter={() => {
            setStatusFilter([]);
            setPage(1);
          }}
          sortKey={sortKey}
          onSortChange={handleSortChange}
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
          sortOpen={sortOpen}
          setSortOpen={setSortOpen}
          onPrint={() => window.print()}
          onAddDoctor={() => setAddDoctorOpen(true)}
          totalAppointments={7}
        />
      </section>

      <section
        className="mt-6 rounded-[24px] border bg-white p-5"
        style={{ borderColor: COLORS.tableStroke }}
      >
        <DoctorsTable
          doctors={pagedDoctors}
          onOpenDoctor={handleOpenDoctor}
          scrollRef={scrollRef}
          onScroll={handleScroll}
        />

        <TableScrollbar
          thumb={thumb}
          onStep={handleScrollStep}
        />
      </section>

      <section className="mt-6">
        <Pagination
          page={currentPage}
          totalPages={totalPages}
          total={filteredDoctors.length}
          pageSize={PAGE_SIZE}
          onPageChange={setPage}
        />
      </section>

      {addDoctorOpen && (
        <AddDoctorModal
          onClose={() => setAddDoctorOpen(false)}
          onSave={handleAddDoctor}
        />
      )}
    </div>
  );
}

function Doctors() {
  return (
    <div className="w-full h-screen flex bg-[#F7F8FC] overflow-hidden">
      <Sidebar />

      <div className="flex-1 min-w-0 h-full flex flex-col">
        <Navbar />

        <main className="flex-1 min-w-0 overflow-y-auto bg-[#F7F8FC]">
          <DoctorsWorkspaceContent />
        </main>
      </div>
    </div>
  );
}

export default Doctors;