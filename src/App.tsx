import { useEffect, useState } from "react";

import Navbar from "./Component/Navbar.tsx";
import Hero from "./Component/Hero.tsx";
import About from "./Component/About.tsx";
import Services from "./Component/Services.tsx";
import Booking from "./Component/Booking.tsx";
import Contact from "./Component/Contact.tsx";
import Footer from "./Component/Footer.tsx";
import ServicePage from "./Component/ServicePage.tsx";
import PhotoGallery from "./Component/PhotoGallery.tsx";
import { servicePages } from "./Component/serviceData.ts";

import "./styles.css";

const homepageSEO = {
  title: "Science & Spirituality Foundation | Past Life Regression & Reiki Healing",
  description: "Explore Past Life Regression, Reiki Healing and Meditation for self-discovery, stress management, emotional wellbeing and spiritual growth.",
};

const pageSEO: Record<string, { title: string; description: string }> = {
  "/services/past-life-regression": {
    title: "Past Life Regression (PLR) | SSF",
    description: "Explore Past Life Regression at SSF through guided imagery and reflection on recurring fears, emotional patterns, childhood experiences and relationships.",
  },
  "/services/reiki": {
    title: "Reiki Healing & Reiki Training | SSF",
    description: "Explore Reiki healing and learning at SSF as complementary practices for relaxation, stress management, inner awareness and spiritual growth.",
  },
  "/services/dowsing": {
    title: "Dowsing & Spiritual Exploration | SSF",
    description: "Explore traditional dowsing practices, water exploration, space harmony and subjective energy awareness with Science & Spirituality Foundation.",
  },
  "/services/chakra-wellness": {
    title: "Chakra Wellness & Meditation | SSF",
    description: "Explore chakra-focused meditation, visualization and reflection for relaxation, inner balance and self-awareness at SSF.",
  },
  "/services/spiritual-wellness": {
    title: "Spiritual Wellness & Personal Growth | SSF",
    description: "Explore life purpose, personal values, self-discovery and spiritual growth through guided reflection and mindfulness at SSF.",
  },
  "/services/meditation": {
    title: "Guided Meditation & Mindfulness | SSF",
    description: "Explore guided meditation, breath awareness and mindfulness practices for managing everyday stress, overthinking and developing a regular routine.",
  },
  "/services/manifestation": {
    title: "Manifestation & Personal Development | SSF",
    description: "Reflect on limiting beliefs, confidence and personal goals through intention, visualization and practical action with SSF.",
  },
  "/services/fingerprint-analysis": {
    title: "Fingerprint Analysis & Career Exploration | SSF",
    description: "Explore fingerprint analysis as an interpretive reflection exercise alongside your interests, skills, education and career goals at SSF.",
  },
  "/photogallery": {
    title: "Photo Gallery | SSF",
    description: "Explore the photo gallery of Science & Spirituality Foundation.",
  },
};

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

  useEffect(() => {
    const seo = pageSEO[currentPath] || homepageSEO;
    document.title = seo.title;

    let description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = seo.description;
  }, [currentPath]);

  if (currentPath === "/photogallery") {
    return (
      <div className="App">
        <Navbar />
        <PhotoGallery />
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
