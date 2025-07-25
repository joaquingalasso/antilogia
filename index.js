// index.tsx
import * as React9 from "react";
import { createRoot } from "react-dom/client";

// components/App.tsx
import * as React8 from "react";

// data/stories.ts
var boaContent = [
  {
    type: "paragraph",
    html: "El siseo era una canci\xF3n de cuna de escamas y noche. La sent\xEDa enroscarse, un m\xFAsculo infinito y paciente que me med\xEDa el sue\xF1o."
  },
  {
    type: "blockquote",
    style: "thought",
    html: "No era miedo, era una certeza helada: <strong>su abrazo era el \xFAltimo hogar</strong>, la \xFAltima frontera antes del silencio."
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1588196749339-39572415f339?q=80&w=800",
    alt: "Una serpiente verde enrollada en una rama, mirando a la c\xE1mara.",
    caption: "Sus ojos, dos pozos de obsidiana, reflejaban una calma milenaria. No hab\xEDa maldad en ellos, solo un prop\xF3sito puro."
  },
  {
    type: "paragraph",
    html: "No hab\xEDa maldad en ellos, solo un prop\xF3sito puro, una ley natural tan antigua como las estrellas. Era el calor de mi cuerpo lo que la llamaba, una promesa de vida que ella ven\xEDa a reclamar con la delicadeza de un verdugo enamorado."
  },
  {
    type: "heading",
    level: 2,
    html: "El pacto silencioso"
  },
  {
    type: "paragraph",
    html: "Nunca hablamos, pero lo entend\xEDamos todo. Nuestro acuerdo era t\xE1cito, una simbiosis mortal. Se basaba en dos principios:"
  },
  {
    type: "list",
    style: "ordered",
    items: [
      "Yo le daba mi calor, mi respiraci\xF3n pausada, el latido de un coraz\xF3n que pronto se detendr\xEDa.",
      "Ella me ofrec\xEDa el fin del desvelo, la disoluci\xF3n de las angustias en un apret\xF3n final."
    ]
  },
  {
    type: "paragraph",
    html: "Era un intercambio justo, <em>po\xE9tico y brutal</em>."
  },
  {
    type: "paragraph",
    html: "A veces, en mitad de la noche, despertaba y la ve\xEDa mirarme. El patr\xF3n de su piel era un mapa de secretos ancestrales. Trazaba sus rombos con el dedo, sintiendo la vida fr\xEDa que conten\xEDa la m\xEDa."
  },
  {
    type: "dialogue",
    html: '"Pronto"',
    attribution: "...parec\xEDa decir su quietud. Y yo asent\xEDa, cerrando los ojos, volviendo a ese sue\xF1o del que sab\xEDa que, una noche, no despertar\xEDa."
  },
  {
    type: "ornament"
  }
];
var faroContent = [
  {
    type: "paragraph",
    html: "En el acantilado m\xE1s solitario, donde el viento hablaba en lenguas de sal y espuma, se erig\xEDa el faro. No era de piedra y luz, sino de <strong>ecos y memorias</strong>. Cada noche, su haz de luz no cortaba la oscuridad, sino que recog\xEDa los secretos que el oc\xE9ano susurraba a la costa."
  },
  {
    type: "video",
    provider: "youtube",
    src: "eX3u0IlBBO4",
    caption: "El sonido incesante de las olas contra las rocas."
  },
  {
    type: "paragraph",
    html: "El farero, un hombre sin nombre y con la mirada perdida en el horizonte, no manten\xEDa la l\xE1mpara encendida. Su trabajo era escuchar. Anotaba en un cuaderno gastado los lamentos del mar:"
  },
  {
    type: "list",
    style: "unordered",
    items: [
      "Las confesiones de los marineros ahogados.",
      "Los anhelos de las sirenas tristes.",
      "Las promesas rotas que las olas arrastraban hasta la orilla."
    ]
  },
  {
    type: "heading",
    level: 2,
    html: "La biblioteca del mar"
  },
  {
    type: "paragraph",
    html: 'Las paredes del faro estaban llenas de estos cuadernos. Eran la <a href="https://es.wikipedia.org/wiki/Biblioteca" target="_blank" rel="noopener noreferrer">biblioteca del mar</a>, un archivo de tristezas y <span data-tooltip="Sentimientos de anhelo por un futuro mejor.">esperanzas</span>.'
  },
  {
    type: "code",
    language: "javascript",
    code: `
function listenToTheSea(librarian) {
  const whispers = ocean.listen();
  if (whispers.length > 0) {
    librarian.archive(whispers);
  }
}
setInterval(() => listenToTheSea(farero), 1000 * 60 * 60);
    `,
    caption: "El c\xF3digo que reg\xEDa la biblioteca del mar."
  },
  {
    type: "paragraph",
    html: "Para quien quiera saber m\xE1s sobre la historia de estas estructuras, este recurso es invaluable:"
  },
  {
    type: "linkPreview",
    url: "https://es.wikipedia.org/wiki/Faro"
  },
  {
    type: "audio",
    src: "/audios/faro.mp3",
    title: "Susurros del Oc\xE9ano",
    caption: "Un lamento recogido en una noche de tormenta."
  },
  {
    type: "blockquote",
    style: "centered-quote",
    html: "Una noche, el mar guard\xF3 silencio."
  },
  {
    type: "paragraph",
    html: "El farero esper\xF3, pero solo el sonido de su propia respiraci\xF3n romp\xEDa la calma. Comprendi\xF3 que su labor hab\xEDa terminado. Escribi\xF3 su propia historia en la \xFAltima p\xE1gina del \xFAltimo cuaderno, cerr\xF3 la puerta del faro y camin\xF3 hacia las olas, para convertirse en un susurro m\xE1s en la colecci\xF3n."
  },
  {
    type: "ornament"
  },
  {
    type: "paragraph",
    html: "Cada final es tambi\xE9n un comienzo, marcado por un s\xEDmbolo."
  },
  {
    type: "ornament",
    variant: "character",
    value: "\u2619",
    caption: "Un separador de texto simple."
  },
  {
    type: "paragraph",
    html: "Y a veces, el s\xEDmbolo es una imagen, una forma con su propio significado."
  },
  {
    type: "ornament",
    variant: "svg",
    value: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    caption: "Un ornamento SVG, como un ojo que todo lo ve."
  }
];
var stories = [
  {
    id: "boa",
    title: "Dormir con la boa",
    date: "2025-07-23",
    tagline: "Un abrazo tibio y asfixiante. \xA1Qu\xE9 tierna!",
    color: { light: "#0b6d4f", dark: "#10a375" },
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0wLDE5MmE4OCw4OCwwLDEsMSw4OC04OEg4OC4xLDg4LjEsMCwwLDEsMTI4LDIxNlpNMTkyLDEyOGE2NCw2NCwwLDEsMS02NC02NEE2NC4wNyw2NC4wNywwLDAsMSwxOTIsMTI4Wm0tMTYsMGE0OCw0OCwwLDEsMC00OCw0OEE0OC4wNSw0OC4wNSwwLDAsMCwxNzYsMTI4Wm0tMzIsMGExNiwxNiwwLDEsMC0xNiwxNkExNiwxNiwwLDAsMCwxNDQsMTI4WiIvPjwvc3ZnPg==",
    ornament: { type: "ornament" },
    category: "Relato Corto",
    tags: ["Suspenso", "Psicol\xF3gico", "Animales"],
    content: boaContent
  },
  {
    id: "faro",
    title: "El faro de los susurros",
    date: "2024-11-12",
    tagline: "La luz que gu\xEDa es tambi\xE9n la que escucha.",
    color: { light: "#015c7e", dark: "#0090c8" },
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q2sb3IiPjxwYXRoIGQ9Ik0xMDQsMjE2aDQ4YTgsOCwwLDAsMSwwLDE2aC00OGE4LDgsMCwwLDEsMC0xNlptMTItNDBMg4OC4yLDQ4LjU2QTgsOCwwLDAsMSw5NiwzMmg2NGE4LDgsMCwwLDEsNy44LDE2LjU2TDE0MCwxNzZoLTI0Zm05OS41NC01Ny4yNi00OC0yNGE4LDgsMCwxLDAtNy4wOCwxNC41MkwyMDQuMjUsMTI4bC00NS43OSwyMi43NGE4LDgsMCwwLDAsNy4wOCwxNC41Mmw0OC0yNGE4LDgsMCwwLDAsMC0xNC41MlpNNDAuNDYsMTEwLjc0YTgsOCwwLDAsMC03LjA4LTEuMjZsLTQ4LDI0YTgsOCwwLDAsMCwwLDE0LjUybDQ4LDI0YTgsOCwwLDEsMCw3LjA4LTE0LjUyTDUxLjc1LDEyOGw0NS43OS0yMi43NEExOCw4LDAsMCwwLDQwLjQ2LDExMC43NFoiLz48L3N2Zz4=",
    ornament: { type: "ornament", variant: "svg", value: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
    category: "F\xE1bula",
    tags: ["Misterio", "Soledad", "Mar"],
    content: faroContent
  }
];

// contexts/LanguageContext.tsx
import * as React from "react";

// data/i18n.ts
var translations = {
  // General UI
  anthologyTitle: { es: "\u2619 Antilog\xEDa", en: "\u2619 Antilogy" },
  subtitle_1: { es: "Relatos breves desde el borde de la realidad.", en: "Short stories from the edge of reality." },
  subtitle_2: { es: "Donde lo cotidiano se vuelve extra\xF1o.", en: "Where the mundane becomes bizarre." },
  subtitle_3: { es: "Historias para leer antes de dormir.", en: "Stories to read before sleeping." },
  subtitle_4: { es: "Un susurro en la quietud de la noche.", en: "A whisper in the stillness of the night." },
  searchPlaceholder: { es: "Buscar...", en: "Search..." },
  backToAnthology: { es: "Volver a la antilog\xEDa", en: "Back to the antilogy" },
  noResults: { es: "No se encontraron historias que coincidan con tu b\xFAsqueda.", en: "No stories found matching your search." },
  comments: { es: "Comentarios", en: "Comments" },
  giscusComments: { es: "(Secci\xF3n de comentarios de Giscus se cargar\xEDa aqu\xED)", en: "(Giscus comments section would load here)" },
  // Toggles & Controls
  sortNewest: { es: "Ordenar por m\xE1s antiguos", en: "Sort by oldest" },
  sortOldest: { es: "Ordenar por m\xE1s recientes", en: "Sort by newest" },
  switchToListView: { es: "Cambiar a vista de lista", en: "Switch to list view" },
  switchToGridView: { es: "Cambiar a vista de mosaico", en: "Switch to grid view" },
  openFilters: { es: "Abrir filtros", en: "Open filters" },
  close: { es: "Cerrar filtros", en: "Close filters" },
  filter: { es: "Filtrar", en: "Filter" },
  changeToDarkMode: { es: "Cambiar a modo oscuro", en: "Switch to dark mode" },
  changeToLightMode: { es: "Cambiar a modo claro", en: "Switch to light mode" },
  play: { es: "Reproducir", en: "Play" },
  pause: { es: "Pausar", en: "Pause" },
  audioPlayerFor: { es: "Reproductor de audio para", en: "Audio player for" },
  // Story Details
  storyDetails: { es: "Detalles", en: "Details" },
  category: { es: "Categor\xEDa", en: "Category" },
  published: { es: "Edici\xF3n", en: "Edition" },
  author: { es: "Autor", en: "Author" },
  tags: { es: "Etiquetas \u2022", en: "Tags \u2022" },
  relatedStoriesTitle: { es: "Tambi\xE9n te puede interesar", en: "You might also like" },
  allCategories: { es: "Todas", en: "All" },
  categories: { es: "Categor\xEDas \u2022", en: "Categories \u2022" },
  // Sharing
  shareOnTwitter: { es: "Compartir en Twitter", en: "Share on Twitter" },
  shareOnFacebook: { es: "Compartir en Facebook", en: "Share on Facebook" },
  copyLink: { es: "Copiar enlace", en: "Copy link" },
  linkCopied: { es: "\xA1Enlace copiado al portapapeles!", en: "Link copied to clipboard!" },
  copyLinkError: { es: "Error al copiar el enlace.", en: "Error copying link." },
  shareMessage: { es: "Echa un vistazo a este relato: ", en: "Check out this story: " },
  // RSS
  rssFeed: { es: "Canal RSS", en: "RSS Feed" },
  subscribeToFeed: { es: "Suscribirse al Canal", en: "Subscribe to Feed" },
  // Footer
  authorName: { es: "@joaquingalasso", en: "@joaquingalasso" },
  authorBio: { es: "Autor de esta antilog\xEDa.", en: "Author of this antilogy." },
  copyright: { es: "Antilog\xEDa. Todos los derechos reservados.", en: "Anthology. All rights reserved." },
  // Data: Categories
  "Relato Corto": { es: "Relato Corto", en: "Short Story" },
  "F\xE1bula": { es: "F\xE1bula", en: "Fable" },
  // Data: Tags
  "Suspenso": { es: "Suspenso", en: "Suspense" },
  "Psicol\xF3gico": { es: "Psicol\xF3gico", en: "Psychological" },
  "Animales": { es: "Animales", en: "Animals" },
  "Misterio": { es: "Misterio", en: "Mystery" },
  "Soledad": { es: "Soledad", en: "Solitude" },
  "Mar": { es: "Mar", en: "Sea" }
};

// contexts/LanguageContext.tsx
import { jsx } from "react/jsx-runtime";
var { createContext, useState, useContext, useEffect } = React;
var LanguageContext = createContext(null);
var useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
var LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  useEffect(() => {
    const getLangFromHash = () => {
      const langMatch = window.location.hash.match(/#\/(es|en)/);
      return langMatch ? langMatch[1] : "es";
    };
    const handleHashChange = () => {
      setLanguage(getLangFromHash());
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    const storyMatch = window.location.hash.match(/story\/([^/]+)/);
    const storyId = storyMatch ? storyMatch[1] : null;
    let newHash = `#/${newLang}/`;
    if (storyId) {
      newHash += `story/${storyId}`;
    }
    window.location.hash = newHash;
  };
  const t = (key) => {
    const translation = translations[key];
    if (translation) {
      return translation[language] || key;
    }
    return key;
  };
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  const value = { language, toggleLanguage, t };
  return /* @__PURE__ */ jsx(LanguageContext.Provider, { value, children });
};

// components/StoryGallery.tsx
import * as React2 from "react";

// components/StoryCard.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var GalleryOrnament = ({ ornament }) => {
  const { variant = "default", value } = ornament;
  switch (variant) {
    case "character":
      return /* @__PURE__ */ jsx2(Fragment, { children: value });
    case "svg":
      return /* @__PURE__ */ jsx2("span", { className: "ornament-svg-wrapper", dangerouslySetInnerHTML: { __html: value || "" } });
    case "default":
    default:
      return /* @__PURE__ */ jsx2(Fragment, { children: "\u273E" });
  }
};
var StoryCard = ({ story, onSelect, theme }) => {
  const { t } = useLanguage();
  const storyColor = story.color[theme];
  const ornamentStyleForList = { color: storyColor };
  const cardStyle = {
    "--story-accent-color": storyColor,
    "--story-icon-url": `url("${story.icon}")`
  };
  const date = new Date(story.date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const formattedDate = `${day}-${month}-${year}`;
  return /* @__PURE__ */ jsxs("article", { className: "story-card", onClick: () => onSelect(story), style: cardStyle, children: [
    /* @__PURE__ */ jsx2("div", { className: "story-card-grid-ornament", "aria-hidden": "true", children: /* @__PURE__ */ jsx2(GalleryOrnament, { ornament: story.ornament }) }),
    /* @__PURE__ */ jsx2("div", { className: "story-card-icon", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxs("div", { className: "story-card-content", children: [
      /* @__PURE__ */ jsxs("div", { className: "story-card-text-wrapper", children: [
        /* @__PURE__ */ jsx2("div", { className: "story-card-tags", children: story.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsx2("span", { className: "story-card-tag", children: t(tag) }, tag)) }),
        /* @__PURE__ */ jsxs("div", { className: "story-card-title-wrapper", children: [
          /* @__PURE__ */ jsx2("span", { className: "story-card-ornament-list", style: ornamentStyleForList, "aria-hidden": "true", children: /* @__PURE__ */ jsx2(GalleryOrnament, { ornament: story.ornament }) }),
          /* @__PURE__ */ jsx2("h3", { className: "story-card-title", children: story.title })
        ] }),
        /* @__PURE__ */ jsx2("p", { className: "story-card-tagline", children: story.tagline })
      ] }),
      /* @__PURE__ */ jsx2("p", { className: "story-card-date", children: formattedDate })
    ] })
  ] });
};

// components/LanguageToggle.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return /* @__PURE__ */ jsx3(
    "button",
    {
      onClick: toggleLanguage,
      className: "language-toggle",
      "aria-label": "Change language",
      title: "Change language",
      children: language === "es" ? "EN" : "ES"
    }
  );
};

// components/MobileFilterToggle.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var MobileFilterToggle = ({ onClick }) => {
  const { t } = useLanguage();
  const filterIcon = /* @__PURE__ */ jsx4("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx4("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }) });
  return /* @__PURE__ */ jsx4("button", { onClick, className: "mobile-filter-toggle", "aria-label": t("openFilters"), title: t("openFilters"), children: filterIcon });
};

