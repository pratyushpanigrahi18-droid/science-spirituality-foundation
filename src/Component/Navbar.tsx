import React, { useEffect, useRef, useState } from "react";

const navigateTo = (path: string) => {
  if (window.location.pathname + window.location.search + window.location.hash !== path) {
    window.history.pushState({}, "", path);
  }
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingScroll = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (pendingScroll.current !== null) {
        window.cancelAnimationFrame(pendingScroll.current);
      }
    };
  }, []);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();
    setMenuOpen(false);

    if (pendingScroll.current !== null) {
      window.cancelAnimationFrame(pendingScroll.current);
      pendingScroll.current = null;
    }

    const hashIndex = path.indexOf("#");
    const hash = hashIndex !== -1 ? path.slice(hashIndex + 1) : "";

    navigateTo(path);

    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // When moving from a service page to the homepage, React may need time
    // to render the target section. Check until it exists rather than using
    // a single 100ms timeout that sometimes misses it.
    const startedAt = performance.now();
    const scrollWhenReady = () => {
      const element = document.getElementById(decodeURIComponent(hash));
      if (element) {
        const navbar = document.querySelector<HTMLElement>(".navbar");
        const offset = navbar ? navbar.getBoundingClientRect().height + 12 : 12;
        const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset);
        window.scrollTo({ top, behavior: "smooth" });
        pendingScroll.current = null;
      } else if (performance.now() - startedAt < 2500) {
        pendingScroll.current = window.requestAnimationFrame(scrollWhenReady);
      } else {
        pendingScroll.current = null;
        // Keep the URL hash intact so the visitor can retry if the section
        // is unavailable; never silently scroll to an unrelated section.
      }
    };

    // Give React a frame to respond to route changes. Same-page links work too.
    pendingScroll.current = window.requestAnimationFrame(scrollWhenReady);
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
              href="/photogallery"
              onClick={(event) => handleNavigation(event, "/photogallery")}
            >
              Photo Gallery
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
