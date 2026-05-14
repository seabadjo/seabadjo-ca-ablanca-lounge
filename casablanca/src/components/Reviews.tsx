import React from 'react'

const reviews = [
  {
    name: 'Virtuoz Virtuoz',
    badge: 'Client',
    stars: 5,
    date: 'Il y a 2 ans',
    text: 'Accueil très chaleureux du personnel, bonne bouffe et surtout une bonne ambiance conviviale. Un endroit où on revient avec plaisir !',
    photos: 7,
  },
  {
    name: 'Mathe Akpo',
    badge: 'Local Guide',
    stars: 4,
    date: 'Il y a 2 ans',
    text: 'Un bar lounge agréable à Abidjan. Cadre sympa, personnel accueillant. Je recommande pour une soirée détendue entre amis.',
    photos: 0,
  },
]

function Stars({ n }: { n: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= n ? 'var(--gold)' : 'var(--dark-surface)', fontSize: '1rem' }}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="avis" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--dark-mid)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem',
          }}>
            Ce qu'ils disent
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300, color: 'var(--text-light)',
          }}>
            Avis de nos clients
          </h2>
          {/* Rating summary */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1rem',
            marginTop: '1.5rem', padding: '1rem 2rem',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '2px',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 300,
              color: 'var(--gold)', lineHeight: 1,
            }}>4.5</div>
            <div>
              <Stars n={4} />
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
                Basé sur 2 avis Google
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {reviews.map(({ name, badge, stars, date, text, photos }) => (
            <div key={name} style={{
              padding: '2rem',
              background: 'var(--dark)',
              border: '1px solid rgba(201,168,76,0.1)',
              borderRadius: '2px',
              transition: 'border-color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.1)')}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  background: 'var(--dark-surface)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--gold)',
                }}>
                  {name[0]}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)', fontWeight: 500,
                    fontSize: '0.95rem', color: 'var(--text-light)',
                  }}>{name}</div>
                  <div style={{
                    fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.1em',
                  }}>{badge}</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <Stars n={stars} />
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{date}</span>
              </div>

              <p style={{
                fontFamily: 'var(--font-body)', fontWeight: 300,
                fontSize: '0.95rem', color: 'var(--text-mid)', lineHeight: 1.8,
                fontStyle: 'italic',
              }}>
                "{text}"
              </p>

              {photos > 0 && (
                <div style={{
                  marginTop: '1rem', fontSize: '0.75rem', color: 'var(--muted)',
                  letterSpacing: '0.1em',
                }}>
                  📷 {photos} photos partagées
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://g.page/r/casablanca-lounge-abidjan/review"
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block', padding: '0.75rem 2rem',
              border: '1px solid rgba(201,168,76,0.3)',
              color: 'var(--text-mid)',
              fontFamily: 'var(--font-body)', fontSize: '0.8rem',
              letterSpacing: '0.15em', textTransform: 'uppercase',
              borderRadius: '1px',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)'; e.currentTarget.style.color = 'var(--text-mid)' }}
          >
            Laisser un avis Google
          </a>
        </div>
      </div>
    </section>
  )
}
