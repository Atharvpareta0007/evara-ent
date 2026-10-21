import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import Lightbox from './components/Lightbox';

import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import ServicesSection from './pages/ServicesSection';
import RealWeddingsSection from './pages/RealWeddingsSection';
import GallerySection from './pages/GallerySection';
import PressTestimonialsSection from './pages/PressTestimonialsSection';
import ContactSection from './pages/ContactSection';

import { MessageCircle, Sparkles, Calendar } from 'lucide-react';
import { BRAND_INFO } from './data/siteData';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState(null);

  // Scroll to top when activePage changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const handleOpenInquiry = () => {
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  const handleOpenLightbox = (item) => {
    setLightboxItem(item);
  };

  const handleCloseLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <div className="krayonz-app">
      {/* Background Ambient Luxury Light */}
      <div className="ambient-glow-top" />

      {/* Main Luxury Navigation Bar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* Dynamic Content Views */}
      <main className="main-content-flow">
        {activePage === 'home' && (
          <>
            <HeroSection 
              onOpenInquiry={handleOpenInquiry} 
              setActivePage={setActivePage} 
            />
            <AboutSection 
              onOpenInquiry={handleOpenInquiry} 
            />
            <ServicesSection 
              onOpenInquiry={handleOpenInquiry} 
            />
            <RealWeddingsSection 
              onOpenInquiry={handleOpenInquiry} 
            />
            <GallerySection 
              onOpenLightbox={handleOpenLightbox} 
              onOpenInquiry={handleOpenInquiry} 
            />
            <PressTestimonialsSection />
            <ContactSection />
          </>
        )}

        {activePage === 'services' && (
          <div className="page-view-wrapper">
            <ServicesSection onOpenInquiry={handleOpenInquiry} />
            <ContactSection />
          </div>
        )}

        {activePage === 'portfolio' && (
          <div className="page-view-wrapper">
            <RealWeddingsSection onOpenInquiry={handleOpenInquiry} />
            <PressTestimonialsSection />
          </div>
        )}

        {activePage === 'gallery' && (
          <div className="page-view-wrapper">
            <GallerySection 
              onOpenLightbox={handleOpenLightbox} 
              onOpenInquiry={handleOpenInquiry} 
            />
          </div>
        )}

        {activePage === 'about' && (
          <div className="page-view-wrapper">
            <AboutSection onOpenInquiry={handleOpenInquiry} />
            <PressTestimonialsSection />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="page-view-wrapper">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActivePage={setActivePage} 
        onOpenInquiry={handleOpenInquiry} 
      />

      {/* Floating Action Dock (Direct WhatsApp & Consultation) */}
      <div className="floating-actions-dock">
        <a 
          href="https://wa.me/919833377295?text=Hello%20Krayonz%20Entertainment,%20I%20would%20like%20to%20inquire%20about%20wedding%20planning." 
          target="_blank" 
          rel="noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>Chat on WhatsApp</span>
        </a>

        <button 
          className="floating-consult-btn"
          onClick={handleOpenInquiry}
          aria-label="Book Consultation"
        >
          <Calendar size={18} />
          <span>Plan Celebration</span>
        </button>
      </div>

      {/* Full-Featured Inquiry & Consultation Modal */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={handleCloseInquiry} 
      />

      {/* High-Resolution Photo Lightbox */}
      <Lightbox 
        item={lightboxItem} 
        onClose={handleCloseLightbox} 
      />
    </div>
  );
}
