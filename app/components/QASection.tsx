'use client';

import { useState } from 'react';

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10 0 1.76.46 3.42 1.345 4.89l-1.345 4.91 5.03-1.32c1.43.78 3.05 1.22 4.76 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.67 14.28c-.24.68-1.2 1.25-1.95 1.34-.52.06-1.19.09-1.93-.15-.46-.15-1.02-.37-1.74-.68-3.07-1.27-5.06-4.39-5.21-4.6-.15-.2-.1.08.79-.81 1-.16.21-.3.45-.48.66-.23.23-.48.24-.71.12-.24-.12-1.51-.74-1.76-.87-.25-.13-.42-.19-.51-.1-.09.09-.3.35-.4.53-.1.19-.22.45-.1.68.12.24.48.49.77.78 1.48 1.47 3.32 2.45 5.25 3.08.73.24 1.48.33 2.12.31.62-.02 1.21-.32 1.63-.73.4-.38.53-.48.64-.69.11-.21.06-.4-.01-.52-.07-.12-.55-.83-.75-.95-.2-.12-.34-.18-.48-.06-.14.12-.54.67-.66.8-.12.13-.24.15-.48.03-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.18-.45-.37-.39-.51-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2 1.05 2.5c.23.3 2.5 3.82 6.06 5.35.85.36 1.51.58 2.03.74.86.27 1.64.23 2.25.14.68-.1 2.09-.85 2.38-1.68z" />
  </svg>
);

const faqs = [
  {
    q: 'Why should I take dietary supplements?',
    a: 'Voltigen supplements are designed to fill key nutritional gaps in your daily diet, support heart and brain health, and boost overall energy levels and immune function.',
  },
  {
    q: 'Are Voltigen supplements suitable for vegans or vegetarians?',
    a: 'Our Daily Multivitamin is vegetarian-friendly. Our Ultra Pure Fish Oil contains omega-3 fatty acids derived from premium fish oil source. All ingredients are clearly detailed on labels and backed by transparent third-party certifications.',
  },
  {
    q: 'Can I take multiple supplements together?',
    a: 'Yes, our products are formulated to be taken as a perfectly complementary pairing. Consuming them together supports enhanced vitamin absorption and general physical performance, particularly when taken alongside your meals.',
  },
  {
    q: 'Can I take supplements with medications or other dietary products?',
    a: 'We always recommend consulting your healthcare provider before combining supplements with prescribed medications. This helps avoid potential interactions and ensures safe, spaced-out consumption.',
  },
  {
    q: 'What is the recommended daily dosage for your supplements?',
    a: 'For best results, follow the dosage guidelines printed on each package label. Do not exceed the recommended daily intake. We advise taking supplements with plenty of water during a regular meal.',
  },
  {
    q: 'Are your supplements tested for quality and purity?',
    a: 'Absolutely. All Voltigen products are formulated using premium ingredients that undergo rigorous third-party testing. They are guaranteed free from heavy metals and manufactured in certified, state-of-the-art facilities.',
  },
];

export default function QASection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="qa-section" id="qa">
      <h2 className="qa-main-title">FREQUENTLY ASKED QUESTIONS</h2>

      <div className="qa-container">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="qa-item">
              <button
                className="qa-trigger"
                aria-expanded={isOpen}
                onClick={() => toggle(i)}
              >
                <span>{faq.q}</span>
                <span className="qa-icon-plus">
                  <PlusIcon />
                </span>
              </button>
              <div
                className="qa-answer"
                style={{ maxHeight: isOpen ? '400px' : '0px' }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="qa-support-footer">
        <p>Still have questions? Get in touch with our team directly.</p>
        <a
          href="https://wa.me/917356037181?text=Question:%20"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp-qa"
        >
          <WhatsAppIcon />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
