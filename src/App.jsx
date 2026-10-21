import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InquiryModal from './components/InquiryModal';
import Lightbox from './components/Lightbox';
import LoadingScreen from './components/LoadingScreen';

import HeroSection from './pages/HeroSection';
import AboutSection from './pages/AboutSection';
import ServicesSection from './pages/ServicesSection';
import RealWeddingsSection from './pages/RealWeddingsSection';
import GallerySection from './pages/GallerySection';
import PressTestimonialsSection from './pages/PressTestimonialsSection';
import ContactSection from './pages/ContactSection';

import { MessageCircle, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState(null);
  const lenisRef = useRef(null);

  // Initialize Lenis Smooth Scrolling and GSAP Ticker
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      wheelMultiplier: 0.9,
    });
    lenisRef.current = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  // Scroll to top with Lenis when activePage changes
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [activePage]);

  // Trigger GSAP entrance animation when loading finishes
  const handleLoadingComplete = () => {
    setIsLoading(false);

    // Refresh ScrollTrigger calculations
    setTimeout(() => {
      ScrollTrigger.refresh();

      // Cinematic entrance for hero
      const heroTl = gsap.timeline();
      heroTl
        .from('.navbar-header', {
          y: -40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
        .from('.hero-badge-wrap', {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-title', {
          y: 35,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-subtitle', {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out'
        }, '-=0.5')
        .from('.hero-cta-group', {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-stats-panel', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.3');
    }, 100);
  };

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
      {/* Luxury Cinematic Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Background Ambient Luxury Glow */}
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
