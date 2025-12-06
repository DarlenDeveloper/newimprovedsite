import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <section className="dashboard-section" id="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h2 className="dashboard-title">Powerful Dashboard at Your Fingertips</h2>
          <p className="dashboard-subtitle">
            Monitor, analyze, and optimize every customer interaction from one centralized platform
          </p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="card-title">Call History</h3>
            <p className="card-text">
              Complete call records with type, status, contact, duration, timestamps, and AI summaries. Export as CSV.
            </p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3 className="card-title">Chat History</h3>
            <p className="card-text">
              Review all website conversations, track visitor engagement, and export transcripts for quality assurance.
            </p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3 className="card-title">Campaign Scheduling</h3>
            <p className="card-text">
              Plan outbound call campaigns with precision. Set call windows, define targets, and automate execution.
            </p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="20" x2="18" y2="10"/>
                <line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/>
              </svg>
            </div>
            <h3 className="card-title">Analytics</h3>
            <p className="card-text">
              Track success rates, call volume trends, geographic distribution, and performance metrics in real-time.
            </p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="card-title">Real-Time Monitoring</h3>
            <p className="card-text">
              Monitor concurrent calls, agent availability, and live interactions as they happen across all channels.
            </p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h3 className="card-title">Reports & Export</h3>
            <p className="card-text">
              Generate detailed reports, download call recordings, and export data in multiple formats for analysis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
