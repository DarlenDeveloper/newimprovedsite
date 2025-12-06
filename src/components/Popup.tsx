import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={handleClose}>×</button>
        <div className="popup-badge">LIMITED TIME</div>
        <h2 className="popup-title">NEW YEARS</h2>
        <div className="popup-discount">20% OFF</div>
        <p className="popup-text">
          Start the new year with AI-powered customer operations. 
          Use code NEWYEAR2025 at checkout.
        </p>
        <button className="popup-button" onClick={handleClose}>
          Claim Offer
        </button>
      </div>
    </div>
  );
};

export default Popup;
