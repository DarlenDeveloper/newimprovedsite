import React from 'react';
import './Solutions.css';

const Solutions: React.FC = () => {
  return (
    <section className="solutions">
      <div className="solutions-container">
        <div className="section-header">
          <h2 className="section-title">Complete AI Solutions for Every Business Need</h2>
          <p className="section-subtitle">
            From customer support to sales outreach, our AI agents handle every customer interaction with precision and care
          </p>
        </div>

        <div className="solutions-list">
          <div className="solution-item">
            <div className="solution-header">
              <div className="solution-label">For Customer Care</div>
              <div className="solution-tag">Inbound Support</div>
            </div>
            <h3 className="solution-title">
              AI-Powered Customer Support That Never Sleeps
            </h3>
            <p className="solution-description">
              Our AI agents handle inbound customer calls with human-like understanding and empathy. 
              They answer frequently asked questions, resolve common issues, collect valuable feedback, 
              and intelligently route complex cases to human agents when needed. Reduce wait times to 
              zero, handle unlimited concurrent calls, and provide consistent, high-quality support 
              across all customer touchpoints.
            </p>
            <ul className="solution-features">
              <li>Instant response to customer inquiries</li>
              <li>FAQ answering and issue resolution</li>
              <li>Feedback collection and sentiment analysis</li>
              <li>Intelligent call routing and escalation</li>
              <li>Multi-language support capabilities</li>
            </ul>
          </div>

          <div className="solution-item">
            <div className="solution-header">
              <div className="solution-label">For Sales Teams</div>
              <div className="solution-tag">Outbound Calling</div>
            </div>
            <h3 className="solution-title">
              Outbound Sales That Scales With Your Ambitions
            </h3>
            <p className="solution-description">
              Transform your sales process with AI agents that handle outbound calling at scale. Our 
              virtual sales team qualifies leads, books appointments, follows up with prospects, and 
              nurtures relationships—all while maintaining your brand voice and sales methodology. 
              Never let a lead go cold again. Our AI works your pipeline 24/7, ensuring every 
              opportunity gets the attention it deserves.
            </p>
            <ul className="solution-features">
              <li>Automated lead qualification and scoring</li>
              <li>Appointment setting and calendar management</li>
              <li>Consistent follow-up campaigns</li>
              <li>Pipeline acceleration and nurturing</li>
              <li>Real-time CRM updates and logging</li>
            </ul>
          </div>

          <div className="solution-item">
            <div className="solution-header">
              <div className="solution-label">For Websites</div>
              <div className="solution-tag">Live Chat</div>
            </div>
            <h3 className="solution-title">
              Website Engagement That Converts Visitors to Leads
            </h3>
            <p className="solution-description">
              Capture and qualify leads while you sleep with our intelligent web chat widget. Our AI 
              engages website visitors in real-time conversations, answers product questions, collects 
              contact information, and qualifies prospects based on your criteria. Every visitor gets 
              immediate attention, and you get a steady stream of qualified leads delivered directly 
              to your CRM.
            </p>
            <ul className="solution-features">
              <li>24/7 website visitor engagement</li>
              <li>Automated lead capture and qualification</li>
              <li>Product information and FAQ support</li>
              <li>Seamless CRM integration</li>
              <li>Visitor behavior tracking and analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
