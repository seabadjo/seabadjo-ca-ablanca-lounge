# Casablanca Lounge Bar — Site Web

Site web officiel du **Casablanca Lounge Bar**, Abidjan.

## Stack technique

- **React 18** + **TypeScript**
- **Vite** (build tool ultra-rapide)
- CSS-in-JS inline (zéro dépendance de style)
- Google Fonts : Cormorant Garamond + Jost

## Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

## Structure du projet

```
casablanca-lounge/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation fixe avec menu mobile
│   │   ├── Hero.tsx        # Section d'accueil (plein écran)
│   │   ├── About.tsx       # Présentation et services
│   │   ├── Menu.tsx        # Carte avec onglets catégories
│   │   ├── Reviews.tsx     # Avis clients Google
│   │   ├── Contact.tsx     # Formulaire de réservation + adresse
│   │   └── Footer.tsx      # Pied de page
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Informations du restaurant

- **Adresse :** 21 Bp 21, 23 Rue C23, Abidjan
- **Téléphone :** 01 61 32 6092
- **Code Maps :** 82V2+H7 Abidjan
- **Note Google :** 4.5/5 (2 avis)
- **Services :** Repas sur place · Drive · Livraison sans contact
- Géré par une femme

## Personnalisation

Pour modifier le menu, éditez le fichier `src/components/Menu.tsx` et mettez à jour le tableau `menuItems`.

Pour changer les couleurs, modifiez les variables CSS dans `src/index.css`.
