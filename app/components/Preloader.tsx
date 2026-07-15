'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
      document.body.classList.remove('loading');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''}>
      <div className="preloader-content">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/voltigen.png" alt="Voltigen Logo" className="preloader-logo" />
        <h1 className="preloader-title">VOLTIGEN</h1>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
      </div>
    </div>
  );
}
