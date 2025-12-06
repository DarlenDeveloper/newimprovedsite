import React from 'react';
import './HeroSection.css';
import airesLogo from '../assets/dbc8fd7fa05241bf8e57b9602ee0a367-removebg-preview.png';
import { useContactModal } from '../context/ContactModalContext';

const HeroSection: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Floating Elements */}
        <div className="hero-float hero-float-1"></div>
        <div className="hero-float hero-float-2"></div>
        <div className="hero-float hero-float-3"></div>
        
        <div className="hero-main">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Powered by NAJOD SYSTEMS
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Outsource Your</span>
            <span className="title-highlight">Call Center</span>
            <span className="title-line">to AI</span>
          </h1>
          
          <p className="hero-description">
            Transform your customer operations with intelligent AI agents that handle 
            <strong> inbound support</strong>, <strong>outbound sales</strong>, and 
            <strong> website engagement</strong> — 24/7, with human-like understanding.
          </p>
          
          <div className="hero-cta">
            <a href="#pricing" className="btn btn-primary">
              <span>View Pricing</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <button onClick={() => openModal('Book a Demo - AIRIES AI')} className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>Book Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
              <span>NITA Certified</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>24/7 Support</span>
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <span>80% Cheaper</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <img src={airesLogo} alt="AIRIES AI" className="hero-logo-image" />
        </div>
        </div>
        

      </div>
    </section>
  );
};

export default HeroSection;
