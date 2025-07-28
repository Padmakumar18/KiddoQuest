import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header-section text-center py-4">
        <div className="container">
          <h1 className="display-1 fw-bold text-primary mb-2">
            🎈 KiddoQuest 🎈
          </h1>
          <p className="lead text-dark fs-4">
            Where Every Day is a New Adventure!
          </p>
        </div>
      </header>

      <section className="hero-section text-center py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold text-primary mb-4">
                Welcome to the Ultimate Kids Play Zone! 🎪
              </h2>
              <p className="lead text-dark mb-4">
                Discover endless fun and excitement in our colorful world of
                activities designed just for kids!
              </p>
              <div className="btn btn-primary btn-lg px-5 py-3 fw-bold">
                🎪 Fun Activities Await!
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <img
                  src="https://images.unsplash.com/photo-1586738730873-bdd59a596a2d"
                  alt="Kids playing and having fun"
                  className="hero-image"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5 text-primary">
            🎯 Our Amazing Activities
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card activity-card h-100 border-0 shadow-lg">
                <div className="card-body text-center p-4">
                  <div className="activity-icon mb-3">
                    <i className="bi bi-circle-fill display-4 text-warning"></i>
                  </div>
                  <h5 className="card-title fw-bold text-primary">
                    Ball Pit Zone
                  </h5>
                  <p className="card-text">
                    Dive into our colorful ball pit filled with soft, safe balls
                    for endless bouncing fun!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card activity-card h-100 border-0 shadow-lg">
                <div className="card-body text-center p-4">
                  <div className="activity-icon mb-3">
                    <i className="bi bi-arrow-down-circle display-4 text-success"></i>
                  </div>
                  <h5 className="card-title fw-bold text-primary">
                    Slides & Swings
                  </h5>
                  <p className="card-text">
                    Experience the thrill of our safe slides and gentle swings
                    designed for all ages!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card activity-card h-100 border-0 shadow-lg">
                <div className="card-body text-center p-4">
                  <div className="activity-icon mb-3">
                    <i className="bi bi-palette-fill display-4 text-info"></i>
                  </div>
                  <h5 className="card-title fw-bold text-primary">
                    Art & Craft Corner
                  </h5>
                  <p className="card-text">
                    Unleash creativity with paints, papers, and craft materials
                    in our artistic zone!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card activity-card h-100 border-0 shadow-lg">
                <div className="card-body text-center p-4">
                  <div className="activity-icon mb-3">
                    <i className="bi bi-search display-4 text-danger"></i>
                  </div>
                  <h5 className="card-title fw-bold text-primary">
                    Treasure Hunt Trails
                  </h5>
                  <p className="card-text">
                    Embark on exciting treasure hunts with clues and hidden
                    surprises around every corner!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card activity-card h-100 border-0 shadow-lg">
                <div className="card-body text-center p-4">
                  <div className="activity-icon mb-3">
                    <i className="bi bi-flag-fill display-4 text-warning"></i>
                  </div>
                  <h5 className="card-title fw-bold text-primary">
                    Mini Obstacle Course
                  </h5>
                  <p className="card-text">
                    Challenge yourself with our safe and fun obstacle course
                    designed for little adventurers!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card activity-card h-100 border-0 shadow-lg">
                <div className="card-body text-center p-4">
                  <div className="activity-icon mb-3">
                    <i className="bi bi-gift-fill display-4 text-success"></i>
                  </div>
                  <h5 className="card-title fw-bold text-primary">
                    Birthday Party Zone
                  </h5>
                  <p className="card-text">
                    Celebrate special days with our dedicated party areas and
                    themed decorations!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5 text-primary">
            📸 Fun Moments Gallery
          </h2>
          <div className="row g-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="col-md-6 col-lg-3">
                <div className="gallery-item rounded shadow-lg overflow-hidden">
                  <div className="gallery-placeholder">
                    <i className="bi bi-image display-4 text-muted"></i>
                    <p className="mt-2">Fun Photo {item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="features-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5 text-primary">
            ⭐ Why Choose KiddoQuest?
          </h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-item text-center">
                <div className="feature-icon mb-3">
                  <i className="bi bi-shield-check display-4 text-success"></i>
                </div>
                <h5 className="fw-bold text-primary">Safe & Supervised</h5>
                <p>
                  Professional staff ensures your child's safety at all times
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-item text-center">
                <div className="feature-icon mb-3">
                  <i className="bi bi-droplet-fill display-4 text-info"></i>
                </div>
                <h5 className="fw-bold text-primary">Sanitized Zones</h5>
                <p>Regular cleaning and sanitization of all play areas</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-item text-center">
                <div className="feature-icon mb-3">
                  <i className="bi bi-snow display-4 text-primary"></i>
                </div>
                <h5 className="fw-bold text-primary">Air-Conditioned</h5>
                <p>Comfortable indoor play environment all year round</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-item text-center">
                <div className="feature-icon mb-3">
                  <i className="bi bi-cup-hot display-4 text-warning"></i>
                </div>
                <h5 className="fw-bold text-primary">Parent Café</h5>
                <p>Relax and enjoy refreshments while kids play</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section py-5">
        <div className="container">
          <h2 className="text-center display-5 fw-bold mb-5 text-primary">
            📍 Find Us
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="location-info">
                <h4 className="fw-bold text-primary mb-3">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Visit KiddoQuest Today!
                </h4>
                <p className="lead mb-3">
                  <strong>Address:</strong>
                  <br />
                  123 Happy Lane, FunTown
                  <br />
                  Chennai - 600001
                  <br />
                  Tamil Nadu, India
                </p>
                <p className="mb-3">
                  <strong>Opening Hours:</strong>
                  <br />
                  Monday - Sunday: 9:00 AM - 8:00 PM
                </p>
                <div className="btn btn-primary btn-lg">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact Us
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="map-container rounded shadow-lg overflow-hidden">
                <div className="map-placeholder">
                  <i className="bi bi-map display-1 text-muted"></i>
                  <p className="mt-3">Google Maps Here</p>
                  <small className="text-muted">
                    Interactive map showing our location
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 className="fw-bold mb-3">🎈 KiddoQuest</h4>
              <p className="mb-3">
                Creating magical moments and unforgettable adventures for
                children!
              </p>
              <div className="social-links">
                <a href="#" className="btn btn-outline-light btn-sm me-2">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
                <a href="#" className="btn btn-outline-light btn-sm">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <div className="contact-info">
                <p className="mb-2">
                  <i className="bi bi-telephone-fill me-2"></i>
                  +91-98765-43210
                </p>
                <p className="mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  contact@kiddoquest.com
                </p>
                <p className="mb-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  123 Happy Lane, FunTown, Chennai
                </p>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">
              © 2025 KiddoQuest. All rights reserved. | Made with ❤️ for kids
              everywhere!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
