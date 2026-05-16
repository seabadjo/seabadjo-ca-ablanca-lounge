import React from 'react'

const features = [
  { icon: '🍽', title: 'Repas sur place', desc: 'Savourez nos plats dans une ambiance feutrée et chaleureuse.' },
  { icon: '🚗', title: 'Service Drive', desc: 'Commandez et récupérez sans quitter votre véhicule.' },
  { icon: '📦', title: 'Livraison', desc: 'Livraison sans contact directement chez vous.' },
  { icon: '♀', title: 'Géré par une femme', desc: 'Une vision féminine de l\'hospitalité et de l\'art de recevoir.' },
]

export default function About() {
  return (
    <section id="ambiance" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--dark)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Side ornament */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '1px',
        background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          {/* Left: text */}
          <div>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem',
            }}>
              Notre histoire
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300, lineHeight: 1.15,
              color: 'var(--text-light)', marginBottom: '1.5rem',
            }}>
              Un lieu où l'on se sent<br/>
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>chez soi</em>
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 300,
              fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9,
              marginBottom: '1.5rem',
            }}>
              Au cœur d'Abidjan, le Casablanca Lounge Bar vous accueille dans une atmosphère 
              chaleureuse et décontractée. Nos hôtes vous reçoivent avec le sourire, 
              nos cuisines préparent des plats généreux, et la bonne ambiance fait le reste.
            </p>
            <p style={{
              fontFamily: 'var(--font-body)', fontWeight: 300,
              fontSize: '1rem', color: 'var(--text-mid)', lineHeight: 1.9,
            }}>
              Un restaurant et bar convivial, où chaque visite devient un souvenir.
            </p>

            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[['4.5', 'Note Google'], ['2', 'Avis vérifiés'], ['3', 'Services']].map(([num, label]) => (
                <div key={label}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 400,
                    color: 'var(--gold)', lineHeight: 1,
                  }}>{num}</div>
                  <div style={{
                    fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'var(--muted)', marginTop: '0.25rem',
                  }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: feature cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {features.map(({ icon, title, desc }) => (
              <div key={title} style={{
                display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                padding: '1.25rem 1.5rem',
                background: 'var(--dark-mid)',
                border: '1px solid rgba(201,168,76,0.1)',
                borderRadius: '2px',
                transition: 'border-color 0.3s, background 0.3s',
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.35)'
                  el.style.background = 'var(--dark-surface)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.1)'
                  el.style.background = 'var(--dark-mid)'
                }}
              >
                <div style={{
                  fontSize: '1.5rem', width: '2.5rem', height: '2.5rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 400,
                    fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '0.25rem',
                  }}>{title}</div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontWeight: 300,
                    fontSize: '0.9rem', color: 'var(--text-mid)',
                  }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
