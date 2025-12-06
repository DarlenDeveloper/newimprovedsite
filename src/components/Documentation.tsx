import React, { useState, useEffect } from 'react';
import './Documentation.css';

const Documentation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('terms');

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#terms') setActiveTab('terms');
    if (hash === '#privacy') setActiveTab('privacy');
    if (hash === '#faq') setActiveTab('faq');
    if (hash === '#agreement') setActiveTab('agreement');
    
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash === '#terms') setActiveTab('terms');
      if (newHash === '#privacy') setActiveTab('privacy');
      if (newHash === '#faq') setActiveTab('faq');
      if (newHash === '#agreement') setActiveTab('agreement');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState(null, '', `#${tab}`);
  };

  return (
    <section className="docs-section" id="documentation">
      <div className="docs-container">
        <div className="docs-header">
          <h2 className="docs-title">Documentation</h2>
          <p className="docs-subtitle">
            Everything you need to know about using AIRIES AI
          </p>
        </div>

        <div className="docs-tabs">
          <button 
            className={`tab-button ${activeTab === 'terms' ? 'active' : ''}`}
            onClick={() => handleTabClick('terms')}
            id="terms"
          >
            Terms of Use
          </button>
          <button 
            className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`}
            onClick={() => handleTabClick('privacy')}
            id="privacy"
          >
            Privacy Policy
          </button>
          <button 
            className={`tab-button ${activeTab === 'faq' ? 'active' : ''}`}
            onClick={() => handleTabClick('faq')}
            id="faq"
          >
            FAQ
          </button>
          <button 
            className={`tab-button ${activeTab === 'agreement' ? 'active' : ''}`}
            onClick={() => handleTabClick('agreement')}
            id="agreement"
          >
            Service Agreement
          </button>
        </div>

        <div className="docs-content">
          {activeTab === 'terms' && (
            <div className="doc-section">
              <h3>Terms of Use</h3>
              <p>Last updated: January 2025</p>
              <h4>1. Acceptance of Terms</h4>
              <p>By accessing and using AIRIES AI services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.</p>
              <h4>2. Service Description</h4>
              <p>AIRIES AI provides AI-powered call center and sales automation services including inbound customer support, outbound sales calls, and website chat engagement.</p>
              <h4>3. User Responsibilities</h4>
              <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.</p>
              <h4>4. Acceptable Use</h4>
              <p>You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our services.</p>
              <h4>5. Intellectual Property</h4>
              <p>All content, features, and functionality of AIRIES AI are owned by NAJOD SYSTEMS and are protected by international copyright and trademark laws.</p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="doc-section">
              <h3>Privacy Policy</h3>
              <p>Last updated: January 2025</p>
              <h4>1. Information We Collect</h4>
              <p>We collect information you provide directly, including name, email, company details, and call/chat data processed through our platform.</p>
              <h4>2. How We Use Your Information</h4>
              <p>We use collected information to provide and improve our services, communicate with you, and ensure platform security.</p>
              <h4>3. Data Storage & Security</h4>
              <p>Your data is stored securely using industry-standard encryption. We implement appropriate technical measures to protect against unauthorized access.</p>
              <h4>4. Data Sharing</h4>
              <p>We do not sell your personal information. We may share data with service providers who assist in operating our platform.</p>
              <h4>5. Your Rights</h4>
              <p>You have the right to access, correct, or delete your personal data. Contact us at info@najod.co for any privacy-related requests.</p>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="doc-section">
              <h3>Frequently Asked Questions</h3>
              <div className="faq-item">
                <h4>What is AIRIES AI?</h4>
                <p>AIRIES AI is an AI-powered call center and sales automation platform that handles inbound customer support, outbound sales calls, and website chat engagement 24/7.</p>
              </div>
              <div className="faq-item">
                <h4>How does pricing work?</h4>
                <p>We offer tiered pricing based on call minutes and features. Plans range from $20/month for web widget to custom enterprise solutions. Additional minutes are $16 per 100 minutes.</p>
              </div>
              <div className="faq-item">
                <h4>Can I integrate with my existing CRM?</h4>
                <p>Yes, CRM integration is available on Popular plan and above. We support major CRM platforms with automatic data synchronization.</p>
              </div>
              <div className="faq-item">
                <h4>What languages are supported?</h4>
                <p>Our AI agents support multiple languages. Contact our sales team for specific language availability in your region.</p>
              </div>
              <div className="faq-item">
                <h4>How do I get started?</h4>
                <p>Sign up for a plan, complete the onboarding process, and our team will help you configure your AI agents. Setup typically takes 24-48 hours.</p>
              </div>
            </div>
          )}

          {activeTab === 'agreement' && (
            <div className="doc-section">
              <h3>Service Agreement</h3>
              <p>Last updated: January 2025</p>
              <h4>1. Service Level Agreement (SLA)</h4>
              <p>AIRIES AI commits to 99.9% uptime for all paid plans. Business and Enterprise plans include dedicated SLA guarantees.</p>
              <h4>2. Support</h4>
              <p>Support levels vary by plan: Email support (Starter), Priority support (Popular), Dedicated account manager (Business/Enterprise).</p>
              <h4>3. Billing & Payment</h4>
              <p>Services are billed monthly in advance. Overage charges are billed at the end of each billing cycle.</p>
              <h4>4. Cancellation</h4>
              <p>You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period.</p>
              <h4>5. Modifications</h4>
              <p>NAJOD SYSTEMS reserves the right to modify these terms with 30 days notice. Continued use constitutes acceptance of modified terms.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Documentation;
