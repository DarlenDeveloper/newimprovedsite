import React from 'react';
import './Stats.css';

const Stats: React.FC = () => {
  return (
    <div className="stats-section" id="stats">
      <div className="stats-container">
        <div className="stats-content">
          <h2 className="stats-title">
            Trusted by businesses worldwide
          </h2>
          <p className="stats-description">
            Join hundreds of companies that have transformed their customer operations with AIRIES AI
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">85%</div>
            <div className="stat-label">Increase in customer satisfaction</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Always available support</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">50%</div>
            <div className="stat-label">Reduction in operational costs</div>
          </div>

          <div className="stat-item">
            <div className="stat-value">10x</div>
            <div className="stat-label">Faster response times</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
