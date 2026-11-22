
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

  return (
    <article className="service-card">
      {isPLR && (
        <img
          src="/plr-service-card.webp"
          alt="Past Life Regression session at SSF"
          className="plr-service-card-photo"
          loading="lazy"
        />
      )}

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
