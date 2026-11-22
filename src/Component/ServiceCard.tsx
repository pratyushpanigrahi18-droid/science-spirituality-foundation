import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

// Add a photo here as each service image becomes available in public/.
const servicePhotos: Record<string, string> = {
  "past life regression": "/plr-service-card.webp",
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  link,
}) => {
  const photo = servicePhotos[title.trim().toLowerCase()];

  if (photo) {
    return (
      <article className="service-card photo-service-card">
        <a
          href={link}
          className="photo-service-card-link"
          aria-label={`Explore ${title}`}
        >
          <img
            src={photo}
            alt={`${title} at Science & Spirituality Foundation`}
            className="photo-service-card-image"
            loading="lazy"
          />
          <h3 className="photo-service-card-title">{title}</h3>
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
