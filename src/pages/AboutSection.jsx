import React from 'react';
import { Sparkles, Award, CheckCircle2, Globe2, Compass, HeartHandshake, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

export default function AboutSection({ onOpenInquiry }) {
  return (
    <section id="about-section" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-luxury">
            <Sparkles size={13} />
            Our Heritage & Founder
          </span>
          <h2 className="section-title font-serif">
            Crafting Unforgettable <span className="text-gold-gradient">Masterpieces</span>
          </h2>
          <div className="section-gold-line" />
          <p className="section-subtitle">
            Founded by the visionary Achint Sudarshan Nag with over three decades of 
            unmatched mastery in luxury wedding planning and high-profile entertainment.
          </p>
        </div>

        {/* Founder Editorial Showcase */}
        <div className="about-editorial-grid">
          {/* Left Column: Founder Photo & Stats */}
          <div className="about-media-col">
            <div className="founder-image-card glass-card">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80" 
                alt="Achint Sudarshan Nag - Founder Krayonz Entertainment" 
                className="founder-img"
              />
              <div className="founder-caption-overlay">
                <div className="founder-name font-serif">{BRAND_INFO.founder}</div>
                <div className="founder-title">Founder & Managing Director</div>
                <div className="founder-years-tag">30+ Years of Event Pioneer Heritage</div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="founder-quote-box glass-card">
              <p className="founder-quote font-serif">
                "Our vision is simple yet profound: to craft weddings that are not just memorable, 
                but truly magical, where every detail is a reflection of your dreams."
              </p>
              <span className="quote-author">— Achint Nag</span>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="about-text-col">
            <h3 className="about-story-title font-serif">
              A 30-Year Legacy Built On Passion, Trust & Grandeur
            </h3>
            
            <p className="about-desc-paragraph">
              Fuelled by unyielding passion and backed by over 30 years of industry experience, 
              Achint Nag is the guiding force behind Krayonz Entertainment. What began as a 
              passion for creating unforgettable experiences has evolved into India's premier bespoke 
              wedding and event powerhouse.
            </p>

            <p className="about-desc-paragraph">
              Based in Mumbai, we expertly orchestrate weddings and landmark celebrations anywhere in 
              the world—from private island resorts in Bali and desert palaces in Abu Dhabi to luxury 
              fortresses in Rajasthan. From brainstorming exciting thematic ideas to flawless 
              implementation, we craft celebrations that resonate with your distinctive vision.
            </p>

            {/* 4 Core Pillars */}
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <Sparkles size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="pillar-title">Fun, Finesse & Flamboyance</h4>
                  <p className="pillar-text">
                    Infusing high energy, sophisticated luxury, and vibrant theatrics into every moment.
                  </p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <Globe2 size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="pillar-title">Worldwide Destination Footprint</h4>
                  <p className="pillar-text">
                    Over 60+ global celebrations managed seamlessly across Bali, Thailand, UAE, and Bahrain.
                  </p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <HeartHandshake size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="pillar-title">Dedicated Shadow Service</h4>
                  <p className="pillar-text">
                    Dedicated personal shadow coordinators for the bride, groom, and immediate families.
                  </p>
                </div>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <Compass size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="pillar-title">Turnkey A-to-Z Precision</h4>
                  <p className="pillar-text">
                    Complete pre-wedding budgeting, artist booking, F&B curation, and vendor reconciliation.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-action-wrap">
              <button className="btn-gold" onClick={onOpenInquiry}>
                <span>Consult With Our Visionaries</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
