
import React, { useState } from "react";

const navigateTo = (path: string) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();
    setMenuOpen(false);

    navigateTo(path);

    const hashIndex = path.indexOf("#");

    if (hashIndex !== -1) {
      const hash = path.substring(hashIndex);

      setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    } else {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  return (
    <>
      <style>{`
        .mobile-menu-button {
          display: none;
          border: none;
          background: transparent;
          color: inherit;
          font-size: 30px;
          cursor: pointer;
          padding: 8px 12px;
          line-height: 1;
          z-index: 1001;
        }

        .mobile-menu-button:focus-visible {
          outline: 2px solid #b89a5a;
          outline-offset: 4px;
        }

        @media (max-width: 900px) {
          .mobile-menu-button {
            display: block;
          }

          .navbar-container {
            position: relative;
          }

          .navbar-links.mobile-open {
            display: flex !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 12px 20px 20px;
            background: #ffffff;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
            z-index: 1000;
          }

          .navbar-links.mobile-open a {
            display: block;
            width: 100%;
            padding: 14px 10px;
            text-align: left;
            border-bottom: 1px solid rgba(23, 63, 42, 0.10);
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          {/* LOGO */}

          <a
            href="/"
            className="navbar-logo"
            onClick={(event) => handleNavigation(event, "/")}
          >
            <img
              src="/ssf-logo.png"
              alt="Science & Spirituality Foundation"
              className="navbar-logo-image"
            />

            <div className="navbar-logo-text">
              <span className="logo-main">Science & Spirituality</span>
              <span className="logo-sub">Foundation</span>
            </div>
          </a>

          {/* NAVIGATION LINKS */}

          <div className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
            <a href="/" onClick={(event) => handleNavigation(event, "/")}>
              Home
            </a>

            <a
              href="/#about"
              onClick={(event) => handleNavigation(event, "/#about")}
            >
              About
            </a>

            <a
              href="/#services"
              onClick={(event) => handleNavigation(event, "/#services")}
            >
              Services
            </a>

            <a
              href="/certificates"
              onClick={(event) => handleNavigation(event, "/certificates")}
            >
              Certificates
            </a>

            <a
              href="/#testimonials"
              onClick={(event) => handleNavigation(event, "/#testimonials")}
            >
              Testimonials
            </a>

            <a
              href="/#booking"
              onClick={(event) => handleNavigation(event, "/#booking")}
            >
              Book a Session
            </a>

            <a
              href="/#contact"
              onClick={(event) => handleNavigation(event, "/#contact")}
            >
              Contact
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((previous) => !previous)}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
