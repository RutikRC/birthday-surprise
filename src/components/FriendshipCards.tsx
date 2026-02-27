import { useState } from 'react';
import './FriendshipCards.css';

// Best-friend themed images from Unsplash (free to use, no attribution required per Unsplash license)
const CARDS = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
    caption: 'Best friends forever',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1529155852094-7dc3843c2243?w=400&q=80',
    caption: 'Partners in crime',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1534528740845-0efd0c3c2b3b?w=400&q=80',
    caption: 'Celebrate you',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80',
    caption: 'Good vibes only',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
    caption: 'Together',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
    caption: 'My person',
  },
];

export default function FriendshipCards() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="friendship-cards section" id="cards">
      <div className="friendship-cards-grid">
        {CARDS.map((card, index) => (
          <button
            key={card.id}
            type="button"
            className="friendship-card"
            onClick={() => setLightboxIndex(index)}
          >
            <div className="friendship-card-img-wrap">
              <img
                src={card.img}
                alt=""
                loading="lazy"
              />
            </div>
            <span className="friendship-card-caption">{card.caption}</span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
          onKeyDown={(e) => e.key === 'Escape' && setLightboxIndex(null)}
          role="button"
          tabIndex={0}
          aria-label="Close"
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="lightbox-close"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={CARDS[lightboxIndex].img.replace('w=400', 'w=800')}
              alt=""
              className="lightbox-img"
            />
            <p className="lightbox-caption">{CARDS[lightboxIndex].caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
