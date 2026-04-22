/**
 * ============================================================
 *  CONFIGURATION DU SITE — à modifier pour chaque nouveau site
 * ============================================================
 */
const config = {
  // Identité
  name: 'BuddyPad',
  url: 'https://buddypad.fr',
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

  // Catégories du blog (exactement 5 recommandé)
  categories: ['Gaming', 'Bureautique', 'Ergonomie', 'Guides', 'Setup'],

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

  // Boutique Snipcart (laisser publicKey vide '' pour désactiver la boutique)
  shop: {
    enabled: true,
    publicKey: '',
    currency: 'EUR',
  },
};

export default config;
