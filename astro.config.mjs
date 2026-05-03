import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import siteConfig from './site.config.mjs';
import rehypeImageOptim from './src/lib/rehype-image-optim.mjs';

export default defineConfig({
  site: siteConfig.url,
  // ─── Internationalisation ────────────────────────────────────────
  // Routing en sous-dossier : la locale par défaut (fr) reste à la racine
  // pour préserver les URLs SEO existantes ; les autres prennent /<lang>/.
  // Tant que les traductions ne sont pas prêtes, on garde uniquement `fr`
  // dans `locales` (les pages /en/* et /de/* ne sont donc pas générées).
  i18n: {
    defaultLocale: siteConfig.i18n.defaultLocale,
    locales: siteConfig.i18n.locales,
    routing: {
      prefixDefaultLocale: false,
    },
    // fallback est ajouté dynamiquement uniquement si en/de sont activés.
    // Astro refuse les entrées fallback qui ne sont pas listées dans locales.
    ...(siteConfig.i18n.locales.includes('en') || siteConfig.i18n.locales.includes('de')
      ? { fallback: Object.fromEntries(
          siteConfig.i18n.locales
            .filter((l) => l !== siteConfig.i18n.defaultLocale)
            .map((l) => [l, siteConfig.i18n.defaultLocale])
        ) }
      : {}
    ),
  },
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // Exclut les produits internes/test qui ne doivent pas être indexés
      // (slug commençant par `produit-test-` ou `test-`).
      filter: (page) => !/\/product\/(produit-)?test[-/]/.test(page),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeImageOptim],
  },
  prefetch: {
    // hover (au lieu de viewport) : prefetch uniquement sur survol/focus,
    // jamais automatiquement à l'apparition dans le viewport. Évite la
    // saturation réseau qui empêchait le load event de se compléter
    // (WebPageTest "Page Load Timeout" + Lighthouse "NO_LCP").
    // L'UX reste excellente : prefetch démarre dès le hover (~80ms avant clic).
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  compressHTML: true,
});
