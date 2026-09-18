import { useEffect, useState } from "react";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Services from "./Component/Services";
import Booking from "./Component/Booking";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import ServicePage from "./Component/ServicePage";
import Certificates from "./Component/Certificates";

import { servicePages } from "./Component/serviceData";

import "./styles.css";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  /* =========================
     CERTIFICATES PAGE
     ========================= */

  if (currentPath === "/certificates") {
    return (
      <div className="App">
        <Navbar />

        <Certificates />

        <Footer />
      </div>
    );
  }

  /* =========================
     SERVICE PAGES
     ========================= */

  const service = servicePages[currentPath];

  if (service) {
    return (
      <div className="App">
        <Navbar />

        <main>
          <ServicePage
            title={service.title}
            subtitle={service.subtitle}
            sections={service.sections}
          />

          <Booking />

          <Contact />
        </main>

        <Footer />
      </div>
    );
  }

  /* =========================
     HOME PAGE
     ========================= */

  return (
    <div className="App">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Services />

        <Booking />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
