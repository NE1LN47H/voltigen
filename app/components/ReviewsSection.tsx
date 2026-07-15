'use client';

import { useState, useEffect, useRef } from 'react';

const StarIcon = () => (
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Stars = () => (
  <div className="review-stars">
    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
  </div>
);

type Review = {
  id: string;
  content: string;
  author: string;
  status: string;
  avatar?: string;
  initials?: string;
};

const reviews: Review[] = [
  {
    id: 'james',
    content: '"I\'ve noticed a huge improvement in my energy and focus since I started using Voltigen Fish Oil. Highly recommended!"',
    author: 'James T.',
    status: 'Verified Buyer',
    initials: 'JT',
  },
  {
    id: 'sarah',
    content: '"Great quality products! Voltigen Complete is my go-to for daily nutrition and immunity support."',
    author: 'Sarah M.',
    status: 'Verified Buyer',
    initials: 'SM',
  },
  {
    id: 'michael',
    content: '"Clean ingredients and no aftertaste. Voltigen is now a part of my daily routine."',
    author: 'Michael R.',
    status: 'Verified Buyer',
    initials: 'MR',
  },
  {
    id: 'rohan',
    content: '"I\'ve been using Voltigen Multivitamin for over a month now. My midday fatigue is completely gone, and I feel significantly more focused during long meetings. Highly recommended!"',
    author: 'Rohan Sharma',
    status: 'Local Guide • 18 reviews',
    initials: 'RS',
  },
  {
    id: 'arjun',
    content: '"Pure Omega-3 without any fishy aftertaste. I\'ve noticed a significant improvement in my joint flexibility after workouts and much better focus. Molecularly distilled quality really shows."',
    author: 'Arjun Mehta',
    status: 'Local Guide • 31 reviews',
    initials: 'AM',
  },
  {
    id: 'priya',
    content: '"Best daily multivitamin I\'ve tried. Usually, supplements upset my stomach, but this organic formula is extremely gentle. My immunity and overall energy levels are great."',
    author: 'Priya Patel',
    status: 'Verified Buyer',
    initials: 'PP',
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 20;

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 600) setVisibleCount(1);
      else if (w < 900) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visibleCount);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [maxIndex, current]);

  useEffect(() => {
    const offset = current * (CARD_WIDTH + CARD_GAP);
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  }, [current]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="reviews-section" id="reviews">
      <h2 className="reviews-main-title">WHAT OUR CUSTOMERS SAY</h2>

      <div className="reviews-carousel-wrapper">
        <div className="reviews-track" id="reviews-track" ref={trackRef}>
          {reviews.map((r) => (
            <div key={r.id} className="review-card">
              <div>
                <Stars />
                <p className="review-content">{r.content}</p>
              </div>
              <div className="review-author-info">
                {r.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.avatar} alt={r.author} className="review-avatar" />
                ) : (
                  <div className="review-avatar-initials">{r.initials}</div>
                )}
                <div className="review-meta">
                  <span className="review-author-name">{r.author}</span>
                  <span className="review-buyer-status">{r.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="reviews-dots" id="reviews-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to review ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
