import React, { useState } from 'react';
import { 
  Sparkles, Phone, Mail, MapPin, ArrowRight, Award, CheckCircle 
} from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

export default function Footer({ setActivePage, onOpenInquiry }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const navTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Decorative Gold Border Line */}
      <div className="footer-gold-bar" />

      {/* Main Footer Container */}
      <div className="container footer-main-content">
        <div className="footer-grid">
          {/* Column 1: Brand & Founder Legacy */}
          <div className="footer-col brand-col">
            <div className="footer-brand-title">
              <span className="brand-title">KRAYONZ</span>
              <span className="brand-subtitle">ENTERTAINMENT</span>
            </div>
            <p className="footer-bio">
              Founded by visionary Achint Sudarshan Nag. With over 30 years of unmatched 
              expertise, Krayonz Entertainment crafts extraordinary destination weddings 
              and glamorous celebrations defined by fun, finesse, and flamboyance.
            </p>
            <div className="footer-badge">
              <Award size={18} className="text-gold" />
              <span>30+ Years of Magic • 350+ Royal Weddings</span>
            </div>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => navTo('home')}>Home</button></li>
              <li><button onClick={() => navTo('services')}>Our Services</button></li>
              <li><button onClick={() => navTo('portfolio')}>Real Weddings</button></li>
              <li><button onClick={() => navTo('gallery')}>Event Gallery</button></li>
              <li><button onClick={() => navTo('about')}>About Achint Nag</button></li>
              <li><button onClick={() => navTo('contact')}>Contact & Map</button></li>
            </ul>
          </div>

          {/* Column 3: Curated Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Bespoke Offerings</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => navTo('services')}>Destination Weddings</button></li>
              <li><button onClick={() => navTo('services')}>Themed Décor & Scenography</button></li>
              <li><button onClick={() => navTo('services')}>Celebrity & Artist Booking</button></li>
              <li><button onClick={() => navTo('services')}>VIP Concierge & Logistics</button></li>
              <li><button onClick={() => navTo('services')}>Milestone Anniversaries</button></li>
              <li><button onClick={() => navTo('services')}>High-Profile Corporate Galas</button></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Mumbai Headquarters</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="contact-icon text-gold" />
              <span>
                {BRAND_INFO.address}
              </span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="contact-icon text-gold" />
              <a href={`tel:${BRAND_INFO.phone}`}>{BRAND_INFO.displayPhone}</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="contact-icon text-gold" />
              <div>
                <a href={`mailto:${BRAND_INFO.emails[0]}`}>{BRAND_INFO.emails[0]}</a>
                <br />
                <a href={`mailto:${BRAND_INFO.emails[1]}`}>{BRAND_INFO.emails[1]}</a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter-box">
              <p className="newsletter-label">Subscribe for luxury wedding inspiration & trends</p>
              {subscribed ? (
                <div className="newsletter-success">
                  <CheckCircle size={16} className="text-gold" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()} Krayonz Entertainment. All Rights Reserved. Crafted with Finesse & Flamboyance.
          </p>
          <div className="footer-bottom-links">
            <button onClick={onOpenInquiry} className="footer-action-link">
              Book A Consultation
            </button>
            <span className="dot">•</span>
            <a href={BRAND_INFO.googleMapsLink} target="_blank" rel="noreferrer" className="footer-action-link">
              Directions on Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
