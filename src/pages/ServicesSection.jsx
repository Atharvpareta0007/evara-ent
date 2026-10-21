import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle, ArrowRight, ShieldCheck, Heart, 
  Music, Utensils, Users, Truck, Camera, PartyPopper 
} from 'lucide-react';
import { SERVICES } from '../data/siteData';

export default function ServicesSection({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('weddings');

  const currentService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  const turnkeyItems = [
    { title: "Pre-Wedding Planning & Budgeting", desc: "Detailed timelines, expenditure projections, and cash flow governance." },
    { title: "Bespoke Themed Décor", desc: "Custom scenic installations, mandaps, floral ceilings, and experiential zones." },
    { title: "Guest Arrival & VIP Concierge", desc: "Airport desks, luxury transfers, personalized gifting, and check-in assistance." },
    { title: "Artist & Celebrity Booking", desc: "A-list Bollywood performers, live fusion bands, international acts, and DJs." },
    { title: "Dedicated Family Shadows", desc: "Personal shadow coordinators dedicated to the couple and both parent families." },
    { title: "Grand Baaraat & Couple Entries", desc: "Choreographed thematic entries, vintage cars, buggies, and fireworks protocols." },
    { title: "F&B & Menu Curations", desc: "Coordination with master chefs, experiential bars, and midnight craving counters." },
    { title: "Production & Technical Architecture", desc: "Concert-grade sound, intelligent lighting rigs, trussing, and LED backdrops." },
    { title: "Post Event Wrap Up & Settlements", desc: "Rigorous vendor reconciliation, deposit claims, and inventory audits." }
  ];

  return (
    <section id="services-section" className="section-padding services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-luxury">
            <Sparkles size={13} />
            Our Comprehensive Offerings
          </span>
          <h2 className="section-title font-serif">
            Bringing Your <span className="text-gold-gradient">Dreams To Life</span>
          </h2>
          <div className="section-gold-line" />
          <p className="section-subtitle">
            At Krayonz Entertainment, we offer end-to-end wedding and event planning solutions 
            tailored to your unique style, family traditions, and vision. We manage everything from A to Z.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="services-tabs-nav">
          {SERVICES.map((serv) => (
            <button
              key={serv.id}
              className={`service-tab-btn ${activeTab === serv.id ? 'active' : ''}`}
              onClick={() => setActiveTab(serv.id)}
            >
              <span className="tab-cat-title">{serv.category}</span>
            </button>
          ))}
        </div>

        {/* Featured Service Card */}
        <div className="featured-service-display glass-card">
          <div className="featured-service-grid">
            <div className="featured-service-info">
              <span className="featured-badge">{currentService.category}</span>
              <h3 className="featured-title font-serif">{currentService.title}</h3>
              <p className="featured-tagline text-gold font-serif">{currentService.tagline}</p>
              <p className="featured-desc">{currentService.description}</p>

              <div className="featured-features-list">
                {currentService.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <CheckCircle size={18} className="text-gold feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="featured-service-action">
                <button className="btn-gold" onClick={onOpenInquiry}>
                  <span>Book This Service</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="featured-service-media">
              <div className="service-img-wrapper">
                <img 
                  src={currentService.image} 
                  alt={currentService.title} 
                  className="service-feature-img" 
                />
                <div className="service-overlay-badge">
                  <Sparkles size={16} className="text-gold" />
                  <span>Curated by Achint Nag</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Turnkey A-to-Z Execution Breakdown */}
        <div className="turnkey-section">
          <div className="text-center turnkey-heading-block">
            <h3 className="turnkey-title font-serif">
              Transforming Dreams Into Memories: <span className="text-gold-gradient">The Krayonz 360° Approach</span>
            </h3>
            <p className="turnkey-sub">
              No two couples are ever the same. Every touchpoint is curated down to the finest nuance.
            </p>
          </div>

          <div className="turnkey-grid">
            {turnkeyItems.map((item, idx) => (
              <div key={idx} className="turnkey-card glass-card">
                <div className="turnkey-num font-serif text-gold-gradient">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="turnkey-card-title">{item.title}</h4>
                <p className="turnkey-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
