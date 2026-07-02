// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.TINA_BRANCH || "main";
var imageWrapTemplate = {
  name: "ImageWrap",
  label: "Obr\xE1zek s obt\xE9k\xE1n\xEDm",
  fields: [
    { type: "image", name: "image", label: "Obr\xE1zek", required: true },
    { type: "string", name: "alt", label: "Popisek obr\xE1zku (pro \u010Dte\u010Dky a SEO)" },
    {
      type: "string",
      name: "align",
      label: "Zarovn\xE1n\xED",
      options: [
        { value: "left", label: "Vlevo (text obt\xE9k\xE1 vpravo)" },
        { value: "right", label: "Vpravo (text obt\xE9k\xE1 vlevo)" },
        { value: "center", label: "Na st\u0159ed (bez obt\xE9k\xE1n\xED)" }
      ]
    },
    { type: "string", name: "caption", label: "Titulek pod obr\xE1zkem (nepovinn\xE9)" }
  ]
};
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || "",
  // z app.tina.io
  token: process.env.TINA_TOKEN || "",
  // z app.tina.io
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "images", publicFolder: "public" } },
  schema: {
    collections: [
      {
        name: "projekty",
        label: "Projekty",
        path: "src/content/projekty",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "N\xE1zev", isTitle: true, required: true },
          { type: "number", name: "order", label: "Po\u0159ad\xED" },
          { type: "string", name: "perex", label: "Perex", ui: { component: "textarea" } },
          { type: "image", name: "cover", label: "\xDAvodn\xED obr\xE1zek" },
          { type: "string", name: "icon", label: "Ikona (medal, users, rocket, compass, trophy, music, mountain, star)" },
          { type: "boolean", name: "showOnHome", label: "Zobrazit na \xFAvodn\xED str\xE1nce" },
          { type: "rich-text", name: "body", label: "Text", isBody: true, templates: [imageWrapTemplate] }
        ]
      },
      {
        name: "clanky",
        label: "\u010Cl\xE1nky / Aktuality",
        path: "src/content/clanky",
        format: "mdx",
        fields: [
          { type: "string", name: "title", label: "Titulek", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Datum", required: true },
          { type: "string", name: "category", label: "Projekt / kategorie" },
          { type: "string", name: "perex", label: "Perex", ui: { component: "textarea" } },
          { type: "image", name: "cover", label: "Obr\xE1zek" },
          { type: "string", name: "source", label: "Odkaz na zdroj" },
          { type: "rich-text", name: "body", label: "Text", isBody: true, templates: [imageWrapTemplate] }
        ]
      },
      {
        name: "rada",
        label: "Rada spolku",
        path: "src/content/rada",
        format: "md",
        fields: [
          { type: "string", name: "name", label: "Jm\xE9no", isTitle: true, required: true },
          { type: "string", name: "role", label: "Funkce" },
          { type: "number", name: "order", label: "Po\u0159ad\xED" },
          { type: "image", name: "photo", label: "Fotografie" },
          { type: "rich-text", name: "body", label: "Medailonek", isBody: true }
        ]
      },
      {
        name: "partneri",
        label: "Partne\u0159i",
        path: "src/content/partneri",
        format: "md",
        fields: [
          { type: "string", name: "name", label: "N\xE1zev", isTitle: true, required: true },
          { type: "number", name: "order", label: "Po\u0159ad\xED" },
          { type: "string", name: "url", label: "Webov\xE1 adresa" },
          { type: "image", name: "logo", label: "Logo" },
          { type: "boolean", name: "featured", label: "Hlavn\xED partner (s textem)" },
          { type: "rich-text", name: "body", label: "Popis", isBody: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
