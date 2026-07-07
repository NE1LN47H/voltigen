const products = [
  {
    id: 'omega3-90',
    tag: 'Best Seller',
    name: 'Omega-3 Fish Oil',
    subtitle: '90 Softgels · 1,250 mg',
    description: 'Our flagship formula. Ultra-purified EPA & DHA at 3× standard strength — for heart, brain, and joint support.',
    specs: [
      { label: 'EPA', value: '750 mg' },
      { label: 'DHA', value: '500 mg' },
      { label: 'Servings', value: '90' },
    ],
    price: '$34.99',
    featured: true,
  },
  {
    id: 'omega3-30',
    tag: 'Trial Pack',
    name: 'Omega-3 Fish Oil',
    subtitle: '30 Softgels · 1,250 mg',
    description: 'The perfect introduction to Voltigen. Same premium formula, smaller commitment.',
    specs: [
      { label: 'EPA', value: '750 mg' },
      { label: 'DHA', value: '500 mg' },
      { label: 'Servings', value: '30' },
    ],
    price: '$14.99',
    featured: false,
  },
  {
    id: 'omega3-180',
    tag: 'Best Value',
    name: 'Omega-3 Fish Oil',
    subtitle: '180 Softgels · 1,250 mg',
    description: 'Two months of peak performance. Maximum savings for committed daily users.',
    specs: [
      { label: 'EPA', value: '750 mg' },
      { label: 'DHA', value: '500 mg' },
      { label: 'Servings', value: '180' },
    ],
    price: '$59.99',
    featured: false,
  },
];

export default function ProductsSection() {
  return (
    <section className="products-section" id="products" aria-labelledby="products-title">

      {/* Header */}
      <div className="products-header">
        <div className="products-header-left">
          <span className="products-eyebrow">Our Products</span>
          <h2 className="products-title" id="products-title">SHOP VOLTIGEN</h2>
        </div>
        <p className="products-subtitle">
          Every formula starts with the same commitment: pharmaceutical-grade
          purity, clinically relevant doses, and zero fillers.
        </p>
      </div>

      {/* Product grid */}
      <div className="products-grid">
        {products.map((p) => (
          <article
            key={p.id}
            className={`product-card${p.featured ? ' product-card--featured' : ''}`}
            aria-label={p.name}
          >
            {/* Tag */}
            <span className="product-tag">{p.tag}</span>

            {/* Name block */}
            <div className="product-name-block">
              <h3 className="product-name">{p.name}</h3>
              <p className="product-subtitle">{p.subtitle}</p>
            </div>

            {/* Divider */}
            <div className="product-divider" />

            {/* Description */}
            <p className="product-description">{p.description}</p>

            {/* Specs */}
            <ul className="product-specs" aria-label="Key specifications">
              {p.specs.map(({ label, value }) => (
                <li key={label} className="product-spec-row">
                  <span className="product-spec-label">{label}</span>
                  <span className="product-spec-value">{value}</span>
                </li>
              ))}
            </ul>

            {/* Price + CTA */}
            <div className="product-footer">
              <span className="product-price">{p.price}</span>
              <a
                href={`#${p.id}`}
                id={`buy-${p.id}`}
                className={`product-cta${p.featured ? ' product-cta--featured' : ''}`}
              >
                Add to Cart
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8H13M13 8L8 3M13 8L8 13"
                    stroke="currentColor" strokeWidth="1.7"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}
