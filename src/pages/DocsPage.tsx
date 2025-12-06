import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './DocsPage.css';

const DocsPage: React.FC = () => {
  const { tab } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(tab || 'terms');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{title: string, section: string, tab: string}[]>([]);

  useEffect(() => {
    if (tab) {
      setActiveTab(tab);
    }
  }, [tab]);

  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    navigate(`/docs/${newTab}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }
    
    const results: {title: string, section: string, tab: string}[] = [];
    const lowerQuery = query.toLowerCase();
    
    const searchableContent = [
      { title: 'Terms of Service', section: 'Acceptance of Terms', tab: 'terms' },
      { title: 'Terms of Service', section: 'Scope of Services', tab: 'terms' },
      { title: 'Terms of Service', section: 'User Accounts', tab: 'terms' },
      { title: 'Terms of Service', section: 'Intellectual Property', tab: 'terms' },
      { title: 'Terms of Service', section: 'Privacy', tab: 'terms' },
      { title: 'Terms of Service', section: 'Subscription Plans', tab: 'terms' },
      { title: 'Terms of Service', section: 'Limitation of Liability', tab: 'terms' },
      { title: 'Terms of Service', section: 'Termination', tab: 'terms' },
      { title: 'Terms of Service', section: 'Dispute Resolution', tab: 'terms' },
      { title: 'Privacy Policy', section: 'Information We Collect', tab: 'privacy' },
      { title: 'Privacy Policy', section: 'Data Storage', tab: 'privacy' },
      { title: 'Privacy Policy', section: 'Your Rights', tab: 'privacy' },
      { title: 'FAQ', section: 'What is AIRIES AI?', tab: 'faq' },
      { title: 'FAQ', section: 'Pricing', tab: 'faq' },
      { title: 'FAQ', section: 'CRM Integration', tab: 'faq' },
    ];
    
    searchableContent.forEach(item => {
      if (item.section.toLowerCase().includes(lowerQuery) || item.title.toLowerCase().includes(lowerQuery)) {
        results.push(item);
      }
    });
    
    setSearchResults(results.slice(0, 5));
  };

  return (
    <div className="docs-page">
      <header className="docs-header">
        <div className="docs-header-content">
          <Link to="/" className="docs-logo">AIRIES AI</Link>
          <nav className="docs-nav">
            <Link to="/">Home</Link>
            <Link to="/docs/terms">Terms</Link>
            <Link to="/docs/privacy">Privacy</Link>
            <Link to="/docs/faq">FAQ</Link>
          </nav>
        </div>
      </header>

      <div className="docs-container">
        <aside className="docs-sidebar">
          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search documentation..." 
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>

          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((result, index) => (
                <div 
                  key={index} 
                  className="search-result-item"
                  onClick={() => {
                    handleTabChange(result.tab);
                    setSearchQuery('');
                    setSearchResults([]);
                  }}
                >
                  {result.title} - {result.section}
                </div>
              ))}
            </div>
          )}

          <nav className="sidebar-nav">
            <button 
              className={`sidebar-link ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => handleTabChange('terms')}
            >
              Terms of Service
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => handleTabChange('privacy')}
            >
              Privacy Policy
            </button>
            <button 
              className={`sidebar-link ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => handleTabChange('faq')}
            >
              FAQ
            </button>
          </nav>

          <div className="sidebar-contact">
            <p>Need help?</p>
            <a href="mailto:info@najod.co">info@najod.co</a>
            <p>+256778825312</p>
          </div>
        </aside>

        <main className="docs-main">
          {activeTab === 'terms' && <TermsContent />}
          {activeTab === 'privacy' && <PrivacyContent />}
          {activeTab === 'faq' && <FAQContent />}
        </main>
      </div>
    </div>
  );
};

const TermsContent = () => (
  <div className="doc-content">
    <h1>Terms of Service for Airies AI</h1>
    <p className="docs-updated">Last Updated: 21|04|2025</p>
    
    <p className="intro">Welcome to Airies AI. These Terms of Service ("ToS" or "Terms") govern your access to and use of the Airies AI platform, including all related services, features, content, and tools (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms in their entirety. If you do not agree to these Terms, you are not permitted to use the Platform under any circumstances.</p>

    <div className="docs-section">
      <h2>1. Acceptance of Terms</h2>
      <p>These Terms form a legally binding agreement between you ("User," "you," or "your") and Airies AI ("we," "us," or "our"). By registering for an account, accessing, or otherwise interacting with the Platform, you confirm that you have read, understood, and agree to comply with these Terms and our accompanying Privacy Policy. If you are using the Platform on behalf of a business, organization, or other legal entity, you represent and warrant that you have the full authority to bind that entity to these Terms, and "you" will refer to both you and that entity collectively.</p>
      <p>We reserve the right to update or modify these Terms at our discretion. Should we make material changes, we will notify you through reasonable means, such as via email to the address associated with your account or by displaying a prominent notice on the Platform. Such notifications will be provided at least 30 days prior to the changes taking effect, unless immediate changes are required by law. Your continued use of the Platform following the effective date of any updates constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically to stay informed of any modifications. If you disagree with the updated Terms, your sole remedy is to discontinue using the Platform and terminate your account prior to the effective date of the changes.</p>
    </div>

    <div className="docs-section">
      <h2>2. Scope of Services</h2>
      <p>Airies AI provides a business-to-business (B2B) platform designed to empower businesses with AI-powered customer care agents. The Platform encompasses a variety of features and services, including but not limited to:</p>
      <ul>
        <li><strong>AI Agent Creation and Customization:</strong> Tools to design and tailor AI agents to meet specific business needs.</li>
        <li><strong>Training Tools:</strong> Resources for training AI models with custom datasets or predefined parameters.</li>
        <li><strong>Telephony Integrations:</strong> Connectivity with services like Twilio and Africa's Talking for seamless communication.</li>
        <li><strong>Real-Time Analytics:</strong> Dashboards providing insights into agent performance, customer interactions, and system usage.</li>
        <li><strong>Data Management:</strong> Secure storage, retrieval, and processing of business and user data.</li>
        <li><strong>Customer Support:</strong> Access to documentation, tutorials, and a support team for assistance.</li>
      </ul>
      <p>The Platform is dynamic and may evolve over time. We may, at our sole discretion and without prior notice, modify, enhance, suspend, or discontinue any aspect of the Platform. This includes adding new functionalities, removing outdated features, adjusting the user interface, or updating underlying technologies. While we strive to maintain continuity, we will endeavor to notify users of significant changes that may materially impact their ability to use the Platform, such as the discontinuation of a core feature. Such notifications may be delivered via email, in-app messages, or other reasonable methods.</p>
    </div>

    <div className="docs-section">
      <h2>3. User Accounts and Responsibilities</h2>
      
      <h3>3.1 Account Registration</h3>
      <p>To access certain features of the Platform, you must register for an account. During registration, you agree to:</p>
      <ul>
        <li>Provide accurate, current, and complete information, including your name, email address, and business details.</li>
        <li>Promptly update your account information if any changes occur, such as a new email address or contact number.</li>
        <li>Safeguard your login credentials, including your username and password, and refrain from sharing them with third parties.</li>
        <li>Immediately notify us at support@airiesai.com if you suspect unauthorized access to your account or any other security breach.</li>
      </ul>

      <h3>3.2 Account Security</h3>
      <p>To ensure the integrity of your account, you agree to adhere to the following security practices:</p>
      <ul>
        <li>Create a strong password incorporating a mix of uppercase and lowercase letters, numbers, and special characters (e.g., !, @, #).</li>
        <li>Update your password periodically, at least every six months, or sooner if a breach is suspected.</li>
        <li>Enable 2FA if provided, adding an additional layer of protection through a secondary verification method (e.g., a code sent to your phone).</li>
        <li>Log out of your account after each session, particularly when using shared, public, or unsecured devices.</li>
      </ul>
      <p>If you forget your password, you may initiate a reset by selecting the "Forgot Password" option on the login page. A reset link will be sent to the email address tied to your account. Follow the instructions in the email to create a new password. If you encounter issues, contact our support team for assistance.</p>

      <h3>3.3 Acceptable Use</h3>
      <p>You agree to use the Platform solely for lawful purposes and in accordance with these Terms. Prohibited activities include, but are not limited to:</p>
      <ul>
        <li>Engaging in illegal, fraudulent, or harmful conduct, such as harassment, discrimination, or distributing malicious content.</li>
        <li>Attempting to gain unauthorized access to the Platform, other user accounts, servers, or connected systems.</li>
        <li>Uploading or transmitting content that is defamatory, obscene, pornographic, or violates third-party rights, including intellectual property or privacy rights.</li>
        <li>Disrupting the Platform's functionality by introducing viruses, malware, or other harmful code.</li>
        <li>Sending spam, unsolicited messages, or bulk communications without prior consent.</li>
        <li>Impersonating another individual or entity, or misrepresenting your affiliation with any party.</li>
        <li>Overloading, damaging, or impairing the Platform's infrastructure or performance.</li>
      </ul>
      <p>Violations of these policies may result in immediate suspension or termination of your account, at our discretion. We may also report illegal activities to relevant law enforcement authorities and cooperate fully with any investigations.</p>
    </div>

    <div className="docs-section">
      <h2>4. Intellectual Property</h2>
      
      <h3>4.1 Ownership</h3>
      <p>Airies AI retains all rights, title, and interest in the Platform, including its software, algorithms, user interfaces, documentation, trademarks, logos, and other proprietary materials. Your use of the Platform does not grant you any ownership rights or licenses beyond those expressly provided in these Terms. All trademarks, service marks, and logos appearing on the Platform are the exclusive property of Airies AI or their respective third-party owners, and you may not use them without prior written permission.</p>

      <h3>4.2 User Data</h3>
      <p>You retain ownership of all data, content, or materials you upload or submit to the Platform ("User Data"). By providing User Data, you grant Airies AI a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, store, process, reproduce, modify, and display such data solely for the purposes of operating, maintaining, and enhancing the Platform. This license extends to creating derivative works, such as aggregated or anonymized datasets for analytics, reporting, or machine learning improvements, provided such works do not identify you or your business without consent.</p>
      <p>You warrant that you have all necessary rights, permissions, and consents to upload User Data and grant the above license. Airies AI is not responsible for the content of User Data or any disputes arising from its use.</p>

      <h3>4.3 Feedback</h3>
      <p>If you submit feedback, suggestions, or ideas about the Platform ("Feedback"), you grant Airies AI a perpetual, irrevocable, royalty-free, worldwide license to use, adapt, and incorporate such Feedback into the Platform or related services without any obligation to compensate or credit you. This includes the right to modify, publish, or commercialize Feedback for purposes such as feature development, marketing, or customer support enhancements.</p>
    </div>

    <div className="docs-section">
      <h2>5. Privacy</h2>
      <p>Your privacy is a priority for us. Our Privacy Policy provides a comprehensive explanation of how we collect, use, store, disclose, and protect your personal information and User Data. By using the Platform, you consent to these practices as outlined in the Privacy Policy.</p>
      <p>We adhere to applicable privacy laws, including the General Data Protection Regulation (GDPR) for users in the European Union and the California Consumer Privacy Act (CCPA) for California residents. Depending on your location, you may have rights such as accessing, correcting, or deleting your data. Please refer to the Privacy Policy for details on exercising these rights and our compliance with regional regulations.</p>
      <p>We implement reasonable technical and organizational measures to safeguard your data, including encryption, access controls, and regular security audits. However, no system is entirely immune to breaches, and we cannot guarantee absolute security.</p>
    </div>

    <div className="docs-section">
      <h2>6. Subscription and Payment</h2>
      
      <h3>6.1 Subscription Plans</h3>
      <p>Certain features of the Platform require a paid subscription. Available plans and pricing are outlined on our Pricing Page and may include:</p>
      <ul>
        <li><strong>Starter Plan:</strong> Basic AI tools with limited monthly usage and support.</li>
        <li><strong>Professional Plan:</strong> Expanded features, higher usage limits, and priority support.</li>
        <li><strong>Enterprise Plan:</strong> Fully customized solutions, unlimited usage, and dedicated account management.</li>
      </ul>
      <p>We may adjust subscription offerings, pricing, or features at any time. Changes will not affect your current subscription term but will apply upon renewal or if you switch plans.</p>

      <h3>6.2 Payment Terms</h3>
      <p>You agree to pay all applicable fees for your selected subscription plan in advance. Payments are non-refundable unless otherwise stated in these Terms or mandated by law. We accept multiple payment methods, including credit/debit cards, wire transfers, and electronic payment services (e.g., PayPal, Stripe), as specified during checkout.</p>
      <p>If a payment fails (e.g., due to insufficient funds or an expired card), we may suspend your access until payment is successfully processed. You are liable for any additional fees incurred due to payment failures, such as bank charges or penalties.</p>

      <h3>6.3 Billing and Renewals</h3>
      <p>Subscriptions are billed on a recurring basis—either monthly or annually—based on your chosen plan. Your subscription will automatically renew at the end of each billing cycle unless canceled at least 48 hours prior to the renewal date. You can manage billing preferences and cancellations via your account dashboard or by contacting our support team.</p>
      <p>Upon cancellation, you retain access to paid features until the end of your current billing period. No prorated refunds are issued for unused portions of a billing cycle.</p>

      <h3>6.4 Refunds</h3>
      <p>Refunds are not typically offered, except where required by applicable law or at our sole discretion (e.g., for significant service disruptions). To request a refund, contact our support team with your account details and a description of the issue.</p>
    </div>

    <div className="docs-section">
      <h2>7. Limitation of Liability</h2>
      <p>To the fullest extent permitted by law, Airies AI, its affiliates, officers, directors, employees, agents, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, revenue, data, goodwill, or business opportunities—arising from your use of or inability to use the Platform, even if we were advised of the possibility of such damages.</p>
      <p>Our aggregate liability for any claim related to these Terms or the Platform shall not exceed the total amount you paid to us in the twelve (12) months prior to the claim. This limitation applies regardless of the legal theory (e.g., contract, tort, or statute) and does not waive any non-excludable statutory rights you may have under applicable law.</p>
    </div>

    <div className="docs-section">
      <h2>8. Disclaimer of Warranties</h2>
      <p>The Platform is provided "as is" and "as available," without warranties of any kind, whether express, implied, or statutory. We do not guarantee that the Platform will:</p>
      <ul>
        <li>Operate uninterrupted or error-free.</li>
        <li>Be secure or free from viruses, malware, or other harmful components.</li>
        <li>Meet your specific needs or expectations.</li>
      </ul>
      <p>We disclaim all implied warranties, including merchantability, fitness for a particular purpose, non-infringement, accuracy, completeness, or timeliness of information. Your use of the Platform is at your own risk, and we are not liable for any damages resulting from reliance on the Platform's content or services.</p>
    </div>

    <div className="docs-section">
      <h2>9. Termination</h2>
      
      <h3>9.1 Termination by User</h3>
      <p>You may terminate your account at any time by navigating to the account settings page and selecting the termination option or by emailing our support team at support@airiesai.com. Termination ends your access to the Platform, and we recommend exporting any critical data beforehand.</p>

      <h3>9.2 Termination by Airies AI</h3>
      <p>We may suspend or terminate your account and access to the Platform without prior notice if you:</p>
      <ul>
        <li>Breach these Terms or our acceptable use policies.</li>
        <li>Fail to pay subscription fees after a reasonable grace period.</li>
        <li>Engage in conduct that harms the Platform, other users, or our reputation.</li>
        <li>Are subject to legal or regulatory actions requiring termination.</li>
      </ul>
      <p>Termination for cause voids any eligibility for refunds or compensation.</p>

      <h3>9.3 Effect of Termination</h3>
      <p>Upon termination, all rights and licenses granted to you under these Terms cease immediately, and you must stop using the Platform. We may retain your User Data post-termination for legal compliance, dispute resolution, or contractual enforcement purposes. You may request data deletion, subject to applicable laws, by contacting us within 30 days of termination.</p>
    </div>

    <div className="docs-section">
      <h2>10. Dispute Resolution</h2>
      
      <h3>10.1 Governing Law</h3>
      <p>These Terms are governed by the laws of Uganda, excluding its conflict of law provisions. Any legal actions not subject to arbitration will be resolved in the courts of Kampala.</p>

      <h3>10.2 Arbitration</h3>
      <p>Disputes arising from these Terms or the Platform shall be resolved through binding arbitration under the rules of the Arbitration Association of Uganda. Arbitration will occur in Kampala, conducted by a single arbitrator in English. The arbitrator's decision is final and enforceable in any court of competent jurisdiction. Each party bears its own costs unless the arbitrator awards otherwise.</p>

      <h3>10.3 Class Action Waiver</h3>
      <p>You agree to resolve disputes on an individual basis only, waiving any right to participate in class, collective, or representative actions against Airies AI.</p>
    </div>

    <div className="docs-section">
      <h2>11. Modifications to the Terms</h2>
      <p>We may amend these Terms at our discretion. Material changes will be communicated via email or an in-platform notice at least 30 days before taking effect, unless immediate implementation is legally required. Continued use post-modification signifies acceptance. To reject changes, terminate your account before the effective date.</p>
    </div>

    <div className="docs-section">
      <h2>12. Force Majeure</h2>
      <p>We are not liable for delays or failures in performing our obligations due to events beyond our reasonable control, such as natural disasters, wars, terrorist acts, government mandates, labor strikes, or disruptions in internet or utility services. We will resume performance as soon as practicable following such events.</p>
    </div>

    <div className="docs-section">
      <h2>13. Miscellaneous</h2>
      
      <h3>13.1 Entire Agreement</h3>
      <p>These Terms, alongside the Privacy Policy and any referenced agreements, constitute the complete understanding between you and Airies AI regarding the Platform, superseding all prior agreements.</p>

      <h3>13.2 Severability</h3>
      <p>If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions remain in full effect, and the invalid provision will be reformed to reflect the original intent as closely as legally possible.</p>

      <h3>13.3 Waiver</h3>
      <p>Our failure to enforce any provision does not waive it. Waivers must be explicit, written, and signed by an authorized Airies AI representative.</p>

      <h3>13.4 Assignment</h3>
      <p>You may not assign your rights or obligations under these Terms without our prior written consent. We may assign these Terms freely, including in cases of mergers, acquisitions, or asset sales.</p>

      <h3>13.5 Contact Information</h3>
      <p>For questions or concerns about these Terms, reach out to:</p>
      <p>
        <strong>Airies AI</strong><br/>
        National Innovation Hub<br/>
        Nakawa, Kampala, Uganda<br/>
        info@najod.co<br/>
        +256778825312
      </p>
    </div>

    <p className="agreement-note">By accessing or using the Airies AI Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service in their entirety.</p>
  </div>
);

const PrivacyContent = () => (
  <div className="doc-content">
    <h1>Privacy Policy for Airies AI</h1>
    <p className="docs-updated">Last Updated: 06|12|2025</p>

    <p className="intro">At Airies AI, we are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, share, and protect the information you provide when using our platform, services, and website (collectively, the "Platform"). By accessing or using the Platform, you consent to the practices described in this Privacy Policy.</p>

    <div className="docs-section">
      <h2>1. Introduction</h2>
      <p>This Privacy Policy applies to all users of the Airies AI Platform, including business customers, their employees, and end-users interacting with our AI-powered customer care agents. We handle your data in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).</p>
    </div>

    <div className="docs-section">
      <h2>2. Information We Collect</h2>
      <p>We collect various types of information to provide and improve our services:</p>

      <h3>2.1 Personal Information</h3>
      <ul>
        <li><strong>Account Data:</strong> When you register for an account, we collect your name, email address, company name, and contact details.</li>
        <li><strong>Payment Information:</strong> If you subscribe to a paid plan, we collect billing information such as credit card details or bank account information.</li>
        <li><strong>Communication Data:</strong> Information you provide when contacting us for support or inquiries, including emails, chat logs, and call recordings.</li>
      </ul>

      <h3>2.2 Usage Data</h3>
      <ul>
        <li><strong>Platform Interactions:</strong> We collect data on how you use the Platform, such as pages visited, features accessed, and time spent.</li>
        <li><strong>Device Information:</strong> Details about your device, including IP address, browser type, operating system, and unique device identifiers.</li>
        <li><strong>AI Interaction Data:</strong> For businesses using our AI agents, we collect data on customer interactions, including call logs, transcripts, and resolution statuses.</li>
      </ul>

      <h3>2.3 Cookies and Tracking Technologies</h3>
      <p>We use cookies, web beacons, and similar technologies to enhance your experience, analyze usage, and deliver personalized content. For more details, see Section 7.</p>
    </div>

    <div className="docs-section">
      <h2>3. How We Use Your Information</h2>
      <p>We use the collected data for the following purposes:</p>
      <ul>
        <li><strong>Service Provision:</strong> To create and manage your account, provide access to the Platform, and deliver our AI-powered customer care services.</li>
        <li><strong>Improvement and Development:</strong> To analyze usage patterns, improve existing features, and develop new functionalities.</li>
        <li><strong>Customer Support:</strong> To respond to your inquiries, provide technical assistance, and resolve issues.</li>
        <li><strong>Billing and Payments:</strong> To process payments, manage subscriptions, and handle billing disputes.</li>
        <li><strong>Marketing and Communications:</strong> To send you updates, newsletters, promotional offers, and other information about our services (you can opt-out at any time).</li>
        <li><strong>Legal Compliance:</strong> To comply with legal obligations, such as responding to lawful requests from authorities or enforcing our Terms of Service.</li>
      </ul>
    </div>

    <div className="docs-section">
      <h2>4. Data Sharing and Disclosure</h2>
      <p>We may share your information in the following circumstances:</p>
      <ul>
        <li><strong>Service Providers:</strong> With third-party vendors who assist us in operating the Platform, such as hosting providers, payment processors, and analytics services. These providers are contractually obligated to protect your data.</li>
        <li><strong>Business Partners:</strong> With partners involved in delivering integrated services, such as telephony providers (e.g., Twilio, Africa's Talking).</li>
        <li><strong>Legal Requirements:</strong> When required by law, such as in response to subpoenas, court orders, or to protect our rights, property, or safety.</li>
        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred to the new entity, subject to this Privacy Policy.</li>
        <li><strong>Aggregated Data:</strong> We may share anonymized or aggregated data for research, marketing, or statistical purposes.</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>
    </div>

    <div className="docs-section">
      <h2>5. Data Security</h2>
      <p>We implement robust technical and organizational measures to protect your data from unauthorized access, alteration, or destruction. These measures include:</p>
      <ul>
        <li><strong>Encryption:</strong> Data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption provided by supabase.</li>
        <li><strong>Access Controls:</strong> Strict access controls and authentication protocols to ensure only authorized personnel can access sensitive data.</li>
        <li><strong>Regular Audits:</strong> Ongoing security assessments and audits to identify and mitigate potential vulnerabilities.</li>
        <li><strong>Incident Response:</strong> A comprehensive plan to respond to and recover from data breaches or security incidents.</li>
      </ul>
      <p>Despite these measures, no system is completely secure. If a breach occurs, we will notify affected users as required by law and take steps to mitigate the impact.</p>
    </div>

    <div className="docs-section">
      <h2>6. Your Rights and Choices</h2>
      <p>Depending on your location, you may have the following rights regarding your personal data:</p>

      <h3>Data Control Rights</h3>
      <ul>
        <li><strong>Access:</strong> Request a copy of the data we hold about you.</li>
        <li><strong>Correction:</strong> Update or correct inaccurate or incomplete data.</li>
        <li><strong>Deletion:</strong> Request the deletion of your data, subject to legal retention requirements.</li>
      </ul>

      <h3>Usage Control Rights</h3>
      <ul>
        <li><strong>Restriction:</strong> Limit how we process your data in certain circumstances.</li>
        <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
        <li><strong>Objection:</strong> Object to the processing of your data for specific purposes, such as marketing.</li>
      </ul>
      <p>To exercise these rights, contact us via our scheduling page. We will respond to your request within the timeframes required by law (e.g., 30 days under GDPR).</p>

      <h3>6.1 Opting Out of Marketing</h3>
      <p>You can opt-out of receiving marketing communications by clicking the "unsubscribe" link in emails or adjusting your account settings.</p>
    </div>

    <div className="docs-section">
      <h2>7. Cookies and Tracking Technologies</h2>
      <p>We use cookies and similar technologies to enhance your experience and analyze usage:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> Necessary for the Platform's functionality, such as maintaining your session.</li>
        <li><strong>Performance Cookies:</strong> Collect data on how users interact with the Platform to improve performance.</li>
        <li><strong>Marketing Cookies:</strong> Used to deliver personalized ads and track campaign effectiveness.</li>
      </ul>
      <p>You can manage cookie preferences through your browser settings. However, disabling essential cookies may affect the Platform's functionality.</p>
    </div>

    <div className="docs-section">
      <h2>8. International Data Transfers</h2>
      <p>Airies AI operates globally, and your data may be transferred to and processed in countries outside your jurisdiction, including the United States. We ensure that such transfers comply with applicable data protection laws, using mechanisms like Standard Contractual Clauses (SCCs) or adequacy decisions.</p>
    </div>

    <div className="docs-section">
      <h2>9. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy to reflect changes in our practices or legal requirements. If we make material changes, we will notify you via email or through the Platform at least 30 days before the changes take effect. Your continued use of the Platform after the effective date constitutes acceptance of the updated policy.</p>
    </div>

    <div className="docs-section">
      <h2>10. Contact Us</h2>
      <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
      <p>
        <strong>Airies AI</strong><br/>
        National Innovation Hub<br/>
        Nakawa, Kampala, Uganda<br/>
        Contact us via our scheduling page<br/>
        +256778825312
      </p>
    </div>

    <p className="agreement-note">By using the Airies AI Platform, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.</p>
  </div>
);

const FAQContent = () => (
  <div className="doc-content">
    <h1>Frequently Asked Questions</h1>
    <p className="docs-updated">Get answers to the most common questions about AIRIES AI and how it can transform your customer service.</p>

    <div className="faq-item">
      <h3>How does AIRIES AI understand customer inquiries?</h3>
      <p>AIRIES AI uses advanced natural language processing (NLP) technology to understand the context, intent, and sentiment behind customer inquiries. Our AI models are trained on millions of customer service interactions, enabling them to comprehend complex questions, detect nuances in language, and understand industry-specific terminology. The system continuously learns from interactions, becoming more accurate over time.</p>
    </div>

    <div className="faq-item">
      <h3>How long does it take to train the AI for our specific business needs?</h3>
      <p>It takes less than 24 hours after submission of training data for AIRIES AI to be fully operational. Our advanced machine learning algorithms quickly process and adapt to your business context, allowing for rapid deployment and immediate value. After deployment, the AI continues to learn and improve with each interaction.</p>
    </div>

    <div className="faq-item">
      <h3>How does the handoff between AI and human agents work?</h3>
      <p>AIRIES AI includes a sophisticated escalation system that determines when a conversation should be transferred to a human agent. This decision is based on multiple factors, including query complexity, customer sentiment, issue type, and explicit customer requests. When a handoff occurs, the human agent receives a complete conversation transcript along with AI-generated context notes and suggested next steps. The transition is seamless for the customer, maintaining continuity in the support experience.</p>
    </div>

    <div className="faq-item">
      <h3>What kind of analytics and reporting does the platform provide?</h3>
      <p>We only provide call summary status indicating whether the AI solved or did not solve the client issue, as well as follow-up information. This feature will be enhanced with our comprehensive analytics dashboard that is projected to launch by Q4 2025.</p>
    </div>

    <div className="faq-item">
      <h3>How secure is customer data within the AIRIES AI platform?</h3>
      <p>Security is a top priority for AIRIES AI. We employ end-to-end encryption for all data, both in transit and at rest. Our infrastructure is SOC 2 Type II certified and compliant with GDPR, CCPA, and HIPAA regulations. We implement strict access controls, regular security audits, and penetration testing. Customer data is never used to train models for other clients, ensuring complete data isolation between organizations.</p>
    </div>

    <div className="faq-item">
      <h3>What is the pricing model for AIRIES AI?</h3>
      <p>Please refer to our pricing section for detailed information on our current plans and pricing structure. We offer flexible options designed to meet the needs of businesses of all sizes.</p>
    </div>
  </div>
);

export default DocsPage;
