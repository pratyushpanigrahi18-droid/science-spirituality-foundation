
import React from "react";

const About: React.FC = () => {
  return (
    <>
      <style>{`
        .ssf-about-redesign {
          background: #f3efe5;
          padding: 90px 32px;
        }

        .ssf-about-redesign .about-container {
          display: block;
          width: min(100%, 1320px);
          max-width: 1320px;
          margin: 0 auto;
        }

        .ssf-about-redesign .about-content {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: clamp(45px, 7vw, 110px);
          align-items: center;
          width: 100%;
          max-width: none;
          margin: 0 auto 100px;
          padding: 55px 60px;
          background: #faf8f2;
          border: 1px solid rgba(23, 63, 42, 0.10);
          border-radius: 8px;
          box-shadow: 0 12px 35px rgba(13, 47, 32, 0.06);
        }

        .ssf-about-redesign .about-intro-heading {
          padding-right: 20px;
          border-right: 1px solid rgba(184, 154, 90, 0.55);
        }

        .ssf-about-redesign .section-tag {
          margin: 0 0 22px;
          color: #92743a;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.7;
        }

        .ssf-about-redesign .about-intro-heading h2 {
          margin: 0;
          color: #173f2a;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(44px, 4.2vw, 62px);
          font-weight: 500;
          line-height: 1.12;
        }

        .ssf-about-redesign .about-intro-heading h2 span {
          display: block;
          color: #b89a5a;
        }

        .ssf-about-redesign .about-intro-copy p {
          margin: 0 0 22px;
          color: #53635a;
          font-size: 19px;
          line-height: 1.9;
        }

        .ssf-about-redesign .about-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          margin-top: 8px;
          padding: 0 30px;
          background: #173f2a;
          color: #ffffff;
          border-radius: 3px;
          font-size: 16px;
          font-weight: 700;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .ssf-about-redesign .about-button:hover {
          background: #24583b;
          transform: translateY(-2px);
        }

        /* Founder credentials */

        .ssf-about-redesign .founder-credentials {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.9;
        }

        .ssf-about-redesign .credential-heading {
          margin-bottom: 16px;
          color: #173f2a;
          font-size: 17px;
          font-weight: 700;
        }

        .ssf-about-redesign .credential-specialisation {
          color: #26352c;
          font-weight: 600;
          line-height: 2;
        }

        .ssf-about-redesign .credential-training {
          display: block;
          margin-top: 18px;
          color: #53635a;
          font-size: 16px;
          line-height: 1.7;
        }

        .ssf-about-redesign .credential-affiliation {
          display: block;
          color: #b89a5a;
          font-size: 16px;
          font-weight: 800;
          line-height: 1.9;
        }

        .ssf-about-redesign .credential-divider {
          width: 100%;
          height: 1px;
          margin: 18px 0;
          background: rgba(184, 154, 90, 0.65);
        }

        .ssf-about-redesign .credential-other {
          color: #26352c;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.9;
        }

        /* Founder biography */

        .ssf-about-redesign .founder-biography {
          margin-top: 30px;
        }

        .ssf-about-redesign .founder-biography p {
          margin: 0 0 22px;
          color: #53635a;
          font-size: 18px;
          line-height: 1.9;
        }

        .ssf-about-redesign .founder-biography .institution-highlight {
          color: #b89a5a;
          font-weight: 800;
        }

        @media (max-width: 800px) {
          .ssf-about-redesign {
            padding: 65px 22px;
          }

          .ssf-about-redesign .about-content {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 38px 32px;
            margin-bottom: 70px;
          }

          .ssf-about-redesign .about-intro-heading {
            padding: 0 0 26px;
            border-right: 0;
            border-bottom: 1px solid rgba(184, 154, 90, 0.55);
          }

          .ssf-about-redesign .about-intro-heading h2 {
            font-size: clamp(40px, 7vw, 52px);
          }

          .ssf-about-redesign .about-intro-copy p {
            font-size: 18px;
          }

          .ssf-about-redesign .founder-biography p {
            font-size: 17px;
          }
        }

        @media (max-width: 600px) {
          .ssf-about-redesign {
            padding: 42px 15px;
          }

          .ssf-about-redesign .about-content {
            padding: 30px 22px;
            gap: 25px;
          }

          .ssf-about-redesign .about-intro-heading h2 {
            font-size: 39px;
          }

          .ssf-about-redesign .about-intro-copy p {
            font-size: 17px;
            line-height: 1.8;
          }

          .ssf-about-redesign .about-button {
            width: 100%;
          }

          .ssf-about-redesign .founder-biography p {
            font-size: 16px;
            line-height: 1.8;
          }
        }
      `}</style>

      <section id="about" className="about-section ssf-about-redesign">
        <div className="about-container">

          <div className="about-content">
            <div className="about-intro-heading">
              <p className="section-tag">ABOUT THE FOUNDATION</p>

              <h2>
                A Journey Towards
                <span> Inner Awareness</span>
              </h2>
            </div>

            <div className="about-intro-copy">
              <p>
                Science & Spirituality Foundation is a platform dedicated to
                exploring consciousness, spirituality, self-discovery and
                holistic wellbeing.
              </p>

              <p>
                Through different spiritual and complementary practices,
                individuals can explore their inner world, understand
                themselves more deeply and work towards personal growth.
              </p>

              <p>
                Our approach brings together traditional spiritual practices
                with curiosity, awareness and a thoughtful exploration of
                human consciousness.
              </p>

              <a href="#services" className="about-button">
                Explore Our Services
              </a>
            </div>
          </div>

          {/* FOUNDER PROFILE */}

          <div className="founder-profile">
            <div className="founder-image-wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/founder-photo-website.jpg`}
                alt="Pratyush Kumar Panigrahi - Founder, Science & Spirituality Foundation"
                className="founder-image"
              />
            </div>

            <div className="founder-profile-content">
              <p className="section-tag">MEET THE FOUNDER</p>

              <h2>
                Pratyush Kumar
                <span> Panigrahi</span>
              </h2>

              <p className="founder-title">
                Founder — Science & Spirituality Foundation
              </p>

              <div className="founder-credentials">
                <div className="credential-heading">
                  Professional Training & Credentials
                </div>

                <div className="credential-specialisation">
                  Past Life Regression Therapist
                  <br />
                  Transpersonal Hypnotherapist
                  <br />
                  Womb Regression Therapist
                </div>

                <div className="credential-training">
                  Professional training completed through <strong>SCL</strong>
                </div>

                <span className="credential-affiliation">
                  MNI USA Career Partner
                </span>

                <span className="credential-affiliation">
                  IPHM UK Accredited Training
                </span>

                <div className="credential-divider"></div>

                <div className="credential-other">
                  Reiki Master | Dowsing Practitioner | Fingerprint Analyst
                </div>
              </div>

              <div className="founder-biography">
                <p>
                  My work brings together different approaches to
                  consciousness, self-exploration, holistic wellbeing and
                  personal development. I am particularly interested in
                  understanding the relationship between the human mind,
                  inner experiences, behaviour and personal growth.
                </p>

                <p>
                  I completed my professional training in Past Life
                  Regression, Transpersonal Hypnotherapy and Womb Regression
                  through{" "}
                  <span className="institution-highlight">
                    Soul Conscious Lab
                  </span>
                  , an{" "}
                  <span className="institution-highlight">
                    MNI (USA) Career Partner
                  </span>{" "}
                  and{" "}
                  <span className="institution-highlight">
                    IPHM (UK) Accredited Training Institution
                  </span>
                  . This training has further shaped my interest in guided
                  inner exploration, self-awareness and the deeper dimensions
                  of human experience.
                </p>

                <p>
                  Through Science & Spirituality Foundation, my vision is to
                  create a space where scientific curiosity, spiritual
                  perspectives and personal experiences can be explored
                  together. I encourage individuals to remain curious, ask
                  meaningful questions, examine different perspectives and
                  develop their own understanding rather than blindly
                  accepting any particular belief.
                </p>
              </div>
            </div>
          </div>

          {/* MESSAGE FROM THE FOUNDER */}

          <div className="founder-message">
            <div className="founder-message-heading">
              <p className="section-tag">MESSAGE FROM THE FOUNDER</p>

              <h2>
                Explore. Question.
                <span> Experience. Grow.</span>
              </h2>
            </div>

            <div className="founder-message-content">
              <p>
                I believe that every individual carries within themselves a
                unique combination of abilities, experiences, questions and
                possibilities.
              </p>

              <p>
                Our journey through life is not only about achieving external
                success. It is also about understanding who we are, why we
                think and behave the way we do, what gives our life meaning,
                and what potential lies within us.
              </p>

              <p>
                Science & Spirituality Foundation was created with the
                intention of providing a space for this exploration.
              </p>

              <p>
                Here, we bring together different approaches to personal
                development, healing, consciousness and self-exploration.
                Whether you are looking for greater inner balance, exploring
                spirituality, trying to understand recurring patterns,
                discovering your potential, or simply searching for a clearer
                direction in life, your journey begins with a question.
              </p>

              <p>
                I do not believe that there is one path that is right for
                everyone. Each person has to explore, experience and discover
                what resonates with them.
              </p>

              <p>
                My role is not to tell you who you are or what your life must
                become. My role is to provide guidance, tools and a space
                where you can explore yourself more deeply.
              </p>

              <p>
                I invite you to stay curious. Ask questions. Explore different
                perspectives. Experience for yourself. And most importantly,
                continue growing.
              </p>

              <p className="founder-signature">
                — Pratyush Kumar Panigrahi
                <span>Founder, Science & Spirituality Foundation</span>
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
