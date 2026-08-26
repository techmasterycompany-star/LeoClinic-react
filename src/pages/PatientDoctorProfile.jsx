import React, { useState } from "react";
import Sidebar from "../components/AdminDashboardSidebar1";
import Navbar from "../components/AdminDrProfileNavbar";
import DrProfileCard from "../assets/drProfile.png";

import VisitInfoIcon from "../assets/DetailsIcon.png";
import ServicesIcon from "../assets/DetailsIcon.png";
import ReviewsIcon from "../assets/DetailsIcon.png";
import FeeIcon from "../assets/fee.png";
import DurationIcon from "../assets/duration.png";
import LocationIcon from "../assets/location.png";
import HoursIcon from "../assets/working hours.png";
import AvailabilityIcon from "../assets/availability.png";
import VisitTypeIcon from "../assets/visit type.png";
import BookmarkIcon from "../assets/DetailsIcon.png";
import EditIcon from "../assets/DetailsIcon.png";
import DoctorThumb from "../assets/drProfile.png";

const SERVICES = [
  "Heart Check-up",
  "Stress Test",
  "Stress Test",
  "Hypertension Treatment",
  "Stress Test",
  "Arrhythmia Care",
];

const RATING_BREAKDOWN = [
  { stars: 5, percent: 78 },
  { stars: 4, percent: 22 },
  { stars: 3, percent: 8 },
  { stars: 2, percent: 4 },
  { stars: 1, percent: 10 },
];

const REVIEWS = [
  {
    id: 1,
    name: "Mohamed Ali",
    date: "15 Jul 2026",
    rating: 4,
    text: "The doctor was very attentive, explained my condition clearly, and answered all my questions. I felt comfortable throughout the consultation.",
  },
  {
    id: 2,
    name: "Mohamed Ali",
    date: "15 Jul 2026",
    rating: 4,
    text: "The doctor was very attentive, explained my condition clearly, and answered all my questions. I felt comfortable throughout the consultation.",
  },
  {
    id: 3,
    name: "Mohamed Ali",
    date: "15 Jul 2026",
    rating: 4,
    text: "The doctor was very attentive, explained my condition clearly, and answered all my questions. I felt comfortable throughout the consultation.",
  },
];

const RELATED_DOCTORS = [
  {
    id: 1,
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    branch: "Main Branch",
    rating: 4.9,
    reviews: 228,
    experience: "12 Years",
    tags: ["Gastritis", "IBS", "Cardio"],
    price: "$80/h",
  },
  {
    id: 2,
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    branch: "Main Branch",
    rating: 4.9,
    reviews: 228,
    experience: "12 Years",
    tags: ["Gastritis", "IBS", "Cardio"],
    price: "$80/h",
  },
  {
    id: 3,
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    branch: "Main Branch",
    rating: 4.9,
    reviews: 228,
    experience: "12 Years",
    tags: ["Gastritis", "IBS", "Cardio"],
    price: "$80/h",
  },
  {
    id: 4,
    name: "Dr. Ahmed Hassan",
    specialty: "Cardiologist",
    branch: "Main Branch",
    rating: 4.9,
    reviews: 228,
    experience: "12 Years",
    tags: ["Gastritis", "IBS", "Cardio"],
    price: "$80/h",
  },
];

