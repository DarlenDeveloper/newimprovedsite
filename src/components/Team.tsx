import React from 'react';
import './Team.css';

const Team: React.FC = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">Our Team</h2>
          <p className="team-subtitle">
            Our team is a tight-knit family of engineers, innovators, and 
            visionaries, all bound by the same passion for AI excellence.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-member">
            <div className="member-image">
              <div className="image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <h3 className="member-name">Tamusange Daniel</h3>
            <p className="member-role">Chairman</p>
          </div>

          <div className="team-member">
            <div className="member-image">
              <div className="image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <h3 className="member-name">Birungi Joseph</h3>
            <p className="member-role">Chief Technology Officer</p>
          </div>

          <div className="team-member">
            <div className="member-image">
              <div className="image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <h3 className="member-name">Nathan Kwezi</h3>
            <p className="member-role">Chief Executive Officer</p>
          </div>

          <div className="team-member">
            <div className="member-image">
              <div className="image-placeholder">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <h3 className="member-name">Queen Jokebed</h3>
            <p className="member-role">Lead Administrator</p>
          </div>
        </div>

        <div className="team-cta">
          <p className="cta-text">Are you our next team member?</p>
          <a href="#careers" className="cta-link">SEE OPENINGS</a>
        </div>
      </div>
    </section>
  );
};

export default Team;
