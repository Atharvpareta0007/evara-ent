import React from 'react';
import { X, MapPin, Sparkles } from 'lucide-react';

export default function Lightbox({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          <X size={26} />
        </button>

        <div className="lightbox-image-container">
          <img src={item.image} alt={item.title} className="lightbox-image" />
        </div>

        <div className="lightbox-caption-bar">
          <div>
            <div className="lightbox-badge">
              <Sparkles size={13} className="text-gold" />
              <span>{item.category?.toUpperCase()}</span>
            </div>
            <h3 className="lightbox-title font-serif">{item.title}</h3>
          </div>
          {item.location && (
            <div className="lightbox-location">
              <MapPin size={16} className="text-gold" />
              <span>{item.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
