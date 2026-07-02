# VAMOS 66 — nový web (prototyp)

Nový web spolku **VAMOS 66** postavený na technologii [Astro](https://astro.build).
Cílem je rychlý, přehledný a moderní web, který nahradí stávající řešení na Webnode
a výrazně sníží roční náklady.

> **Stav:** prototyp / nástřel k ukázce ve spolku. Obsah vychází z původního webu,
> struktura je zjednodušená. CMS (TinaCMS) je připravený, ale zatím nezapnutý.

---

## Proč Astro + statický web

- **Rychlost:** web se vygeneruje do čistých HTML souborů, načítá se okamžitě.
- **Nízká cena:** statické soubory uhostí váš hosting za ~400 Kč/rok (10 GB),
  nebo i zdarma (Cloudflare Pages / Netlify). Místo ~4000 Kč/rok za Webnode.
- **Přehlednost:** jednoduchá struktura, velké čitelné písmo (vhodné i pro seniory).
- **Snadná správa obsahu:** texty a články jsou v souborech Markdown,
  později přes TinaCMS i přes pohodlné formuláře v prohlížeči.

---

## Jak spustit na svém počítači

Potřebujete [Node.js](https://nodejs.org) (verze 18+).

```bash
npm install      # jednorázově nainstaluje závislosti
npm run dev      # spustí web na http://localhost:4321
```

Pro vytvoření finálních souborů k nahrání na hosting:

```bash
npm run build    # výsledek se vytvoří do složky dist/
npm run preview  # náhled hotového buildu
```

---

## Struktura projektu

```
src/
  pages/            – jednotlivé stránky webu (.astro)
  layouts/          – společná kostra stránky (hlavička, patička)
  components/       – znovupoužitelné prvky (karty, ikony, hero…)
  content/          – OBSAH webu (zde se edituje text):
    projekty/       – 7 projektů spolku
    clanky/         – články a aktuality
    rada/           – členové rady spolku
    partneri/       – partneři a podporovatelé
  config/site.ts    – kontakty, navigace, odkazy (na jednom místě)
  styles/global.css – barvy a vzhled webu
public/             – obrázky, favicon a statické soubory
tina/config.ts      – připravená konfigurace CMS
```

### Jak upravit obsah už teď (bez CMS)

Každý článek je jeden soubor `.md` ve složce `src/content/clanky/`. Nahoře je
„hlavička" (titulek, datum, obrázek), pod ní text. Příklad:

```markdown
---
title: "Název článku"
date: 2025-06-01
category: "setkavani-legend"
cover: "/images/foto.jpg"
perex: "Krátký úvod, který se zobrazí v náhledu."
---

Tady je samotný text článku…
```

Nový článek = nový soubor. Smazání souboru = smazání článku.

---

## Obrázky

V prototypu se fotky načítají přímo ze stávajícího (Webnode) webu, aby byl náhled
rychle k vidění. **Před ostrým spuštěním** je stáhneme a uložíme do `public/images/`,
aby web nezávisel na starém webu a byl plně přenositelný.

---

## Co ještě chybí / další kroky

1. **Stáhnout fotky** ze starého webu do `public/images/` (galerie, loga partnerů).
2. **Doplnit plné texty** delších článků (zatím jsou perexy + ukázkový obsah).
3. **Zapnout TinaCMS** pro pohodlnou správu obsahu — návod je v `tina/config.ts`.
4. **Funkční kontaktní formulář** (např. zdarma přes Formspree nebo Cloudflare).
5. **Nasadit web** a nasměrovat doménu `vamos66.cz`.

### Nasazení zdarma (doporučeno)

1. Nahrát projekt na GitHub.
2. Na [Cloudflare Pages](https://pages.cloudflare.com) nebo
   [Netlify](https://netlify.com) propojit repozitář — sestavení proběhne automaticky
   (příkaz `npm run build`, výstup `dist`).
3. Nasměrovat doménu `vamos66.cz`. Hotovo.

Alternativa: vygenerovaný obsah složky `dist/` lze nahrát i na váš webhosting
přes FTP.

---

## Barvy a design

- Zelená `#0e7c66` — hlavní značková barva (svěží, sportovní)
- Oranžová `#f4862b` — akcent a tlačítka
- Tmavá `#16211f` — text

Vše je na jednom místě v `src/styles/global.css` (sekce `:root`).
