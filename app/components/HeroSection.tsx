export default function HeroSection() {
  return (
    <main className="hero-container">
      {/* Left: Content */}
      <section className="hero-content">
        <h1 className="hero-title">
          Your Energy.<br />
          Your Edge.<br />
          <span className="gold-text">Voltigen.</span>
        </h1>
        <p className="hero-description">
          Experience peak performance, total body wellness, and sharp focus with Voltigen&apos;s
          precisely formulated supplement line.
        </p>
        <a href="#essentials" className="btn-explore">Explore Products</a>
      </section>

      {/* Right: Product Visual */}
      <section className="hero-visual">
        <div className="hero-image-wrapper">
          <a href="#essentials" className="hero-image-link" aria-label="View essentials products">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-image.jpeg" alt="Voltigen Floating Supplement Bottles" className="hero-img" />
          </a>
        </div>
      </section>
    </main>
  );
}
