'use client';

import { useState } from 'react';

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.004 2c-5.518 0-9.996 4.48-9.996 10 0 1.76.46 3.42 1.345 4.89l-1.345 4.91 5.03-1.32c1.43.78 3.05 1.22 4.76 1.22 5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.67 14.28c-.24.68-1.2 1.25-1.95 1.34-.52.06-1.19.09-1.93-.15-.46-.15-1.02-.37-1.74-.68-3.07-1.27-5.06-4.39-5.21-4.6-.15-.2-.1.08.79-.81 1-.16.21-.3.45-.48.66-.23.23-.48.24-.71.12-.24-.12-1.51-.74-1.76-.87-.25-.13-.42-.19-.51-.1-.09.09-.3.35-.4.53-.1.19-.22.45-.1.68.12.24.48.49.77.78 1.48 1.47 3.32 2.45 5.25 3.08.73.24 1.48.33 2.12.31.62-.02 1.21-.32 1.63-.73.4-.38.53-.48.64-.69.11-.21.06-.4-.01-.52-.07-.12-.55-.83-.75-.95-.2-.12-.34-.18-.48-.06-.14.12-.54.67-.66.8-.12.13-.24.15-.48.03-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.51-1.22-.7-1.68-.18-.45-.37-.39-.51-.39-.13 0-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9s.82 2.2 1.05 2.5c.23.3 2.5 3.82 6.06 5.35.85.36 1.51.58 2.03.74.86.27 1.64.23 2.25.14.68-.1 2.09-.85 2.38-1.68z" />
  </svg>
);

const EnergyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
);

const PersonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="1"></circle>
    <path d="M9 20a1 1 0 1 0 2 0v-4h2v4a1 1 0 1 0 2 0v-6L12 9l-3 5v6z"></path>
  </svg>
);

type Product = {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  waLink: string;
  features: { icon: React.ReactNode; label: string }[];
  description: string;
  ingredients: string[];
};

const products: Product[] = [
  {
    id: 'multivitamin',
    name: 'Multivitamin',
    subtitle: 'Daily Health & Vitality',
    image: '/images/multivitamin.jpeg',
    waLink: 'https://wa.me/917356037181?text=Please%20fill%20the%20details:%0AName:%0AAddress:%0AProduct:%20Voltigen%20Daily%20Multivitamin',
    features: [
      { icon: <EnergyIcon />, label: 'Energy' },
      { icon: <ShieldIcon />, label: 'Immune' },
      { icon: <HeartIcon />, label: 'Vitality' },
    ],
    description:
      'Voltigen Daily Multivitamin is a comprehensive formula delivering 23 essential vitamins and minerals. Supports sustained energy, immune defence, and overall vitality. Science-backed dosing with premium bioavailable forms.',
    ingredients: ['Vitamin A', 'Vitamin C', 'Vitamin D3', 'Vitamin E', 'Vitamin B12', 'Zinc', 'Magnesium', 'Selenium', 'Folate', 'Biotin'],
  },
  {
    id: 'fishoil',
    name: 'Fish Oil',
    subtitle: 'Premium Omega-3',
    image: '/images/fish-oil.jpeg',
    waLink: 'https://wa.me/917356037181?text=Please%20fill%20the%20details:%0AName:%0AAddress:%0AProduct:%20Voltigen%20Ultra%20Pure%20Fish%20Oil',
    features: [
      { icon: <HeartIcon />, label: 'Heart' },
      { icon: <BrainIcon />, label: 'Brain' },
      { icon: <PersonIcon />, label: 'Joints' },
    ],
    description:
      'Voltigen Ultra Pure Fish Oil delivers concentrated EPA & DHA omega-3 fatty acids through molecular distillation. Supports cardiovascular health, cognitive function, and joint mobility without any fishy aftertaste.',
    ingredients: ['EPA (Eicosapentaenoic Acid)', 'DHA (Docosahexaenoic Acid)', 'Vitamin E (as d-alpha tocopherol)', 'Molecularly Distilled Fish Oil Concentrate'],
  },
];

export default function ProductsSection() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const activeProduct = products.find((p) => p.id === openModal) ?? null;

  return (
    <>
      <section className="products-section" id="essentials">
        <h2 className="products-section-title">OUR ESSENTIALS</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-top">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.image} alt={`Voltigen ${product.name}`} className="product-card-img" />
              </div>
              <div className="product-card-bottom">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-subtitle">{product.subtitle}</p>

                <div className="product-features">
                  {product.features.map((f, i) => (
                    <div key={i} className="feature-item">
                      <div className="feature-icon">{f.icon}</div>
                      <span className="feature-text">{f.label}</span>
                    </div>
                  ))}
                </div>

                <div className="product-footer">
                  <div className="product-actions-group">
                    <button
                      className="product-details-btn"
                      onClick={() => setOpenModal(product.id)}
                    >
                      View Details
                    </button>
                    <a
                      href={product.waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-card"
                    >
                      <WhatsAppIcon />
                      <span>Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <div
        className={`product-modal-overlay${openModal ? ' open' : ''}`}
        onClick={() => setOpenModal(null)}
      >
        <div className="product-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={() => setOpenModal(null)}>
            &times;
          </button>
          {activeProduct && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={activeProduct.image} alt={activeProduct.name} className="modal-img" />
              <h2 className="modal-title">{activeProduct.name}</h2>
              <p className="modal-subtitle">{activeProduct.subtitle}</p>
              <p className="modal-description">{activeProduct.description}</p>
              <p className="modal-ingredient-title">Key Ingredients</p>
              <div className="modal-ingredients">
                {activeProduct.ingredients.map((ing) => (
                  <span key={ing} className="modal-ingredient-tag">{ing}</span>
                ))}
              </div>
              <a
                href={activeProduct.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-book-btn"
              >
                <WhatsAppIcon />
                Book Now on WhatsApp
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
}