// components/SortToggle.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var SortToggle = ({ currentOrder, onOrderChange }) => {
  const { t } = useLanguage();
  const isNewest = currentOrder === "newest";
  const toggleOrder = () => onOrderChange(isNewest ? "oldest" : "newest");
  const title = t(isNewest ? "sortNewest" : "sortOldest");
  const newestIcon = /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx5("path", { d: "M11 5h4" }),
    /* @__PURE__ */ jsx5("path", { d: "M11 9h7" }),
    /* @__PURE__ */ jsx5("path", { d: "M11 13h10" }),
    /* @__PURE__ */ jsx5("path", { d: "m3 17 3 3 3-3" }),
    /* @__PURE__ */ jsx5("path", { d: "M6 20V4" })
  ] });
  const oldestIcon = /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx5("path", { d: "M11 5h10" }),
    /* @__PURE__ */ jsx5("path", { d: "M11 9h7" }),
    /* @__PURE__ */ jsx5("path", { d: "M11 13h4" }),
    /* @__PURE__ */ jsx5("path", { d: "m3 7 3-3 3 3" }),
    /* @__PURE__ */ jsx5("path", { d: "M6 4v16" })
  ] });
  return /* @__PURE__ */ jsx5("button", { onClick: toggleOrder, className: "control-toggle", "aria-label": title, title, children: isNewest ? oldestIcon : newestIcon });
};

