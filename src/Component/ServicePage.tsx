                <a
                  key={concern}
                  href="#booking"
                  className="reiki-concern-card"
                  onClick={(event) =>
                    handleConcernClick(event, "Reiki Healing")
                  }
                >
                  <div className="reiki-concern-name">{concern}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {isDowsing && (
          <section className="dowsing-areas-section">
            <div className="dowsing-areas-title">
              <h2>Explore the Unknown</h2>

              <p>
                Explore your questions and enquiries through a personalised
                dowsing session.
              </p>
            </div>

            <div className="dowsing-areas-grid">
              {dowsingAreas.map((area) => (
                <a
                  key={area}
                  href="#booking"
                  className="dowsing-area-card"
                  onClick={(event) =>
                    handleConcernClick(event, "Dowsing")
                  }
                >
                  <div className="dowsing-area-name">{area}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        {isPLR && (
          <section className="plr-concerns-section">
            <div className="plr-concerns-title">
              <h2>What Would You Like to Explore?</h2>

              <p>
                Choose an area you would like to explore during your
                Past Life Regression enquiry.
              </p>
            </div>

            <div className="plr-concerns-grid">
              {plrConcerns.map((concern) => (
                <a
                  key={concern}
                  href="#booking"
                  className="plr-concern-card"
                  onClick={(event) =>
                    handleConcernClick(event, "Past Life Regression")
                  }
                >
                  <div className="plr-concern-name">{concern}</div>
                </a>
              ))}
            </div>
          </section>
        )}

        <div className="service-page-actions">
          <a
            href="#booking"
            className="service-page-button"
            onClick={(event) => {
              event.preventDefault();

              if (isReiki || isDowsing || isPLR || isFingerprint) {
                window.dispatchEvent(
                  new CustomEvent<string>("ssf-select-service", {
                    detail: isReiki
                      ? "Reiki Healing"
                      : isDowsing
                      ? "Dowsing"
                      : isPLR
                      ? "Past Life Regression"
                      : "Fingerprint Analysis",
                  })
                );
              }

              scrollToBooking();
            }}
          >
            Book a Session
          </a>

          <a
            href="#contact"
            className="service-page-button secondary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
