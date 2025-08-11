'use client'
import React, { useState } from "react";

/**
 * @typedef {Object} ImageItem
 * @property {'image'} kind
 * @property {string} src
 * @property {string} alt
 */

/**
 * @typedef {Object} VideoItem
 * @property {'video'} kind
 * @property {string} src
 * @property {string} [poster]
 * @property {string} alt
 */

/** @typedef {ImageItem | VideoItem} Item */

export default function Gallery() {
  // Put your files in /public/gallery and /public/team
  const items = [
    { kind: 'image', src: '/gallery/photo1.jpg', alt: 'Moving day' },
    { kind: 'image', src: '/gallery/photo2.jpg', alt: 'Team at work' },
    { kind: 'image', src: '/team/team1.jpg', alt: 'Haul Bros crew' },
    { kind: 'image', src: '/team/team2.jpg', alt: 'Packing specialists' },
    // Hero video card – short, trimmed MP4 in /public/video
    { kind: 'video', src: '/video/haulbros_move.mp4', poster: '/video/poster.jpg', alt: 'Crew moving a client' },
    { kind: 'image', src: '/gallery/photo3.jpg', alt: 'Truck loaded' },
    { kind: 'image', src: '/gallery/photo4.jpg', alt: 'Careful wrapping' },
  ];

  // Plain JavaScript state (no TypeScript generic)
  const [openIndex, setOpenIndex] = useState(null);

  const open = (i) => setOpenIndex(i);
  const close = () => setOpenIndex(null);

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Gallery: Our Past Moves</h2>

      <div className="gallery-grid">
        {items.map((it, i) => (
          <button
            key={i}
            className={`gallery-card ${it.kind === 'video' ? 'video-card' : ''}`}
            onClick={() => open(i)}
            type="button"
            aria-label={`Open ${it.alt}`}
          >
            <div className="media-wrap">
              {it.kind === 'image' ? (
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  className="gallery-media"
                />
              ) : (
                <>
                  <video
                    className="gallery-media"
                    src={it.src}
                    poster={it.poster}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                  <span className="play-badge">▶</span>
                </>
              )}
            </div>
            <span className="caption">{it.alt}</span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox-close" onClick={close} aria-label="Close">✕</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {current.kind === 'image' ? (
              <img src={current.src} alt={current.alt} className="lightbox-media" />
            ) : (
              <video
                className="lightbox-media"
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
              />
            )}
            <div className="lightbox-caption">{current.alt}</div>
          </div>
        </div>
      )}
    </section>
  );
}