// components/ViewToggle.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var ViewToggle = ({ currentView, onViewChange }) => {
  const { t } = useLanguage();
  const isGrid = currentView === "grid";
  const toggleView = () => onViewChange(isGrid ? "list" : "grid");
  const title = t(isGrid ? "switchToListView" : "switchToGridView");
  const gridIcon = /* @__PURE__ */ jsxs3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx6("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ jsx6("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ jsx6("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ jsx6("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] });
  const listIcon = /* @__PURE__ */ jsxs3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx6("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
    /* @__PURE__ */ jsx6("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
    /* @__PURE__ */ jsx6("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
    /* @__PURE__ */ jsx6("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
    /* @__PURE__ */ jsx6("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
    /* @__PURE__ */ jsx6("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
  ] });
  return /* @__PURE__ */ jsx6("button", { onClick: toggleView, className: "control-toggle", "aria-label": title, title, children: isGrid ? listIcon : gridIcon });
};

// components/StoryGallery.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var { useState: useState2, useEffect: useEffect2, useMemo } = React2;
var useTypewriter = (phrases, { typingDelay = 100, deletingDelay = 50, pauseDelay = 2e3 } = {}) => {
  const [index, setIndex] = useState2(0);
  const [subIndex, setSubIndex] = useState2(0);
  const [isDeleting, setIsDeleting] = useState2(false);
  useEffect2(() => {
    if (subIndex === phrases[index].length + 1 && !isDeleting) {
      const timeout2 = setTimeout(() => setIsDeleting(true), pauseDelay);
      return () => clearTimeout(timeout2);
    }
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingDelay : typingDelay);
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, phrases, typingDelay, deletingDelay, pauseDelay]);
  useEffect2(() => {
    setIndex(0);
    setSubIndex(0);
    setIsDeleting(false);
  }, [phrases]);
  return phrases[index].substring(0, subIndex);
};
var StoryGallery = ({ onSelectStory, isVisible, searchQuery, onSearchChange, activeFilter, galleryView, onViewChange, sortOrder, onSortChange, activeTag, onToggleMobileMenu, theme }) => {
  const { t, language } = useLanguage();
  const subtitles = useMemo(() => [
    t("subtitle_1"),
    t("subtitle_2"),
    t("subtitle_3"),
    t("subtitle_4")
  ], [language, t]);
  const displayedSubtitle = useTypewriter(subtitles);
  const processedStories = useMemo(() => {
    let filteredStories = stories;
    if (searchQuery) {
      const lowercasedQuery = searchQuery.toLowerCase();
      filteredStories = filteredStories.filter(
        (story) => story.title.toLowerCase().includes(lowercasedQuery) || story.tagline.toLowerCase().includes(lowercasedQuery) || story.tags.some((tag) => t(tag).toLowerCase().includes(lowercasedQuery))
      );
    }
    if (activeFilter !== "All") {
      filteredStories = filteredStories.filter((story) => story.category === activeFilter);
    }
    if (activeTag) {
      filteredStories = filteredStories.filter((story) => story.tags.includes(activeTag));
    }
    const sortedStories = [...filteredStories].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    return sortedStories;
  }, [searchQuery, activeFilter, activeTag, sortOrder, t]);
  return /* @__PURE__ */ jsxs4("section", { className: `view story-gallery ${!isVisible ? "hidden" : ""}`, "aria-hidden": !isVisible, children: [
    /* @__PURE__ */ jsxs4("header", { className: "gallery-header", children: [
      /* @__PURE__ */ jsxs4("div", { className: "gallery-header-top", children: [
        /* @__PURE__ */ jsx7("h1", { children: t("anthologyTitle") }),
        /* @__PURE__ */ jsx7(LanguageToggle, {})
      ] }),
      /* @__PURE__ */ jsx7("p", { className: "typewriter-subtitle-container", children: /* @__PURE__ */ jsx7("span", { className: "typewriter-subtitle", children: displayedSubtitle }) })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "gallery-actions-bar", children: [
      /* @__PURE__ */ jsx7("div", { className: "search-bar-gallery", children: /* @__PURE__ */ jsx7(
        "input",
        {
          type: "search",
          placeholder: t("searchPlaceholder"),
          value: searchQuery,
          onChange: (e) => onSearchChange(e.target.value),
          "aria-label": "Buscar historias"
        }
      ) }),
      /* @__PURE__ */ jsxs4("div", { className: "gallery-controls", children: [
        /* @__PURE__ */ jsx7(MobileFilterToggle, { onClick: onToggleMobileMenu }),
        /* @__PURE__ */ jsx7(SortToggle, { currentOrder: sortOrder, onOrderChange: onSortChange }),
        /* @__PURE__ */ jsx7(ViewToggle, { currentView: galleryView, onViewChange })
      ] })
    ] }),
    /* @__PURE__ */ jsx7("div", { className: `story-gallery-grid view-${galleryView}`, children: processedStories.length > 0 ? processedStories.map((story) => /* @__PURE__ */ jsx7(StoryCard, { story, onSelect: onSelectStory, theme }, story.id)) : /* @__PURE__ */ jsx7("p", { className: "no-results", children: t("noResults") }) })
  ] });
};

// components/StoryDetailsMobile.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var StoryDetailsMobile = ({ currentStory, onTagSelect }) => {
  const { t, language } = useLanguage();
  const locale = language === "es" ? "es-ES" : "en-US";
  return /* @__PURE__ */ jsxs5("div", { className: "story-details-mobile", children: [
    /* @__PURE__ */ jsxs5("div", { className: "story-details-mobile-meta", children: [
      /* @__PURE__ */ jsxs5("div", { className: "meta-item", children: [
        /* @__PURE__ */ jsxs5("strong", { children: [
          t("category"),
          ":"
        ] }),
        " ",
        t(currentStory.category)
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "meta-item", children: [
        /* @__PURE__ */ jsxs5("strong", { children: [
          t("author"),
          ":"
        ] }),
        /* @__PURE__ */ jsx8("a", { href: "https://joaquingalasso.com", target: "_blank", rel: "noopener noreferrer", children: t("authorName") })
      ] }),
      /* @__PURE__ */ jsxs5("div", { className: "meta-item", children: [
        /* @__PURE__ */ jsxs5("strong", { children: [
          t("published"),
          ":"
        ] }),
        " ",
        new Date(currentStory.date).toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" })
      ] })
    ] }),
    currentStory.tags.length > 0 && /* @__PURE__ */ jsx8("div", { className: "story-details-tags", children: /* @__PURE__ */ jsx8("div", { className: "tags-list", children: currentStory.tags.map((tag) => /* @__PURE__ */ jsx8("button", { onClick: () => onTagSelect(tag), className: "tag-item", children: t(tag) }, tag)) }) })
  ] });
};

// components/ContentRenderer.tsx
import * as React4 from "react";

// components/CustomAudioPlayer.tsx
import * as React3 from "react";

// utils/helpers.ts
var formatTime = (seconds) => {
  if (isNaN(seconds)) return "00:00";
  const floorSeconds = Math.floor(seconds);
  const min = Math.floor(floorSeconds / 60);
  const sec = floorSeconds % 60;
  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
};

// components/CustomAudioPlayer.tsx
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var { useRef, useState: useState3 } = React3;
var CustomAudioPlayer = ({ src, title, caption }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState3(false);
  const [duration, setDuration] = useState3(0);
  const [currentTime, setCurrentTime] = useState3(0);
  const { t } = useLanguage();
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current?.currentTime || 0);
  };
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current?.duration || 0);
  };
  const handleSeek = (event) => {
    if (!audioRef.current) return;
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const newTime = offsetX / rect.width * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  const progress = duration > 0 ? currentTime / duration * 100 : 0;
  const playerElement = /* @__PURE__ */ jsxs6("div", { className: "custom-audio-player-container", children: [
    /* @__PURE__ */ jsx9(
      "audio",
      {
        ref: audioRef,
        src,
        onTimeUpdate: handleTimeUpdate,
        onLoadedMetadata: handleLoadedMetadata,
        onEnded: () => setIsPlaying(false),
        hidden: true
      }
    ),
    /* @__PURE__ */ jsx9("button", { onClick: togglePlayPause, className: "play-pause-button", "aria-label": isPlaying ? t("pause") : t("play"), children: isPlaying ? "\u275A\u275A" : "\u25B6" }),
    /* @__PURE__ */ jsxs6("div", { className: "audio-timeline", children: [
      /* @__PURE__ */ jsx9("div", { className: "progress-bar-container", onClick: handleSeek, children: /* @__PURE__ */ jsx9("div", { className: "progress-bar", style: { width: `${progress}%` } }) }),
      /* @__PURE__ */ jsxs6("div", { className: "time-display", children: [
        /* @__PURE__ */ jsx9("span", { children: formatTime(currentTime) }),
        " / ",
        /* @__PURE__ */ jsx9("span", { children: formatTime(duration) })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxs6("figure", { className: "content-figure audio-figure", "aria-label": `${t("audioPlayerFor")} ${title}`, children: [
    playerElement,
    caption && /* @__PURE__ */ jsx9("figcaption", { children: caption })
  ] });
};

// components/LinkPreview.tsx
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
var LinkPreview = ({ url }) => {
  let domain;
  try {
    domain = new URL(url).hostname;
  } catch (e) {
    domain = url;
  }
  const linkIcon = /* @__PURE__ */ jsxs7("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx10("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" }),
    /* @__PURE__ */ jsx10("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" })
  ] });
  return /* @__PURE__ */ jsxs7("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "link-preview-card", children: [
    /* @__PURE__ */ jsx10("div", { className: "link-preview-icon", children: linkIcon }),
    /* @__PURE__ */ jsxs7("div", { className: "link-preview-content", children: [
      /* @__PURE__ */ jsx10("p", { className: "link-preview-title", children: domain }),
      /* @__PURE__ */ jsx10("p", { className: "link-preview-url", children: url })
    ] })
  ] });
};

// components/ContentRenderer.tsx
import { jsx as jsx11, jsxs as jsxs8 } from "react/jsx-runtime";
var renderBlock = (block, index) => {
  switch (block.type) {
    case "paragraph":
      return /* @__PURE__ */ jsx11("p", { dangerouslySetInnerHTML: { __html: block.html } }, index);
    case "heading":
      return /* @__PURE__ */ jsx11("h2", { dangerouslySetInnerHTML: { __html: block.html } }, index);
    case "blockquote":
      return /* @__PURE__ */ jsx11("blockquote", { className: block.style || "", dangerouslySetInnerHTML: { __html: block.html } }, index);
    case "list":
      const items = block.items.map((item, i) => /* @__PURE__ */ jsx11("li", { dangerouslySetInnerHTML: { __html: item } }, i));
      return block.style === "ordered" ? /* @__PURE__ */ jsx11("ol", { children: items }, index) : /* @__PURE__ */ jsx11("ul", { children: items }, index);
    case "dialogue":
      return /* @__PURE__ */ jsxs8("div", { children: [
        /* @__PURE__ */ jsx11("p", { className: "dialogue", dangerouslySetInnerHTML: { __html: block.html } }),
        /* @__PURE__ */ jsx11("p", { className: "dialogue-attribution", children: block.attribution })
      ] }, index);
    case "image":
      return /* @__PURE__ */ jsxs8("figure", { className: "content-figure", children: [
        /* @__PURE__ */ jsx11("img", { src: block.src, alt: block.alt }),
        block.caption && /* @__PURE__ */ jsx11("figcaption", { children: block.caption })
      ] }, index);
    case "gallery":
      return /* @__PURE__ */ jsxs8("figure", { className: "content-figure", children: [
        /* @__PURE__ */ jsx11("div", { className: "image-gallery", children: block.images.map((img, i) => /* @__PURE__ */ jsx11("img", { src: img.src, alt: img.alt }, i)) }),
        block.caption && /* @__PURE__ */ jsx11("figcaption", { children: block.caption })
      ] }, index);
    case "video":
      const videoSrc = block.provider === "youtube" ? `https://www.youtube.com/embed/${block.src}` : block.src;
      return /* @__PURE__ */ jsxs8("figure", { className: "content-figure", children: [
        /* @__PURE__ */ jsx11("div", { className: "video-wrapper", children: block.provider === "youtube" ? /* @__PURE__ */ jsx11(
          "iframe",
          {
            src: videoSrc,
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            title: "Embedded YouTube video"
          }
        ) : /* @__PURE__ */ jsx11("video", { controls: true, src: videoSrc }) }),
        block.caption && /* @__PURE__ */ jsx11("figcaption", { children: block.caption })
      ] }, index);
    case "audio":
      return /* @__PURE__ */ jsx11(CustomAudioPlayer, { src: block.src, title: block.title, caption: block.caption }, index);
    case "code":
      return /* @__PURE__ */ jsxs8("figure", { className: "content-figure code-figure", children: [
        /* @__PURE__ */ jsx11("pre", { children: /* @__PURE__ */ jsx11("code", { className: `language-${block.language}`, children: block.code.trim() }) }),
        block.caption && /* @__PURE__ */ jsx11("figcaption", { children: block.caption })
      ] }, index);
    case "ornament": {
      const { variant = "default", value, caption } = block;
      const renderOrnamentContent = () => {
        switch (variant) {
          case "character":
            return /* @__PURE__ */ jsx11("span", { children: value });
          case "svg":
            return /* @__PURE__ */ jsx11("span", { className: "ornament-svg", dangerouslySetInnerHTML: { __html: value || "" } });
          case "default":
          default:
            return /* @__PURE__ */ jsx11("span", {});
        }
      };
      const ornamentDiv = /* @__PURE__ */ jsx11("div", { className: "cul-de-lampe", children: renderOrnamentContent() });
      if (caption) {
        return /* @__PURE__ */ jsxs8("figure", { className: "content-figure ornament-figure", children: [
          ornamentDiv,
          /* @__PURE__ */ jsx11("figcaption", { children: caption })
        ] }, index);
      }
      return React4.cloneElement(ornamentDiv, { key: index });
    }
    case "linkPreview":
      return /* @__PURE__ */ jsx11(LinkPreview, { url: block.url }, index);
    default:
      return null;
  }
};
var ContentRenderer = ({ content }) => {
  return /* @__PURE__ */ jsx11("div", { className: "story-content", children: content.map(renderBlock) });
};

// components/ShareButtons.tsx
import { jsx as jsx12, jsxs as jsxs9 } from "react/jsx-runtime";
var ShareButtons = ({ storyUrl, title }) => {
  const { t } = useLanguage();
  const encodedUrl = encodeURIComponent(storyUrl);
  const encodedTitle = encodeURIComponent(`${t("shareMessage")}"${title}"`);
  const copyLink = () => {
    navigator.clipboard.writeText(storyUrl).then(() => {
      alert(t("linkCopied"));
    }, () => {
      alert(t("copyLinkError"));
    });
  };
  const twitterIcon = /* @__PURE__ */ jsx12("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "currentColor", children: /* @__PURE__ */ jsx12("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
  const facebookIcon = /* @__PURE__ */ jsx12("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "currentColor", children: /* @__PURE__ */ jsx12("path", { d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" }) });
  const linkIcon = /* @__PURE__ */ jsxs9("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx12("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" }),
    /* @__PURE__ */ jsx12("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" })
  ] });
  return /* @__PURE__ */ jsxs9("div", { className: "share-buttons", children: [
    /* @__PURE__ */ jsx12("a", { href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, target: "_blank", rel: "noopener noreferrer", "aria-label": t("shareOnTwitter"), className: "share-button twitter", children: twitterIcon }),
    /* @__PURE__ */ jsx12("a", { href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, target: "_blank", rel: "noopener noreferrer", "aria-label": t("shareOnFacebook"), className: "share-button facebook", children: facebookIcon }),
    /* @__PURE__ */ jsx12("button", { onClick: copyLink, "aria-label": t("copyLink"), className: "share-button copy-link", children: linkIcon })
  ] });
};

