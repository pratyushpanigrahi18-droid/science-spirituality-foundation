
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
}) => {
  const isPLR = title.toLowerCase().includes("past life regression");

  if (isPLR) {
    return (
      <article className="service-card plr-full-card">
        <a
          href={link}
          className="plr-full-card-link"
          aria-label="Explore Past Life Regression"
        >
          <img
            src="/plr-service-card.webp"
            alt="Past Life Regression session at SSF"
            className="plr-full-card-image"
            loading="lazy"
          />
          <h3 className="plr-full-card-title">
            Past Life Regression
          </h3>
        </a>
      </article>
    );
  }

  return (
    <article className="service-card">
      <div className="service-card-icon">✦</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <a href={link} className="service-card-link">
        Learn More
        <span>→</span>
      </a>
    </article>
  );
};

export default ServiceCard;
