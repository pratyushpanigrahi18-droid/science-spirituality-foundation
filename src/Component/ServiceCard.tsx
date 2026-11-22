
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
      {isPLR ? (
        <a
          href={link}
          className="service-card-icon"
          aria-label="Explore Past Life Regression"
          style={{
            padding: 0,
            overflow: "hidden",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <img
            src="/plr-service-card.webp"
            alt="Past Life Regression"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </a>
      ) : (
        <div className="service-card-icon">✦</div>
      )}

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