// components/RelatedStoriesMobile.tsx
import * as React5 from "react";
import { jsx as jsx13, jsxs as jsxs10 } from "react/jsx-runtime";
var { useMemo: useMemo2 } = React5;
var RelatedStoriesMobile = ({ currentStory, allStories, onSelectStory }) => {
  const { t } = useLanguage();
  const relatedStories = useMemo2(() => {
    return allStories.filter((s) => s.id !== currentStory.id).slice(0, 3);
  }, [currentStory, allStories]);
  if (relatedStories.length === 0) return null;
  return /* @__PURE__ */ jsxs10("section", { className: "related-stories-mobile", children: [
    /* @__PURE__ */ jsx13("h3", { children: t("relatedStoriesTitle") }),
    /* @__PURE__ */ jsx13("ul", { children: relatedStories.map((story) => /* @__PURE__ */ jsx13("li", { children: /* @__PURE__ */ jsxs10("button", { onClick: () => onSelectStory(story), className: "related-story-button", children: [
      /* @__PURE__ */ jsx13("span", { className: "related-story-title", children: story.title }),
      /* @__PURE__ */ jsx13("span", { className: "related-story-category", children: t(story.category) })
    ] }) }, story.id)) })
  ] });
};

// components/Giscus.tsx
import * as React6 from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var { useEffect: useEffect3, useRef: useRef2 } = React6;
var GISCUS_CONFIG = {
  repo: "joaquingalasso/antilogia-comments",
  repoId: "R_kgDOMf5rNA",
  category: "Comentarios de Relatos",
  categoryId: "DIC_kwDOMf5rNM4ChbqG"
};
var Giscus = ({ term, theme, lang }) => {
  const ref = useRef2(null);
  useEffect3(() => {
    if (!ref.current || !term) {
      return;
    }
    ref.current.innerHTML = "";
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", GISCUS_CONFIG.repo);
    script.setAttribute("data-repo-id", GISCUS_CONFIG.repoId);
    script.setAttribute("data-category", GISCUS_CONFIG.category);
    script.setAttribute("data-category-id", GISCUS_CONFIG.categoryId);
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", term);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("data-theme", theme);
    ref.current.appendChild(script);
  }, [term, lang, theme]);
  return /* @__PURE__ */ jsx14("div", { ref, className: "giscus" });
};

