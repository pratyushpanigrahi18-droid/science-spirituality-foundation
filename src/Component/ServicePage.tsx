
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
  const [activeFingerprintTab, setActiveFingerprintTab] = React.useState("overview");

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

          /* Past Life Regression hero */

          .service-page .plr-service-hero {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            aspect-ratio: 16 / 9;
            min-height: 560px;
            max-height: 820px;
            overflow: hidden;
            padding: 70px 24px;
            isolation: isolate;
            background: #18271f;
            background-image:
              linear-gradient(
                rgba(21, 42, 29, 0.30),
                rgba(21, 42, 29, 0.46)
              ),
              url("/plr-hero.webp?v=5");
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            text-align: center;
          }

          .service-page .plr-service-hero-inner {
            position: relative;
            z-index: 1;
            width: min(100%, 900px);
            margin: 0 auto;
            color: #ffffff;
          }

          .service-page .plr-service-hero .service-page-label {
            margin-bottom: 18px;
            color: #e9e6c9;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 2.5px;
          }

          .service-page .plr-service-hero h1 {
            margin: 0 0 20px;
            color: #ffffff;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(42px, 6vw, 72px);
            font-weight: 500;
            line-height: 1.15;
          }

          .service-page .plr-service-hero-inner > p:last-child {
            max-width: 720px;
            margin: 0 auto;
            color: #ffffff;
            font-size: clamp(16px, 2vw, 20px);
            line-height: 1.7;
          }

          /* Fingerprint Analysis hero image */
          .service-page .fingerprint-service-hero {
            width: 100%;
            overflow: hidden;
            background: #f7f4eb;
            line-height: 0;
          }

          .service-page .fingerprint-service-image {
            display: block;
            width: 100%;
            height: auto;
            max-width: 100%;
            object-fit: contain;
            object-position: center;
          }

          /* Fingerprint Analysis information tabs */
           .fingerprint-tabs-section {
             width: 100%; padding: 64px 5%; background: #f8f6ef; color: #173d2c;
           }
           .fingerprint-tabs-inner { max-width: 1120px; margin: 0 auto; }
           .fingerprint-tabs-heading {
             margin: 0 0 10px; text-align: center; color: #173d2c;
             font-family: Georgia, "Times New Roman", serif; font-size: clamp(28px, 4vw, 40px);
           }
           .fingerprint-tabs-intro {
             max-width: 760px; margin: 0 auto 30px; text-align: center;
             color: #526258; line-height: 1.7;
           }
           .fingerprint-tab-list {
             display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin: 0 0 22px;
           }
           .fingerprint-tab-button {
             border: 1px solid #b99a5a; border-radius: 999px; padding: 12px 22px;
             background: #fff; color: #173d2c; font: inherit; font-weight: 600; cursor: pointer;
             transition: background 0.2s ease, color 0.2s ease;
           }
           .fingerprint-tab-button[aria-selected="true"] {
             background: #173d2c; border-color: #173d2c; color: #fff;
           }
           .fingerprint-tab-button:focus-visible { outline: 3px solid #d7b66e; outline-offset: 3px; }
           .fingerprint-tab-panel {
             min-height: 190px; padding: 30px clamp(20px, 4vw, 42px);
             border: 1px solid rgba(185, 154, 90, 0.45); border-radius: 20px;
             background: #fff; box-shadow: 0 12px 30px rgba(23, 61, 44, 0.07);
           }
           .fingerprint-tab-panel h3 {
             margin: 0 0 12px; color: #173d2c; font-family: Georgia, "Times New Roman", serif; font-size: 25px;
           }
           .fingerprint-tab-panel p { margin: 0 0 12px; color: #46564b; line-height: 1.75; }
           .fingerprint-tab-panel p:last-child { margin-bottom: 0; }
           @media (max-width: 600px) {
             .fingerprint-tabs-section { padding: 46px 5%; }
             .fingerprint-tab-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
             .fingerprint-tab-button { padding: 11px 8px; font-size: 14px; }
             .fingerprint-tab-panel { min-height: 0; padding: 24px 20px; }
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
          .dowsing-areas-section,
          .plr-concerns-section {
            width: 100%;
            padding: 70px 4%;
            text-align: center;
          }

          .reiki-concerns-title,
          .dowsing-areas-title,
          .plr-concerns-title {
            margin-bottom: 45px;
          }

          .reiki-concerns-title h2,
          .dowsing-areas-title h2,
          .plr-concerns-title h2 {
            margin-bottom: 12px;
          }

          .reiki-concerns-title p,
          .dowsing-areas-title p,
          .plr-concerns-title p {
            max-width: 750px;
            margin: 0 auto;
            line-height: 1.7;
          }

          .reiki-concerns-grid,
          .dowsing-areas-grid,
          .plr-concerns-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 24px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .reiki-concern-card,
          .dowsing-area-card,
          .plr-concern-card {
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
          .dowsing-area-card:hover,
          .plr-concern-card:hover {
            transform: translateY(-7px);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.14);
            border-color: rgba(112, 79, 145, 0.35);
          }

          .reiki-concern-name,
          .dowsing-area-name,
          .plr-concern-name {
            font-size: 1.12rem;
            font-weight: 600;
            color: #3f3151;
            line-height: 1.45;
          }

          /* Centre the seventh Dowsing card on desktop */
          @media (min-width: 901px) {
            .dowsing-areas-grid > .dowsing-area-card:nth-child(7) {
              grid-column: 2;
            }
          }

          @media (max-width: 900px) {
            .reiki-concerns-grid,
            .dowsing-areas-grid,
            .plr-concerns-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 20px;
            }

            /* Centre the seventh Dowsing card on tablet */
            .dowsing-areas-grid > .dowsing-area-card:nth-child(7) {
              grid-column: 1 / -1;
              width: calc(50% - 10px);
              justify-self: center;
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

            .service-page .plr-service-hero {
              aspect-ratio: auto;
              min-height: 460px;
              max-height: none;
              padding: 55px 20px;
              background-size: cover;
              background-position: center center;
              background-color: #18271f;
            }

            .service-page .plr-service-hero h1 {
              font-size: 42px;
            }

            .service-page .plr-service-hero .service-page-label {
              font-size: 10px;
              letter-spacing: 1.6px;
            }

            .reiki-concerns-section,
            .dowsing-areas-section,
            .plr-concerns-section {
              padding: 50px 5%;
            }

            .reiki-concerns-grid,
            .dowsing-areas-grid,
            .plr-concerns-grid {
              grid-template-columns: 1fr;
              gap: 18px;
            }

            .dowsing-areas-grid > .dowsing-area-card:nth-child(7) {
              grid-column: auto;
              width: 100%;
            }

            .reiki-concern-card,
            .dowsing-area-card,
            .plr-concern-card {
              min-height: 105px;
              padding: 22px 18px;
            }

            .reiki-concern-name,
            .dowsing-area-name,
            .plr-concern-name {
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
      ) : isPLR ? (
        <section className="plr-service-hero">
          <div className="plr-service-hero-inner">
            <p className="service-page-label">
              SCIENCE & SPIRITUALITY FOUNDATION
            </p>

            <h1>{title}</h1>

            <p>{subtitle}</p>
          </div>
        </section>
      ) : isFingerprint ? (
        <section className="fingerprint-service-hero">
          <img
            src="/ssf-fingerprints-brain-hero.webp"
            alt="Science and Spirituality Foundation: Fingerprints and the Brain"
            className="fingerprint-service-image"
            loading="eager"
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
        {isFingerprint && (
          <section className="fingerprint-tabs-section">
            <div className="fingerprint-tabs-inner">
              <h2 className="fingerprint-tabs-heading">Explore Fingerprint Analysis</h2>
              <p className="fingerprint-tabs-intro">
                Learn about fingerprint patterns, their formation and the limits of what fingerprint analysis can tell us.
              </p>
              <div className="fingerprint-tab-list" role="tablist" aria-label="Fingerprint analysis topics">
                <button type="button" role="tab" id="fingerprint-tab-overview" aria-selected={activeFingerprintTab === "overview"} aria-controls="fingerprint-tab-content" className="fingerprint-tab-button" onClick={() => setActiveFingerprintTab("overview")}>Overview</button>
                <button type="button" role="tab" id="fingerprint-tab-patterns" aria-selected={activeFingerprintTab === "patterns"} aria-controls="fingerprint-tab-content" className="fingerprint-tab-button" onClick={() => setActiveFingerprintTab("patterns")}>Fingerprint Patterns</button>
                <button type="button" role="tab" id="fingerprint-tab-development" aria-selected={activeFingerprintTab === "development"} aria-controls="fingerprint-tab-content" className="fingerprint-tab-button" onClick={() => setActiveFingerprintTab("development")}>Brain & Development</button>
                <button type="button" role="tab" id="fingerprint-tab-guidance" aria-selected={activeFingerprintTab === "guidance"} aria-controls="fingerprint-tab-content" className="fingerprint-tab-button" onClick={() => setActiveFingerprintTab("guidance")}>Analysis & Guidance</button>
              </div>
              <div className="fingerprint-tab-panel" id="fingerprint-tab-content" role="tabpanel" aria-labelledby={`fingerprint-tab-${activeFingerprintTab}`}>
                {activeFingerprintTab === "overview" && (
                  <>
                    <h3>Understanding Your Fingerprints</h3>
                    <p>Fingerprints are the distinct ridge patterns on the fingertips. They form before birth and generally remain stable throughout life, making them useful for identification.</p>
                    <p>Dermatoglyphics is the scientific study of epidermal ridge patterns on fingers, palms and soles.</p>
                  </>
                )}
                {activeFingerprintTab === "patterns" && (
                  <>
                    <h3>Three Common Pattern Groups</h3>
                    <p><strong>Loops</strong> curve into the fingertip and exit on the same side; <strong>whorls</strong> form circular or spiral-like patterns; and <strong>arches</strong> rise and pass across the fingertip.</p>
                    <p>Each group has variations. A fingerprint examiner studies ridge flow and detail rather than relying only on the broad pattern name.</p>
                  </>
                )}
                {activeFingerprintTab === "development" && (
                  <>
                    <h3>Fingerprints, Brain & Development</h3>
                    <p>Fingerprint ridges develop during prenatal life. Skin and the nervous system have related early embryological origins, and their development overlaps in time.</p>
                    <p>This developmental relationship does not establish that a fingerprint pattern can identify a person's intelligence, personality, brain function or learning ability.</p>
                  </>
                )}
                {activeFingerprintTab === "guidance" && (
                  <>
                    <h3>What an Analysis Session Covers</h3>
                    <p>A session can introduce visible fingerprint patterns and explain the basics of dermatoglyphics in an educational and exploratory setting.</p>
                    <p>Fingerprint patterns are not a validated way to diagnose health conditions or determine personality, intelligence, learning style or career suitability. Any personal guidance should be treated as reflective discussion, not a scientific assessment.</p>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

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
              <h2>Explore the Unknown</h2>

              <p>
                Explore your questions and enquiries through a personalised
                dowsing session.
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

        {isPLR && (
          <section className="plr-concerns-section">
            <div className="plr-concerns-title">
              <h2>What Would You Like to Explore?</h2>

              <p>
                Choose an area you would like to explore during your
                Past Life Regression enquiry.
              </p>
            </div>

            <div className="plr-concerns-grid">
              {plrConcerns.map((concern) => (
                <a
                  key={concern}
                  href="#booking"
                  className="plr-concern-card"
                  onClick={(event) =>
                    handleConcernClick(event, "Past Life Regression")
                  }
                >
                  <div className="plr-concern-name">{concern}</div>
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

              if (isReiki || isDowsing || isPLR || isFingerprint) {
                window.dispatchEvent(
                  new CustomEvent<string>("ssf-select-service", {
                    detail: isReiki
                      ? "Reiki Healing"
                      : isDowsing
                      ? "Dowsing"
                      : isPLR
                      ? "Past Life Regression"
                      : "Fingerprint Analysis",
                  })
                );
              }

              scrollToBooking();
            }}
          >
            Book a Session
          </a>

          <a
            href="#contact"
            className="service-page-button secondary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
