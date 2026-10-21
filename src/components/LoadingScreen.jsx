import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const progressBarRef = useRef(null);
  const curtainTopRef = useRef(null);
  const curtainBottomRef = useRef(null);

  const phrases = [
    "Crafting Bespoke Romance...",
    "Curating 30+ Years of Pure Magic...",
    "Blending Fun, Finesse & Flamboyance...",
    "Welcome to Krayonz Entertainment"
  ];

  useEffect(() => {
    // Progress counter simulation that syncs with luxury animation
    const progressObj = { value: 0 };
    
    // Cycle phrases based on progress
    const phraseInterval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 700);

    const tl = gsap.timeline({
      onComplete: () => {
        clearInterval(phraseInterval);
        exitAnimation();
      }
    });

    tl.to(progressObj, {
      value: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(progressObj.value));
      }
    });

    // Animate emblem glow
    gsap.to('.loader-emblem', {
      scale: 1.06,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: 'sine.inOut'
    });

    return () => {
      clearInterval(phraseInterval);
      tl.kill();
    };
  }, []);

  const exitAnimation = () => {
    const exitTl = gsap.timeline({
      onComplete: () => {
        if (onLoadingComplete) onLoadingComplete();
      }
    });

    exitTl
      .to(contentRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: 'power3.in'
      })
      .to(curtainTopRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power4.inOut'
      }, '-=0.2')
      .to(curtainBottomRef.current, {
        yPercent: 100,
        duration: 0.9,
        ease: 'power4.inOut'
      }, '<');
  };

  return (
    <div ref={containerRef} className="loading-screen-wrapper">
      {/* Split curtain panels for cinematic curtain reveal */}
      <div ref={curtainTopRef} className="loader-curtain loader-curtain-top">
        <div className="curtain-line bottom-line" />
      </div>
      <div ref={curtainBottomRef} className="loader-curtain loader-curtain-bottom">
        <div className="curtain-line top-line" />
      </div>

      {/* Center Loader Content */}
      <div ref={contentRef} className="loading-screen-content">
        {/* Golden Emblem */}
        <div className="loader-emblem">
          <div className="emblem-outer-ring">
            <Sparkles size={28} className="loader-sparkle-icon" />
          </div>
        </div>

        {/* Brand Titles */}
        <div className="loader-brand-title font-serif">KRAYONZ</div>
        <div className="loader-brand-sub">ENTERTAINMENT</div>
        <div className="loader-legacy-tag">30+ YEARS OF BESPOKE WEDDINGS</div>

        {/* Dynamic Phrase */}
        <div className="loader-phrase-box">
          <p className="loader-phrase font-serif">{phrases[phraseIndex]}</p>
        </div>

        {/* Progress Bar & Percentage */}
        <div className="loader-progress-container">
          <div className="loader-progress-track">
            <div 
              ref={progressBarRef}
              className="loader-progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="loader-percentage-num font-serif">
            <span>{progress}</span>
            <span className="percent-sign">%</span>
          </div>
        </div>

        {/* Global Cities Strip */}
        <div className="loader-cities-ticker">
          MUMBAI • BALI • ABU DHABI • HUA HIN • JAISALMER • BAHRAIN
        </div>
      </div>
    </div>
  );
}
