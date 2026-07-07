const footerLinks = [
  {
    heading: 'Products',
    links: [
      { label: 'Omega-3 Fish Oil · 90ct', href: '#omega3-90' },
      { label: 'Omega-3 Fish Oil · 30ct', href: '#omega3-30' },
      { label: 'Omega-3 Fish Oil · 180ct', href: '#omega3-180' },
      { label: 'All Products', href: '#products' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Science & Research', href: '#science' },
      { label: 'Sustainability', href: '#sustainability' },
      { label: 'Careers', href: '#careers' },
    ],
  },
  {
    heading: 'Support',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Shipping & Returns', href: '#shipping' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Store Locator', href: '#stores' },
    ],
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: '#instagram',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#twitter',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4l16 16M4 20L20 4" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: '#facebook',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact" aria-label="Site footer">

      {/* ── Main footer body ── */}
      <div className="footer-body">

        {/* Brand column */}
        <div className="footer-brand">
          <span className="footer-logo">voltigen</span>
          <p className="footer-tagline">
            Peak energy, every day.<br />
            Premium Omega&#8209;3 built for people who demand more.
          </p>

          {/* Social links */}
          <div className="footer-socials" aria-label="Social media">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                className="footer-social-btn"
                aria-label={label}
                id={`social-${label.toLowerCase().replace(/[^a-z]/g, '')}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {footerLinks.map(({ heading, links }) => (
          <nav key={heading} className="footer-col" aria-label={heading}>
            <h3 className="footer-col-heading">{heading}</h3>
            <ul className="footer-col-links">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer-link">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} Voltigen. All rights reserved.
        </span>
        <div className="footer-legal">
          <a href="#privacy" className="footer-legal-link">Privacy Policy</a>
          <a href="#terms"   className="footer-legal-link">Terms of Use</a>
          <a href="#cookies" className="footer-legal-link">Cookies</a>
        </div>
      </div>

    </footer>
  );
}
