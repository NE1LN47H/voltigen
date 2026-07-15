const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PulseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.24 12h-4.14l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const EnergyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const bullets = [
  'Natural Ingredients',
  'Science-backed formula',
  'Premium Ingredients',
  'Lab tested',
  'Recovery support',
  'Enhanced performance',
];

const focusCards = [
  {
    icon: <PulseIcon />,
    title: 'Enhancing Joint Blood Flow',
    text: 'Your joints play a crucial role in your daily mobility and overall well-being. Proper circulation ensures rich oxygenation and nutrient absorption in cartilage tissue.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Help Reduce Inflammation',
    text: 'Inflammation is a common factor in many chronic health concerns. Our targeted ingredients support cellular pathways to bring inflammation markers back to equilibrium.',
  },
  {
    icon: <ClockIcon />,
    title: 'Helps You Stick To Your Diet',
    text: 'Maintaining a healthy diet can be a challenging but essential endeavor. Voltigen works to curb nervous cravings and stabilize focus and metabolic energy levels.',
  },
  {
    icon: <EnergyIcon />,
    title: 'Ingredients To Fuel Your Body',
    text: 'Proper nutrition is the cornerstone of a healthy lifestyle. This advanced formulation delivers 100% premium quality, highly bioavailable cellular fuel.',
  },
];

export default function ScienceSection() {
  return (
    <section className="science-container" id="science">
      <h1 className="science-main-title">THE SCIENCE & OUR STORY</h1>

      {/* Card 1: Scientific Foundation */}
      <div className="science-card">
        <div className="science-content center-layout">
          <span className="science-subtitle">ABOUT VOLTIGEN</span>
          <h2 className="science-heading">SCIENCE-POWERED NUTRITION FOR PEAK PERFORMANCE</h2>
          <p className="science-text">
            At Voltigen, we&apos;re dedicated to helping you on a transformative health journey. Our mission is to
            provide you with the highest quality supplements, backed by science and crafted with care. Here&apos;s
            what you can expect from us:
          </p>
          <ul className="science-bullets-list">
            {bullets.map((b) => (
              <li key={b} className="science-bullet-item">
                <span className="science-bullet-icon"><CheckIcon /></span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="science-visual-row">
          <div className="science-img-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/multivitamin.jpeg" alt="Voltigen Science Laboratory Workspace" />
          </div>
          <div className="science-img-wrapper">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/fish-oil.jpeg" alt="Voltigen Scientific Team of Researchers" />
          </div>
        </div>

        <div className="science-focus-grid">
          {focusCards.map((card) => (
            <div key={card.title} className="science-focus-card">
              <div className="focus-card-icon">{card.icon}</div>
              <h3 className="focus-card-title">{card.title}</h3>
              <p className="focus-card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2: Our Story */}
      <div className="science-card">
        <div className="science-grid reverse">
          <div className="science-visual-grid">
            <div className="science-img-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero-image.jpeg" alt="Voltigen Co-founders Professional Portrait" />
            </div>
          </div>

          <div className="science-content">
            <span className="science-subtitle">OUR STORY & PHILOSOPHY</span>
            <h2 className="science-heading">ADVANCED FORMULA FOR OUR HEALTH</h2>
            <p className="science-text">
              Voltigen was created out of a desire for absolute transparency and clinical dosing in sports
              nutrition. We believe you should never have to compromise between pure organic ingredients and
              real, proven research results.
            </p>
            <p className="science-text">
              At Voltigen, we&apos;re dedicated to helping you on a health journey. Our mission is to provide you
              with the highest quality supplements, designed to empower you from cell to joint. We stand
              behind our 100% premium quality guarantee and lab-test every single batch.
            </p>
            <ul className="science-bullets-list" style={{ gridTemplateColumns: '1fr' }}>
              <li className="science-bullet-item">
                <span className="science-bullet-icon"><CheckIcon /></span>
                100% Premium Quality Guarantee
              </li>
              <li className="science-bullet-item">
                <span className="science-bullet-icon"><CheckIcon /></span>
                Advanced Formula for Cell &amp; Tissue Repair
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
