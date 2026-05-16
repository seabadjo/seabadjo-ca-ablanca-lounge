import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', date: '', message: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app, POST to your backend here
    setSent(true)
  }

  const mapsUrl = 'https://maps.google.com/?q=21+Bp+21+23+Rue+C23+Abidjan'

  return (
    <section id="contact" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--deep)',
      borderTop: '1px solid rgba(201,168,76,0.1)',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem',
          }}>
            Nous trouver
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300, color: 'var(--text-light)',
          }}>
            Contact & Réservation
          </h2>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
        }}>
          {/* Info column */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              {[
                { icon: '📍', label: 'Adresse', value: '21 Bp 21, 23 Rue C23', sub: 'Abidjan, Côte d\'Ivoire', href: mapsUrl },
                { icon: '📞', label: 'Téléphone', value: '01 61 32 6092', href: 'tel:+2250161326092' },
                { icon: '🗺', label: 'Code Maps', value: '82V2+H7 Abidjan', href: mapsUrl },
              ].map(({ icon, label, value, sub, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', gap: '1.25rem', padding: '1.25rem 0',
                    borderBottom: '1px solid rgba(201,168,76,0.08)',
                    transition: 'color 0.2s', color: 'inherit',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'inherit')}
                >
                  <span style={{ fontSize: '1.25rem', width: '2rem', textAlign: 'center' }}>{icon}</span>
                  <div>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.25rem' }}>
                      {label}
                    </div>
                    <div style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '0.95rem' }}>{value}</div>
                    {sub && <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{sub}</div>}
                  </div>
                </a>
              ))}
            </div>

            <div style={{
              padding: '1.25rem 1.5rem',
              background: 'var(--dark-mid)',
              border: '1px solid rgba(201,168,76,0.1)',
              borderRadius: '2px',
            }}>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.75rem' }}>
                Services disponibles
              </div>
              {['Repas sur place', 'Service Drive', 'Livraison sans contact'].map(s => (
                <div key={s} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.4rem 0',
                  fontSize: '0.9rem', color: 'var(--text-mid)',
                }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem' }}>◆</span>
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Reservation form */}
          <div>
            <div style={{
              padding: '2rem',
              background: 'var(--dark-mid)',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: '2px',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 300,
                color: 'var(--text-light)', marginBottom: '1.5rem',
              }}>
                Faire une réservation
              </h3>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--gold)' }}>
                    Merci !
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginTop: '0.5rem' }}>
                    Nous vous contacterons très bientôt.
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    { name: 'name', placeholder: 'Votre nom', type: 'text' },
                    { name: 'phone', placeholder: 'Votre téléphone', type: 'tel' },
                    { name: 'date', placeholder: '', type: 'date' },
                  ].map(({ name, placeholder, type }) => (
                    <input key={name}
                      type={type} name={name} placeholder={placeholder}
                      value={form[name as keyof typeof form]}
                      onChange={handleChange}
                      style={{
                        width: '100%', padding: '0.85rem 1rem',
                        background: 'var(--dark)',
                        border: '1px solid rgba(201,168,76,0.15)',
                        color: 'var(--text-light)',
                        fontFamily: 'var(--font-body)', fontWeight: 300,
                        fontSize: '0.9rem', borderRadius: '1px',
                        outline: 'none',
                        colorScheme: 'dark',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                      onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.15)')}
                    />
                  ))}
                  <textarea
                    name="message" placeholder="Message ou demande particulière..."
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    style={{
                      width: '100%', padding: '0.85rem 1rem',
                      background: 'var(--dark)',
                      border: '1px solid rgba(201,168,76,0.15)',
                      color: 'var(--text-light)',
                      fontFamily: 'var(--font-body)', fontWeight: 300,
                      fontSize: '0.9rem', borderRadius: '1px',
                      resize: 'vertical', outline: 'none',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'rgba(201,168,76,0.5)')}
                    onBlur={e => (e.target.style.borderColor = 'rgba(201,168,76,0.15)')}
                  />
                  <button
                    onClick={handleSubmit}
                    style={{
                      padding: '0.9rem',
                      background: 'var(--gold)',
                      color: 'var(--deep)',
                      fontFamily: 'var(--font-body)', fontWeight: 500,
                      fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase',
                      borderRadius: '1px', border: 'none',
                      cursor: 'pointer', transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-light)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
                  >
                    Envoyer la réservation
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
