'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${loaded ? 'loaded' : ''}`}>
      <div className="loader-spinner">
        <Image
          src="/assets/images/loader.webp"
          alt="NueEra"
          width={48}
          height={48}
          className="rounded-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
