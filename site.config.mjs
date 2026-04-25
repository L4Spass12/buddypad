/**
 * ============================================================
 *  CONFIGURATION DU SITE — à modifier pour chaque nouveau site
 * ============================================================
 */
const config = {
  // Identité
  name: 'BuddyPad',
  url: 'https://buddypad.com',
  // Logo : partie principale + partie colorée (accent)
  logoPrefix: 'Buddy',
  logoSuffix: 'Pad',
  description: "BuddyPad – Tapis de souris gaming et bureautique : guides, tests et équipement pour optimiser votre setup.",

  // Réseaux sociaux (laisser vide '' si inexistant)
  socials: {
    instagram: '',
    tiktok: '',
    youtube: '',
  },

  // Catégories du blog (doivent matcher exactement les catégories WordPress
  // pour que les URLs /category/<slug>/ correspondent au SEO existant)
  categories: ['Tapis de souris Gaming', "Guide d’achat & conseils", 'Bureau & Setup'],

  // Mapping explicite nom → slug WP (les règles de slugification WP ne sont
  // pas reproductibles avec une regex générique : "Guide d'achat" → "guide-achat")
  categorySlugs: {
    'Tapis de souris Gaming': 'tapis-de-souris-gaming',
    "Guide d’achat & conseils": 'guide-achat-conseils',
    'Bureau & Setup': 'bureau-setup',
  },

  // Génération d'articles IA
  article: {
    // Qui est ce site ? (utilisé dans le prompt Claude)
    context: "un site français spécialisé dans les tapis de souris gaming et bureautique, l'équipement de bureau et l'optimisation du setup PC",
    // Thématique principale des articles
    theme: "les tapis de souris (gaming, bureautique, XXL, RGB), l'ergonomie du poste de travail, les setups PC, les périphériques gaming et les conseils pour optimiser son bureau",
    // CTA de fin d'article
    cta: "Découvrir la sélection BuddyPad et trouver le tapis idéal pour votre setup",
    // Auteur affiché dans le frontmatter
    author: "Équipe BuddyPad",
    // Mot-clé ajouté aux recherches Unsplash pour cadrer les images
    unsplashContext: "gaming setup desk mousepad",
  },

  // Catégories produits WooCommerce (correspondent aux URLs /product-category/<slug>/)
  productCategories: [
    { slug: 'tapis-de-souris-buddypad-adventure', label: 'Tapis de souris Buddypad Adventure' },
    { slug: 'tapis-de-souris-fantasy',            label: 'Tapis de souris Fantasy' },
    { slug: 'tapis-de-souris-gaming',             label: 'Tapis de souris Gamer' },
    { slug: 'girl-boss',                          label: 'Tapis de souris Girl Boss' },
    { slug: 'tapis-de-souris-girly',              label: 'Tapis de souris Girly rose' },
    { slug: 'tapis-de-souris-kawaii',             label: 'Tapis de souris kawaii' },
    { slug: 'tapis-souris-led-rgb',               label: 'Tapis de souris LED / RGB' },
    { slug: 'tapis-souris-led-rgb-charge-sans-fil', label: 'Tapis de souris LED / RGB & Charge sans fil' },
    { slug: 'tapis-de-souris-manga-anime',        label: 'Tapis de souris Manga / Anime' },
    { slug: 'tapis-de-souris-minimaliste',        label: 'Tapis de souris Minimaliste' },
    { slug: 'tapis-de-souris-xxl',                label: 'Tapis de souris XXL' },
  ],

  // ─── Formulaires (Web3Forms) ─────────────────────────────────────
  // Service gratuit illimité pour envoyer les formulaires par email,
  // 100% côté client (pas de backend nécessaire).
  // 1. Crée un compte sur https://web3forms.com avec contact@buddypad.com
  // 2. Récupère ton "Access Key" et colle-la ici
  // 3. Les soumissions arrivent automatiquement sur l'email du compte
  forms: {
    web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // ← à remplacer
    contactEmail: 'contact@buddypad.com',      // affiché dans le subject
  },

  // Boutique — choix du provider de paiement :
  //   'atelier'  → widget Atelier (direct-buy, paiement 1 étape)
  //   'snipcart' → Snipcart (panier multi-étapes)
  //   ''         → désactivée
  shop: {
    enabled: true,
    provider: 'atelier',
    currency: 'EUR',
    // Snipcart key (utilisée seulement si provider === 'snipcart')
    snipcartPublicKey: 'MmEzOWY1N2YtNTY3Yi00NGRlLWJkY2EtOTYxNjg2YWZiYjY4NjM5MTIyODc4MDUwNjU5Mzkx',
  },
};

export default config;
