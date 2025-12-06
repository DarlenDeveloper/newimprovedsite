import React from 'react';
import './Pricing.css';
import { useContactModal } from '../context/ContactModalContext';

const Pricing: React.FC = () => {
  const { openModal } = useContactModal();
  return (
    <div className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, Affordable Outsourcing Plans</h2>
          <p className="pricing-subtitle">
            Choose the perfect plan for your business needs. All plans include our core AI technology with no hidden fees.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Web Widget</h3>
              <div className="plan-price">
                <span className="price-currency">$</span>
                <span className="price-amount">20</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            <div className="pricing-card-body">
              <ul className="plan-features">
                <li>24/7 website chat widget</li>
                <li>Lead capture & qualification</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
            </div>
            <button className="plan-button" onClick={() => openModal('Web Widget Plan - AIRIES AI')}>Get Started</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Starter</h3>
              <div className="plan-price">
                <span className="price-currency">$</span>
                <span className="price-amount">130</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            <div className="pricing-card-body">
              <ul className="plan-features">
                <li>300 call minutes included</li>
                <li>2 AI agents</li>
                <li>2 concurrent calls</li>
                <li>Basic analytics</li>
                <li>Email support</li>
              </ul>
              <div className="plan-note">
                $16 per 100 additional minutes
              </div>
            </div>
            <button className="plan-button" onClick={() => openModal('Starter Plan - AIRIES AI')}>Get Started</button>
          </div>

          <div className="pricing-card popular">
            <div className="popular-badge">Most Popular</div>
            <div className="pricing-card-header">
              <h3 className="plan-name">Popular</h3>
              <div className="plan-price">
                <span className="price-currency">$</span>
                <span className="price-amount">230</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            <div className="pricing-card-body">
              <ul className="plan-features">
                <li>1,000 call minutes included</li>
                <li>5 AI agents</li>
                <li>5 concurrent calls</li>
                <li>CRM integration</li>
                <li>Advanced analytics</li>
                <li>Priority support</li>
              </ul>
              <div className="plan-note">
                $16 per 100 additional minutes
              </div>
            </div>
            <button className="plan-button primary" onClick={() => openModal('Popular Plan - AIRIES AI')}>Get Started</button>
          </div>

          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="plan-name">Business</h3>
              <div className="plan-price">
                <span className="price-currency">$</span>
                <span className="price-amount">390</span>
                <span className="price-period">/month</span>
              </div>
            </div>
            <div className="pricing-card-body">
              <ul className="plan-features">
                <li>2,000 call minutes included</li>
                <li>10 AI agents</li>
                <li>10 concurrent calls</li>
                <li>Full CRM integration</li>
                <li>Call recording & transcription</li>
                <li>Dedicated account manager</li>
                <li>SLA guarantee</li>
              </ul>
              <div className="plan-note">
                $16 per 100 additional minutes
              </div>
            </div>
            <button className="plan-button" onClick={() => openModal('Business Plan - AIRIES AI')}>Get Started</button>
          </div>

          <div className="pricing-card enterprise">
            <div className="pricing-card-header">
              <h3 className="plan-name">Enterprise</h3>
              <div className="plan-price">
                <span className="price-amount">Custom</span>
              </div>
            </div>
            <div className="pricing-card-body">
              <ul className="plan-features">
                <li>Unlimited call minutes</li>
                <li>Unlimited AI agents</li>
                <li>Unlimited concurrent calls</li>
                <li>White-labeling</li>
                <li>Custom integrations</li>
                <li>Dedicated support team</li>
                <li>Custom SLA</li>
                <li>Volume pricing (~$13/100 min)</li>
              </ul>
            </div>
            <button className="plan-button" onClick={() => openModal('Enterprise Plan - AIRIES AI')}>Contact Sales</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
