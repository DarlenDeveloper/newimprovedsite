import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  return (
    <div className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Complete AI Solutions for Your Business</h2>
          <p className="features-subtitle">
            From customer care to sales outreach, our AI agents handle it all
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-label">INBOUND</div>
            <h3 className="feature-title">For Customer Care</h3>
            <p className="feature-description">
              AI handles inbound calls with human-like understanding. Answer FAQs, resolve issues, collect feedback, and deflect routine calls automatically.
            </p>
            <ul className="feature-list">
              <li>24/7 availability</li>
              <li>Instant response times</li>
              <li>Multi-language support</li>
              <li>Call deflection & routing</li>
            </ul>
          </div>

          <div className="feature-card highlighted">
            <div className="feature-badge">Most Popular</div>
            <div className="feature-label">OUTBOUND</div>
            <h3 className="feature-title">For Sales Teams</h3>
            <p className="feature-description">
              Outbound AI agents handle lead generation, qualification, appointment setting, and follow-up campaigns. Never miss a sales opportunity.
            </p>
            <ul className="feature-list">
              <li>Automated lead qualification</li>
              <li>Smart appointment scheduling</li>
              <li>Consistent follow-ups</li>
              <li>Pipeline acceleration</li>
            </ul>
          </div>

          <div className="feature-card">
            <div className="feature-label">CHAT</div>
            <h3 className="feature-title">For Websites</h3>
            <p className="feature-description">
              24/7 chat-based lead capture through our intelligent web widget. Engage visitors instantly and qualify leads while you sleep.
            </p>
            <ul className="feature-list">
              <li>Real-time engagement</li>
              <li>Lead capture & qualification</li>
              <li>Seamless CRM integration</li>
              <li>Visitor analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
