import React from 'react';
import './PropertyShowcase.css';

const PropertyShowcase: React.FC = () => {
  return (
    <div className="property-showcase">
      <div className="showcase-container">
        {/* Header */}
        <div className="showcase-header">
          <span className="company-name">LuxeReality</span>
          <div className="header-right">
            <div className="phone-number">
              <span className="phone-icon">📞</span>
              62 853 831 583 88
            </div>
            <button className="menu-button">
              <span className="menu-icon">☰</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="showcase-main">
          {/* Left Content */}
          <div className="showcase-left">
            <h1 className="showcase-title">
              Discover the <span className="italic-text">Perfect Place</span> to Live and Thrive<span className="sun-icon">🌿</span>
            </h1>

            <p className="showcase-description">
              Explore a curated selection of homes that fit your lifestyle and preferences.
            </p>

            <div className="showcase-cta">
              <button className="cta-button">View Listings</button>
              <button className="arrow-button">→</button>
            </div>

            <div className="showcase-stats">
              <div className="stat-group">
                <div className="stat-images">
                  <div className="image-placeholder">🏠</div>
                  <div className="image-placeholder">🏡</div>
                  <div className="image-placeholder">🏘️</div>
                </div>
                <div className="stat-text">
                  <div className="stat-title">More than<br/>1000+ property</div>
                </div>
              </div>

              <div className="stat-group">
                <div className="rating">
                  <span className="rating-value">5/5</span>
                  <span className="stars">★★★★★</span>
                </div>
                <div className="stat-text">
                  <div className="stat-title">20 Review<br/>On Google</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Property Card */}
          <div className="showcase-right">
            <div className="property-card">
              {/* Discount Badge */}
              <div className="discount-badge">
                <div className="discount-label">Recommended Up to</div>
                <div className="discount-value">50%</div>
                <button className="contact-button">Contact Now</button>
              </div>

              {/* Property Image Background */}
              <div className="property-image">
                <div className="image-placeholder-large">🏠</div>
              </div>

              {/* Floating Info Cards */}
              <div className="property-details">
                <div className="detail-item">
                  <div className="detail-icon">👤</div>
                  <div className="detail-text">
                    <div className="detail-title">House Tour</div>
                    <div className="detail-desc">Discover our collection with years of experience and a passion for creating exceptional living spaces.</div>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-icon">▶️</div>
                  <div className="detail-text">
                    <div className="detail-title">Play Video</div>
                  </div>
                </div>

                <div className="detail-item">
                  <div className="detail-text">
                    <div className="detail-title">Dream House</div>
                    <div className="detail-price">$450,000</div>
                    <div className="detail-desc">Modernized modern home for family</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyShowcase;
