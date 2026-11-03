
import React, { useState } from "react";

const galleryItems = [
  {
    image: "/gallery-calm-therapy-room.webp",
    title: "A Calm Space for Inner Exploration",
    category: "PLR & Guided Sessions",
  },
  {
    image: "/gallery-guided-relaxation-final.webp",
    title: "Guided Past Life Regression",
    category: "PLR Session",
  },
  {
    image: "/gallery-session-29-oct.webp",
    title: "Exploring Early Life Experiences",
    category: "Womb & Age Regression",
  },
  {
    image: "/gallery-online-session.webp",
    title: "Online Guided Regression Session",
    category: "Online PLR Session",
  },
  {
    image: "/gallery-individual-guidance-final.webp",
    title: "Individual Regression Experience",
    category: "Personalised PLR Session",
  },
  {
    image: "/gallery-session-30-oct.webp",
    title: "A Journey of Inner Exploration",
    category: "Womb & Age Regression",
  },
];

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <main className="photo-gallery-page">
      <style>
        {`
          .photo-gallery-page {
            width: 100%;
            overflow: hidden;
            background: #faf9f5;
          }

          /* FULL-WIDTH HERO IMAGE */

          .photo-gallery-page .gallery-hero {
            position: relative;
            isolation: isolate;
            width: 100%;
            aspect-ratio: 16 / 9;
            min-height: 680px;
            display: flex;
            align-items: center;
            overflow: hidden;
            background: #102c20;
          }

          .photo-gallery-page .gallery-hero-background {
            position: absolute;
            inset: 0;
            z-index: -2;
          }

          .photo-gallery-page .gallery-hero-background img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .photo-gallery-page .gallery-hero::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(
              90deg,
              rgba(8, 29, 19, 0.96) 0%,
              rgba(8, 29, 19, 0.88) 31%,
              rgba(8, 29, 19, 0.48) 55%,
              rgba(8, 29, 19, 0.08) 100%
            );
          }

          .photo-gallery-page .gallery-hero-content {
            position: relative;
            z-index: 2;
            width: 58%;
            padding: 75px 0 75px 7%;
            color: #fff;
          }

          .photo-gallery-page .gallery-hero-eyebrow {
            margin: 0 0 24px;
            color: #e0c28b;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
          }

          .photo-gallery-page .gallery-hero-content h1 {
            margin: 0 0 25px;
            color: #fff;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(40px, 4.2vw, 64px);
            font-weight: 500;
            line-height: 1.13;
          }

          .photo-gallery-page .gallery-hero-content h1 span {
            color: #e0c28b;
          }

          .photo-gallery-page .gallery-hero-description {
            max-width: 540px;
            margin: 0 0 35px;
            color: #f0f0e9;
            font-size: 16px;
            line-height: 1.85;
          }

          .photo-gallery-page .gallery-recognition {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            padding-top: 25px;
            border-top: 1px solid rgba(255,255,255,0.4);
          }

          .photo-gallery-page .gallery-recognition p {
            margin: 0;
            color: #f0d6a5;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 21px;
            line-height: 1.5;
          }

          .photo-gallery-page .gallery-recognition strong {
            display: block;
            margin-bottom: 4px;
            color: #fff;
            font-family: Arial, sans-serif;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }

          /* GALLERY INTRO */

          .photo-gallery-page .photo-gallery-section {
            width: 100%;
            padding: 90px 5%;
            background: #faf9f5;
          }

          .photo-gallery-page .photo-gallery-container {
            width: min(100%, 1350px);
            margin: 0 auto;
          }

          .photo-gallery-page .photo-gallery-intro {
            max-width: 800px;
            margin: 0 auto 55px;
            text-align: center;
          }

          .photo-gallery-page .photo-gallery-intro .section-tag {
            margin: 0 0 15px;
            color: #a88748;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
          }

          .photo-gallery-page .photo-gallery-intro h2 {
            margin: 0 0 17px;
            color: #193d2b;
            font-family: Georgia, "Times New Roman", serif;
            font-size: clamp(32px, 3.5vw, 45px);
            font-weight: 500;
            line-height: 1.25;
          }

          .photo-gallery-page .photo-gallery-intro h2 span {
            color: #a88748;
          }

          .photo-gallery-page .photo-gallery-intro > p:last-child {
            margin: 0;
            color: #6b716b;
            font-size: 15px;
            line-height: 1.8;
          }

          /* GALLERY CARDS */

          .photo-gallery-page .photo-gallery-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px;
          }

          .photo-gallery-page .photo-gallery-card {
            position: relative;
            min-width: 0;
            height: 470px;
            overflow: hidden;
            border-radius: 15px;
            background: #e8e5dc;
            box-shadow: 0 9px 30px rgba(24, 39, 31, 0.12);
          }

          .photo-gallery-page .photo-gallery-image-button {
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            padding: 0;
            overflow: hidden;
            border: 0;
            background: transparent;
            cursor: zoom-in;
            text-align: left;
          }

          .photo-gallery-page .photo-gallery-image-button img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.55s ease;
          }

          .photo-gallery-page .photo-gallery-card:hover
          .photo-gallery-image-button img {
            transform: scale(1.045);
          }

          .photo-gallery-page .photo-gallery-card-overlay {
            position: absolute;
            inset: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 35px 30px;
            background: linear-gradient(
              to top,
              rgba(9, 27, 18, 0.91) 0%,
              rgba(9, 27, 18, 0.48) 38%,
              transparent 78%
            );
            pointer-events: none;
          }

          .photo-gallery-page .photo-gallery-card-overlay span {
            margin-bottom: 10px;
            color: #e0c28b;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
          }

          .photo-gallery-page .photo-gallery-card-overlay h3 {
            max-width: 450px;
            margin: 0;
            color: #fff;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 27px;
            font-weight: 500;
            line-height: 1.35;
          }

          /* LIGHTBOX */

          .photo-gallery-page .photo-gallery-lightbox {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px;
            background: rgba(8, 18, 13, 0.95);
          }

          .photo-gallery-page .photo-gallery-lightbox-content {
            position: relative;
            width: min(100%, 1150px);
            max-height: 92vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .photo-gallery-page .photo-gallery-lightbox img {
            display: block;
            max-width: 100%;
            max-height: 78vh;
            object-fit: contain;
            border-radius: 8px;
          }

          .photo-gallery-page .photo-gallery-lightbox-caption {
            padding: 18px 10px 0;
            color: #f0dfb9;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 22px;
            text-align: center;
          }

          .photo-gallery-page .photo-gallery-close {
            position: absolute;
            top: -18px;
            right: -18px;
            z-index: 2;
            width: 44px;
            height: 44px;
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 50%;
            background: #193d2b;
            color: #fff;
            font-size: 27px;
            cursor: pointer;
          }

          /* TABLET */

          @media (max-width: 950px) {
            .photo-gallery-page .gallery-hero {
              min-height: 650px;
            }

            .photo-gallery-page .gallery-hero-content {
              width: 65%;
              padding-left: 6%;
            }

            .photo-gallery-page .gallery-hero-content h1 {
              font-size: clamp(36px, 5vw, 52px);
            }

            .photo-gallery-page .photo-gallery-card {
              height: 400px;
            }
          }

          /* MOBILE */

          @media (max-width: 650px) {
            .photo-gallery-page .gallery-hero {
              aspect-ratio: auto;
              min-height: 760px;
              align-items: flex-end;
            }

            .photo-gallery-page .gallery-hero-background img {
              object-position: center;
            }

            .photo-gallery-page .gallery-hero::after {
              background: linear-gradient(
                0deg,
                rgba(8, 29, 19, 0.97) 0%,
                rgba(8, 29, 19, 0.88) 48%,
                rgba(8, 29, 19, 0.20) 100%
              );
            }

            .photo-gallery-page .gallery-hero-content {
              width: 100%;
              padding: 55px 7%;
            }

            .photo-gallery-page .gallery-hero-content h1 {
              font-size: 39px;
            }

            .photo-gallery-page .gallery-hero-description {
              font-size: 14px;
            }

            .photo-gallery-page .gallery-recognition {
              gap: 18px 25px;
            }

            .photo-gallery-page .gallery-recognition p {
              font-size: 19px;
            }

            .photo-gallery-page .photo-gallery-section {
              padding: 55px 5%;
            }

            .photo-gallery-page .photo-gallery-intro {
              margin-bottom: 35px;
            }

            .photo-gallery-page .photo-gallery-grid {
              grid-template-columns: 1fr;
              gap: 25px;
            }

            .photo-gallery-page .photo-gallery-card {
              height: 420px;
            }

            .photo-gallery-page .photo-gallery-card-overlay {
              padding: 27px 23px;
            }

            .photo-gallery-page .photo-gallery-card-overlay h3 {
              font-size: 24px;
            }

            .photo-gallery-page .photo-gallery-lightbox {
              padding: 16px;
            }

            .photo-gallery-page .photo-gallery-lightbox img {
              max-height: 70vh;
            }

            .photo-gallery-page .photo-gallery-close {
              top: -12px;
              right: -5px;
            }
          }
        `}
      </style>

      <section className="gallery-hero">
        <div className="gallery-hero-background">
          <img
            src="/gallery-hero-wide.webp"
            alt="Professional training certificate presentation at Soul Consciousness Lab"
            fetchPriority="high"
          />
        </div>

        <div className="gallery-hero-content">
          <p className="gallery-hero-eyebrow">
            Professional Training & Recognition
          </p>

          <h1>
            Professional Training
            <br />
            Completed Through <span>SCL</span>
          </h1>

          <p className="gallery-hero-description">
            Professional learning and development in Past Life Regression
            (PLR), Womb Regression and Age Regression.
          </p>

          <div className="gallery-recognition">
            <p>
              <strong>MNI USA</strong>
              Career Partner
            </p>

            <p>
              <strong>IPHM UK</strong>
              Accredited Training
            </p>
          </div>
        </div>
      </section>

      <section className="photo-gallery-section">
        <div className="photo-gallery-container">
          <div className="photo-gallery-intro">
            <p className="section-tag">SESSIONS & EXPERIENCES</p>

            <h2>
              Moments from <span>Our Sessions</span>
            </h2>

            <p>
              Explore moments from Past Life Regression, Womb Regression
              and Age Regression sessions at Science &amp; Spirituality
              Foundation.
            </p>
          </div>

          <div className="photo-gallery-grid">
            {galleryItems.map((item, index) => (
              <article className="photo-gallery-card" key={item.title}>
                <button
                  type="button"
                  className="photo-gallery-image-button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  <div className="photo-gallery-card-overlay">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="photo-gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            className="photo-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="photo-gallery-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
            />

            <div className="photo-gallery-lightbox-caption">
              {galleryItems[selectedImage].title}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PhotoGallery;
