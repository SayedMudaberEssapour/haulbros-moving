'use client'
import React, { useEffect, useRef, useState } from 'react';

const data = [
  {
    title: "Moving Services",
    summary: "Local and long-distance moves across the Northern Virginia / DMV region.",
    bullets: [
      "Licensed & insured crews with careful handling",
      "Apartment, house, and office relocations",
      "Packing supplies and protective wrapping available",
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M3 7h11v10H3zM14 10h4l3 3v4h-7zM6 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
      </svg>
    ),
  },
  {
    title: "Junk Removal",
    summary: "Hassle-free cleanouts for homes, offices, garages, and storage units.",
    bullets: [
      "Single-item pickups to full property cleanouts",
      "Eco-friendly disposal—recycle & donate when possible",
      "Same-day options available",
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v9h-2V9zm4 0h2v9h-2V9zM7 9h2v9H7V9z"/>
      </svg>
    ),
  },
  {
    title: "Furniture Assembly & Disassembly",
    summary: "Expert handling of beds, desks, sectionals, and specialty items.",
    bullets: [
      "Disassemble → move → reassemble at destination",
      "Piano, treadmill, and bulky item solutions",
      "Hardware bagged & labeled for peace of mind",
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
        <path d="M2 17l5-5 2 2-5 5H2v-2zm7-7l2-2 3 3-2 2-3-3zm8.7-5.3l2.6 2.6-3.7 3.7-2.6-2.6 3.7-3.7zM13 14l4 4h-3l-2.5-2.5L13 14z"/>
      </svg>
    ),
  },
];

const DURATION_MS = 6000;

export default function Services() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('enter');
  const paused = useRef(false);
  const intervalRef = useRef(null);

  // Ensure we start from slide 0 on first mount (helps after hot-reload)
  useEffect(() => { setIndex(0); }, []);

  // Autoplay progress + rotation
  useEffect(() => {
    if (!data.length) return;

    const tick = () => {
      if (!paused.current) {
        setProgress(p => {
          if (p >= 100) {
            setPhase('exit');
            setTimeout(() => {
              setIndex(i => (i + 1) % data.length);
              setPhase('enter');
              setProgress(0);
            }, 220);
            return 100;
          }
          return p + 100 / (DURATION_MS / 100); // ~every 100ms
        });
      }
    };

    intervalRef.current = setInterval(tick, 100);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [index]);

  const jumpTo = (i) => {
    if (!data.length) return;
    setPhase('exit');
    setTimeout(() => {
      setIndex(((i % data.length) + data.length) % data.length);
      setPhase('enter');
      setProgress(0);
    }, 200);
  };

  // Safe current slide (never undefined)
  const safeLen = data.length;
  if (!safeLen) {
    return (
      <section className="services-section">
        <h2>Our Services</h2>
        <p style={{ color: '#bfeaff' }}>Services will appear here.</p>
      </section>
    );
  }
  const safeIndex = ((index % safeLen) + safeLen) % safeLen;
  const current = data[safeIndex];

  return (
    <section
      className="services-section"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <h2>Our Services</h2>

      <div className="service-stage" aria-live="polite">
        <article key={safeIndex} className={`service-card ${phase === 'enter' ? 'card-enter' : 'card-exit'}`}>
          <div className="service-icon" aria-hidden>{current.icon}</div>
          <div>
            <h3 className="service-title">{current.title}</h3>
            <p className="service-summary">{current.summary}</p>
            <ul className="service-list">{current.bullets.map(b => <li key={b}>{b}</li>)}</ul>
            <div className="service-progress" aria-hidden="true">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>
        </article>
      </div>

      <div className="service-dots" role="tablist" aria-label="Service slides">
        {data.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`service-dot ${i === safeIndex ? 'active' : ''}`}
            aria-selected={i === safeIndex}
            role="tab"
            onClick={() => jumpTo(i)}
          />
        ))}
      </div>

      <p style={{ marginTop: '.9rem', color: '#bfeaff' }}>
        <strong style={{ color: '#00c6ff' }}>Service Levels:</strong> Standard (basic move) · Premium (includes packing, unpacking, and extra care).
      </p>
    </section>
  );
}
