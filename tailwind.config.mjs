import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        /**
         * Dark gaming palette.
         * Noms gardés identiques à yoga-malin pour faciliter la migration
         * mais les valeurs sont remappées pour un thème sombre.
         *
         *  dark        = bg principale du site (le plus sombre)
         *  panel       = cartes (legèrement plus clair que dark)
         *  teal        = bg des sections "feature/hero" (contraste avec dark)
         *  beige       = bg subtil / tag / border
         *  cream       = texte clair (toujours clair, sur fond sombre)
         *  terracotta  = accent principal (violet gaming)
         *  sage        = accent secondaire (cyan/émeraude)
         */
        dark:       '#0A0A0F',
        panel:      '#14141C',
        teal:       '#1A1A26',
        beige:      '#22222E',
        cream:      '#F4F4F7',
        terracotta: '#A855F7',
        sage:       '#06B6D4',
      },
      fontFamily: {
        display: ['Ciguatera', 'Georgia', 'serif'],
        script: ['Brittany Signature', 'Dancing Script', 'cursive'],
        body: ['Dosis', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
