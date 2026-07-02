// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vamos66.cz',
  // Obrázky z původního webu (CDN Webnode) povolíme jako vzdálené zdroje.
  image: {
    domains: ['842c9edb4e.clvaw-cdnwnd.com', 'duyn491kcolsw.cloudfront.net'],
  },
});
