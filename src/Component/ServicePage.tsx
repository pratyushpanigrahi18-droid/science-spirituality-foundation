
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

  function handleConcernClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    serviceName: string
  ): void {
    event.preventDefault();

    window.dispatchEvent(
      new CustomEvent<string>("ssf-select-service", {
        detail: serviceName,
      })
    );

    scrollToBooking();
  }

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

          /* Manifestation diary hero image */
          .service-page .manifestation-service-hero {
            width: 100%;
            overflow: hidden;
            background: #f7f4eb;
            line-height: 0;
          }

          .service-page .manifestation-service-image {
            display: block;
            width: 100%;
            height: auto;
            max-width: 100%;
            object-fit: contain;
            object-position: center;
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
           .fingerprint-tabs-section,
           .manifestation-tabs-section {
             width: 100%; padding: 64px 5%; background: #f8f6ef; color: #173d2c;
           }
           .fingerprint-tabs-inner,
           .manifestation-tabs-inner { max-width: 1120px; margin: 0 auto; }
           .fingerprint-tabs-heading,
           .manifestation-tabs-heading {
             margin: 0 0 10px; text-align: center; color: #173d2c;
             font-family: Georgia, "Times New Roman", serif; font-size: clamp(28px, 4vw, 40px);
           }
           .fingerprint-tabs-intro,
           .manifestation-tabs-intro {
             max-width: 760px; margin: 0 auto 30px; text-align: center;
             color: #526258; line-height: 1.7;
           }
           .fingerprint-tab-list,
           .manifestation-tab-list {
             display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin: 0 0 22px;
           }
           .fingerprint-tab-button,
           .manifestation-tab-button {
             border: 1px solid #b99a5a; border-radius: 999px; padding: 12px 22px;
             background: #fff; color: #173d2c; font: inherit; font-weight: 600; cursor: pointer;
             transition: background 0.2s ease, color 0.2s ease;
           }
           .fingerprint-tab-button[aria-selected="true"],
           .manifestation-tab-button[aria-selected="true"] {
             background: #173d2c; border-color: #173d2c; color: #fff;
           }
           .fingerprint-tab-button:focus-visible,
           .manifestation-tab-button:focus-visible { outline: 3px solid #d7b66e; outline-offset: 3px; }
           .fingerprint-tab-panel,
           .manifestation-tab-panel {
             min-height: 190px; padding: 30px clamp(20px, 4vw, 42px);
             border: 1px solid rgba(185, 154, 90, 0.45); border-radius: 20px;
             background: #fff; box-shadow: 0 12px 30px rgba(23, 61, 44, 0.07);
           }
           .fingerprint-tab-panel h3,
           .manifestation-tab-panel h3 {
             margin: 0 0 12px; color: #173d2c; font-family: Georgia, "Times New Roman", serif; font-size: 25px;
           }
           .fingerprint-tab-panel p,
           .manifestation-tab-panel p { margin: 0 0 12px; color: #46564b; line-height: 1.75; }
           .fingerprint-tab-panel p:last-child,
           .manifestation-tab-panel p:last-child { margin-bottom: 0; }
           @media (max-width: 600px) {
             .fingerprint-tabs-section,
             .manifestation-tabs-section { padding: 46px 5%; }
             .fingerprint-tab-list,
             .manifestation-tab-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
             .fingerprint-tab-button,
             .manifestation-tab-button { padding: 11px 8px; font-size: 14px; }
             .fingerprint-tab-panel,
             .manifestation-tab-panel { min-height: 0; padding: 24px 20px; }
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
      ) : isManifestation ? (
        <section className="manifestation-service-hero">
          <img
            src="/ssf-manifestation-diary.webp"
            alt="Manifestation: writing intentions in a diary and visualising meaningful goals becoming reality"
            className="manifestation-service-image"
            loading="eager"
          />
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
        {isManifestation && (
          <section className="manifestation-tabs-section">
            <div className="manifestation-tabs-inner">
              <h2 className="manifestation-tabs-heading">Explore Manifestation</h2>
              <p className="manifestation-tabs-intro">
                A conscious practice of clarifying what matters to you, visualising your goals and taking meaningful steps towards them.
              </p>
              <div className="manifestation-tab-list" role="tablist" aria-label="Manifestation topics">
                <button type="button" role="tab" id="manifestation-tab-overview" aria-selected={activeManifestationTab === "overview"} aria-controls="manifestation-tab-content" className="manifestation-tab-button" onClick={() => setActiveManifestationTab("overview")}>Overview</button>
                <button type="button" role="tab" id="manifestation-tab-principles" aria-selected={activeManifestationTab === "principles"} aria-controls="manifestation-tab-content" className="manifestation-tab-button" onClick={() => setActiveManifestationTab("principles")}>Core Principles</button>
                <button type="button" role="tab" id="manifestation-tab-tools" aria-selected={activeManifestationTab === "tools"} aria-controls="manifestation-tab-content" className="manifestation-tab-button" onClick={() => setActiveManifestationTab("tools")}>Process & Tools</button>
                <button type="button" role="tab" id="manifestation-tab-benefits" aria-selected={activeManifestationTab === "benefits"} aria-controls="manifestation-tab-content" className="manifestation-tab-button" onClick={() => setActiveManifestationTab("benefits")}>Benefits</button>
                <button type="button" role="tab" id="manifestation-tab-practice" aria-selected={activeManifestationTab === "practice"} aria-controls="manifestation-tab-content" className="manifestation-tab-button" onClick={() => setActiveManifestationTab("practice")}>Practice Guide</button>
              </div>
              <div className="manifestation-tab-panel" id="manifestation-tab-content" role="tabpanel" aria-labelledby={`manifestation-tab-${activeManifestationTab}`}>
                {activeManifestationTab === "overview" && (
                  <>
                    <h3>What Is Manifestation?</h3>
                    <p>Manifestation can be approached as a reflective process of identifying what you want to work towards, bringing your attention to that intention and aligning your everyday choices with it.</p>
                    <p>Visualisation can help you imagine a desired outcome, while planning and consistent action help translate that intention into practical steps. Visualisation alone cannot guarantee an outcome.</p>
                  </>
                )}
                {activeManifestationTab === "principles" && (
                  <>
                    <h3>Core Principles</h3>
                    <p><strong>Clarity:</strong> define what is meaningful and specific to you. <strong>Self-awareness:</strong> understand the reasons behind your intention. <strong>Constructive mindset:</strong> practise supportive and realistic self-talk.</p>
                    <p><strong>Alignment:</strong> connect your daily choices with your priorities. <strong>Inspired action:</strong> take practical steps, learn from setbacks and adjust your approach.</p>
                  </>
                )}
                {activeManifestationTab === "tools" && (
                  <>
                    <h3>Process & Tools</h3>
                    <p>Use intention-setting and journaling to put your goals into words. Try visualisation as a form of mental rehearsal: imagine the process, the effort involved and how you might respond to challenges.</p>
                    <p>Affirmations can be used as supportive self-talk. Pair them with an action plan, realistic milestones and regular reflection.</p>
                  </>
                )}
                {activeManifestationTab === "benefits" && (
                  <>
                    <h3>What the Practice May Support</h3>
                    <p>A structured manifestation practice may help you clarify priorities, focus attention, strengthen motivation and reflect on the habits that support your goals.</p>
                    <p>Results depend on many factors, including circumstances, resources, opportunities and sustained effort. Manifestation is not a guarantee of wealth, relationships, health or any specific outcome.</p>
                  </>
                )}
                {activeManifestationTab === "practice" && (
                  <>
                    <h3>A Simple Daily Practice</h3>
                    <p>Write one meaningful intention in your diary. Describe why it matters, visualise the next realistic step and identify one action you can take today.</p>
                    <p>At the end of the day, note what you did, what you learned and what you will adjust tomorrow. Keep your goals flexible and your actions practical.</p>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

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
                    <p>Fingerprint patterns form during prenatal development, at a time when the brain and nervous system are also developing. The skin and nervous system share an early embryological origin, which is why fingerprint patterns are studied in relation to brain and nervous-system development.</p>
                  </>
                )}
                {activeFingerprintTab === "guidance" && (
                  <>
                    <h3>What an Analysis Session Covers</h3>
                    <p>A session can introduce visible fingerprint patterns and explain the basics of dermatoglyphics in an educational and exploratory setting.</p>
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

              if (isReiki || isDowsing || isPLR || isFingerprint || isManifestation) {
                window.dispatchEvent(
                  new CustomEvent<string>("ssf-select-service", {
                    detail: isReiki
                      ? "Reiki Healing"
                      : isDowsing
                      ? "Dowsing"
                      : isPLR
                      ? "Past Life Regression"
                      : isFingerprint
                      ? "Fingerprint Analysis"
                      : "Manifestation",
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
