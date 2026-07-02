/**
 * TinaCMS konfigurace.
 *
 * TinaCMS je zdarma (self-hosted i v cloud free tieru pro 2 editory) a ukládá
 * obsah přímo do Markdown/MDX souborů v tomto projektu (složka src/content) –
 * stejných, které web už používá. Editor obsahu tak upravuje web přes
 * přehledné formuláře na /admin, aniž by sahal do kódu.
 *
 * Jde o základní (ne "vizuální/kontextovní") režim editace — žádné klikání
 * přímo na živou stránku, žádný SSR adaptér. Web tak zůstává čistě statický
 * a nasazuje se stejně na Vercel i Cloudflare jako doteď.
 *
 * Kolekce `clanky` a `projekty` používají formát `mdx`, aby šlo do textu
 * vkládat vlastní blok "Obrázek s obtékáním" (viz šablona `ImageWrap` níže
 * a komponenta src/components/ImageWrap.astro).
 *
 * Jak ho zapnout:
 *   1) npm install (nainstaluje tinacms, @tinacms/cli, @astrojs/mdx)
 *   2) na https://app.tina.io založit projekt (zdarma) a doplnit
 *        TINA_CLIENT_ID a TINA_TOKEN (přes proměnné prostředí / .env)
 *   3) npm run dev  →  administrace poběží na /admin/index.html
 */
import { defineConfig, type Template } from 'tinacms';

const branch = process.env.TINA_BRANCH || 'main';

// Vlastní blok pro rich-text pole "Text" — editor ho vloží kamkoliv do
// článku/projektu přes tlačítko "Insert" a obrázek pak v textu obtéká.
// Vykresluje ho src/components/ImageWrap.astro (napojeno v [slug].astro
// přes <Content components={{ ImageWrap }} />). Jméno šablony je záměrně
// s velkým počátečním písmenem — MDX takové značky bezpečně dohledává
// přes "components" mapu (tzv. shortcode), zatímco malé počáteční písmeno
// se v testu chovalo nespolehlivě a obrázek se nezobrazoval.
const imageWrapTemplate: Template = {
  name: 'ImageWrap',
  label: 'Obrázek s obtékáním',
  fields: [
    { type: 'image', name: 'image', label: 'Obrázek', required: true },
    { type: 'string', name: 'alt', label: 'Popisek obrázku (pro čtečky a SEO)' },
    {
      type: 'string',
      name: 'align',
      label: 'Zarovnání',
      options: [
        { value: 'left', label: 'Vlevo (text obtéká vpravo)' },
        { value: 'right', label: 'Vpravo (text obtéká vlevo)' },
        { value: 'center', label: 'Na střed (bez obtékání)' },
      ],
    },
    { type: 'string', name: 'caption', label: 'Titulek pod obrázkem (nepovinné)' },
  ],
};

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
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Název', isTitle: true, required: true },
          { type: 'number', name: 'order', label: 'Pořadí' },
          { type: 'string', name: 'perex', label: 'Perex', ui: { component: 'textarea' } },
          { type: 'image', name: 'cover', label: 'Úvodní obrázek' },
          { type: 'string', name: 'icon', label: 'Ikona (medal, users, rocket, compass, trophy, music, mountain, star)' },
          { type: 'boolean', name: 'showOnHome', label: 'Zobrazit na úvodní stránce' },
          { type: 'rich-text', name: 'body', label: 'Text', isBody: true, templates: [imageWrapTemplate] },
        ],
      },
      {
        name: 'clanky',
        label: 'Články / Aktuality',
        path: 'src/content/clanky',
        format: 'mdx',
        fields: [
          { type: 'string', name: 'title', label: 'Titulek', isTitle: true, required: true },
          { type: 'datetime', name: 'date', label: 'Datum', required: true },
          { type: 'string', name: 'category', label: 'Projekt / kategorie' },
          { type: 'string', name: 'perex', label: 'Perex', ui: { component: 'textarea' } },
          { type: 'image', name: 'cover', label: 'Obrázek' },
          { type: 'string', name: 'source', label: 'Odkaz na zdroj' },
          { type: 'rich-text', name: 'body', label: 'Text', isBody: true, templates: [imageWrapTemplate] },
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
