import React, { useState } from 'react';
import heroImage from '../assets/dbc8fd7fa05241bf8e57b9602ee0a367-removebg-preview.png';
import './Hero.css';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBookDemo = () => {
    if (email) {
      console.log('Booking demo for:', email);
      // Handle demo booking
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-container">
        {/* Left side - Content */}
        <div className="hero-left">
          <h1 className="hero-title">Put people first</h1>
          
          <p className="hero-description">
            Fast, user-friendly and engaging – turn customer operations into people and culture and streamline your daily operations with AI-powered agents.
          </p>

          {/* Email input and CTA */}
          <div className="hero-input-group">
            <input
              type="email"
              placeholder="Enter work email"
              value={email}
              onChange={handleEmailChange}
              className="hero-input"
            />
            <button className="hero-btn-primary" onClick={handleBookDemo}>
              Book a demo
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">85%</div>
              <div className="stat-label">Customer satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">~20k</div>
              <div className="stat-label">Average daily users</div>
            </div>
          </div>

          {/* Rating */}
          <div className="hero-rating">
            <div className="stars">★★★★☆</div>
            <span className="rating-text">4.5 Average user rating</span>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="hero-right">
          <img 
            src={heroImage}
            alt="AIRIES AI Dashboard" 
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
