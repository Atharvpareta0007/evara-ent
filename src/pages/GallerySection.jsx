import React, { useState } from 'react';
import { Sparkles, ZoomIn, MapPin, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/siteData';

export default function GallerySection({ onOpenLightbox, onOpenInquiry }) {
  const [selectedCat, setSelectedCat] = useState('all');

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedCat === 'all') return true;
    return item.category === selectedCat;
  });

  return (
    <section id="gallery-section" className="section-padding gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="badge-luxury">
            <Sparkles size={13} />
            Visual Splendor
          </span>
          <h2 className="section-title font-serif">
            Relive The <span className="text-gold-gradient">Magic</span>
          </h2>
          <div className="section-gold-line" />
          <p className="section-subtitle">
            Immerse yourself in moments of timeless beauty, spectacular mandaps, high-octane 
            sangeet stages, and breathtaking decor setups.
          </p>
        </div>

        {/* Gallery Filter Nav */}
        <div className="gallery-filter-tabs">
          <button 
            className={`gallery-filter-btn ${selectedCat === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCat('all')}
          >
            All Captures
          </button>
          <button 
            className={`gallery-filter-btn ${selectedCat === 'weddings' ? 'active' : ''}`}
            onClick={() => setSelectedCat('weddings')}
          >
            Weddings
          </button>
          <button 
            className={`gallery-filter-btn ${selectedCat === 'sangeet' ? 'active' : ''}`}
            onClick={() => setSelectedCat('sangeet')}
          >
            Sangeet & Baaraat
          </button>
          <button 
            className={`gallery-filter-btn ${selectedCat === 'mehendi' ? 'active' : ''}`}
            onClick={() => setSelectedCat('mehendi')}
          >
            Mehendi & Haldi
          </button>
          <button 
            className={`gallery-filter-btn ${selectedCat === 'decor' ? 'active' : ''}`}
            onClick={() => setSelectedCat('decor')}
          >
            Palatial Décor
          </button>
          <button 
            className={`gallery-filter-btn ${selectedCat === 'celebrations' ? 'active' : ''}`}
            onClick={() => setSelectedCat('celebrations')}
          >
            Themed Galas
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-masonry-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-card glass-card"
              onClick={() => onOpenLightbox(item)}
            >
              <div className="gallery-img-box">
                <img src={item.image} alt={item.title} className="gallery-img" loading="lazy" />
                <div className="gallery-hover-overlay">
                  <div className="gallery-zoom-icon">
                    <ZoomIn size={22} className="text-gold" />
                  </div>
                  <div className="gallery-hover-info">
                    <span className="gallery-hover-cat">{item.category}</span>
                    <h4 className="gallery-hover-title font-serif">{item.title}</h4>
                    <div className="gallery-hover-loc">
                      <MapPin size={12} className="text-gold" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center gallery-bottom-cta">
          <p className="gallery-more-note">
            Want to see customized moodboards tailored to your venue and preferred aesthetic?
          </p>
          <button className="btn-outline-gold" onClick={onOpenInquiry}>
            <span>Request Bespoke Moodboard Presentation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
