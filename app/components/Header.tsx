'use client';

import { useState } from 'react';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10 0 1.76.46 3.42 1.345 4.89l-1.345 4.91 5.03-1.32c1.43.78 3.05 1.22 4.76 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.67 14.28c-.24.68-1.2 1.25-1.95 1.34-.52.06-1.19.09-1.93-.15-.46-.15-1.02-.37-1.74-.68-3.07-1.27-5.06-4.39-5.21-4.6-.15-.2-.1.08.79-.81 1-.16.21-.3.45-.48.66-.23.23-.48.24-.71.12-.24-.12-1.51-.74-1.76-.87-.25-.13-.42-.19-.51-.1-.09.09-.3.35-.4.53-.1.19-.22.45-.1.68.12.24.48.49.77.78 1.48 1.47 3.32 2.45 5.25 3.08.73.24 1.48.33 2.12.31.62-.02 1.21-.32 1.63-.73.4-.38.53-.48.64-.69.11-.21.06-.4-.01-.52-.07-.12-.55-.83-.75-.95-.2-.12-.34-.18-.48-.06-.14.12-.54.67-.66.8-.12.13-.24.15-.48.03-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.18-.45-.37-.39-.51-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2 1.05 2.5c.23.3 2.5 3.82 6.06 5.35.85.36 1.51.58 2.03.74.86.27 1.64.23 2.25.14.68-.1 2.09-.85 2.38-1.68z" />
  </svg>
);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header>
        <div className="logo-container">
          <a href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/voltigen.png" alt="Voltigen Logo" className="logo" />
          </a>
        </div>

        <nav id="nav-menu">
          <ul className="nav-links">
            <li><a href="#" className="active">HOME</a></li>
            <li><a href="#essentials">PRODUCTS</a></li>
            <li><a href="#science">THE SCIENCE</a></li>
            <li><a href="#reviews">REVIEWS</a></li>
            <li><a href="#qa">Q&amp;A</a></li>
            <li><a href="#support">SUPPORT</a></li>
          </ul>
        </nav>

        <div className="actions-panel">
          <a
            href="https://wa.me/917356037181?text=Please%20fill%20the%20details:%0AName:%0AAddress:%0AProduct:"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-book"
          >
            <WhatsAppIcon />
            <span>Book Now</span>
          </a>

          <button
            className="menu-toggle"
            id="menu-btn"
            aria-label="Toggle Navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Nav */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#" className="active" onClick={closeMenu}>HOME</a></li>
          <li><a href="#essentials" onClick={closeMenu}>PRODUCTS</a></li>
          <li><a href="#science" onClick={closeMenu}>THE SCIENCE</a></li>
          <li><a href="#reviews" onClick={closeMenu}>REVIEWS</a></li>
          <li><a href="#qa" onClick={closeMenu}>Q&amp;A</a></li>
          <li><a href="#support" onClick={closeMenu}>SUPPORT</a></li>
        </ul>
        <a
          href="https://wa.me/917356037181?text=Please%20fill%20the%20details:%0AName:%0AAddress:%0AProduct:"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-book"
          onClick={closeMenu}
        >
          <WhatsAppIcon />
          <span>Book Now on WhatsApp</span>
        </a>
      </nav>
    </>
  );
}
