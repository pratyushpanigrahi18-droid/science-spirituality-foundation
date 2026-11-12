
import React from "react";

const CONTACT_EMAIL = "contact@scienceandspiritualityfoundation.org";
const WHATSAPP_NUMBER = "918328909832";

const Footer: React.FC = () => {
  const linkStyle: React.CSSProperties = {
    color: "#e5e9df",
    textDecoration: "none",
    display: "block",
    marginBottom: "11px",
    fontSize: "14px",
    transition: "color 0.2s ease",
  };

  const headingStyle: React.CSSProperties = {
    color: "#d5b978",
    fontSize: "16px",
    marginBottom: "18px",
    fontWeight: 600,
  };

  return (
    <footer
      className="footer"
      style={{
        background: "#08251c",
        color: "#f5f1e7",
        padding: "55px 24px 20px",
      }}
    >
      <div
        className="footer-container"
        style={{
          maxWidth: "1180px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          gap: "42px",
          textAlign: "left",
        }}
      >
        <div className="footer-brand">
          <h2
            style={{
              color: "#e2c58b",
              fontSize: "23px",
              marginBottom: "5px",
            }}
          >
            Science & Spirituality
          </h2>

          <span
            style={{
              display: "block",
              color: "#ffffff",
              fontSize: "16px",
              marginBottom: "15px",
            }}
          >
            Foundation
          </span>

          <p
            style={{
              color: "#c6d2ca",
              fontSize: "14px",
              lineHeight: 1.8,
              maxWidth: "280px",
            }}
          >
            Exploring consciousness, spirituality, self-awareness and holistic
            wellbeing.
          </p>

          <p
            style={{
              color: "#d5b978",
              fontSize: "12px",
              marginTop: "20px",
              letterSpacing: "1px",
            }}
          >
            SCIENCE • CONSCIOUSNESS • WELLBEING
          </p>
        </div>

        <div className="footer-links">
          <h3 style={headingStyle}>Quick Links</h3>

          <a href="#home" style={linkStyle}>Home</a>
          <a href="#about" style={linkStyle}>About</a>
          <a href="#services" style={linkStyle}>Services</a>
          <a href="#booking" style={linkStyle}>Book a Session</a>
          <a href="#contact" style={linkStyle}>Contact</a>
        </div>

        <div className="footer-services">
          <h3 style={headingStyle}>Explore Our Services</h3>

          <a href="#reiki" style={linkStyle}>Reiki Healing</a>
          <a href="#dowsing" style={linkStyle}>Dowsing</a>
          <a href="#past-life" style={linkStyle}>Past Life Exploration</a>
          <a href="#meditation" style={linkStyle}>Meditation</a>
          <a href="#manifestation" style={linkStyle}>Manifestation</a>
          <a href="#fingerprint-analysis" style={linkStyle}>
            Fingerprint Analysis
          </a>
        </div>

        <div className="footer-contact">
          <h3 style={headingStyle}>Get in Touch</h3>

          <p
            style={{
              color: "#c6d2ca",
              fontSize: "13px",
              marginBottom: "8px",
            }}
          >
            Phone & WhatsApp
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <span style={{ color: "#d5b978" }}>✆</span> +91 83289 09832
          </a>

          <p
            style={{
              color: "#c6d2ca",
              fontSize: "13px",
              marginTop: "18px",
              marginBottom: "8px",
            }}
          >
            Email
          </p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{
              ...linkStyle,
              overflowWrap: "anywhere",
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: "#d5b978" }}>✉</span>{" "}
            {CONTACT_EMAIL}
          </a>

          <p
            style={{
              color: "#c6d2ca",
              fontSize: "14px",
              marginTop: "18px",
            }}
          >
            India
          </p>
        </div>
      </div>

      <div
        className="footer-bottom"
        style={{
          maxWidth: "1180px",
          margin: "40px auto 0",
          paddingTop: "20px",
          borderTop: "1px solid rgba(213, 185, 120, 0.25)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#b9c8bf",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          © {new Date().getFullYear()} Science & Spirituality Foundation.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
