import React, { useState, useEffect } from 'react'

const links = ['Accueil', 'Menu', 'Ambiance', 'Avis', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1.2rem 2.5rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'background 0.4s, backdrop-filter 0.4s',
      background: scrolled ? 'rgba(14,10,6,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.08em', color: 'var(--gold)' }}>
        CASABLANCA
      </div>

      {/* Desktop links */}
      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}
        className="nav-links">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-body)', fontWeight: 300,
                fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--text-mid)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-mid)')}
            >
              {link}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{
            padding: '0.5rem 1.5rem',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
            fontWeight: 400,
            transition: 'background 0.2s, color 0.2s',
            borderRadius: '1px',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--deep)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)' }}
          >
            Réserver
          </a>
        </li>
      </ul>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}
        className="burger"
        aria-label="Menu"
      >
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '24px', height: '1px',
            background: 'var(--gold)',
            transition: 'transform 0.3s',
            transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)' :
                       menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' :
                       menuOpen && i === 1 ? 'scaleX(0)' : 'none',
          }} />
        ))}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(14,10,6,0.97)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '2.5rem', zIndex: 99,
        }}>
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300,
                color: 'var(--text-light)', letterSpacing: '0.05em',
              }}>
              {link}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
