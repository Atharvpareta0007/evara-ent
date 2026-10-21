import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sparkles, ChevronDown, Phone, Mail, 
  MapPin, Calendar, HeartHandshake, ArrowRight 
} from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

export default function Navbar({ activePage, setActivePage, onOpenInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId, sectionId = null) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
        {/* Top Mini Bar */}
        <div className="nav-top-bar">
          <div className="container nav-top-inner">
            <div className="nav-top-left">
              <span className="nav-top-tag">
                <Sparkles size={12} className="text-gold" />
                India's Foremost Luxury Wedding Architects
              </span>
              <span className="nav-top-divider">•</span>
              <span className="nav-top-loc">Mumbai • Bali • Abu Dhabi • Thailand</span>
            </div>
            <div className="nav-top-right">
              <a href={`tel:${BRAND_INFO.phone}`} className="nav-top-link">
                <Phone size={12} /> {BRAND_INFO.displayPhone}
              </a>
              <span className="nav-top-divider">•</span>
              <a href={`mailto:${BRAND_INFO.emails[0]}`} className="nav-top-link">
                <Mail size={12} /> {BRAND_INFO.emails[0]}
              </a>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="nav-main">
          <div className="container nav-main-inner">
            {/* Brand Logo */}
            <button 
              className="brand-logo" 
              onClick={() => handleNavClick('home')}
              aria-label="Krayonz Entertainment Home"
            >
              <div className="logo-sparkle-box">
                <Sparkles size={18} className="gold-icon" />
              </div>
              <div className="brand-text-block">
                <span className="brand-title">KRAYONZ</span>
                <span className="brand-subtitle">ENTERTAINMENT</span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="nav-links-desktop">
              <button 
                className={`nav-link-btn ${activePage === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </button>

              {/* Services Dropdown */}
              <div 
                className="nav-dropdown-wrapper"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button 
                  className={`nav-link-btn dropdown-toggle ${activePage === 'services' ? 'active' : ''}`}
                  onClick={() => handleNavClick('services')}
                >
                  Services <ChevronDown size={14} className={servicesDropdownOpen ? 'rotate-180' : ''} />
                </button>

                {servicesDropdownOpen && (
                  <div className="nav-dropdown-menu">
                    <button 
                      className="nav-dropdown-item"
                      onClick={() => handleNavClick('services', 'weddings-service')}
                    >
                      <div className="dropdown-item-title">Luxury Weddings</div>
                      <div className="dropdown-item-sub">Bespoke A-Z Destination & Royal Wedding Planning</div>
                    </button>
                    <button 
                      className="nav-dropdown-item"
                      onClick={() => handleNavClick('services', 'celebrations-service')}
                    >
                      <div className="dropdown-item-title">Themed Celebrations</div>
                      <div className="dropdown-item-sub">Anniversaries, Milestones & Private VIP Soirees</div>
                    </button>
                    <button 
                      className="nav-dropdown-item"
                      onClick={() => handleNavClick('services', 'corporate-service')}
                    >
                      <div className="dropdown-item-title">Galas & Corporate</div>
                      <div className="dropdown-item-sub">Award Functions, Product Launches & Fashion Shows</div>
                    </button>
                  </div>
                )}
              </div>

              <button 
                className={`nav-link-btn ${activePage === 'portfolio' ? 'active' : ''}`}
                onClick={() => handleNavClick('portfolio')}
              >
                Real Weddings
              </button>

              <button 
                className={`nav-link-btn ${activePage === 'gallery' ? 'active' : ''}`}
                onClick={() => handleNavClick('gallery')}
              >
                Gallery
              </button>

              <button 
                className={`nav-link-btn ${activePage === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About Us
              </button>

              <button 
                className={`nav-link-btn ${activePage === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </button>
            </div>

            {/* Desktop CTA Action */}
            <div className="nav-actions-desktop">
              <button 
                className="btn-gold nav-cta-btn"
                onClick={onOpenInquiry}
              >
                <span>Plan Your Event</span>
                <ArrowRight size={15} />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button 
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="brand-text-block">
              <span className="brand-title">KRAYONZ</span>
              <span className="brand-subtitle">ENTERTAINMENT</span>
            </div>
            <button 
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className="mobile-nav-links">
            <button 
              className={`mobile-nav-link ${activePage === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Home
            </button>
            <button 
              className={`mobile-nav-link ${activePage === 'services' ? 'active' : ''}`}
              onClick={() => handleNavClick('services')}
            >
              Services (Weddings & Galas)
            </button>
            <button 
              className={`mobile-nav-link ${activePage === 'portfolio' ? 'active' : ''}`}
              onClick={() => handleNavClick('portfolio')}
            >
              Real Weddings & Stories
            </button>
            <button 
              className={`mobile-nav-link ${activePage === 'gallery' ? 'active' : ''}`}
              onClick={() => handleNavClick('gallery')}
            >
              Event Gallery
            </button>
            <button 
              className={`mobile-nav-link ${activePage === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About Achint Nag & Legacy
            </button>
            <button 
              className={`mobile-nav-link ${activePage === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact & Location
            </button>
          </div>

          <div className="mobile-menu-footer">
            <button 
              className="btn-gold w-full mobile-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
            >
              <Calendar size={16} />
              <span>Book A Consultation</span>
            </button>

            <div className="mobile-contact-block">
              <a href={`tel:${BRAND_INFO.phone}`} className="mobile-contact-item">
                <Phone size={15} className="text-gold" />
                <span>{BRAND_INFO.displayPhone}</span>
              </a>
              <div className="mobile-contact-item">
                <MapPin size={15} className="text-gold" />
                <span>Santacruz West, Mumbai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
