/**
 * TinaCMS konfigurace (připraveno pro budoucí napojení).
 *
 * TinaCMS je zdarma (self-hosted i v cloud free tieru) a ukládá obsah přímo
 * do Markdown souborů v tomto projektu (složka src/content) – stejných, které
 * web už používá. Editor obsahu tak upravuje web přes přehledné formuláře,
 * aniž by sahal do kódu.
 *
 * Jak ho zapnout (až budete chtít):
 *   1) npm install tinacms @tinacms/cli
 *   2) do package.json přidat skripty:
 *        "dev": "tinacms dev -c \"astro dev\"",
 *        "build": "tinacms build && astro build"
 *   3) na https://app.tina.io založit projekt (zdarma) a doplnit
 *        clientId a token (přes proměnné prostředí).
 *   4) npm run dev  →  administrace poběží na /admin
 */
import { defineConfig } from 'tinacms';

const branch = process.env.TINA_BRANCH || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || '', // z app.tina.io
  token: process.env.TINA_TOKEN || '',         // z app.tina.io
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'images', publicFolder: 'public' } },
  schema: {
    collections: [
      {
        name: 'projekty',
        label: 'Projekty',
        path: 'src/content/projekty',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Název', isTitle: true, required: true },
          { type: 'number', name: 'order', label: 'Pořadí' },
          { type: 'string', name: 'perex', label: 'Perex', ui: { component: 'textarea' } },
          { type: 'image', name: 'cover', label: 'Úvodní obrázek' },
          { type: 'string', name: 'icon', label: 'Ikona (medal, users, rocket, compass, trophy, music, mountain, star)' },
          { type: 'boolean', name: 'showOnHome', label: 'Zobrazit na úvodní stránce' },
          { type: 'rich-text', name: 'body', label: 'Text', isBody: true },
        ],
      },
      {
        name: 'clanky',
        label: 'Články / Aktuality',
        path: 'src/content/clanky',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Titulek', isTitle: true, required: true },
          { type: 'datetime', name: 'date', label: 'Datum', required: true },
          { type: 'string', name: 'category', label: 'Projekt / kategorie' },
          { type: 'string', name: 'perex', label: 'Perex', ui: { component: 'textarea' } },
          { type: 'image', name: 'cover', label: 'Obrázek' },
          { type: 'string', name: 'source', label: 'Odkaz na zdroj' },
          { type: 'rich-text', name: 'body', label: 'Text', isBody: true },
        ],
      },
      {
        name: 'rada',
        label: 'Rada spolku',
        path: 'src/content/rada',
        format: 'md',
        fields: [
          { type: 'string', name: 'name', label: 'Jméno', isTitle: true, required: true },
          { type: 'string', name: 'role', label: 'Funkce' },
          { type: 'number', name: 'order', label: 'Pořadí' },
          { type: 'image', name: 'photo', label: 'Fotografie' },
          { type: 'rich-text', name: 'body', label: 'Medailonek', isBody: true },
        ],
      },
      {
        name: 'partneri',
        label: 'Partneři',
        path: 'src/content/partneri',
        format: 'md',
        fields: [
          { type: 'string', name: 'name', label: 'Název', isTitle: true, required: true },
          { type: 'number', name: 'order', label: 'Pořadí' },
          { type: 'string', name: 'url', label: 'Webová adresa' },
          { type: 'image', name: 'logo', label: 'Logo' },
          { type: 'boolean', name: 'featured', label: 'Hlavní partner (s textem)' },
          { type: 'rich-text', name: 'body', label: 'Popis', isBody: true },
        ],
      },
    ],
  },
});
