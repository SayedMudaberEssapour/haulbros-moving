'use client'
import React from 'react'
import QuoteForm from './QuoteForm';

export default function HeroHeader() {
  return (
    <section className="hero-wrap">
      <div className="hero-mesh" aria-hidden />
      <div className="hero-grid">
        {/* Left: copy + quote */}
        <div className="hero-copy">
          <span className="hero-badge">Trusted • Family-Owned</span>
          <h1 className="hero-headline">
            Moving Made Simple in <br/> Northern Virginia & DMV
          </h1>
          <p className="hero-sub">
            Licensed. Insured. On-time. Get your free, instant quote below!
          </p>

          <div className="hero-quote">
            <QuoteForm />
          </div>
        </div>

        {/* Right: giant image */}
        <div className="hero-media">
          <div className="hero-glow" />
          <img
            src="/hero/haulbros-hero.jpg"
            alt="Haul Bros Moving truck and crew"
            className="hero-img"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

