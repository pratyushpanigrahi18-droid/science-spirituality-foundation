import React from "react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  sections: any[];
}

const reikiConcerns = [
  "Stress & Anxiety",
  "Headaches & Migraines",
  "Sleep Problems / Insomnia",
  "Neck & Back Pain",
  "Joint Pain",
  "Digestive Problems",
  "Fatigue & Low Energy",
  "Emotional Stress",
  "Concentration & Mental Clarity",
  "Work & Study Pressure",
  "Relationship & Emotional Wellbeing",
  "Grief & Emotional Healing",
  "Self-Confidence & Inner Balance",
  "Women's Wellness",
  "Chronic Pain & General Discomfort",
  "Relaxation & Inner Peace",
  "Personal Growth & Self-Discovery",
  "Any Other Problem",
];

const dowsingAreas = [
  "Water Source Exploration",
  "Land & Property",
  "Home & Space Energy",
  "Personal Energy",
  "Wellness & Balance",
  "Object & Environmental Checking",
  "Decision Guidance",
  "Energy Blockage Exploration",
  "Space Harmony",
  "Any Other Enquiry",
];

const ServicePage: React.FC<ServicePageProps> = ({
  title,
  subtitle,
  sections,
}) => {
  const isReiki = title.toLowerCase() === "reiki healing";
  const isDowsing = title.toLowerCase() === "dowsing";

  const handleConcernClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const bookingSection = document.getElementById("booking");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="service-page">
      <style>
        {`
          .service-page .reiki-service-hero {
            position: relative;
            width: 100%;
            overflow: hidden;
            background: #f5f1e8;
            line-height: 0;
          }

          .service-page .reiki-service-image {
            display: block;
            width: 100%;
            height: auto;
            max-width: 100%;
            object-fit: contain;
            object-position: center center;
          }

          .service-page .service-page-hero {
            position: relative;
            z-index: 1;
          }

          .service-page .service-page-content {
            position: relative;
            z-index: 2;
            line-height: normal;
          }

          .reiki-concerns-section,
          .dowsing-areas-section {
            width: 100%;
            padding: 70px 4%;
            text-align: center;
          }

          .reiki-concerns-title,
          .dowsing-areas-title {
            margin-bottom: 45px;
          }

          .reiki-concerns-title h2,
          .dowsing-areas-title h2 {
            margin-bottom: 12px;
          }

          .reiki-concerns-title p,
          .dowsing-areas-title p {
            max-width: 750px;
            margin: 0 auto;
            line-height: 1.7;
          }

          .reiki-concerns-grid,
          .dowsing-areas-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .reiki-concern-card,
          .dowsing-area-card {
            min-height: 125px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px 22px;
            border-radius: 18px;
            text-decoration: none;
            background: linear-gradient(
              135deg,
              #ffffff,
              #f8f3fb
            );
            border: 1px solid rgba(112, 79, 145, 0.12);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
            cursor: pointer;
          }

          .reiki-concern-card:hover,
          .dowsing-area-card:hover {
            transform: translateY(-7px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.14);
            border-color: rgba(112, 79, 145, 0.35);
          }

          .reiki-concern-name,
          .dowsing-area-name {
            font-size: 1.12rem;
            font-weight: 600;
            color: #3f3151;
            line-height: 1.45;
          }

          @media (max-width: 900px) {
            .reiki-concerns-grid,
            .dowsing-areas-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 20px;
            }
          }

          @media (max-width: 600px) {
            .reiki-concerns-section,
            .dowsing-areas-section {
              padding: 50px 5%;
            }

            .reiki-concerns-grid,
            .dowsing-areas-grid {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            .reiki-concern-card,
            .dowsing-area-card {
              min-height: 105px;
              padding: 22px 18px;
            }

            .reiki-concern-name,
            .dowsing-area-name {
              font-size: 1.05rem;
            }
          }
        `}
      </style>

      {isReiki ? (
        <section className="reiki-service-hero">
          <img
            src="/reiki-healing.png"
            alt="Reiki Healing"
            className="reiki-service-image"
          />
        </section>
      ) : (
        <section className="service-page-hero">
          <div className="service-page-hero-inner">
            <p className="service-page-label">
              SCIENCE & SPIRITUALITY FOUNDATION
            </p>

            <h1>{title}</h1>

            <p>{subtitle}</p>
          </div>
        </section>
      )}

      <div className="service-page-content">
        {sections.map((section, index) => (
          <section className="service-page-section" key={index}>
            {section.title && <h2>{section.title}</h2>}

            {section.heading && <h2>{section.heading}</h2>}

            {typeof section.content === "string" && <p>{section.content}</p>}

            {Array.isArray(section.content) &&
              section.content.map(
                (paragraph: string, paragraphIndex: number) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                )
              )}

            {Array.isArray(section.paragraphs) &&
              section.paragraphs.map(
                (paragraph: string, paragraphIndex: number) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                )
              )}

            {Array.isArray(section.bullets) && section.bullets.length > 0 && (
              <ul>
                {section.bullets.map((bullet: string, bulletIndex: number) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            )}

            {section.note && (
              <div className="service-page-note">{section.note}</div>
            )}
          </section>
        ))}

        {isReiki && (
          <section className="reiki-concerns-section">
            <div className="reiki-concerns-title">
              <h2>Are You Facing Any of These?</h2>

              <p>
                Explore Reiki as a complementary practice for relaxation,
                emotional wellbeing, self-awareness and personal balance.
              </p>
            </div>

            <div className="reiki-concerns-grid">
              {reikiConcerns.map((concern) => (
                <a
                  key={concern}
                  href="#booking"
                  className="reiki-concern-card"
                  onClick={handleConcernClick}
                >
                  <div className="reiki-concern-name">{concern}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {isDowsing && (
          <section className="dowsing-areas-section">
            <div className="dowsing-areas-title">
              <h2>What Would You Like to Explore?</h2>

              <p>Select an area below to enquire about a dowsing session.</p>
            </div>

            <div className="dowsing-areas-grid">
              {dowsingAreas.map((area) => (
                <a
                  key={area}
                  href="#booking"
                  className="dowsing-area-card"
                  onClick={handleConcernClick}
                >
                  <div className="dowsing-area-name">{area}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        <div className="service-page-actions">
          <a
            href="#booking"
            className="service-page-button"
            onClick={(event) => {
              event.preventDefault();

              const bookingSection = document.getElementById("booking");

              if (bookingSection) {
                bookingSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Book a Session
          </a>

          <a href="/#contact" className="service-page-button secondary">
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
