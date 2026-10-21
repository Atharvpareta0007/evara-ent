import React, { useState } from 'react';
import { 
  Sparkles, Phone, Mail, MapPin, Send, CheckCircle2, 
  ChevronDown, MessageCircle, Clock, ExternalLink 
} from 'lucide-react';
import { BRAND_INFO, FAQS } from '../data/siteData';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Destination Wedding',
    date: '',
    destination: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="contact-section" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-luxury">
            <Sparkles size={13} />
            Let's Connect
          </span>
          <h2 className="section-title font-serif">
            Begin Your <span className="text-gold-gradient">Celebration Journey</span>
          </h2>
          <div className="section-gold-line" />
          <p className="section-subtitle">
            Every magical celebration starts with a conversation. Visit us at our Mumbai office 
            or request a private virtual consultation with Achint Nag and our planning team.
          </p>
        </div>

        {/* Contact Main Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Direct Contact Cards */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <MapPin size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="contact-card-title font-serif">Mumbai Headquarters</h3>
                <p className="contact-card-desc">
                  {BRAND_INFO.address}
                </p>
                <a 
                  href={BRAND_INFO.googleMapsLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="contact-card-link"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <Phone size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="contact-card-title font-serif">Direct Telephonic Access</h3>
                <p className="contact-card-desc">
                  Founder Achint Sudarshan Nag & Concierge Desk
                </p>
                <div className="contact-phone-group">
                  <a href={`tel:${BRAND_INFO.phone}`} className="phone-number-link">
                    {BRAND_INFO.displayPhone}
                  </a>
                  <a 
                    href={`https://wa.me/919833377295?text=Hello%20Krayonz%20Entertainment,%20I%20would%20like%20to%20inquire%20about%20wedding%20planning.`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="whatsapp-btn"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card glass-card">
              <div className="contact-icon-box">
                <Mail size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="contact-card-title font-serif">Electronic Inquiries</h3>
                <p className="contact-card-desc">
                  For RFPs, vendor profiles, and bespoke wedding briefs:
                </p>
                <div className="emails-stack">
                  <a href={`mailto:${BRAND_INFO.emails[0]}`} className="email-link">
                    {BRAND_INFO.emails[0]}
                  </a>
                  <a href={`mailto:${BRAND_INFO.emails[1]}`} className="email-link">
                    {BRAND_INFO.emails[1]}
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card glass-card hours-card">
              <div className="contact-icon-box">
                <Clock size={24} className="text-gold" />
              </div>
              <div>
                <h3 className="contact-card-title font-serif">Consultation Timings</h3>
                <p className="contact-card-desc">
                  Monday – Saturday: 10:30 AM to 8:00 PM IST<br />
                  Private weekend sessions available upon appointment.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="contact-form-wrapper glass-card">
              <h3 className="form-card-title font-serif">
                Send A Private <span className="text-gold-gradient">Event Brief</span>
              </h3>
              <p className="form-card-sub">
                Fill out the details below and we will curate a personalized introductory proposal.
              </p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={46} className="text-gold" />
                  <h4 className="font-serif success-title">Inquiry Received</h4>
                  <p className="success-text">
                    Thank you, <strong className="text-white">{form.name}</strong>. Your celebration brief has been 
                    forwarded to Achint Nag. Our planning team will reach out within 24 hours.
                  </p>
                  <button className="btn-outline-gold" onClick={() => setSubmitted(false)}>
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="page-contact-form">
                  <div className="contact-form-row">
                    <div className="field-block">
                      <label>Your Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="e.g. Sonaakshi / Nikhil" 
                        value={form.name}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="field-block">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="+91-98333 77295" 
                        value={form.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="field-block">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        placeholder="name@domain.com" 
                        value={form.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="field-block">
                      <label>Celebration Type</label>
                      <select 
                        name="eventType" 
                        value={form.eventType} 
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="Destination Wedding">Destination Wedding</option>
                        <option value="Palatial Royal Wedding">Palatial Royal Wedding</option>
                        <option value="Themed Milestone Celebration">Themed Milestone Celebration</option>
                        <option value="Corporate / Award Gala">Corporate / Award Gala</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="field-block">
                      <label>Tentative Dates</label>
                      <input 
                        type="text" 
                        name="date" 
                        placeholder="e.g. Dec 2026 / Jan 2027" 
                        value={form.date}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="field-block">
                      <label>Preferred Destination</label>
                      <input 
                        type="text" 
                        name="destination" 
                        placeholder="e.g. Bali, Abu Dhabi, Udaipur" 
                        value={form.destination}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="field-block full-width">
                    <label>Tell Us About Your Vision & Scale</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      placeholder="Share estimated guest count, preferred style, entertainment ideas or specific requirements..."
                      value={form.message}
                      onChange={handleChange}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full">
                    <Send size={16} />
                    <span>Send Event Brief to Krayonz</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="faq-container">
          <div className="text-center faq-header-box">
            <span className="badge-luxury">
              <Sparkles size={13} />
              Frequently Asked Questions
            </span>
            <h3 className="faq-main-title font-serif">
              Planning With <span className="text-gold-gradient">Krayonz Entertainment</span>
            </h3>
          </div>

          <div className="faq-accordion-list">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item glass-card ${openFaq === idx ? 'expanded' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question-row">
                  <h4 className="faq-question font-serif">{faq.q}</h4>
                  <ChevronDown size={18} className={`faq-chevron ${openFaq === idx ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-row">
                    <p className="faq-answer">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
