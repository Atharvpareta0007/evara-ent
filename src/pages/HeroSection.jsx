import React from 'react';
import { Sparkles, ArrowRight, Play, Award, Globe, Heart, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, STATS } from '../data/siteData';

export default function HeroSection({ onOpenInquiry, setActivePage }) {
  return (
    <section className="hero-section">
      {/* Cinematic Background Layer */}
      <div className="hero-bg-media">
        <div className="hero-overlay-dark" />
        <div className="hero-overlay-gradient" />
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85" 
          alt="Luxury Destination Wedding Decor" 
          className="hero-bg-img"
        />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge-wrap">
            <span className="badge-luxury">
              <Sparkles size={14} className="gold-sparkle" />
              <span>Founded by Visionary Achint Nag • 30+ Years Of Magic</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title font-serif">
            Where Timeless Romance Meets <span className="text-gold-gradient">Unrivaled Grandeur</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Krayonz Entertainment crafts bespoke luxury weddings and iconic global celebrations 
            with effortless finesse and flamboyance. From royal palaces in Rajasthan to the sun-kissed 
            shores of Bali and glamorous skylines of Abu Dhabi.
          </p>

          {/* CTAs */}
          <div className="hero-cta-group">
            <button 
              className="btn-gold hero-primary-btn"
              onClick={onOpenInquiry}
            >
              <span>Plan Your Dream Celebration</span>
              <ArrowRight size={17} />
            </button>

            <button 
              className="btn-outline-gold hero-secondary-btn"
              onClick={() => setActivePage('portfolio')}
            >
              <span>Explore Real Weddings</span>
            </button>
          </div>

          {/* Highlights Mini Pills */}
          <div className="hero-pills-row">
            <div className="hero-pill">
              <ShieldCheck size={14} className="text-gold" />
              <span>Turnkey A-to-Z Execution</span>
            </div>
            <div className="hero-pill">
              <Heart size={14} className="text-gold" />
              <span>Dedicated Family Shadows</span>
            </div>
            <div className="hero-pill">
              <Globe size={14} className="text-gold" />
              <span>Global Destination Logistics</span>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="hero-stats-panel glass-card">
          <div className="hero-stats-grid">
            {STATS.map((stat, idx) => (
              <div key={idx} className="hero-stat-card">
                <div className="stat-number font-serif text-gold-gradient">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
