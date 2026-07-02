// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vamos66.cz',
  // Obrázky z původního webu (CDN Webnode) povolíme jako vzdálené zdroje.
  image: {
    domains: ['842c9edb4e.clvaw-cdnwnd.com', 'duyn491kcolsw.cloudfront.net'],
  },
  // MDX umožňuje v textu článků/projektů použít blok "Obrázek s obtékáním" z Tiny.
  // Web zůstává čistě statický (žádný SSR adaptér) — Tina admin běží jako
  // samostatná lokální administrace na /admin, ne jako živé klikací editování stránky.
  integrations: [mdx()],
});
