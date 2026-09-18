import React from "react";

const navigateTo = (path: string) => {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

const Navbar: React.FC = () => {
  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    event.preventDefault();

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

        <div className="navbar-links">
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
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
