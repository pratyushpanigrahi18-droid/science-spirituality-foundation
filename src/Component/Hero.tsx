
import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <style>{`
        .ssf-full-hero {
          width: 100%;
          background: #faf8f2;
          padding: 0 0 48px;
          box-sizing: border-box;
        }

        .ssf-full-hero-banner {
          width: 100%;
          margin: 0;
          padding: 0;
        }

        .ssf-full-hero-banner img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 0;
        }

        .ssf-full-hero-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin: 30px auto 52px;
          padding: 0 20px;
        }

        .ssf-full-hero-actions .hero-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-width: 190px;
          padding: 14px 24px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: 0.2s ease;
        }

        .ssf-full-hero-actions .hero-button.primary {
          background: #173f2a;
          color: #ffffff;
        }

        .ssf-full-hero-actions .hero-button.primary:hover {
          background: #24583b;
        }

        .ssf-full-hero-actions .hero-button.secondary {
          border: 1px solid #173f2a;
          color: #173f2a;
          background: transparent;
        }

        .ssf-full-hero-actions .hero-button.secondary:hover {
          background: #e9f0e9;
        }

        .ssf-full-hero-intro {
          max-width: 1050px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }

        .ssf-full-hero-intro .hero-tagline {
          margin: 0 0 16px;
          color: #92743a;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          line-height: 1.8;
          text-transform: uppercase;
        }

        .ssf-full-hero-intro h1 {
          margin: 0 auto;
          color: #173f2a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 500;
          line-height: 1.2;
        }

        .ssf-full-hero-intro h1 span {
          color: #b89a5a;
        }

        .ssf-full-hero-intro .hero-description {
          max-width: 850px;
          margin: 20px auto 0;
          color: #68736c;
          font-size: 16px;
          line-height: 1.8;
        }

        @media (max-width: 600px) {
          .ssf-full-hero {
            padding-bottom: 36px;
          }

          .ssf-full-hero-actions {
            gap: 12px;
            margin: 22px auto 38px;
          }

          .ssf-full-hero-actions .hero-button {
            width: 100%;
            min-width: 0;
          }

          .ssf-full-hero-intro h1 {
            font-size: 34px;
          }

          .ssf-full-hero-intro .hero-description {
            font-size: 15px;
          }
        }
      `}</style>

      <section id="home" className="ssf-full-hero">
        <div className="ssf-full-hero-banner">
          <img
            src="/ssf-banner.png"
            alt="Science & Spirituality Foundation"
          />
        </div>

        <div className="ssf-full-hero-actions">
          <a href="#contact" className="hero-button primary">
            Contact Us
          </a>

          <a href="#services" className="hero-button secondary">
            Discover Our Services
          </a>
        </div>

        <div className="ssf-full-hero-intro">
          <p className="hero-tagline">
            SCIENCE • SPIRITUALITY • CONSCIOUSNESS • WELLBEING
          </p>

          <h1>
            Exploring the Connection Between Science, Spirituality
            and <span>Human Consciousness</span>
          </h1>

          <p className="hero-description">
            Science & Spirituality Foundation is dedicated to exploring
            the intersections of scientific inquiry, spiritual traditions,
            human consciousness and holistic wellbeing.
          </p>

          <p className="hero-description">
            Through education, thoughtful exploration and individual
            learning experiences, we encourage a deeper understanding
            of ourselves and the world around us.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