// components/StoryView.tsx
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
var StoryView = ({ story, onBack, isVisible, allStories, onSelectStory, onTagSelect, theme }) => {
  const { t, language } = useLanguage();
  if (!story) return null;
  const storyUrl = `${window.location.origin}${window.location.pathname}#/${language}/story/${story.id}`;
  const headerStyle = {
    "--story-icon-url": `url("${story.icon}")`
  };
  const date = new Date(story.date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const formattedDate = `${day}-${month}-${year}`;
  return /* @__PURE__ */ jsxs11("article", { className: `view story-view ${!isVisible ? "hidden" : ""}`, "aria-hidden": !isVisible, children: [
    /* @__PURE__ */ jsxs11("div", { className: "story-view-top-bar", children: [
      /* @__PURE__ */ jsxs11("button", { onClick: onBack, className: "back-button", children: [
        "\u2190 ",
        t("backToAnthology")
      ] }),
      /* @__PURE__ */ jsx15(LanguageToggle, {})
    ] }),
    /* @__PURE__ */ jsxs11("header", { className: "story-header", style: headerStyle, children: [
      /* @__PURE__ */ jsx15("p", { className: "date", children: formattedDate }),
      /* @__PURE__ */ jsx15("h1", { children: story.title }),
      /* @__PURE__ */ jsx15("p", { className: "tagline", children: story.tagline }),
      /* @__PURE__ */ jsx15(StoryDetailsMobile, { currentStory: story, onTagSelect })
    ] }),
    /* @__PURE__ */ jsx15(ContentRenderer, { content: story.content }),
    /* @__PURE__ */ jsxs11("div", { className: "story-sharing-area", style: headerStyle, children: [
      /* @__PURE__ */ jsx15(ShareButtons, { storyUrl, title: story.title }),
      /* @__PURE__ */ jsx15(RelatedStoriesMobile, { currentStory: story, allStories, onSelectStory })
    ] }),
    /* @__PURE__ */ jsxs11("section", { className: "comments-section", children: [
      /* @__PURE__ */ jsx15("h2", { children: t("comments") }),
      /* @__PURE__ */ jsx15(Giscus, { term: `${story.id}-${language}`, theme, lang: language })
    ] })
  ] });
};

// components/FilterAside.tsx
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
var FilterAside = ({ activeFilter, onFilterChange, categories, activeTag, onTagChange, tags }) => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs12("aside", { className: "filter-aside", "aria-label": "Filtros y b\xFAsqueda", children: [
    /* @__PURE__ */ jsxs12("div", { className: "filter-group", children: [
      /* @__PURE__ */ jsx16("h3", { children: t("categories") }),
      /* @__PURE__ */ jsx16("button", { onClick: () => onFilterChange("All"), className: activeFilter === "All" ? "active" : "", children: t("allCategories") }),
      categories.map((category) => /* @__PURE__ */ jsx16("button", { onClick: () => onFilterChange(category), className: activeFilter === category ? "active" : "", children: t(category) }, category))
    ] }),
    /* @__PURE__ */ jsxs12("div", { className: "filter-group", children: [
      /* @__PURE__ */ jsx16("h3", { children: t("tags") }),
      /* @__PURE__ */ jsx16("div", { className: "tags-list-filter", children: tags.map(({ tag, count }) => /* @__PURE__ */ jsxs12("button", { onClick: () => onTagChange(tag), className: `tag-filter-item ${activeTag === tag ? "active" : ""}`, children: [
        /* @__PURE__ */ jsx16("span", { className: "tag-count", children: count }),
        /* @__PURE__ */ jsx16("span", { className: "tag-name", children: t(tag) })
      ] }, tag)) })
    ] })
  ] });
};

