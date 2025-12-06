import React, { useState } from 'react';
import './ContactModal.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

const countries = [
  'Uganda', 'Kenya', 'Tanzania', 'Rwanda', 'South Sudan', 'Burundi',
  'Nigeria', 'Ghana', 'South Africa', 'Ethiopia', 'Egypt',
  'United States', 'United Kingdom', 'Canada', 'Australia',
  'Germany', 'France', 'India', 'China', 'Japan', 'Other'
];

const packages = [
  'Web Widget - $20/month',
  'Starter - $130/month',
  'Popular - $230/month',
  'Business - $390/month',
  'Enterprise - Custom Pricing',
  'Not Sure - Need Consultation'
];

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  subject = 'Inquiry from AIRIES AI Website',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    company: '',
    country: '',
    package: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@najod.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nTelephone: ${formData.telephone}\nCompany: ${formData.company}\nCountry: ${formData.country}\nPackage Interest: ${formData.package}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2 className="modal-title">Get in Touch</h2>
        <p className="modal-subtitle">
          Fill out the form and we'll get back to you shortly
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telephone">Telephone *</label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                required
                placeholder="+256 700 000 000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="country">Country *</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="package">Package Interest *</label>
              <select
                id="package"
                name="package"
                value={formData.package}
                onChange={handleChange}
                required
              >
                <option value="">Select a package</option>
                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help you?"
              rows={4}
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
