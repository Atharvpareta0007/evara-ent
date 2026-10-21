import React, { useState } from 'react';
import { Sparkles, MapPin, ArrowRight, Heart, Calendar } from 'lucide-react';
import { REAL_WEDDINGS } from '../data/siteData';

export default function RealWeddingsSection({ onOpenInquiry }) {
  const [filter, setFilter] = useState('all');

  const filteredWeddings = REAL_WEDDINGS.filter((w) => {
    if (filter === 'all') return true;
    if (filter === 'destination') return w.location.includes('Bali') || w.location.includes('Abu Dhabi') || w.location.includes('Thailand') || w.location.includes('Bahrain');
    if (filter === 'palace') return w.location.includes('Jaisalmer') || w.location.includes('Rajasthan');
    if (filter === 'celebrity') return w.tag.includes('Celebrity') || w.highlight.includes('Bollywood');
    return true;
  });

  return (
    <section id="portfolio-section" className="section-padding real-weddings-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-luxury">
            <Sparkles size={13} />
            Real Celebrations
          </span>
          <h2 className="section-title font-serif">
            Iconic Love Stories <span className="text-gold-gradient">Worldwide</span>
          </h2>
          <div className="section-gold-line" />
          <p className="section-subtitle">
            Explore a curated selection of larger-than-life destination weddings orchestrated 
            by Krayonz Entertainment across Bali, Abu Dhabi, Hua Hin, and Indian royal palaces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Celebrations ({REAL_WEDDINGS.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'destination' ? 'active' : ''}`}
            onClick={() => setFilter('destination')}
          >
            International Destinations
          </button>
          <button 
            className={`filter-btn ${filter === 'palace' ? 'active' : ''}`}
            onClick={() => setFilter('palace')}
          >
            Royal Palaces
          </button>
          <button 
            className={`filter-btn ${filter === 'celebrity' ? 'active' : ''}`}
            onClick={() => setFilter('celebrity')}
          >
            Celebrity & Stars
          </button>
        </div>

        {/* Real Weddings Grid */}
        <div className="real-weddings-grid">
          {filteredWeddings.map((item) => (
            <div key={item.id} className="wedding-card glass-card">
              <div className="wedding-card-media">
                <img src={item.image} alt={item.couple} className="wedding-card-img" />
                <div className="wedding-tag-badge">{item.tag}</div>
                <div className="wedding-venue-pill">
                  <MapPin size={13} className="text-gold" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="wedding-card-body">
                <h3 className="wedding-couple-name font-serif">{item.couple}</h3>
                <div className="wedding-resort font-serif text-gold">{item.venue}</div>
                <h4 className="wedding-highlight">{item.highlight}</h4>
                <p className="wedding-desc">{item.description}</p>

                <div className="wedding-card-footer">
                  <button 
                    className="wedding-inquire-btn"
                    onClick={onOpenInquiry}
                  >
                    <span>Inquire for Similar Theme</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="wedding-cta-banner glass-card text-center">
          <h3 className="font-serif banner-title">
            Envisioning Your Destination Wedding in Bali, Rajasthan or Abu Dhabi?
          </h3>
          <p className="banner-subtitle">
            Our destination concierge takes care of luxury flights, visas, customs clearance, venue bookings, and multi-cuisine catering.
          </p>
          <button className="btn-gold" onClick={onOpenInquiry}>
            <span>Request A Destination Brief</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
