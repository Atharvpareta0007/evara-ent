import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Phone, Calendar, MapPin, Users, DollarSign } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Destination Wedding',
    date: '',
    destination: '',
    guestCount: '150 - 300 Guests',
    budget: '50 Lakhs - 1 Crore+',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={resetAndClose}>
      <div className="modal-container glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={resetAndClose} aria-label="Close modal">
          <X size={22} />
        </button>

        {submitted ? (
          <div className="modal-success-view">
            <div className="success-icon-wrapper">
              <CheckCircle2 size={54} className="text-gold" />
            </div>
            <h3 className="font-serif success-title">Your Celebration Journey Begins</h3>
            <p className="success-desc">
              Thank you, <strong className="text-white">{formData.name}</strong>. Founder Achint Nag 
              and our senior wedding concierge team have received your details for your upcoming 
              <strong className="text-gold"> {formData.eventType}</strong>.
            </p>
            <div className="success-callout">
              <Phone size={18} className="text-gold" />
              <span>
                We will contact you at <strong>{formData.phone}</strong> within 24 hours to schedule your bespoke consultation.
              </span>
            </div>
            <button className="btn-gold" onClick={resetAndClose}>
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="modal-form-view">
            <div className="modal-header">
              <span className="badge-luxury">
                <Sparkles size={13} />
                Private Consultation
              </span>
              <h2 className="modal-title font-serif">
                Plan Your <span className="text-gold-gradient">Dream Celebration</span>
              </h2>
              <p className="modal-subtitle">
                Share your initial vision with Krayonz Entertainment. We turn grand concepts into magical realities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rohin Vyas / Sonaakshi Raaj"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="e.g. name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label>Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                {/* Event Type */}
                <div className="form-group">
                  <label>Celebration Type</label>
                  <select 
                    name="eventType" 
                    value={formData.eventType} 
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="Destination Wedding">Destination Wedding (Bali, UAE, Thailand, Europe)</option>
                    <option value="Royal Palace Wedding">Royal Palace Wedding (Rajasthan / Heritage)</option>
                    <option value="City Luxury Wedding">Luxury City Wedding (Mumbai, Delhi, Bengaluru)</option>
                    <option value="Milestone Celebration">Milestone Anniversary or Birthday</option>
                    <option value="High-Profile Gala">Corporate Gala / Award Ceremony / Launch</option>
                  </select>
                </div>

                {/* Tentative Date */}
                <div className="form-group">
                  <label>Tentative Date / Season</label>
                  <div className="input-with-icon">
                    <Calendar size={16} className="field-icon" />
                    <input
                      type="text"
                      name="date"
                      placeholder="e.g. November 2026 / Spring 2027"
                      value={formData.date}
                      onChange={handleChange}
                      className="form-input with-icon"
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="form-group">
                  <label>Dream Destination / Venue</label>
                  <div className="input-with-icon">
                    <MapPin size={16} className="field-icon" />
                    <input
                      type="text"
                      name="destination"
                      placeholder="e.g. Bali, Abu Dhabi, Udaipur, Goa"
                      value={formData.destination}
                      onChange={handleChange}
                      className="form-input with-icon"
                    />
                  </div>
                </div>

                {/* Guest Count */}
                <div className="form-group">
                  <label>Estimated Guest Count</label>
                  <div className="input-with-icon">
                    <Users size={16} className="field-icon" />
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      className="form-input with-icon"
                    >
                      <option value="Intimate (Under 100 Guests)">Intimate (Under 100 Guests)</option>
                      <option value="100 - 250 Guests">100 - 250 Guests</option>
                      <option value="250 - 500 Guests">250 - 500 Guests</option>
                      <option value="500 - 1000+ Guests">500 - 1,000+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget */}
                <div className="form-group">
                  <label>Estimated Budget</label>
                  <div className="input-with-icon">
                    <DollarSign size={16} className="field-icon" />
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="form-input with-icon"
                    >
                      <option value="₹35 Lakhs - ₹60 Lakhs">₹35 Lakhs - ₹60 Lakhs</option>
                      <option value="₹60 Lakhs - ₹1.5 Crore">₹60 Lakhs - ₹1.5 Crore</option>
                      <option value="₹1.5 Crore - ₹3 Crore">₹1.5 Crore - ₹3 Crore</option>
                      <option value="₹3 Crore+ (Ultra Luxury)">₹3 Crore+ (Ultra Luxury / International)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="form-group full-width">
                <label>Tell Us About Your Vision & Themes</label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Share any special preferences, musical vibes, decor aesthetics, or inspirations..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              {/* Direct Urgent Call Bar */}
              <div className="modal-direct-call-bar">
                <span>Prefer an immediate conversation?</span>
                <a href={`tel:${BRAND_INFO.phone}`} className="direct-call-link">
                  <Phone size={14} /> Call Achint Nag: {BRAND_INFO.displayPhone}
                </a>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-gold w-full modal-submit-btn"
                disabled={loading}
              >
                {loading ? (
                  <span>Sending Consultation Request...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Request Bespoke Proposal</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
