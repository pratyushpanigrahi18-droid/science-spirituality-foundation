
import React from "react";
import ServiceCard from "./ServiceCard.tsx";

const Services: React.FC = () => {
  const services = [
    {
      title: "Reiki Healing",
      description:
        "Explore Reiki as a complementary practice for relaxation, emotional wellbeing and inner balance.",
      link: "/services/reiki",
    },
    {
      title: "Dowsing",
      description:
        "Explore dowsing practices for water source exploration, spaces and personal energy awareness.",
      link: "/services/dowsing",
    },
    {
      title: "Past Life Regression",
      description:
        "Explore inner experiences through guided regression and transpersonal exploration.",
      link: "/services/past-life-regression",
    },
    {
      title: "Meditation",
      description:
        "Develop focus, mindfulness and inner calm through meditation practices.",
      link: "/services/meditation",
    },
    {
      title: "Manifestation",
      description:
        "Explore intention, visualization and focused action for personal development.",
      link: "/services/manifestation",
    },
    {
      title: "Fingerprint Analysis",
      description:
        "Explore fingerprint patterns as a tool for self-understanding and personal guidance.",
      link: "/services/fingerprint-analysis",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>
            Explore our range of services designed to support self-awareness,
            wellbeing and personal growth.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
