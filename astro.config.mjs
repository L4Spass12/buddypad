import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import siteConfig from './site.config.mjs';
import rehypeImageOptim from './src/lib/rehype-image-optim.mjs';

export default defineConfig({
  site: siteConfig.url,
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
