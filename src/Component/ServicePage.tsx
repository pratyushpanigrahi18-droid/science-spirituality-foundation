
import React from "react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  sections: any[];
}

const reikiConcerns = [
  "Stress & Anxiety",
  "Headaches & Migraines",
  "Quick Pain Relief",
  "Neck & Back Pain",
  "Joint Pain",
  "Digestive Problems",
  "Fatigue & Low Energy",
  "Emotional Stress",
  "Wellness Assessment",
  "Distance Healing",
  "Relationship & Emotional Wellbeing",
  "Grief & Emotional Healing",
  "Chakra Cleaning",
  "Women's Wellness",
  "Chronic Pain & General Discomfort",
  "Relaxation & Inner Peace",
  "Personal Growth & Self-Discovery",
  "Any Other Problem",
];

const dowsingAreas = [
  "Lost Things & Lost Persons",
  "Any Negative Energy on You",
  "Energy of a Place",
  "Past, Present & Future Questions",
  "Career & Professional Growth",
  "Marriage & Relationship Prospects",
  "Other Enquiries",
];

const plrConcerns = [
  "Repeating Problems in Life",
  "Relationship Difficulties",
  "Recurring Physical Pain or Discomfort",
  "Mental and Emotional Disturbances",
  "Fears and Phobias",
  "Anxiety and Insecurity",
  "Emotional Triggers",
  "Feeling Stuck in Life",
  "Attachment and Difficulty Letting Go",
  "Self-Worth and Confidence",
  "Unexplained Connections or Familiarity",
  "Recurring Dreams or Inner Imagery",
  "Childhood or Early-Life Experiences",
  "Spiritual Exploration and Curiosity",
  "Other Personal Concern",
];

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  sections = [],
}) => {
  const safeTitle = (title ?? "").toLowerCase();
  const isReiki = safeTitle === "reiki healing";
  const isDowsing = safeTitle === "dowsing";
  const isPLR = safeTitle === "past life regression";
  const isFingerprint = safeTitle === "fingerprint analysis";
  const isManifestation = safeTitle === "manifestation";
  const [activeFingerprintTab, setActiveFingerprintTab] = React.useState("overview");
  const [activeManifestationTab, setActiveManifestationTab] = React.useState("overview");

  // Desktop: scroll to the booking section.
  // Mobile: scroll directly to the actual booking form.
  const scrollToBooking = () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    const bookingSection = document.getElementById("booking");

    const bookingForm = isMobile
      ? document.querySelector<HTMLElement>(".booking-form-card")
      : null;

    const target = bookingForm || bookingSection;

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleConcernClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    serviceName: string
