import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{
      background: 'var(--dark)',
      borderTop: '1px solid rgba(201,168,76,0.1)',
      padding: '2.5rem clamp(1.5rem, 6vw, 6rem)',
    }}>
      <div style={{
        maxWidth: '1000px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '1.2rem',
            color: 'var(--gold)', letterSpacing: '0.08em',
          }}>
            CASABLANCA LOUNGE BAR
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
            21 Bp 21, 23 Rue C23 · Abidjan
          </div>
        </div>

        <div style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
          © {year} · Tous droits réservés
        </div>
      </div>
    </footer>
  )
}
