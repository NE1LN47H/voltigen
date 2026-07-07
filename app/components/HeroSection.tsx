'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const bottleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bottleRef.current;
    if (!el) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.01;
      el.style.transform = `translateY(${Math.sin(t) * 14}px)`;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="hero" id="hero">

      {/* ── Navbar ── */}
      <nav className="hero-nav" aria-label="Main navigation">
        <ul className="hero-nav-links">
          <li><a href="#about" id="nav-about">About</a></li>
          <li><a href="#selling-points" id="nav-selling">Selling points</a></li>
          <li><a href="#news" id="nav-news">News</a></li>
          <li><a href="#contact" id="nav-contact">Contact</a></li>
        </ul>

        <div className="hero-logo" aria-label="Voltigen">
          <span className="hero-logo-text">voltigen</span>
        </div>

        <button className="hero-menu-btn" id="menu-btn" aria-label="Open menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* ── 3-column hero body ── */}
      <div className="hero-content">

        {/* Col 1 – copy */}
        <div className="hero-copy">
          <h1 className="hero-heading">
            <span className="hero-heading-line1">OMEGA-3</span>
            <span className="hero-heading-line2">VOLTIGEN</span>
          </h1>
          <p className="hero-description">
            Discover the power of Voltigen Omega&#8209;3 and take a step towards a
            healthier, more vibrant you. Browse our products and start your
            journey to better health today!
          </p>
          <a href="#products" className="hero-cta-btn" id="cta-explore">
            Explore More
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Col 2 – floating product bottle */}
        <div className="hero-bottle-outer" ref={bottleRef}>
          <div className="hero-bottle-inner">
            <Image
              src="/images/voltigen.png"
              alt="Voltigen Omega-3 Fish Oil supplement bottle"
              fill
              priority
              className="hero-bottle-img"
              sizes="(max-width: 768px) 90vw, 50vw"
            />
          </div>
        </div>

        {/* Col 3 – stat card */}
        <div className="hero-stat-card" role="complementary" aria-label="Clinical success rate">
          <div className="hero-stat-number">88%</div>
          <div className="hero-stat-label">Successful<br />tests</div>
          <a href="#results" className="hero-stat-arrow" id="stat-arrow" aria-label="View test results">
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3 9H15M15 9L9 3M15 9L9 15"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

      </div>

      {/* ── Category tabs ── */}
      <nav className="hero-categories" aria-label="Product categories">
        {[
          { label: 'Capsules',     id: 'cat-capsules' },
          { label: 'Softgels',     id: 'cat-softgels' },
          { label: 'Liquid Drops', id: 'cat-liquid'   },
          { label: 'Lorem',        id: 'cat-lorem'    },
        ].map(({ label, id }) => (
          <a key={id} href={`#${id}`} id={id} className="hero-cat-item">
            <span>{label}</span>
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H4M12 2V10"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        ))}
      </nav>

    </section>
  );
}
