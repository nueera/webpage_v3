'use client';

import Image from 'next/image';

export default function NueEraLoader({ fullScreen = false }: { fullScreen?: boolean }) {
  return (
    <div
      className={`nueera-loader flex flex-col items-center justify-center gap-8 ${
        fullScreen ? 'fixed inset-0 z-[9999]' : 'min-h-[80vh]'
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
