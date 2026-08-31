import React, { useState } from "react";
import { User, Calendar, Check, X } from "lucide-react";
import DoctorIllustrationImage from "../assets/DrDashboard/image.png";

const NEXT_APPOINTMENT = {
  patientName: "Anita Upton",
  weekday: "Thursday",
  date: "27/8/2026",
  time: "8:00 PM",
};

const CONFIRM_REQUEST = {
  patientName: "Levi Toy",
  weekday: "Thursday",
  date: "27/8/2026",
  time: "8:00 PM",
};

const STATUS_BANNER = {
  accepted: {
    text: "Request accepted",
    className: "bg-[#E9F9F1] text-emerald-600",
  },
  declined: {
    text: "Request declined",
    className: "bg-[#FDEEEE] text-red-500",
  },
};

function InfoRow({ icon: Icon, title, subtitle, trailing }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#F0F1F5] bg-[#F8F9FC]">
          <Icon size={16} className="text-slate-400" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-[#2D3039]">{title}</p>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </div>
      </div>
      {trailing && (
        <span className="text-sm font-semibold text-[#2D3039]">{trailing}</span>
      )}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-[24px] border border-[#000A5A] bg-white p-5 box-border">
      <h3 className="text-base font-bold text-[#2D3039]">{title}</h3>
      {children}
    </div>
  );
}

function NextAppointmentCard({ appointment, onJoin }) {
  return (
    <Card title="Next Appointment">
      <InfoRow icon={User} title="Patient" subtitle={appointment.patientName} />
      <InfoRow
        icon={Calendar}
        title={appointment.weekday}
        subtitle={appointment.date}
        trailing={appointment.time}
      />
      <button
        onClick={onJoin}
        className="flex h-[38px] w-full items-center justify-center rounded-full bg-[#0018A6] text-sm font-semibold text-white transition hover:opacity-90"
      >
        Join Now
      </button>
    </Card>
  );
}

function ConfirmRequestCard({ request, status, onAccept, onDecline }) {
  const banner = STATUS_BANNER[status];

  return (
    <Card title="Confirm Request">
      <InfoRow icon={User} title="Patient" subtitle={request.patientName} />
      <InfoRow
        icon={Calendar}
        title={request.weekday}
        subtitle={request.date}
        trailing={request.time}
      />

      {banner ? (
        <p
          className={`rounded-full py-2 text-center text-sm font-semibold ${banner.className}`}
        >
          {banner.text}
        </p>
      ) : (
        <div className="flex items-center gap-3">
          <button
            onClick={onAccept}
            className="flex h-[38px] flex-1 items-center justify-center gap-2 rounded-full bg-[#00875A] text-sm font-semibold text-white transition hover:opacity-90"
          >
            <Check size={15} />
            Accept
          </button>
          <button
            onClick={onDecline}
            className="flex h-[38px] flex-1 items-center justify-center gap-1.5 rounded-full border border-[#E8EBFC] text-sm font-semibold text-[#2D3039] transition hover:bg-slate-50"
          >
            <X size={15} />
            Decline
          </button>
        </div>
      )}
    </Card>
  );
}

export default function NotificationsPanel() {
  const [requestStatus, setRequestStatus] = useState(null);

  return (
    <aside
      className="
    hidden
    h-full
    w-[325px]
    shrink-0
    flex-col
    gap-6
    overflow-y-auto
    border-l
    border-[#F0F1F5]
    p-6
    box-border
    lg:flex
  "
      style={{
        background:
          "linear-gradient(182.37deg, #FFFFFF 16.68%, #000A5A 79.72%)",
      }}
    >
      {" "}
      <h2 className="text-base font-bold text-[#2D3039]">Notifications</h2>
      <NextAppointmentCard
        appointment={NEXT_APPOINTMENT}
        onJoin={() =>
          console.log("Join Now clicked for", NEXT_APPOINTMENT.patientName)
        }
      />
      <ConfirmRequestCard
        request={CONFIRM_REQUEST}
        status={requestStatus}
        onAccept={() => setRequestStatus("accepted")}
        onDecline={() => setRequestStatus("declined")}
      />
      <img
        src={DoctorIllustrationImage}
        alt="Doctor illustration"
        className="w-full h-[258px] rounded-[24px] object-cover"
      />
    </aside>
  );
}