// components/StoryAside.tsx
import * as React7 from "react";
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
var { useMemo: useMemo3 } = React7;
var StoryAside = ({ currentStory, allStories, onSelectStory, onTagSelect }) => {
  const { t, language } = useLanguage();
  const locale = language === "es" ? "es-ES" : "en-US";
  const relatedStories = useMemo3(() => {
    return allStories.filter((s) => s.id !== currentStory.id).slice(0, 3);
  }, [currentStory, allStories]);
  return /* @__PURE__ */ jsxs13("aside", { className: "story-aside", "aria-label": "Informaci\xF3n del relato y sugerencias", children: [
    /* @__PURE__ */ jsxs13("div", { className: "story-details-group", children: [
      /* @__PURE__ */ jsx17("h3", { children: t("storyDetails") }),
      /* @__PURE__ */ jsxs13("p", { children: [
        /* @__PURE__ */ jsxs13("strong", { children: [
          t("category"),
          ":"
        ] }),
        " ",
        t(currentStory.category)
      ] }),
      /* @__PURE__ */ jsxs13("p", { children: [
        /* @__PURE__ */ jsxs13("strong", { children: [
          t("author"),
          ":"
        ] }),
        /* @__PURE__ */ jsxs13("a", { href: "https://joaquingalasso.com", target: "_blank", rel: "noopener noreferrer", children: [
          " ",
          t("authorName")
        ] })
      ] }),
      /* @__PURE__ */ jsxs13("p", { children: [
        /* @__PURE__ */ jsxs13("strong", { children: [
          t("published"),
          ":"
        ] }),
        " ",
        new Date(currentStory.date).toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" })
      ] }),
      currentStory.tags.length > 0 && /* @__PURE__ */ jsx17("div", { className: "story-details-tags", children: /* @__PURE__ */ jsx17("div", { className: "tags-list", children: currentStory.tags.map((tag) => /* @__PURE__ */ jsx17("button", { onClick: () => onTagSelect(tag), className: "tag-item", children: t(tag) }, tag)) }) })
    ] }),
    relatedStories.length > 0 && /* @__PURE__ */ jsxs13("div", { className: "related-stories-group", children: [
      /* @__PURE__ */ jsx17("h3", { children: t("relatedStoriesTitle") }),
      /* @__PURE__ */ jsx17("ul", { children: relatedStories.map((story) => /* @__PURE__ */ jsx17("li", { children: /* @__PURE__ */ jsxs13("button", { onClick: () => onSelectStory(story), className: "related-story-button", children: [
        /* @__PURE__ */ jsx17("span", { className: "related-story-title", children: story.title }),
        /* @__PURE__ */ jsx17("span", { className: "related-story-category", children: t(story.category) })
      ] }) }, story.id)) })
    ] })
  ] });
};

