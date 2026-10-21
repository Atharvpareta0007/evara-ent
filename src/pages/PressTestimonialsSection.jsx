import React from 'react';
import { Sparkles, ExternalLink, Quote, Star, Newspaper } from 'lucide-react';
import { PRESS_FEATURES, TESTIMONIALS } from '../data/siteData';

export default function PressTestimonialsSection() {
  return (
    <section className="section-padding press-testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-luxury">
            <Sparkles size={13} />
            Media & Acclaim
          </span>
          <h2 className="section-title font-serif">
            Recognized by India's <span className="text-gold-gradient">Leading Publications</span>
          </h2>
          <div className="section-gold-line" />
          <p className="section-subtitle">
            Krayonz Entertainment's weddings consistently capture headlines across top luxury wedding 
            and lifestyle journals for unmatched creativity and flawless hospitality.
          </p>
        </div>

        {/* Press Coverage Cards */}
        <div className="press-grid">
          {PRESS_FEATURES.map((item, idx) => (
            <div key={idx} className="press-card glass-card">
              <div className="press-card-top">
                <span className="press-source-tag font-serif">{item.source}</span>
                <span className="press-year-tag">{item.year}</span>
              </div>
              <h3 className="press-card-headline font-serif">{item.headline}</h3>
              <p className="press-card-quote">"{item.quote}"</p>
              <div className="press-card-bottom">
                <span className="press-read-link">
                  <span>{item.linkText}</span>
                  <ExternalLink size={14} className="text-gold" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Block */}
        <div className="testimonials-block">
          <div className="text-center test-header-box">
            <span className="badge-luxury">
              <Quote size={13} />
              Words From Our Couples
            </span>
            <h3 className="testimonials-title font-serif">
              Unforgettable Memories, <span className="text-gold-gradient">Cherished Forever</span>
            </h3>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="testimonial-card glass-card">
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <p className="testimonial-quote font-serif">
                  "{t.quote}"
                </p>
                <div className="testimonial-footer">
                  <div className="testimonial-author font-serif">{t.author}</div>
                  <div className="testimonial-loc text-gold">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
