
import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="ssf-home-layout">
      <div className="ssf-home-left">
        <div className="ssf-home-intro">
          <p className="hero-tagline">
            SCIENCE • SPIRITUALITY • CONSCIOUSNESS • WELLBEING
          </p>

          <h1>
            Exploring the Connection Between Science, Spirituality and
            <span> Human Consciousness</span>
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
  );
};

export default Hero;
