import React, { useEffect, useRef } from 'react'

export default function Hero() {
  const taglineRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = taglineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    setTimeout(() => {
      el.style.transition = 'opacity 1.2s ease, transform 1.2s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 600)
  }, [])

  return (
    <section id="accueil" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      textAlign: 'center', padding: '0 2rem',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,168,76,0.08) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 20% 30%, rgba(201,168,76,0.04) 0%, transparent 60%)
        `,
      }} />

      {/* Geometric ornament */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', opacity: 0.06 }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="arabic" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <polygon points="60,5 115,35 115,85 60,115 5,85 5,35" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
              <polygon points="60,20 100,42 100,78 60,100 20,78 20,42" fill="none" stroke="#C9A84C" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arabic)" />
        </svg>
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Rating badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          border: '1px solid rgba(201,168,76,0.3)', borderRadius: '2px',
          padding: '0.35rem 1.2rem', marginBottom: '2rem',
          fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--gold)', fontFamily: 'var(--font-body)',
        }}>
          ★★★★★ &nbsp; 4.5 / 5 · Géré par une femme
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          lineHeight: 1,
          color: 'var(--text-light)',
          letterSpacing: '-0.01em',
          marginBottom: '0.3rem',
        }}>
          Casablanca
        </h1>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300,
          fontSize: 'clamp(1.5rem, 4vw, 3rem)',
          color: 'var(--gold)',
          marginBottom: '2rem', letterSpacing: '0.1em',
        }}>
          Lounge Bar
        </h2>

        <p ref={taglineRef} style={{
          fontFamily: 'var(--font-body)', fontWeight: 300,
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          color: 'var(--text-mid)', maxWidth: '520px',
          letterSpacing: '0.03em', marginBottom: '3rem',
        }}>
          Accueil chaleureux · Bonne bouffe · Ambiance conviviale<br/>
          <em style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>Abidjan, Côte d'Ivoire</em>
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#menu" style={{
            padding: '0.85rem 2.5rem',
            background: 'var(--gold)',
            color: 'var(--deep)',
            fontFamily: 'var(--font-body)', fontWeight: 500,
            fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            borderRadius: '1px',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Voir le Menu
          </a>
          <a href="tel:+2250161326092" style={{
            padding: '0.85rem 2.5rem',
            border: '1px solid rgba(201,168,76,0.4)',
            color: 'var(--text-light)',
            fontFamily: 'var(--font-body)', fontWeight: 300,
            fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            borderRadius: '1px',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
          >
            01 61 32 6092
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'var(--muted)', fontSize: '0.7rem', letterSpacing: '0.2em',
        textTransform: 'uppercase', fontFamily: 'var(--font-body)',
      }}>
        <span>Découvrir</span>
        <div style={{
          width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--gold), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
        <style>{`
          @keyframes scrollPulse {
            0%, 100% { opacity: 0.4; transform: scaleY(1); }
            50% { opacity: 1; transform: scaleY(1.1); }
          }
        `}</style>
      </div>
    </section>
  )
}
