
import React from "react";
import Booking from "./Booking.tsx";

const Hero: React.FC = () => {
  return (
    <div className="ssf-home-layout" id="home">
      <main className="ssf-home-left">
        <section className="ssf-home-intro">
          <p className="hero-tagline">
            Science • Spirituality • Consciousness • Wellbeing
          </p>

          <h1>
            A Brighter Understanding <span>of Life</span>
          </h1>

          <p className="hero-description">
            Exploring science, spirituality, consciousness and wellbeing
            through knowledge, inner growth and meaningful personal
            exploration.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="hero-button primary">
              Explore Our Services
            </a>

            <a href="#booking" className="hero-button secondary">
              Book a Session
            </a>
          </div>
        </section>

        <Booking />
      </main>

      <aside className="ssf-home-banner">
        <img
          src="/ssf-banner.png"
          alt="Science and Spirituality Foundation — Experiment. Explore. Experience."
        />
      </aside>
    </div>
  );
};

export default Hero;
