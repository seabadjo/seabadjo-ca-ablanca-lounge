import React, { useState } from 'react'

type Category = 'Boissons' | 'Plats' | 'Snacks'

const menuItems: Record<Category, { name: string; price: string; desc: string }[]> = {
  Boissons: [
    { name: 'Cocktail Casablanca', price: '3 500 F', desc: 'Notre signature – rhum, jus de mangue, citron vert, menthe fraîche' },
    { name: 'Mojito Tropical', price: '3 000 F', desc: 'Citron vert, menthe, soda, sirop de canne' },
    { name: 'Jus de Bissap', price: '1 500 F', desc: 'Hibiscus frais, gingembre, sucre de canne' },
    { name: 'Jus de Gingembre', price: '1 500 F', desc: 'Gingembre frais pressé, citron, miel' },
    { name: 'Bière Locale', price: '1 200 F', desc: 'Flag, Solibra – fraîche à souhait' },
    { name: 'Soft Drinks', price: '800 F', desc: 'Coca, Fanta, Sprite, eau minérale' },
  ],
  Plats: [
    { name: 'Attieke Poisson', price: '4 500 F', desc: 'Attieké maison, poisson braisé, oignons, piment selon votre goût' },
    { name: 'Riz aux Légumes', price: '3 500 F', desc: 'Riz parfumé, légumes frais du marché, sauce tomate maison' },
    { name: 'Grillades Mixtes', price: '6 500 F', desc: 'Assortiment de viandes grillées, sauce pimentée, plantain' },
    { name: 'Alloco Poulet', price: '3 500 F', desc: 'Banane plantain frite, poulet braisé mariné, sauce oignon' },
    { name: 'Foutou Sauce Graine', price: '4 000 F', desc: 'Foutou igname ou banane, sauce graine traditionnelle au choix' },
    { name: 'Garba Spécial', price: '2 500 F', desc: 'Thon, attiéké, oignons – la street food ivoirienne élevée' },
  ],
  Snacks: [
    { name: 'Brochettes Bœuf', price: '2 500 F', desc: 'Bœuf mariné aux épices maison, sauce arachide' },
    { name: 'Ailes de Poulet', price: '3 000 F', desc: '6 ailes grillées, sauce BBQ ou pimentée' },
    { name: 'Frites Maison', price: '1 500 F', desc: 'Pommes de terre fraîches, ketchup ou mayo' },
    { name: 'Kedjénou de Poulet', price: '4 500 F', desc: 'Mijoté lentement dans des épices ivoiriennes' },
  ],
}

export default function Menu() {
  const [active, setActive] = useState<Category>('Plats')

  return (
    <section id="menu" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 6rem)',
      background: 'var(--deep)',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem',
          }}>
            Ce que nous servons
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300, color: 'var(--text-light)',
          }}>
            Notre Carte
          </h2>
          <div style={{ width: '60px', height: '1px', background: 'var(--gold)', margin: '1.5rem auto 0' }} />
        </div>

        {/* Category tabs */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '0',
          marginBottom: '3rem', borderBottom: '1px solid rgba(201,168,76,0.15)',
        }}>
          {(Object.keys(menuItems) as Category[]).map(cat => (
            <button key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '0.75rem 2rem',
                fontFamily: 'var(--font-body)', fontWeight: active === cat ? 500 : 300,
                fontSize: '0.85rem', letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active === cat ? 'var(--gold)' : 'var(--muted)',
                borderBottom: active === cat ? '1px solid var(--gold)' : '1px solid transparent',
                marginBottom: '-1px',
                transition: 'color 0.2s',
                background: 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu items grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.1)',
        }}>
          {menuItems[active].map(({ name, price, desc }) => (
            <div key={name} style={{
              padding: '1.5rem 1.75rem',
              background: 'var(--dark)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--dark-mid)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--dark)')}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '1.1rem',
                  color: 'var(--text-light)',
                }}>{name}</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '0.85rem',
                  color: 'var(--gold)', whiteSpace: 'nowrap', marginLeft: '1rem',
                }}>{price}</div>
              </div>
              <div style={{
                fontFamily: 'var(--font-body)', fontWeight: 300,
                fontSize: '0.85rem', color: 'var(--text-mid)', lineHeight: 1.6,
              }}>{desc}</div>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center', marginTop: '2rem',
          fontFamily: 'var(--font-body)', fontSize: '0.8rem',
          color: 'var(--muted)', fontStyle: 'italic',
        }}>
          Prix indicatifs · Menu susceptible de changer · Demandez nos suggestions du jour
        </p>
      </div>
    </section>
  )
}
