
import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <style>{`
        .ssf-home-layout.ssf-hero-balanced {
          grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
          align-items: center;
          gap: clamp(32px, 5vw, 76px);
          min-height: 560px;
          padding: 64px clamp(28px, 6.5vw, 110px);
        }

        .ssf-hero-balanced .ssf-home-left {
          max-width: 760px;
          margin: 0;
        }

        .ssf-hero-balanced .ssf-home-intro {
          padding: 0;
        }

        .ssf-hero-balanced .ssf-home-intro h1 {
          max-width: 740px;
          font-size: clamp(36px, 3.5vw, 50px);
          line-height: 1.14;
          letter-spacing: -0.7px;
        }

        .ssf-hero-balanced .ssf-home-intro h1 span {
          color: #b89a5a;
        }

        .ssf-hero-balanced .ssf-home-intro .hero-description {
          max-width: 650px;
          margin-top: 20px;
          font-size: 16px;
          line-height: 1.8;
        }

        .ssf-hero-balanced .hero-buttons {
          margin-top: 28px;
        }

        .ssf-hero-balanced .ssf-home-banner {
          position: static;
          width: 100%;
          max-width: 650px;
          justify-self: end;
          align-self: center;
          padding: 0;
        }

        .ssf-hero-balanced .ssf-home-banner img {
          display: block;
          width: 100%;
          height: auto;
          max-height: none;
          object-fit: contain;
          border-radius: 6px;
          box-shadow: 0 18px 45px rgba(23, 63, 42, 0.10);
        }

        @media (max-width: 900px) {
          .ssf-home-layout.ssf-hero-balanced {
            grid-template-columns: 1fr;
            min-height: auto;
            gap: 38px;
            padding: 48px 28px;
          }

          .ssf-hero-balanced .ssf-home-left {
            max-width: 760px;
            margin: 0 auto;
          }

          .ssf-hero-balanced .ssf-home-banner {
            grid-row: auto;
            justify-self: center;
            width: 100%;
            max-width: 720px;
            margin: 0 auto;
          }
        }

        @media (max-width: 600px) {
          .ssf-home-layout.ssf-hero-balanced {
            padding: 36px 20px;
            gap: 30px;
          }

          .ssf-hero-balanced .ssf-home-intro h1 {
            font-size: clamp(32px, 8vw, 42px);
            letter-spacing: -0.4px;
          }

          .ssf-hero-balanced .ssf-home-intro .hero-description {
            font-size: 15px;
          }

          .ssf-hero-balanced .ssf-home-banner img {
            border-radius: 4px;
          }
        }
      `}</style>

      <section
        id="home"
        className="ssf-home-layout ssf-hero-balanced"
      >
        <div className="ssf-home-left">
          <div className="ssf-home-intro">
            <p className="hero-tagline">
              SCIENCE • SPIRITUALITY • CONSCIOUSNESS • WELLBEING
            </p>

            <h1>
              Exploring the Connection
              <br />
              Between Science, Spirituality
              <br />
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

            <div className="hero-buttons">
              <a href="#services" className="hero-button primary">
                Explore Our Work
              </a>

              <a href="#booking" className="hero-button secondary">
                Discover Our Services
              </a>
            </div>
          </div>
        </div>

        <aside className="ssf-home-banner">
          <img
            src="/ssf-banner.png"
            alt="Science and Spirituality Foundation"
          />
        </aside>
      </section>
    </>
  );
};

export default Hero;
