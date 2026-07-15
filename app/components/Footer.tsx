const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIconOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LocationIcon = () => (
  <svg className="contact-inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const MailIcon = () => (
  <svg className="contact-inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg className="contact-inline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

export default function Footer() {
  return (
    <section className="support-footer-section" id="support">
      <div className="support-footer-container">
        <div className="footer-left-col">
          {/* Top grid: links */}
          <div className="footer-grid-top">
            <div className="footer-links-group">
              <h4 className="footer-col-title">QUICK LINKS</h4>
              <ul className="footer-links-list">
                <li><a href="#">Home</a></li>
                <li><a href="#essentials">Shop</a></li>
                <li><a href="#science">Science</a></li>
                <li><a href="#qa">FAQ</a></li>
                <li><a href="#reviews">About</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-col-title">RESOURCES</h4>
              <ul className="footer-links-list">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h4 className="footer-col-title">GET IN TOUCH</h4>
              <ul className="footer-links-list footer-contact-info-list">
                <li>
                  <LocationIcon />
                  <span>SCF 17 Hollywood Plaza, VIP Road Zirakpur-140603</span>
                </li>
                <li>
                  <MailIcon />
                  <a href="mailto:voltigenind@gmail.com">voltigenind@gmail.com</a>
                </li>
                <li>
                  <PhoneIcon />
                  <a href="tel:+917356037181">+91 7356 037181</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Commitment */}
          <div className="footer-grid-middle">
            <h4 className="footer-col-title">OUR COMMITMENT</h4>
            <p className="footer-commitment-text">
              At Voltigen, we&apos;re dedicated to helping you on a transformative health journey. Our mission is to provide
              you with the highest quality supplements, backed by science and crafted with care, empowering you from cell to joint.
            </p>
          </div>

          {/* Social */}
          <div className="footer-grid-bottom">
            <h4 className="footer-col-title">FOLLOW US</h4>
            <div className="footer-social-links">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="https://wa.me/917356037181?text=Question:%20" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <WhatsAppIconOutline />
              </a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Voltigen. All rights reserved.</p>
          <div className="footer-copyright-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
}