// components/MobileFilterPanel.tsx
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
var MobileFilterPanel = ({
  isOpen,
  onClose,
  ...props
}) => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx18("div", { className: `mobile-filter-overlay ${isOpen ? "open" : ""}`, onClick: onClose, role: "dialog", "aria-modal": "true", "aria-hidden": !isOpen, children: /* @__PURE__ */ jsxs14("aside", { className: "mobile-filter-panel", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxs14("header", { className: "mobile-filter-header", children: [
      /* @__PURE__ */ jsx18("h3", { children: t("filter") }),
      /* @__PURE__ */ jsx18("button", { onClick: onClose, className: "close-button", "aria-label": t("close"), children: "\xD7" })
    ] }),
    /* @__PURE__ */ jsx18("div", { className: "mobile-filter-content", children: /* @__PURE__ */ jsx18(FilterAside, { ...props }) })
  ] }) });
};

// components/Icons.tsx
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
var RssIcon = ({ width = 18, height = 18 }) => /* @__PURE__ */ jsx19(
  "svg",
  {
    height,
    width,
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "-271 273 256 256",
    xmlSpace: "preserve",
    fill: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ jsxs15("g", { children: [
      /* @__PURE__ */ jsx19("path", { d: "M-271,360v48.9c31.9,0,62.1,12.6,84.7,35.2c22.6,22.6,35.1,52.8,35.1,84.8v0.1h49.1c0-46.6-19-88.7-49.6-119.4\n		C-182.2,379-224.4,360.1-271,360z" }),
      /* @__PURE__ */ jsx19("path", { d: "M-237,460.9c-9.4,0-17.8,3.8-24,10s-10,14.6-10,24c0,9.3,3.8,17.7,10,23.9c6.2,6.1,14.6,9.9,24,9.9s17.8-3.7,24-9.9\n		s10-14.6,10-23.9c0-9.4-3.8-17.8-10-24C-219.2,464.7-227.6,460.9-237,460.9z" }),
      /* @__PURE__ */ jsx19("path", { d: "M-90.1,348.1c-46.3-46.4-110.2-75.1-180.8-75.1v48.9C-156.8,322-64.1,414.9-64,529h49C-15,458.4-43.7,394.5-90.1,348.1z" })
    ] })
  }
);

// components/ThemeToggle.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var ThemeToggle = ({ theme, toggleTheme }) => {
  const { t } = useLanguage();
  const label = t(theme === "light" ? "changeToDarkMode" : "changeToLightMode");
  return /* @__PURE__ */ jsx20(
    "button",
    {
      className: "theme-toggle",
      onClick: toggleTheme,
      "aria-label": label,
      title: label,
      children: theme === "light" ? "\u{1F311}" : "\u2600\uFE0F"
    }
  );
};

