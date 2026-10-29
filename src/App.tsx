
import { useEffect, useState } from "react";

import Navbar from "./Component/Navbar.tsx";
import Hero from "./Component/Hero.tsx";
import About from "./Component/About.tsx";
import Services from "./Component/Services.tsx";
import Booking from "./Component/Booking.tsx";
import Contact from "./Component/Contact.tsx";
import Footer from "./Component/Footer.tsx";
import ServicePage from "./Component/ServicePage.tsx";
import Certificates from "./Component/Certificates.tsx";
import { servicePages } from "./Component/serviceData.ts";

import "./styles.css";

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname
  );

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleNavigation);

    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  if (currentPath === "/certificates") {
    return (
      <div className="App">
        <Navbar />
        <Certificates />
        <Footer />
      </div>
    );
  }

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
