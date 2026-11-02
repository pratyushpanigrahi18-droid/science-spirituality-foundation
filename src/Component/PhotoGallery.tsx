
import React, { useState } from "react";

const galleryItems = [
  {
    image: "/gallery-personalised-session.webp",
    title: "A Personalised Healing Experience",
    description:
      "A calm and supportive environment where individuals are guided through relaxation, self-exploration and personal wellbeing.",
  },
  {
    image: "/gallery-online-session.webp",
    title: "Online Guided Regression Session",
    description:
      "Exploring inner experiences through a guided online session, offering the flexibility to participate from a familiar and comfortable setting.",
  },
  {
    image: "/gallery-guided-relaxation.webp",
    title: "Guided Relaxation Session",
    description:
      "A quiet space for relaxation, focused attention and guided exploration of personal experiences.",
  },
  {
    image: "/gallery-inner-exploration.webp",
    title: "A Space for Inner Exploration",
    description:
      "A comfortable setting designed to encourage calmness, introspection and a deeper understanding of inner experiences.",
  },
  {
    image: "/gallery-individual-guidance.webp",
    title: "Individual Guidance and Support",
    description:
      "Every session is approached with care, respect and individual attention in a welcoming environment.",
  },
  {
    image: "/gallery-learning-milestone.webp",
    title: "A Milestone in Professional Learning",
    description:
      "A memorable moment celebrating learning, training and continued development in Past Life Regression and Transpersonal Hypnotherapy.",
  },
];

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <main className="certificates-page photo-gallery-page">
      <style>
        {`
          .photo-gallery-page .photo-gallery-section {
            width: 100%;
            padding: 75px 5%;
            background: #faf9f5;
          }

          .photo-gallery-page .photo-gallery-container {
            width: min(100%, 1200px);
            margin: 0 auto;
          }

          .photo-gallery-page .photo-gallery-intro {
            max-width: 780px;
            margin: 0 auto 55px;
            text-align: center;
          }

          .photo-gallery-page .photo-gallery-intro h2 {
            margin-bottom: 16px;
          }

          .photo-gallery-page .photo-gallery-intro p:last-child {
            margin: 0;
            line-height: 1.8;
            color: #6b716b;
          }

          .photo-gallery-page .photo-gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 30px;
            align-items: stretch;
          }

          .photo-gallery-page .photo-gallery-card {
            overflow: hidden;
            display: flex;
            flex-direction: column;
            background: #ffffff;
            border: 1px solid rgba(29, 64, 46, 0.10);
            border-radius: 16px;
            box-shadow: 0 8px 28px rgba(24, 39, 31, 0.07);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .photo-gallery-page .photo-gallery-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 16px 35px rgba(24, 39, 31, 0.13);
          }

          .photo-gallery-page .photo-gallery-image-button {
            display: block;
            width: 100%;
            height: 290px;
            padding: 0;
            overflow: hidden;
            border: none;
            background: #eeeae1;
            cursor: zoom-in;
          }

          .photo-gallery-page .photo-gallery-image-button img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: transform 0.5s ease;
          }

          .photo-gallery-page .photo-gallery-card:hover
          .photo-gallery-image-button img {
            transform: scale(1.045);
          }

          .photo-gallery-page .photo-gallery-card-content {
            display: flex;
            flex: 1;
            flex-direction: column;
            padding: 25px 24px 28px;
          }

          .photo-gallery-page .photo-gallery-card-content h3 {
            margin: 0 0 12px;
            color: #193d2b;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 22px;
            font-weight: 500;
            line-height: 1.35;
          }

          .photo-gallery-page .photo-gallery-card-content p {
            margin: 0;
            color: #69716b;
            font-size: 15px;
            line-height: 1.8;
          }

          .photo-gallery-page .photo-gallery-view-label {
            display: inline-block;
            margin-top: auto;
            padding-top: 20px;
            color: #a88748;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.3px;
            text-transform: uppercase;
          }

          .photo-gallery-page .photo-gallery-lightbox {
            position: fixed;
            inset: 0;
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px;
            background: rgba(8, 18, 13, 0.94);
          }

          .photo-gallery-page .photo-gallery-lightbox-content {
            position: relative;
            width: min(100%, 1050px);
            max-height: 92vh;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .photo-gallery-page .photo-gallery-lightbox img {
            display: block;
            max-width: 100%;
            max-height: 72vh;
            object-fit: contain;
            border-radius: 8px;
          }

          .photo-gallery-page .photo-gallery-lightbox-caption {
            max-width: 750px;
            padding: 20px 10px 0;
            text-align: center;
            color: #ffffff;
          }

          .photo-gallery-page .photo-gallery-lightbox-caption h3 {
            margin: 0 0 8px;
            color: #f0dfb9;
            font-family: Georgia, "Times New Roman", serif;
            font-size: 24px;
          }

          .photo-gallery-page .photo-gallery-lightbox-caption p {
            margin: 0;
            color: #e2e5df;
            line-height: 1.7;
          }

          .photo-gallery-page .photo-gallery-close {
            position: absolute;
            top: -15px;
            right: -15px;
            z-index: 2;
            width: 44px;
            height: 44px;
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 50%;
            background: #193d2b;
            color: #ffffff;
            font-size: 27px;
            cursor: pointer;
          }

          @media (max-width: 900px) {
            .photo-gallery-page .photo-gallery-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 22px;
            }

            .photo-gallery-page .photo-gallery-image-button {
              height: 270px;
            }
          }

          @media (max-width: 600px) {
            .photo-gallery-page .photo-gallery-section {
              padding: 50px 5%;
            }

            .photo-gallery-page .photo-gallery-intro {
              margin-bottom: 35px;
            }

            .photo-gallery-page .photo-gallery-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .photo-gallery-page .photo-gallery-image-button {
              height: 300px;
            }

            .photo-gallery-page .photo-gallery-card-content {
              padding: 22px;
            }

            .photo-gallery-page .photo-gallery-lightbox {
              padding: 16px;
            }

            .photo-gallery-page .photo-gallery-lightbox img {
              max-height: 65vh;
            }

            .photo-gallery-page .photo-gallery-close {
              top: -12px;
              right: -5px;
            }
          }
        `}
      </style>

      <section className="certificates-hero">
        <div className="certificates-hero-inner">
          <p className="certificates-eyebrow">MOMENTS & EXPERIENCES</p>

          <h1>
            Photo <span>Gallery</span>
          </h1>

          <p>
            A glimpse into the sessions, activities, workshops and experiences
            at Science &amp; Spirituality Foundation.
          </p>
        </div>
      </section>

      <section className="photo-gallery-section">
        <div className="photo-gallery-container">
          <div className="photo-gallery-intro">
            <p className="section-tag">OUR GALLERY</p>

            <h2>
              Experiences at <span>the Foundation</span>
            </h2>

            <p>
              Every photograph captures a moment of learning, guidance,
              exploration and personal connection at our foundation.
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
                </button>

                <div className="photo-gallery-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="photo-gallery-view-label">
                    View photograph ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="photo-gallery-lightbox"
          onClick={closeLightbox}
          role="presentation"
        >
          <div
            className="photo-gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="photo-gallery-close"
              onClick={closeLightbox}
              aria-label="Close image"
            >
              ×
            </button>

            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
            />

            <div className="photo-gallery-lightbox-caption">
              <h3>{galleryItems[selectedImage].title}</h3>
              <p>{galleryItems[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PhotoGallery;
