import React from 'react';
import './CTA.css';
import { useContactModal } from '../context/ContactModalContext';

const CTA: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <div className="cta-section" id="contact">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to transform your customer operations?
          </h2>
          <p className="cta-description">
            Get started with AIRIES AI today and experience the power of AI-driven customer engagement
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => openModal('Start Free Trial - AIRIES AI')}>Start Free Trial</button>
            <button className="cta-button secondary" onClick={() => openModal('Schedule Demo - AIRIES AI')}>Schedule Demo</button>
          </div>
        </div>

        <div className="location-section">
          <div className="location-info">
            <h3 className="location-title">Visit Our Office</h3>
            <p className="location-address">
              NAJOD SYSTEMS<br />
              Kampala, Uganda<br />
              East Africa
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a href="mailto:info@najod.co" className="contact-value">info@najod.co</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website</span>
                <a href="https://www.najod.co" target="_blank" rel="noopener noreferrer" className="contact-value">www.najod.co</a>
              </div>
            </div>
          </div>
          <div className="location-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1765032572450!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJRE91OGZYVHc.!2m2!1d0.3081253086293682!2d32.56000521071801!3f47.8009409487245!4f16.533893256382385!5f0.7820865974627469" 
              width="100%" 
              height="300" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NAJOD Systems Location"
            />
          </div>
        </div>

        <div className="cta-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="footer-logo">AIRIES AI</h3>
              <p className="footer-tagline">Powered by NAJOD SYSTEMS</p>
              <p className="footer-about">
                NAJOD SYSTEMS is a technology company specializing in AI-powered solutions 
                for businesses. We build intelligent systems that automate customer operations, 
                enhance productivity, and drive growth.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-column">
                <h4 className="footer-heading">Product</h4>
                <ul className="footer-list">
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#dashboard">Dashboard</a></li>
                  <li><a href="#integrations">Integrations</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Solutions</h4>
                <ul className="footer-list">
                  <li><a href="#customer-care">Customer Care</a></li>
                  <li><a href="#sales">Sales Teams</a></li>
                  <li><a href="#website">Website Chat</a></li>
                  <li><a href="#enterprise">Enterprise</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-list">
                  <li><a href="https://www.najod.co" target="_blank" rel="noopener noreferrer">About NAJOD</a></li>
                  <li><a href="https://www.najod.co" target="_blank" rel="noopener noreferrer">Careers</a></li>
                  <li><a href="https://www.najod.co" target="_blank" rel="noopener noreferrer">Blog</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-heading">Documentation</h4>
                <ul className="footer-list">
                  <li><a href="/docs/terms">Terms of Use</a></li>
                  <li><a href="/docs/privacy">Privacy Policy</a></li>
                  <li><a href="/docs/faq">FAQ</a></li>
                  <li><a href="/docs/agreement">Service Agreement</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2024 AIRIES AI. All rights reserved. A product of NAJOD SYSTEMS.
            </p>
            <div className="footer-social">
              <a href="#twitter" className="social-link">Twitter</a>
              <a href="#linkedin" className="social-link">LinkedIn</a>
              <a href="#github" className="social-link">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