// components/Footer.tsx
import { jsx as jsx21, jsxs as jsxs16 } from "react/jsx-runtime";
var authorPhoto = {
  light: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
  dark: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop"
};
var Footer = ({ theme, toggleTheme }) => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsxs16("footer", { className: "site-footer", children: [
    /* @__PURE__ */ jsxs16("div", { className: "footer-content", children: [
      /* @__PURE__ */ jsxs16("div", { className: "footer-bio", children: [
        /* @__PURE__ */ jsx21("img", { src: authorPhoto[theme], alt: t("authorName"), className: "author-photo-footer" }),
        /* @__PURE__ */ jsxs16("div", { className: "author-info-footer", children: [
          /* @__PURE__ */ jsx21("h4", { children: /* @__PURE__ */ jsx21("a", { href: "https://joaquingalasso.com", target: "_blank", rel: "noopener noreferrer", children: t("authorName") }) }),
          /* @__PURE__ */ jsx21("p", { children: t("authorBio") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs16("div", { className: "footer-right", children: [
        /* @__PURE__ */ jsx21("div", { className: "footer-copyright", children: /* @__PURE__ */ jsxs16("p", { children: [
          "\xA9 ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " ",
          t("copyright")
        ] }) }),
        /* @__PURE__ */ jsxs16("a", { href: "/rss.xml", target: "_blank", rel: "noopener noreferrer", className: "rss-button-footer", children: [
          /* @__PURE__ */ jsx21(RssIcon, { width: 16, height: 16 }),
          /* @__PURE__ */ jsx21("span", { children: t("subscribeToFeed") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx21(ThemeToggle, { theme, toggleTheme })
  ] });
};

// components/App.tsx
import { jsx as jsx22, jsxs as jsxs17 } from "react/jsx-runtime";
var { useState: useState4, useEffect: useEffect4, useMemo: useMemo4 } = React8;
var App = () => {
  const [theme, setTheme] = useState4("light");
  const [selectedStory, setSelectedStory] = useState4(null);
  const [searchQuery, setSearchQuery] = useState4("");
  const [activeFilter, setActiveFilter] = useState4("All");
  const [galleryView, setGalleryView] = useState4("grid");
  const [sortOrder, setSortOrder] = useState4("newest");
  const [activeTag, setActiveTag] = useState4("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState4(false);
  const { language } = useLanguage();
  useEffect4(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect4(() => {
    const root = document.documentElement;
    if (selectedStory) {
      const storyColor = theme === "light" ? selectedStory.color.light : selectedStory.color.dark;
      root.style.setProperty("--dominant-color", storyColor);
    } else {
      root.style.removeProperty("--dominant-color");
    }
    return () => {
      root.style.removeProperty("--dominant-color");
    };
  }, [selectedStory, theme]);
  useEffect4(() => {
    const rootEl = document.getElementById("root");
    if (rootEl) {
      if (selectedStory) {
        rootEl.classList.add("story-active");
      } else {
        rootEl.classList.remove("story-active");
      }
    }
  }, [selectedStory]);
  useEffect4(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);
  useEffect4(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const storyMatch = hash.match(/story\/([^/]+)/);
      if (storyMatch) {
        const storyId = storyMatch[1];
        const storyToSelect = stories.find((s) => s.id === storyId);
        if (storyToSelect) {
          setSelectedStory(storyToSelect);
        } else {
          window.location.hash = `#/${language}/`;
        }
      } else {
        setSelectedStory(null);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [language]);
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  const handleSelectStory = (story) => {
    window.scrollTo(0, 0);
    window.location.hash = `#/${language}/story/${story.id}`;
  };
  const handleBackToGallery = () => {
    window.location.hash = `#/${language}/`;
  };
  const handleTagChange = (tag) => {
    setActiveTag((currentTag) => currentTag === tag ? "" : tag);
    setIsMobileMenuOpen(false);
  };
  const handleTagSelectFromStory = (tag) => {
    window.scrollTo(0, 0);
    setActiveTag(tag);
    setActiveFilter("All");
    window.location.hash = `#/${language}/`;
  };
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setIsMobileMenuOpen(false);
  };
  const uniqueCategories = useMemo4(() => [...new Set(stories.map((s) => s.category))], []);
  const isStoryView = !!selectedStory;
  const tagsWithCounts = useMemo4(() => {
    const allTags = stories.flatMap((s) => s.tags);
    const counts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count);
  }, [stories]);
  const filterProps = {
    activeFilter,
    onFilterChange: handleFilterChange,
    categories: uniqueCategories,
    activeTag,
    onTagChange: handleTagChange,
    tags: tagsWithCounts
  };
  return /* @__PURE__ */ jsxs17("div", { className: "app-container", children: [
    /* @__PURE__ */ jsxs17("main", { className: "content-area", children: [
      /* @__PURE__ */ jsx22(
        StoryGallery,
        {
          onSelectStory: handleSelectStory,
          isVisible: !isStoryView,
          searchQuery,
          onSearchChange: setSearchQuery,
          activeFilter,
          categories: uniqueCategories,
          galleryView,
          onViewChange: setGalleryView,
          sortOrder,
          onSortChange: setSortOrder,
          activeTag,
          onToggleMobileMenu: () => setIsMobileMenuOpen(true),
          onFilterChange: handleFilterChange,
          theme
        }
      ),
      /* @__PURE__ */ jsx22(
        StoryView,
        {
          story: selectedStory,
          onBack: handleBackToGallery,
          isVisible: isStoryView,
          allStories: stories,
          onSelectStory: handleSelectStory,
          onTagSelect: handleTagSelectFromStory,
          theme
        }
      )
    ] }),
    isStoryView ? /* @__PURE__ */ jsx22(
      StoryAside,
      {
        currentStory: selectedStory,
        allStories: stories,
        onSelectStory: handleSelectStory,
        onTagSelect: handleTagSelectFromStory
      }
    ) : /* @__PURE__ */ jsx22(FilterAside, { ...filterProps }),
    /* @__PURE__ */ jsx22(
      MobileFilterPanel,
      {
        isOpen: isMobileMenuOpen,
        onClose: () => setIsMobileMenuOpen(false),
        ...filterProps
      }
    ),
    /* @__PURE__ */ jsx22(Footer, { theme, toggleTheme })
  ] });
};

// index.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    /* @__PURE__ */ jsx23(React9.StrictMode, { children: /* @__PURE__ */ jsx23(LanguageProvider, { children: /* @__PURE__ */ jsx23(App, {}) }) })
  );
}
