import React from 'react';
import './ValueProps.css';

const ValueProps: React.FC = () => {
  return (
    <section className="value-props" id="why-airies">
      <div className="value-props-container">
        <div className="section-header">
          <h2 className="section-title">Why Choose AIRIES AI?</h2>
          <p className="section-subtitle">
            Transform your customer operations with intelligent automation that works around the clock
          </p>
        </div>

        <div className="props-grid">
          <div className="prop-card">
            <div className="prop-number">01</div>
            <h3 className="prop-title">Always-On Sales & Support</h3>
            <p className="prop-description">
              Our AI agents work 24/7, 365 days a year. Never miss a call, lead, or customer inquiry 
              again—even during holidays, weekends, and peak hours. Your business stays open when 
              your competitors close.
            </p>
          </div>

          <div className="prop-card">
            <div className="prop-number">02</div>
            <h3 className="prop-title">Human-Like Conversations</h3>
            <p className="prop-description">
              Advanced natural language processing enables our AI to understand context, emotion, 
              and intent. Customers experience authentic, helpful interactions that feel natural—not 
              robotic or scripted.
            </p>
          </div>

          <div className="prop-card">
            <div className="prop-number">03</div>
            <h3 className="prop-title">Seamless CRM Integration</h3>
            <p className="prop-description">
              Connect with your existing tools effortlessly. Automatic data synchronization, call 
              logging, and real-time updates to your CRM system. No manual data entry, no missed 
              information.
            </p>
          </div>

          <div className="prop-card">
            <div className="prop-number">04</div>
            <h3 className="prop-title">Predictable, Scalable Pricing</h3>
            <p className="prop-description">
              No hidden fees. No surprise charges. Easy setup with transparent, flat-rate monthly 
              pricing. Scale from 2 agents to unlimited capacity as your business grows—without 
              hiring or training costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
