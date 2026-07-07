// Minimal inline SVG icons — no emojis
const icons = {
  heart: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  brain: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2a2.5 2.5 0 0 1 5 0v1a5 5 0 0 1 5 5v1a3 3 0 0 1 0 6v1a5 5 0 0 1-5 5H9.5a5 5 0 0 1-5-5v-1a3 3 0 0 1 0-6V8a5 5 0 0 1 5-5V2z" />
    </svg>
  ),
  bolt: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const pillars = [
  {
    icon: icons.heart,
    title: 'Heart Health',
    body: 'High-concentration EPA & DHA help maintain healthy triglyceride levels and support optimal cardiovascular function.',
  },
  {
    icon: icons.brain,
    title: 'Brain Function',
    body: 'DHA is an essential building block of brain tissue — enhancing focus, memory, and cognitive clarity at every age.',
  },
  {
    icon: icons.bolt,
    title: 'Energy Metabolism',
    body: 'Omega&#8209;3 fatty acids improve mitochondrial efficiency, meaning more energy extracted from every meal, naturally.',
  },
  {
    icon: icons.shield,
    title: 'Joint Support',
    body: 'Anti-inflammatory Omega&#8209;3s reduce stiffness and swelling, helping you move freely and recover faster.',
  },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">

      {/* ── Top label bar ── */}
      <div className="about-label-bar">
        <span className="about-eyebrow">About Voltigen</span>
      </div>

      {/* ── Split layout ── */}
      <div className="about-split">

        {/* Left – text block */}
        <div className="about-text">
          <h2 className="about-title" id="about-title">
            PEAK HEALTH,<br />
            <span className="about-title-accent">EVERY DAY.</span>
          </h2>
          <p className="about-lead">
            Voltigen was founded on a single belief: that premium nutrition
            shouldn't be complicated. Our Omega&#8209;3 Fish Oil delivers three
            times the potency of ordinary supplements — purified, tested,
            and crafted to fuel the lives of people who demand more from
            themselves.
          </p>
          <p className="about-body">
            Every batch is molecularly distilled to remove heavy metals and
            PCBs, third&#8209;party verified for purity, and manufactured in a
            GMP&#8209;certified facility. No shortcuts. No compromise.
          </p>

          {/* Stats strip */}
          <div className="about-stats-strip">
            {[
              { num: '3×',     label: 'Strength' },
              { num: '88%',    label: 'Clinical success' },
              { num: '1250mg', label: 'Per softgel' },
            ].map(({ num, label }) => (
              <div className="about-stat" key={label}>
                <span className="about-stat-num">{num}</span>
                <span className="about-stat-label">{label}</span>
              </div>
            ))}
          </div>

          <a href="#products" className="about-cta" id="about-cta">
            Explore Products
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8H13M13 8L8 3M13 8L8 13"
                stroke="currentColor" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right – pillars only, no bottle image */}
        <div className="about-right">
          <div className="about-pillars">
            {pillars.map(({ icon, title, body }) => (
              <div className="about-pillar" key={title}>
                <div className="about-pillar-icon">{icon}</div>
                <div className="about-pillar-text">
                  <h3 className="about-pillar-title">{title}</h3>
                  <p className="about-pillar-body" dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
