import React from "react";

const PhotoGallery: React.FC = () => {
  return (
    <main className="certificates-page photo-gallery-page">
      <style>
        {`
          .photo-gallery-page .photo-gallery-section {
            width: 100%;
            padding: 70px 4%;
          }

          .photo-gallery-page .photo-gallery-container {
            width: min(100%, 1200px);
            margin: 0 auto;
          }

          .photo-gallery-page .photo-gallery-intro {
            max-width: 780px;
            margin: 0 auto 45px;
            text-align: center;
          }

          .photo-gallery-page .photo-gallery-intro h2 {
            margin-bottom: 14px;
          }

          .photo-gallery-page .photo-gallery-intro p:last-child {
            margin: 0;
            line-height: 1.8;
          }

          .photo-gallery-page .photo-gallery-empty {
            min-height: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 45px 24px;
            border: 1px dashed rgba(112, 79, 145, 0.3);
            border-radius: 20px;
            background: linear-gradient(135deg, #ffffff, #f8f5fa);
            text-align: center;
          }

          .photo-gallery-page .photo-gallery-empty-icon {
            width: 66px;
            height: 66px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 18px;
            border-radius: 50%;
            background: #eee8f3;
            color: #604777;
            font-size: 30px;
          }

          .photo-gallery-page .photo-gallery-empty h3 {
            margin: 0 0 10px;
            color: #3f3151;
          }

          .photo-gallery-page .photo-gallery-empty p {
            max-width: 560px;
            margin: 0;
            color: #66606d;
            line-height: 1.7;
          }

          @media (max-width: 600px) {
            .photo-gallery-page .photo-gallery-section {
              padding: 50px 5%;
            }

            .photo-gallery-page .photo-gallery-empty {
              min-height: 220px;
              padding: 35px 20px;
            }
          }
        `}
      </style>

      <section className="certificates-hero">
        <div className="certificates-hero-inner">
          <p className="certificates-eyebrow">MOMENTS & EXPERIENCES</p>

          <h1>Photo <span>Gallery</span></h1>

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

            <h2>Experiences at <span>the Foundation</span></h2>

            <p>
              Explore photographs from our space, sessions, events and
              activities. Gallery photographs will be added here soon.
            </p>
          </div>

          <div className="photo-gallery-empty">
            <div className="photo-gallery-empty-icon" aria-hidden="true">
              ◎
            </div>

            <h3>Gallery Coming Soon</h3>

            <p>
              We are preparing a collection of photographs to share moments
              and activities from Science &amp; Spirituality Foundation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhotoGallery;
