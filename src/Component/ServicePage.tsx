
import React, { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "918328909832";

const Booking: React.FC = () => {
  const [selectedSessionType, setSelectedSessionType] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedPLRConcerns, setSelectedPLRConcerns] = useState<string[]>([]);

  useEffect(() => {
    const handleServiceSelection = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const service = customEvent.detail;

      if (service) {
        setSelectedService(service);

        if (service !== "Past Life Regression") {
          setSelectedPLRConcerns([]);
        }
      }
    };

    window.addEventListener("ssf-select-service", handleServiceSelection);

    return () => {
      window.removeEventListener(
        "ssf-select-service",
        handleServiceSelection
      );
    };
  }, []);

  const plrConcerns = [
    "Repeating Problems in Life",
    "Relationship Difficulties",
    "Recurring Physical Pain or Discomfort",
    "Mental and Emotional Disturbances",
    "Fears and Phobias",
    "Anxiety and Insecurity",
    "Emotional Triggers",
    "Feeling Stuck in Life",
    "Attachment and Difficulty Letting Go",
    "Self-Worth and Confidence",
    "Unexplained Connections or Familiarity",
    "Recurring Dreams or Inner Imagery",
    "Childhood or Early-Life Experiences",
    "Spiritual Exploration and Curiosity",
    "Other Personal Concern",
  ];

  const selectSessionType = (sessionType: string) => {
    setSelectedSessionType(sessionType);

    if (sessionType === "Free Consultation") {
      setSelectedService("Free Consultation");
    }

    setTimeout(() => {
      const formCard = document.querySelector(".booking-form-card");

      if (formCard) {
        formCard.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  const handleWhatsAppBooking = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    )?.value.trim();

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    )?.value.trim();

    const phone = (
      form.elements.namedItem("phone") as HTMLInputElement
    )?.value.trim();

    const service = (
      form.elements.namedItem("service") as HTMLSelectElement
    )?.value;

    const sessionType = (
      form.elements.namedItem("sessionType") as HTMLSelectElement
    )?.value;

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    )?.value.trim();

    const bookingMessage = `Hello Science & Spirituality Foundation,

I would like to enquire about a session.

Name: ${name || "Not provided"}
Email: ${email || "Not provided"}
Phone / WhatsApp: ${phone || "Not provided"}
Service: ${service || "Not selected"}
Session Type: ${sessionType || "Not selected"}
${
  service === "Past Life Regression" &&
  selectedPLRConcerns.length > 0
    ? `PLR areas to explore: ${selectedPLRConcerns.join(", ")}`
    : ""
}

My requirements:
${message || "I would like to discuss my requirements."}

Please let me know the available timings and session details.

Thank you.`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      bookingMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="booking-section">
      <style>
        {`
          .booking-section .booking-option {
            cursor: pointer;
            position: relative;
          }

          .booking-section .booking-option:focus {
            outline: 2px solid #c9a65a;
            outline-offset: 2px;
          }

          .booking-section .booking-option.selected {
            border-color: #c9a65a;
            background: rgba(201, 166, 90, 0.12);
            box-shadow: 0 0 0 1px rgba(201, 166, 90, 0.18);
          }

          .booking-section .booking-option.selected
          .booking-option-icon {
            background: #c9a65a;
            color: #173f2a;
          }

          .booking-section .booking-option-hint {
            display: block;
            margin-top: 7px;
            color: #c9a65a;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.3px;
          }

          .booking-section .booking-form-card {
            scroll-margin-top: 100px;
          }

          .booking-section .plr-concerns-group {
            margin-top: 18px;
          }

          .booking-section .plr-concerns-intro {
            margin: 6px 0 14px;
            color: #68616f;
            font-size: 0.92rem;
            line-height: 1.55;
          }

          .booking-section .plr-concerns-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .booking-section .plr-concern-option {
            display: flex;
            align-items: flex-start;
            gap: 9px;
            padding: 12px;
            border: 1px solid rgba(112, 79, 145, 0.18);
            border-radius: 10px;
            background: #fff;
            cursor: pointer;
            line-height: 1.4;
            font-size: 0.92rem;
          }

          .booking-section .plr-concern-option.selected {
            border-color: #c9a65a;
            background: rgba(201, 166, 90, 0.10);
          }

          .booking-section .plr-concern-option input {
            margin-top: 3px;
            accent-color: #8b6b2e;
            flex: 0 0 auto;
          }

          .booking-section .plr-concerns-disclaimer {
            margin-top: 14px;
            color: #68616f;
            font-size: 0.82rem;
            line-height: 1.6;
          }

          @media (max-width: 600px) {
            .booking-section .booking-option-hint {
              font-size: 11px;
            }

            .booking-section .plr-concerns-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="booking-container">
        <div className="booking-intro">
          <p className="section-tag">BOOK A SESSION</p>

          <h2>
            Begin Your
            <span> Inner Journey</span>
          </h2>

          <p className="booking-intro-text">
            Every journey begins with a conversation. Start with a free
            consultation or enquire about a session that suits your needs.
          </p>

          <div className="booking-options">
            <div
              className={`booking-option ${
                selectedSessionType === "Free Consultation"
                  ? "selected"
                  : ""
              }`}
              role="button"
              tabIndex={0}
              onClick={() => selectSessionType("Free Consultation")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  selectSessionType("Free Consultation");
                }
              }}
            >
              <div className="booking-option-icon">+</div>

              <div>
                <h3>Free Consultation</h3>
                <p>
                  A complimentary initial conversation to understand your
                  requirements and help you explore the available options.
                </p>

                {selectedSessionType === "Free Consultation" && (
                  <span className="booking-option-hint">
                    Selected — complete the enquiry →
                  </span>
                )}
              </div>
            </div>

            <div
              className={`booking-option ${
                selectedSessionType === "Online Session — Zoom"
                  ? "selected"
                  : ""
              }`}
              role="button"
              tabIndex={0}
              onClick={() => selectSessionType("Online Session — Zoom")}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  selectSessionType("Online Session — Zoom");
                }
              }}
            >
              <div className="booking-option-icon">↗</div>

              <div>
                <h3>Online Sessions — Zoom</h3>
                <p>
                  Convenient sessions conducted online through Zoom, allowing
                  you to connect from wherever you are.
                </p>

                {selectedSessionType === "Online Session — Zoom" && (
                  <span className="booking-option-hint">
                    Selected — complete the enquiry →
                  </span>
                )}
              </div>
            </div>

            <div
              className={`booking-option ${
                selectedSessionType === "Offline Session — Our Centre"
                  ? "selected"
                  : ""
              }`}
              role="button"
              tabIndex={0}
              onClick={() =>
                selectSessionType("Offline Session — Our Centre")
              }
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  selectSessionType("Offline Session — Our Centre");
                }
              }}
            >
              <div className="booking-option-icon">●</div>

              <div>
                <h3>Offline Sessions — Our Centres</h3>
                <p>
                  In-person sessions available at our designated centres.
                  Centre details and timings will be shared during enquiry.
                </p>

                {selectedSessionType ===
                  "Offline Session — Our Centre" && (
                  <span className="booking-option-hint">
                    Selected — complete the enquiry →
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="booking-highlights">
            <div className="booking-step">
              <strong>01</strong>
              <div>
                <span>Choose</span>
                <p>Select a service and your preferred session type.</p>
              </div>
            </div>

            <div className="booking-step">
              <strong>02</strong>
              <div>
                <span>Connect</span>
                <p>Share your requirements with us through WhatsApp.</p>
              </div>
            </div>

            <div className="booking-step">
              <strong>03</strong>
              <div>
                <span>Confirm</span>
                <p>We will discuss available timings and the next steps.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-form-card">
          <div className="booking-form-header">
            <p className="form-eyebrow">
              FREE CONSULTATION & SESSION ENQUIRY
            </p>

            <h3>Tell Us How We Can Help</h3>

            <p>
              Fill in the details below and connect with us directly on
              WhatsApp.
            </p>
          </div>

          <form className="booking-form" onSubmit={handleWhatsAppBooking}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name <span>*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  WhatsApp / Phone <span>*</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your WhatsApp number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  Service <span>*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  value={selectedService}
                  onChange={(event) => {
                    const nextService = event.target.value;
                    setSelectedService(nextService);

                    if (nextService !== "Past Life Regression") {
                      setSelectedPLRConcerns([]);
                    }
                  }}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Reiki Healing">Reiki Healing</option>
                  <option value="Dowsing">Dowsing</option>

                  <option value="Past Life Regression">
                    Past Life Regression
                  </option>

                  <option value="Meditation">Meditation</option>
                  <option value="Manifestation">Manifestation</option>

                  <option value="Fingerprint Analysis">
                    Fingerprint Analysis
                  </option>

                  <option value="Free Consultation">
                    Free Consultation
                  </option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
            </div>

            {selectedService === "Past Life Regression" && (
              <div className="form-group plr-concerns-group">
                <label>What Would You Like to Explore?</label>

                <p className="plr-concerns-intro">
                  Select one or more areas that best describe what you would
                  like to discuss.
                </p>

                <div className="plr-concerns-grid">
                  {plrConcerns.map((concern) => {
                    const checked = selectedPLRConcerns.includes(concern);

                    return (
                      <label
                        key={concern}
                        className={`plr-concern-option ${
                          checked ? "selected" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => {
                            setSelectedPLRConcerns((current) =>
                              checked
                                ? current.filter((item) => item !== concern)
                                : [...current, concern]
                            );
                          }}
                        />

                        <span>{concern}</span>
                      </label>
                    );
                  })}
                </div>

                <p className="plr-concerns-disclaimer">
                  PLR is an exploratory practice. It cannot establish the
                  cause of physical pain or mental-health symptoms and is not
                  a substitute for appropriate medical or mental-health care.
                </p>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="sessionType">
                Preferred Session Type <span>*</span>
              </label>

              <select
                id="sessionType"
                name="sessionType"
                value={selectedSessionType}
                onChange={(event) =>
                  setSelectedSessionType(event.target.value)
                }
                required
              >
                <option value="" disabled>
                  Select session type
                </option>

                <option value="Free Consultation">
                  Free Consultation
                </option>

                <option value="Online Session — Zoom">
                  Online Session — Zoom
                </option>

                <option value="Offline Session — Our Centre">
                  Offline Session — Our Centre
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Tell Us About Your Requirements
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Briefly tell us what you would like to explore or understand..."
              />
            </div>

            <div className="booking-form-actions">
              <button
                type="submit"
                className="booking-button whatsapp-booking-button"
              >
                <span className="button-icon">◉</span>
                Enquire Through WhatsApp
              </button>
            </div>

            <p className="booking-form-note">
              Your enquiry will open in WhatsApp with the details you provide.
              We will respond with available timings, session details and
              information about the next steps.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
