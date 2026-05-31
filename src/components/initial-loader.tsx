'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * Full-screen planetary loader that shows on initial site load only.
 * Displays for a minimum of 2.5 seconds then fades out smoothly.
 * Uses sessionStorage to not show again during the session.
 */
export default function InitialLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if we already showed the loader this session
    const alreadyLoaded = sessionStorage.getItem('nueera-loaded');
    if (alreadyLoaded) return;

    setIsVisible(true);

    // Minimum display time: 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('nueera-loaded', 'true');
    }, 3000); // 2.5s display + 0.5s fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`nueera-loader fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Orbital System */}
      <div className="loader-orbital-system">
        {/* Outer glow rings */}
        <div className="loader-glow-ring loader-glow-ring-outer" />
        <div className="loader-glow-ring loader-glow-ring-inner" />

        {/* Orbit path (visual ellipse) */}
        <div className="loader-orbit-path" />

        {/* Sun - the NueEra logo core */}
        <div className="loader-sun">
          <div className="loader-sun-glow" />
          <Image
            src="/assets/images/loader.webp"
            alt="NueEra"
            width={120}
            height={120}
            className="loader-sun-image"
            priority
          />
        </div>

        {/* Orbiting Planet 1 - Blue */}
        <div className="loader-planet-orbit loader-orbit-1">
          <div className="loader-planet loader-planet-blue">
            <div className="loader-planet-trail loader-trail-blue" />
            <div className="loader-planet-body" />
          </div>
        </div>

        {/* Orbiting Planet 2 - Orange */}
        <div className="loader-planet-orbit loader-orbit-2">
          <div className="loader-planet loader-planet-orange">
            <div className="loader-planet-trail loader-trail-orange" />
            <div className="loader-planet-body" />
          </div>
        </div>

        {/* Orbiting Planet 3 - Small blue dot */}
        <div className="loader-planet-orbit loader-orbit-3">
          <div className="loader-planet loader-planet-small">
            <div className="loader-planet-body" />
          </div>
        </div>

        {/* Sparkle particles */}
        <div className="loader-sparkle loader-sparkle-1" />
        <div className="loader-sparkle loader-sparkle-2" />
        <div className="loader-sparkle loader-sparkle-3" />
        <div className="loader-sparkle loader-sparkle-4" />
      </div>

      {/* Text */}
      <div className="loader-text-container">
        <p className="loader-text">NueEra</p>
        <div className="loader-subtext-bar">
          <div className="loader-subtext-progress" />
        </div>
      </div>
    </div>
  );
}
