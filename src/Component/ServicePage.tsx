
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
  sections = [],
}) => {
  const safeTitle = (title ?? "").toLowerCase();
  const isReiki = safeTitle === "reiki healing";
  const isDowsing = safeTitle === "dowsing";

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
  ) => {
    event.preventDefault();

    window.dispatchEvent(
      new CustomEvent<string>("ssf-select-service", {
        detail: serviceName,
      })
    );

    scrollToBooking();
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

          /* Dowsing image replaces the green hero strip */

          .service-page .dowsing-service-hero {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 500px;
            overflow: hidden;
            padding: 70px 24px;
            background-image:
              linear-gradient(
                rgba(9, 29, 20, 0.42),
                rgba(9, 29, 20, 0.58)
              ),
              url("/dowsing-hero.webp");
            background-size: cover;
            background-position: center 45%;
            background-repeat: no-repeat;
            text-align: center;
          }

          .service-page .dowsing-service-hero-inner {
            position: relative;
            z-index: 1;
            width: min(100%, 900px);
            margin: 0 auto;
            color: #ffffff;
          }

          .service-page .dowsing-service-hero .service-page-label {
            margin-bottom: 18px;
            color: #f1dfb5;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 2.5px;
          }

          .service-page .dowsing-service-hero h1 {
            margin: 0 0 20px;
            color: #ffffff;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(52px, 7vw, 82px);
            font-weight: 500;
            line-height: 1.1;
          }

          .service-page .dowsing-service-hero-inner > p:last-child {
            max-width: 720px;
            margin: 0 auto;
            color: #ffffff;
            font-size: clamp(17px, 2vw, 21px);
            line-height: 1.7;
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
            .service-page .dowsing-service-hero {
              min-height: 390px;
              padding: 55px 20px;
              background-position: center center;
            }

            .service-page .dowsing-service-hero h1 {
              font-size: 48px;
            }

            .service-page .dowsing-service-hero .service-page-label {
              font-size: 11px;
              letter-spacing: 1.8px;
            }

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
      ) : isDowsing ? (
        <section className="dowsing-service-hero">
          <div className="dowsing-service-hero-inner">
            <p className="service-page-label">
              SCIENCE & SPIRITUALITY FOUNDATION
            </p>

            <h1>{title}</h1>

            <p>{subtitle}</p>
          </div>
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

            {typeof section.content === "string" && (
              <p>{section.content}</p>
            )}

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

            {Array.isArray(section.bullets) &&
              section.bullets.length > 0 && (
                <ul>
                  {section.bullets.map(
                    (bullet: string, bulletIndex: number) => (
                      <li key={bulletIndex}>{bullet}</li>
                    )
                  )}
                </ul>
              )}

            {section.note && (
              <div className="service-page-note">
                {section.note}
              </div>
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
                  onClick={(event) =>
                    handleConcernClick(event, "Reiki Healing")
                  }
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

              <p>
                Select an area below to enquire about a dowsing session.
              </p>
            </div>

            <div className="dowsing-areas-grid">
              {dowsingAreas.map((area) => (
                <a
                  key={area}
                  href="#booking"
                  className="dowsing-area-card"
                  onClick={(event) =>
                    handleConcernClick(event, "Dowsing")
                  }
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

              if (isReiki || isDowsing) {
                window.dispatchEvent(
                  new CustomEvent<string>("ssf-select-service", {
                    detail: isReiki ? "Reiki Healing" : "Dowsing",
                  })
                );
              }

              scrollToBooking();
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