function VisitInfoItem({ icon, label, value, isTag }) {
  return (
    <div className="flex items-start gap-3">
      <span className="w-9 h-9 rounded-[10px] bg-[#E8EBFC] flex items-center justify-center shrink-0">
        <img src={icon} alt="" className="w-4 h-4" />
      </span>
      <div className="flex flex-col gap-[2px]">
        <span className="font-['IBM Plex Sans'] text-[13px] font-medium text-[#4D5260]">
          {label}
        </span>
        {isTag ? (
          <span className="mt-[2px] w-fit px-2 py-[2px] rounded-[6px] bg-[#E8EBFC] text-[#0018A6] font-['IBM Plex Sans'] text-[11px] font-medium">
            {value}
          </span>
        ) : (
          <span className="font-['IBM Plex Sans'] text-[12px] text-[#A7ABB5]">
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

function ServicePill({ label }) {
  return (
    <span
      className="
        flex-1 h-[24px] shrink-0
        flex items-center justify-center
        rounded-full
        bg-[#E8EBFC]
        font-['IBM Plex Sans'] text-[16px] font-normal leading-[24px] text-[#0018A6]
        whitespace-nowrap
      "
    >
      {label}
    </span>
  );
}

function RatingBarRow({ stars, percent }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-3 font-['IBM Plex Sans'] text-[12px] text-[#686D7A]">
        {stars}
      </span>
      <div className="flex-1 h-[6px] rounded-full bg-[#EEF0F3] overflow-hidden">
        <div
          className="h-full bg-[#0018A6] rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function StarRow({ rating, size = 14 }) {
  return (
    <div
      className="flex items-center gap-[2px]"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{ fontSize: size, color: i < rating ? "#F5A623" : "#DFE1E6" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="flex flex-col gap-2 py-4 border-b border-[#EEF0F3] last:border-b-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={DoctorThumb}
            alt={review.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-['IBM Plex Sans'] text-[14px] font-medium text-[#161719]">
            {review.name}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-['IBM Plex Sans'] text-[12px] text-[#A7ABB5]">
            {review.date}
          </span>
          <StarRow rating={review.rating} />
        </div>
      </div>
      <p className="font-['IBM Plex Sans'] text-[13px] text-[#686D7A] leading-[22px]">
        {review.text}
      </p>
    </div>
  );
}

function DoctorCard({ doctor }) {
  return (
    <div className="w-full rounded-[20px] border border-[#EEF0F3] p-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <img
          src={DoctorThumb}
          alt={doctor.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col gap-[2px]">
          <span className="font-['IBM Plex Sans'] text-[14px] font-medium text-[#161719]">
            {doctor.name}
          </span>
          <span className="font-['IBM Plex Sans'] text-[12px] text-[#A7ABB5]">
            {doctor.specialty}
          </span>
        </div>
      </div>

      <span className="font-['IBM Plex Sans'] text-[12px] text-[#A7ABB5]">
        {doctor.branch}
      </span>

      <div className="flex items-center gap-3 font-['IBM Plex Sans'] text-[12px] text-[#686D7A]">
        <span>
          ★ {doctor.rating} ({doctor.reviews} Reviews)
        </span>
      </div>
      <span className="font-['IBM Plex Sans'] text-[12px] text-[#686D7A]">
        {doctor.experience} Experience
      </span>

      <div className="flex flex-wrap gap-1">
        {doctor.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 rounded-full bg-[#F3F4F8] text-[11px] text-[#4D5260]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-1">
        <span className="font-['IBM Plex Sans'] text-[14px] font-medium text-[#161719]">
          {doctor.price}
        </span>
        <button
          type="button"
          className="px-4 py-2 rounded-full bg-[#0018A6] text-white font-['IBM Plex Sans'] text-[12px]"
        >
          Book a Visit
        </button>
      </div>
    </div>
  );
}

function DoctorProfile() {
  const [isSaved, setIsSaved] = useState(false);
  const [reviewsExpanded, setReviewsExpanded] = useState(false);

  const visibleReviews = reviewsExpanded ? REVIEWS : REVIEWS.slice(0, 3);

  const handleBookAppointment = () => {
    console.log("Book appointment clicked");
  };

  const handleWriteFeedback = () => {
    console.log("Write feedback clicked");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex-1 min-w-0 flex flex-col overflow-hidden bg-white">
        <Navbar />

        <div className="shrink-0 px-6 mt-8">
          <div className="w-[124px] h-[24px] flex items-center gap-[5px] font-['IBM Plex Sans'] text-[12px] leading-[24px] text-[#4D5260]">
            <span className="text-[#A7ABB5]">&lt;</span>
            <span>Doctor Profile</span>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto px-6 pb-6">
          <div className="w-full flex flex-col gap-6 mt-6">
            <div className="w-full  h-[344px] shrink-0 flex gap-[20px]">
              <div
                className="
                 flex-[561] h-[344px]
                flex flex-col gap-[16px]
                rounded-[24px] p-6
              bg-[#0018A6] relative
                "
              >
                <span
                  className="
                    absolute top-6 right-6
                    w-[135px] h-[40px]
                    flex items-center justify-center gap-1
                    rounded-[8px]
                    pt-2 pr-3 pb-2 pl-3
                    bg-[#E7F9EF] text-[#1FA959]
                    font-['IBM Plex Sans'] text-[13px] font-medium
                  "
                >
                  Available Today
                </span>

                <div className="w-[309px] h-[88px] flex items-center gap-[10px] py-2">
                  <img
                    src={DrProfileCard}
                    alt="Dr. Alex Schamberger"
                    className="w-[72px] h-[72px] rounded-full object-cover shrink-0"
                  />
                  <div className="w-[140px] h-[44px] flex flex-col gap-[2px]">
                    <span className="font-['IBM Plex Sans'] text-[16px] font-medium text-white whitespace-nowrap">
                      Dr. Alex Schamberger
                    </span>
                    <span className="font-['IBM Plex Sans'] text-[13px] text-[#C6CBF0]">
                      Dentistry
                    </span>
                  </div>
                </div>

                <div className="w-[369px] h-[16px] flex items-center gap-[16px]">
                  <span className="flex items-center gap-1 font-['IBM Plex Sans'] text-[13px] text-white whitespace-nowrap">
                    <span className="text-[#F5A623]">★</span> 4.8{" "}
                    <span className="text-[#C6CBF0] underline">
                      (328 Reviews)
                    </span>
                  </span>
                  <span className="font-['IBM Plex Sans'] text-[13px] text-[#C6CBF0] whitespace-nowrap">
                    +12k patients
                  </span>
                  <span className="font-['IBM Plex Sans'] text-[13px] text-[#C6CBF0] whitespace-nowrap">
                    12 Years Experience
                  </span>
                </div>

                <div className="w-full h-0 border-t-[0.5px] border-white/30" />

                <p className="font-['IBM Plex Sans'] text-[13px] text-[#C6CBF0] leading-[22px]">
                  Dr. Alex has over 12 years of experience in dentistry and
                  graduated from California State University. Dedicated to
                  providing gentle, high-quality dental care with a focus on
                  healthy, confident smiles.
                </p>

                <div className="flex items-center gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={handleBookAppointment}
                    className="flex-1 h-[48px] rounded-full bg-white text-[#0018A6] font-['IBM Plex Sans'] text-[14px] font-medium"
                  >
                    Book Appointment
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsSaved((s) => !s)}
                    aria-pressed={isSaved}
                    aria-label={isSaved ? "Remove from saved" : "Save doctor"}
                    className="w-[56px] h-[56px] shrink-0 flex items-center justify-center gap-[10px] rounded-xl p-3 bg-[#0072C3]"
                  >
                    <img
                      src={BookmarkIcon}
                      alt=""
                      className="w-[24px] h-[24px] "
                      style={{ opacity: isSaved ? 1 : 0.6 }}
                    />
                  </button>
                </div>
              </div>

              <div
                className="
                flex-[547] h-[344px]
                flex flex-col gap-[24px]
                rounded-[32px] border border-[#DFE1E6]
                pt-6 pr-4 pb-6 pl-4
                "
              >
                <div className="w-full h-[32px] shrink-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={VisitInfoIcon}
                      alt=""
                      className="w-[20px] h-[20px]"
                    />
                    <span className="font-['IBM Plex Sans'] text-[14px] font-medium text-[#4D5260]">
                      Visit Information
                    </span>
                  </div>
                </div>

                <div className="w-full h-[212px] shrink-0 flex gap-[8px]">
                  <div className="flex-1 h-[200px] shrink-0 flex flex-col gap-[40px]">
                    <VisitInfoItem
                      icon={FeeIcon}
                      label="Fee"
                      value="$80 / Visit"
                    />
                    <VisitInfoItem
                      icon={DurationIcon}
                      label="Duration"
                      value="30 Minutes"
                    />
                    <VisitInfoItem
                      icon={LocationIcon}
                      label="Location"
                      value="Main Branch, Cairo"
                    />
                  </div>

                  <div className="flex-1 h-[200px] shrink-0 flex flex-col gap-[40px]">
                    <VisitInfoItem
                      icon={HoursIcon}
                      label="Working Hours"
                      value="Mon-Thu, 9:00 AM - 5:00 PM"
                    />
                    <VisitInfoItem
                      icon={AvailabilityIcon}
                      label="Availability"
                      value="Available Today"
                    />
                    <VisitInfoItem
                      icon={VisitTypeIcon}
                      label="Visit Type"
                      value="In-Clinic"
                      isTag
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="
    w-full h-[114px] shrink-0
    flex flex-col gap-[24px]
    rounded-[32px] border border-[#DFE1E6]
    p-4
  "
            >
              <div className="w-full h-[32px] shrink-0 flex items-center justify-between">
                <div className="w-[254px] h-[32px] flex items-center gap-2">
                  <img src={ServicesIcon} alt="" className="w-5 h-5" />
                  <span className="font-['IBM Plex Sans'] text-[14px] font-medium text-[#4D5260]">
                    Services
                  </span>
                </div>
              </div>

              <div className="w-full h-[24px] shrink-0 flex items-center gap-[8px]">
                <ServicePill label="Heart Check-up" />
                <ServicePill label="Stress Test" />
                <ServicePill label="Stress Test" />
                <ServicePill label="Hypertension Treatment" />
                <ServicePill label="Stress Test" />
                <ServicePill label="Arrhythmia Care" />
              </div>
            </div>
            <div className="w-full rounded-[24px] border border-[#DFE1E6] p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={ReviewsIcon} alt="" className="w-4 h-4" />
                  <span className="font-['IBM Plex Sans'] text-[14px] font-medium text-[#4D5260]">
                    Reviews
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleWriteFeedback}
                  className="flex items-center gap-1 font-['IBM Plex Sans'] text-[13px] text-[#0018A6]"
                >
                  <img src={EditIcon} alt="" className="w-3.5 h-3.5" />
                  Write Feedback
                </button>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <span className="font-['IBM Plex Sans'] text-[32px] font-semibold text-[#0018A6]">
                    4.2
                  </span>
                  <StarRow rating={4} size={16} />
                  <span className="font-['IBM Plex Sans'] text-[12px] text-[#A7ABB5]">
                    328 Reviews
                  </span>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  {RATING_BREAKDOWN.map((row) => (
                    <RatingBarRow
                      key={row.stars}
                      stars={row.stars}
                      percent={row.percent}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                {visibleReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
              {REVIEWS.length > 3 && (
                <button
                  type="button"
                  onClick={() => setReviewsExpanded((e) => !e)}
                  className="self-center font-['IBM Plex Sans'] text-[13px] text-[#0018A6] font-medium"
                >
                  {reviewsExpanded ? "See Less" : "See More"}
                </button>
              )}
            </div>

            <div className="w-full flex flex-col gap-4 pb-4">
              <span className="font-['IBM Plex Sans'] text-[14px] font-medium text-[#4D5260]">
                You May Also Like
              </span>
              <div className="grid grid-cols-4 gap-4">
                {RELATED_DOCTORS.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default DoctorProfile;
