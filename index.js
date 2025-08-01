// index.tsx
import * as React12 from "react";
import { createRoot } from "react-dom/client";

// components/App.tsx
import * as React11 from "react";

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
    type: "ornament",
    variant: "svg",
    value: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.99 418.66"><path d="M280.78,361.79c"/></svg>'
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
    type: "table",
    caption: "Clasificaci\xF3n de los susurros marinos.",
    headers: ["Tipo de Susurro", "Origen", "Frecuencia"],
    rows: [
      ["Confesiones de marineros", "Almas en pena", "Noches de luna llena"],
      ["Anhelos de sirenas", "Corazones rotos", "Al amanecer"],
      ["Promesas rotas", "Amantes distantes", "Durante la marea baja"],
      ["Historias olvidadas", "Barcos hundidos", "Solo en tormentas"]
    ]
  },
  {
    type: "paragraph",
    html: "Para quien quiera saber m\xE1s sobre la historia de estas estructuras, este recurso es invaluable:"
  },
  {
    type: "linkPreview",
    url: "https://es.wikipedia.org/wiki/Faro",
    title: "Faro - Wikipedia, la enciclopedia libre",
    description: "Un faro es una torre de se\xF1alizaci\xF3n luminosa situada en la costa, en las entradas de los puertos, en las islas, en los arrecifes o en los bancos de arena para guiar a las embarcaciones durante la noche.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/BCN_-_Far_del_Llobregat_1.jpg/1280px-BCN_-_Far_del_Llobregat_1.jpg"
  },
  {
    type: "sourcedQuote",
    html: "La soledad es al esp\xEDritu lo que la dieta al cuerpo.",
    source: "Vauvenargues",
    sourceUrl: "https://es.wikipedia.org/wiki/Luc_de_Clapiers"
  },
  {
    type: "audio",
    src: "/audios/faro.mp3",
    title: "Susurros del Oc\xE9ano",
    caption: "Un lamento recogido en una noche de tormenta."
  },
  {
    type: "pullQuote",
    alignment: "right",
    html: "Una noche, el mar guard\xF3 silencio."
  },
  {
    type: "paragraph",
    html: "El farero esper\xF3, pero solo el sonido de su propia respiraci\xF3n romp\xEDa la calma. Comprendi\xF3 que su labor hab\xEDa terminado. "
  },
  {
    type: "sidenote",
    html: "Algunos dicen que se convirti\xF3 en una constelaci\xF3n, una nueva gu\xEDa para los perdidos en el mar. Otros, que su fantasma a\xFAn anota historias en cuadernos de espuma."
  },
  {
    type: "paragraph",
    html: "Escribi\xF3 su propia historia en la \xFAltima p\xE1gina del \xFAltimo cuaderno, cerr\xF3 la puerta del faro y camin\xF3 hacia las olas, para convertirse en un susurro m\xE1s en la colecci\xF3n."
  },
  {
    type: "collapsible",
    title: "Notas del autor sobre el final",
    initiallyOpen: false,
    content: [
      {
        type: "paragraph",
        html: "El final deliberadamente ambiguo busca reflejar la naturaleza inescrutable del oc\xE9ano y del destino. No importa si el farero muri\xF3 o trascendi\xF3; lo importante es que se uni\xF3 a las historias que tanto amaba."
      },
      {
        type: "blockquote",
        html: "Cada final es un comienzo disfrazado."
      }
    ]
  },
  {
    type: "heading",
    level: 2,
    html: "Cronolog\xEDa del Faro"
  },
  {
    type: "timeline",
    events: [
      { date: "1888", title: "Construcci\xF3n del Faro", description: 'Se erige la torre en el acantilado conocido como "El Fin del Mundo".' },
      { date: "1923", title: "El Primer Farero", description: "Un hombre sin nombre llega para hacerse cargo de la luz." },
      { date: "1950", title: "El Cambio", description: "El farero deja de encender la l\xE1mpara y comienza su labor de escucha." },
      { date: "1978", title: "El Silencio", description: "El mar deja de susurrar por primera vez." },
      { date: "Presente", title: "La Leyenda", description: "El faro permanece, ahora una atracci\xF3n para turistas y buscadores de mitos." }
    ]
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
    value: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    caption: "Un ornamento SVG, como un ojo que todo lo ve."
  }
];
var boaShared = {
  color: { light: "#0b6d4f", dark: "#10a375" },
  backgrounds: {
    cardIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNOSAxOHEtMiAwLTMuNS0xLjVUNCAxNlY5cTAtMiAxLjUtMy41VDEwIDRsNiA2cTIgMiAwIDRsLTYgNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=",
    storyHeader: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWRhc2hhcnJheT0iOCAxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgZHVyPSIyMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtZGFzaGFycmF5PSI2IDEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIzNjAgNTAgNTAiIHRvPSIwIDUwIDUwIiBkdXI9IjE1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+PC9jaXJjbGU+PC9zdmc+",
    sharingArea: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0icC1ib2EiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNSBMMTAgMTAgTCAwIDE1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBmcm9tPSIyMCIgdG89IjAiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwLWJvYSkiIHN0cm9rZS1kYXNoYXJyYXk9IjIwIi8+PC9zdmc+"
  },
  ornament: { type: "ornament" },
  category: "Relato Corto",
  tags: ["Suspenso", "Psicol\xF3gico", "Animales"],
  content: boaContent
};
var faroShared = {
  color: { light: "#015c7e", dark: "#0090c8" },
  backgrounds: {
    cardIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q2sb3IiPjxwYXRoIGQ9Ik0xMDQsMjE2aDQ4YTgsOCwwLDAsMSwwLDE2aC00OGE4LDgsMCwwLDEsMC0xNlptMTItNDBMg4OC4yLDQ4LjU2QTgsOCwwLDAsMSw5NiwzMmg2NGE4LDgsMCwwLDEsNy44LDE2LjU2TDE0MCwxNzZoLTI0Zm05OS41NC01Ny4yNi00OC0yNGE4LDgsMCwxLDAtNy4wOCwxNC41MkwyMDQuMjUsMTI4bC00NS43OSwyMi43NGE4LDgsMCwwLDAsNy4wOCwxNC41Mmw0OC0yNGE4LDgsMCwwLDAsMC0xNC41MlpNNDAuNDYsMTEwLjc0YTgsOCwwLDAsMC03LjA4LTEuMjZsLTQ4LDI0YTgsOCwwLDAsMCwwLDE0LjUybDQ4LDI0YTgsOCwwLDEsMCw3LjA4LTE0LjUyTDUxLjc1LDEyOGw0NS43OS0yMi43NEExOCw4LDAsMCwwLDQwLjQ2LDExMC43NFoiLz48L3N2Zz4=",
    storyHeader: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNMCA1MCBMMTAwIDUwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI4Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZnJvbT0iMCIgdG89IjEwMCIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaGFycmF5IiB2YWx1ZXM9IjUwIDUwOzEwIDQwOzUwIDUwIiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcGF0aD48cGF0aCBkPSJNMCA3MCBMMTAwIDcwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI0IiBvcGFjaXR5PSIwLjUiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBmcm9tPSIxMDAiIHRvPSIwIiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNoYXJyYXkiIHZhbHVlcz0iMzAgNzA7MTAgOTA7MzAgNzAiIGR1cj0iM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvc3ZnPg==",
    sharingArea: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0icC1mYXJvIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDIwIFExMCAxMCAyMCAyMCBUNDAgMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImQiIHZhbHVlcz0iTTAgMjAgUTEwIDEwIDIwIDIwIFQ0MCAyMDtNCAyMCBRMTAgMzAgMjAgMjAgVDQwIDIwO00wIDIwIFExMCAxMCAyMCAyMCBUNDAgMjAiIGR1cj0iM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwLWZhcm8pIi8+PC9zdmc+"
  },
  ornament: { type: "ornament" },
  category: "F\xE1bula",
  tags: ["Misterio", "Soledad", "Mar"],
  content: faroContent
};
var stories = [
  {
    id: "boa",
    title: "Dormir con la boa",
    date: "2025-07-23",
    tagline: "Un abrazo tibio y asfixiante. \xA1Qu\xE9 tierna!",
    ...boaShared
  },
  {
    id: "faro",
    title: "El faro de los susurros",
    date: "2024-11-12",
    tagline: "La luz que gu\xEDa es tambi\xE9n la que escucha.",
    ...faroShared
  },
  {
    id: "boa-2",
    title: "El regreso de la Boa",
    date: "2025-07-13",
    tagline: "El siseo que nunca se fue.",
    ...boaShared
  },
  {
    id: "faro-2",
    title: "La niebla del Faro",
    date: "2024-10-28",
    tagline: "Algunos secretos es mejor que permanezcan ocultos.",
    ...faroShared
  },
  {
    id: "boa-3",
    title: "El sue\xF1o de la Boa",
    date: "2025-07-03",
    tagline: "En sus sue\xF1os, ella es la reina.",
    ...boaShared
  },
  {
    id: "faro-3",
    title: "El silencio del Faro",
    date: "2024-10-13",
    tagline: "Cuando el mar calla, la tierra tiembla.",
    ...faroShared
  },
  {
    id: "boa-4",
    title: "La piel de la Boa",
    date: "2025-06-23",
    tagline: "Una muda que lo cambia todo.",
    ...boaShared
  },
  {
    id: "faro-4",
    title: "La tormenta en el Faro",
    date: "2024-09-28",
    tagline: "La furia del oc\xE9ano contra la soledad.",
    ...faroShared
  },
  {
    id: "boa-5",
    title: "El hambre de la Boa",
    date: "2025-06-13",
    tagline: "El apetito no siempre es por comida.",
    ...boaShared
  },
  {
    id: "faro-5",
    title: "El guardi\xE1n del Faro",
    date: "2024-09-13",
    tagline: "Hay un nuevo farero en la costa.",
    ...faroShared
  },
  {
    id: "boa-6",
    title: "El \xFAltimo abrazo",
    date: "2025-06-03",
    tagline: "El final que siempre estuvo escrito.",
    ...boaShared
  },
  {
    id: "faro-6",
    title: "La luz eterna",
    date: "2024-08-29",
    tagline: "Hay luces que nunca se apagan.",
    ...faroShared
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
  noResultsTitle: { es: "No se encontraron entradas", en: "No entries found" },
  noResultsMessage: { es: "Tu b\xFAsqueda no arroj\xF3 resultados.", en: "Your search didn't return any results." },
  comments: { es: "Comentarios", en: "Comments" },
  giscusComments: { es: "(Secci\xF3n de comentarios de Giscus se cargar\xEDa aqu\xED)", en: "(Giscus comments section would load here)" },
  loadMore: { es: "Cargar m\xE1s", en: "Load More" },
  previousStory: { es: "Historia anterior", en: "Previous Story" },
  nextStory: { es: "Siguiente historia", en: "Next Story" },
  backToTop: { es: "Volver arriba", en: "Back to Top" },
  // Navbar
  navWho: { es: "Qui\xE9n soy", en: "Who I am" },
  navWhat: { es: "Qu\xE9 hago", en: "What I do" },
  navHow: { es: "C\xF3mo lo hago", en: "How I do it" },
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
  archive: { es: "Archivo", en: "Archive" },
  // Sharing
  shareOnTwitter: { es: "Compartir en Twitter", en: "Share on Twitter" },
  shareOnFacebook: { es: "Compartir en Facebook", en: "Share on Facebook" },
  copyLink: { es: "Copiar enlace", en: "Copy link" },
  linkCopied: { es: "\xA1Enlace copiado al portapapeles!", en: "Link copied to clipboard!" },
  copyLinkError: { es: "Error al copiar el enlace.", en: "Error copying link." },
  shareMessage: { es: "Echa un vistazo a este relato: ", en: "Check out this story: " },
  // Link Preview
  linkPreviewErrorTitle: { es: "Error al previsualizar", en: "Preview Error" },
  linkPreviewErrorDesc: { es: "No se pudo generar una previsualizaci\xF3n para este enlace.", en: "Could not generate a preview for this link." },
  linkPreviewError: { es: "No se pudo generar una previsualizaci\xF3n para este enlace.", en: "Could not generate a preview for this link." },
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
  "Mar": { es: "Mar", en: "Sea" },
  // About Page
  aboutTitle: { es: "Joaqu\xEDn Galasso", en: "Joaqu\xEDn Galasso" },
  aboutSubtitle: { es: "Dise\xF1ador Multimedial & Programador Creativo", en: "Multimedia Designer & Creative Coder" },
  aboutIntroTitle: { es: "En pocas palabras", en: "In a nutshell" },
  aboutIntroP1: { es: "Nacido en la era digital y criado entre cables y pantallas, mi curiosidad me llev\xF3 a desarmar todo lo que encontraba. Esa inquietud se transform\xF3 en una pasi\xF3n por construir, no solo con las manos, sino con c\xF3digo y p\xEDxeles.", en: "Born in the digital age and raised among cables and screens, my curiosity led me to disassemble everything I could find. That restlessness transformed into a passion for building, not just with my hands, but with code and pixels." },
  aboutIntroP2: { es: "Como dise\xF1ador multimedial, mi trabajo es un di\xE1logo constante entre la est\xE9tica y la l\xF3gica. Me obsesiona crear interfaces que no solo funcionen, sino que cuenten una historia y generen una conexi\xF3n. Creo en la tecnolog\xEDa como una herramienta para la expresi\xF3n, la educaci\xF3n y, sobre todo, para crear experiencias que permanezcan en la memoria.", en: "As a multimedia designer, my work is a constant dialogue between aesthetics and logic. I am obsessed with creating interfaces that not only work but also tell a story and foster a connection. I believe in technology as a tool for expression, education, and, above all, for creating experiences that remain in memory." },
  aboutTimelineTitle: { es: "Mi trayectoria", en: "My Journey" },
  aboutSkillsTitle: { es: "Habilidades y Herramientas", en: "Skills and Tools" },
  aboutSkillsDesign: { es: "Dise\xF1o", en: "Design" },
  aboutSkillsDev: { es: "Desarrollo", en: "Development" },
  aboutSkillsOther: { es: "Otros", en: "Others" },
  aboutProjectsTitle: { es: "Proyectos e Intereses", en: "Projects and Interests" },
  aboutProjectsP1: { es: "Mis intereses se mueven en la intersecci\xF3n del dise\xF1o especulativo, la gamificaci\xF3n y la educaci\xF3n popular. Exploro c\xF3mo la tecnolog\xEDa puede ser m\xE1s sensible, \xE9tica y humana. Puedes ver parte de mi trabajo y exploraciones en estas plataformas.", en: "My interests lie at the intersection of speculative design, gamification, and popular education. I explore how technology can be more sensitive, ethical, and humane. You can see some of my work and explorations on these platforms." },
  aboutContactTitle: { es: "\xBFHablamos?", en: "Let's talk?" },
  aboutContactP1: { es: "Siempre estoy abierto a nuevas colaboraciones, proyectos interesantes o simplemente una buena charla. Si tienes una idea en mente, no dudes en escribirme.", en: "I am always open to new collaborations, interesting projects, or just a good chat. If you have an idea in mind, don't hesitate to write to me." },
  contactButton: { es: "Enviar un correo", en: "Send an email" }
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
  const toggleLanguage = () => {
    setLanguage((prev) => prev === "es" ? "en" : "es");
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
import * as React3 from "react";

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
  const cardStyle = {
    "--story-accent-color": storyColor,
    "--story-icon-url": `url("${story.backgrounds.cardIcon}")`
  };
  const date = new Date(story.date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const formattedDate = `${day}-${month}-${year}`;
  const category = t(story.category);
  return /* @__PURE__ */ jsxs("article", { className: "story-card", onClick: () => onSelect(story), style: cardStyle, children: [
    /* @__PURE__ */ jsxs("div", { className: "story-card-grid-header", children: [
      /* @__PURE__ */ jsx2("span", { className: "story-card-category", children: category }),
      /* @__PURE__ */ jsx2("span", { className: "story-card-date", children: formattedDate })
    ] }),
    /* @__PURE__ */ jsx2("div", { className: "story-card-grid-ornament", "aria-hidden": "true", children: /* @__PURE__ */ jsx2(GalleryOrnament, { ornament: story.ornament }) }),
    /* @__PURE__ */ jsx2("div", { className: "story-card-icon", "aria-hidden": "true" }),
    /* @__PURE__ */ jsx2("div", { className: "story-card-content", children: /* @__PURE__ */ jsxs("div", { className: "story-card-text-wrapper", children: [
      /* @__PURE__ */ jsxs("div", { className: "story-card-list-top-row", children: [
        /* @__PURE__ */ jsxs("div", { className: "story-card-title-wrapper", children: [
          /* @__PURE__ */ jsx2("span", { className: "story-card-ornament-list", style: { color: storyColor }, "aria-hidden": "true", children: /* @__PURE__ */ jsx2(GalleryOrnament, { ornament: story.ornament }) }),
          /* @__PURE__ */ jsx2("h3", { className: "story-card-title", children: story.title })
        ] }),
        /* @__PURE__ */ jsx2("p", { className: "story-card-date-list", children: formattedDate })
      ] }),
      /* @__PURE__ */ jsx2("p", { className: "story-card-tagline", children: story.tagline }),
      /* @__PURE__ */ jsxs("div", { className: "story-card-bottom-row", children: [
        /* @__PURE__ */ jsx2("div", { className: "story-card-tags", children: story.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsx2("span", { className: "story-card-tag", children: t(tag) }, tag)) }),
        /* @__PURE__ */ jsx2("span", { className: "story-card-category-list", children: category })
      ] })
    ] }) })
  ] });
};

// components/MobileFilterToggle.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var MobileFilterToggle = ({ onClick }) => {
  const { t } = useLanguage();
  const filterIcon = /* @__PURE__ */ jsx3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx3("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }) });
  return /* @__PURE__ */ jsx3("button", { onClick, className: "mobile-filter-toggle", "aria-label": t("openFilters"), title: t("openFilters"), children: filterIcon });
};

// components/SortToggle.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var SortToggle = ({ currentOrder, onOrderChange }) => {
  const { t } = useLanguage();
  const isNewest = currentOrder === "newest";
  const toggleOrder = () => onOrderChange(isNewest ? "oldest" : "newest");
  const title = t(isNewest ? "sortNewest" : "sortOldest");
  const newestIcon = /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx4("path", { d: "M11 5h4" }),
    /* @__PURE__ */ jsx4("path", { d: "M11 9h7" }),
    /* @__PURE__ */ jsx4("path", { d: "M11 13h10" }),
    /* @__PURE__ */ jsx4("path", { d: "m3 17 3 3 3-3" }),
    /* @__PURE__ */ jsx4("path", { d: "M6 20V4" })
  ] });
  const oldestIcon = /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx4("path", { d: "M11 5h10" }),
    /* @__PURE__ */ jsx4("path", { d: "M11 9h7" }),
    /* @__PURE__ */ jsx4("path", { d: "M11 13h4" }),
    /* @__PURE__ */ jsx4("path", { d: "m3 7 3-3 3 3" }),
    /* @__PURE__ */ jsx4("path", { d: "M6 4v16" })
  ] });
  return /* @__PURE__ */ jsx4("button", { onClick: toggleOrder, className: "control-toggle", "aria-label": title, title, children: isNewest ? oldestIcon : newestIcon });
};

// components/ViewToggle.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var ViewToggle = ({ currentView, onViewChange }) => {
  const { t } = useLanguage();
  const isGrid = currentView === "grid";
  const toggleView = () => onViewChange(isGrid ? "list" : "grid");
  const title = t(isGrid ? "switchToListView" : "switchToGridView");
  const gridIcon = /* @__PURE__ */ jsxs3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx5("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ jsx5("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ jsx5("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ jsx5("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] });
  const listIcon = /* @__PURE__ */ jsxs3("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx5("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
    /* @__PURE__ */ jsx5("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
    /* @__PURE__ */ jsx5("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
    /* @__PURE__ */ jsx5("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
    /* @__PURE__ */ jsx5("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
    /* @__PURE__ */ jsx5("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
  ] });
  return /* @__PURE__ */ jsx5("button", { onClick: toggleView, className: "control-toggle", "aria-label": title, title, children: isGrid ? listIcon : gridIcon });
};

// components/StoryGroupHeader.tsx
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
var StoryGroupHeader = ({ month, year }) => {
  return /* @__PURE__ */ jsx6("div", { className: "story-group-header", children: /* @__PURE__ */ jsxs4("h4", { children: [
    month,
    " ",
    year
  ] }) });
};

// components/FeaturedStories.tsx
import * as React2 from "react";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var { useState: useState2, useMemo, useEffect: useEffect2, useRef } = React2;
var FEATURED_STORY_IDS = ["boa", "faro", "boa-3", "faro-4", "boa-6", "faro-6"];
var AUTOPLAY_INTERVAL = 4e3;
var TRANSITION_DURATION = 600;
var FeaturedStories = ({ onSelectStory, theme }) => {
  const { t } = useLanguage();
  const featuredStories = useMemo(
    () => stories.filter((s) => FEATURED_STORY_IDS.includes(s.id)).sort((a, b) => FEATURED_STORY_IDS.indexOf(a.id) - FEATURED_STORY_IDS.indexOf(b.id)),
    []
  );
  const PADDING_SIZE = featuredStories.length;
  const paddedStories = useMemo(() => {
    if (PADDING_SIZE === 0) return [];
    const start = featuredStories.slice(-PADDING_SIZE);
    const end = featuredStories.slice(0, PADDING_SIZE);
    return [...start, ...featuredStories, ...end];
  }, [featuredStories, PADDING_SIZE]);
  const [activeIndex, setActiveIndex] = useState2(PADDING_SIZE);
  const [isTransitioning, setIsTransitioning] = useState2(false);
  const [transitionEnabled, setTransitionEnabled] = useState2(true);
  const [isHovered, setIsHovered] = useState2(false);
  const intervalRef = useRef(null);
  const listRef = useRef(null);
  const restartAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      handleNav("next");
    }, AUTOPLAY_INTERVAL);
  };
  const handleNav = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setActiveIndex((prev) => prev + (direction === "next" ? 1 : -1));
    restartAutoplay();
  };
  useEffect2(() => {
    if (!isHovered && featuredStories.length > 1 && !isTransitioning) {
      restartAutoplay();
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, isTransitioning, featuredStories.length]);
  useEffect2(() => {
    if (!transitionEnabled) {
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
        setIsTransitioning(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [transitionEnabled]);
  const handleTransitionEnd = (e) => {
    if (e.target !== listRef.current) return;
    const atEnd = activeIndex >= PADDING_SIZE + featuredStories.length;
    const atStart = activeIndex < PADDING_SIZE;
    if (atEnd || atStart) {
      setTransitionEnabled(false);
      setActiveIndex(atEnd ? activeIndex - featuredStories.length : activeIndex + featuredStories.length);
    } else {
      setIsTransitioning(false);
    }
  };
  if (featuredStories.length === 0) return null;
  const realIndex = (activeIndex - PADDING_SIZE + featuredStories.length) % featuredStories.length;
  const currentStory = featuredStories[realIndex];
  const currentTitle = currentStory?.title || "";
  const currentCategory = currentStory ? t(currentStory.category) : "";
  const arrowIcon = /* @__PURE__ */ jsx7("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx7("polyline", { points: "9 18 15 12 9 6" }) });
  return /* @__PURE__ */ jsxs5(
    "div",
    {
      className: "featured-stories-wrapper",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsxs5("div", { className: "featured-carousel-container", children: [
          /* @__PURE__ */ jsx7(
            "button",
            {
              className: "carousel-arrow prev-arrow",
              onClick: () => handleNav("prev"),
              "aria-label": t("previousStory"),
              children: arrowIcon
            }
          ),
          /* @__PURE__ */ jsx7("div", { className: "carousel-viewport", children: /* @__PURE__ */ jsx7(
            "ul",
            {
              ref: listRef,
              className: `featured-stories-list ${!transitionEnabled ? "no-transition" : ""}`,
              onTransitionEnd: handleTransitionEnd,
              style: {
                "--active-index": activeIndex,
                transition: transitionEnabled ? `transform ${TRANSITION_DURATION / 1e3}s var(--ease-out-quart)` : "none"
              },
              children: paddedStories.map((story, index) => {
                const isThisStoryActive = index === activeIndex;
                const key = `${story.id}-${index}`;
                return /* @__PURE__ */ jsx7("li", { children: /* @__PURE__ */ jsx7(
                  "button",
                  {
                    className: `featured-story-item ${isThisStoryActive ? "active" : ""}`,
                    onClick: () => {
                      if (isTransitioning) return;
                      if (isThisStoryActive) {
                        onSelectStory(story);
                      } else {
                        setIsTransitioning(true);
                        setTransitionEnabled(true);
                        setActiveIndex(index);
                      }
                      restartAutoplay();
                    },
                    title: story.title,
                    "aria-label": story.title,
                    style: {
                      "--featured-color": story.color[theme],
                      "--featured-icon-url": `url("${story.backgrounds.cardIcon}")`
                    }
                  }
                ) }, key);
              })
            }
          ) }),
          /* @__PURE__ */ jsx7(
            "button",
            {
              className: "carousel-arrow next-arrow",
              onClick: () => handleNav("next"),
              "aria-label": t("nextStory"),
              children: arrowIcon
            }
          )
        ] }),
        /* @__PURE__ */ jsx7("div", { className: "featured-story-title-container", children: /* @__PURE__ */ jsxs5("div", { className: "featured-story-info", children: [
          /* @__PURE__ */ jsx7("h4", { className: "featured-story-title", children: currentTitle }),
          currentCategory && /* @__PURE__ */ jsx7("p", { className: "featured-story-category", children: currentCategory })
        ] }, currentTitle) })
      ]
    }
  );
};

// components/StoryGallery.tsx
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var { useState: useState3, useEffect: useEffect3, useMemo: useMemo2 } = React3;
var ITEMS_PER_PAGE = 6;
var useTypewriter = (phrases, { typingDelay = 100, deletingDelay = 50, pauseDelay = 2e3 } = {}) => {
  const [index, setIndex] = useState3(0);
  const [subIndex, setSubIndex] = useState3(0);
  const [isDeleting, setIsDeleting] = useState3(false);
  useEffect3(() => {
    if (!phrases || phrases.length === 0 || !phrases[index]) return;
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
  useEffect3(() => {
    setIndex(0);
    setSubIndex(0);
    setIsDeleting(false);
  }, [phrases]);
  if (!phrases || phrases.length === 0 || !phrases[index]) {
    return "";
  }
  return phrases[index].substring(0, subIndex);
};
var StoryGallery = ({ onSelectStory, isVisible, searchQuery, onSearchChange, activeFilter, galleryView, onViewChange, sortOrder, onSortChange, activeTag, activeArchive, onToggleMobileMenu, theme }) => {
  const { t, language } = useLanguage();
  const [visibleItems, setVisibleItems] = useState3(ITEMS_PER_PAGE);
  const subtitles = useMemo2(() => [
    t("subtitle_1"),
    t("subtitle_2"),
    t("subtitle_3"),
    t("subtitle_4")
  ], [language, t]);
  const displayedSubtitle = useTypewriter(subtitles);
  const processedStories = useMemo2(() => {
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
    if (activeArchive) {
      const [year, month] = activeArchive.split("-").map(Number);
      filteredStories = filteredStories.filter((story) => {
        const storyDate = new Date(story.date);
        return storyDate.getFullYear() === year && storyDate.getMonth() + 1 === month;
      });
    }
    const sortedStories = [...filteredStories].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
    return sortedStories;
  }, [searchQuery, activeFilter, activeTag, activeArchive, sortOrder, t]);
  useEffect3(() => {
    setVisibleItems(ITEMS_PER_PAGE);
  }, [searchQuery, activeFilter, activeTag, sortOrder, activeArchive]);
  const storiesToDisplay = useMemo2(() => {
    return processedStories.slice(0, visibleItems);
  }, [processedStories, visibleItems]);
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + ITEMS_PER_PAGE);
  };
  const canLoadMore = visibleItems < processedStories.length;
  const renderGalleryContent = () => {
    if (storiesToDisplay.length === 0) {
      return /* @__PURE__ */ jsxs6("div", { className: "no-results-container", children: [
        /* @__PURE__ */ jsx8("div", { className: "no-results-icon", "aria-hidden": "true", children: /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx8("circle", { cx: "11", cy: "11", r: "8" }),
          /* @__PURE__ */ jsx8("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" }),
          /* @__PURE__ */ jsx8("path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 1.6-1.2 2.4-2.35 3.12" }),
          /* @__PURE__ */ jsx8("path", { d: "M12 17h.01" })
        ] }) }),
        /* @__PURE__ */ jsx8("h3", { children: t("noResultsTitle") }),
        /* @__PURE__ */ jsx8("p", { children: t("noResultsMessage") })
      ] });
    }
    const groupedStories = {};
    const groupOrder = [];
    storiesToDisplay.forEach((story) => {
      const date = new Date(story.date);
      const monthName = date.toLocaleString(language === "es" ? "es-ES" : "en-US", { month: "long" });
      const year = date.getFullYear();
      const groupKey = `${year}-${monthName}`;
      if (!groupedStories[groupKey]) {
        groupedStories[groupKey] = [];
        groupOrder.push(groupKey);
      }
      groupedStories[groupKey].push(story);
    });
    return groupOrder.map((groupKey) => {
      const storiesInGroup = groupedStories[groupKey];
      const firstStoryDate = new Date(storiesInGroup[0].date);
      const monthName = firstStoryDate.toLocaleString(language === "es" ? "es-ES" : "en-US", { month: "long" });
      const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
      const year = firstStoryDate.getFullYear();
      return /* @__PURE__ */ jsxs6(React3.Fragment, { children: [
        /* @__PURE__ */ jsx8(StoryGroupHeader, { month: capitalizedMonth, year }),
        /* @__PURE__ */ jsx8("div", { className: "story-card-group-wrapper", children: storiesInGroup.map((story) => /* @__PURE__ */ jsx8(StoryCard, { story, onSelect: onSelectStory, theme }, story.id)) })
      ] }, groupKey);
    });
  };
  return /* @__PURE__ */ jsxs6("section", { className: `view story-gallery ${!isVisible ? "hidden" : ""}`, "aria-hidden": !isVisible, children: [
    /* @__PURE__ */ jsxs6("div", { className: "gallery-header-container", children: [
      /* @__PURE__ */ jsxs6("header", { className: "gallery-header", children: [
        /* @__PURE__ */ jsx8("div", { className: "gallery-header-top", children: /* @__PURE__ */ jsx8("h1", { children: t("anthologyTitle") }) }),
        /* @__PURE__ */ jsx8("p", { className: "typewriter-subtitle-container", children: /* @__PURE__ */ jsx8("span", { className: "typewriter-subtitle", children: displayedSubtitle }) })
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "gallery-actions-bar", children: [
        /* @__PURE__ */ jsx8("div", { className: "search-bar-gallery", children: /* @__PURE__ */ jsx8(
          "input",
          {
            type: "search",
            placeholder: t("searchPlaceholder"),
            value: searchQuery,
            onChange: (e) => onSearchChange(e.target.value),
            "aria-label": "Buscar historias"
          }
        ) }),
        /* @__PURE__ */ jsxs6("div", { className: "gallery-controls", children: [
          /* @__PURE__ */ jsx8(MobileFilterToggle, { onClick: onToggleMobileMenu }),
          /* @__PURE__ */ jsx8(SortToggle, { currentOrder: sortOrder, onOrderChange: onSortChange }),
          /* @__PURE__ */ jsx8(ViewToggle, { currentView: galleryView, onViewChange })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { className: `story-gallery-grid view-${galleryView}`, children: [
      /* @__PURE__ */ jsx8(FeaturedStories, { onSelectStory, theme }),
      renderGalleryContent()
    ] }),
    canLoadMore && /* @__PURE__ */ jsx8("div", { className: "load-more-container", children: /* @__PURE__ */ jsxs6("button", { onClick: handleLoadMore, className: "load-more-button", children: [
      /* @__PURE__ */ jsxs6("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
        /* @__PURE__ */ jsx8("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
        /* @__PURE__ */ jsx8("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
      ] }),
      t("loadMore")
    ] }) })
  ] });
};

// components/StoryDetailsMobile.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var StoryDetailsMobile = ({ currentStory, onTagSelect }) => {
  const { t, language } = useLanguage();
  const locale = language === "es" ? "es-ES" : "en-US";
  return /* @__PURE__ */ jsxs7("div", { className: "story-details-mobile", children: [
    /* @__PURE__ */ jsxs7("div", { className: "story-details-mobile-meta", children: [
      /* @__PURE__ */ jsxs7("div", { className: "meta-item", children: [
        /* @__PURE__ */ jsxs7("strong", { children: [
          t("category"),
          ":"
        ] }),
        " ",
        t(currentStory.category)
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "meta-item", children: [
        /* @__PURE__ */ jsxs7("strong", { children: [
          t("author"),
          ":"
        ] }),
        /* @__PURE__ */ jsx9("a", { href: "https://joaquingalasso.com", target: "_blank", rel: "noopener noreferrer", children: t("authorName") })
      ] }),
      /* @__PURE__ */ jsxs7("div", { className: "meta-item", children: [
        /* @__PURE__ */ jsxs7("strong", { children: [
          t("published"),
          ":"
        ] }),
        " ",
        new Date(currentStory.date).toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" })
      ] })
    ] }),
    currentStory.tags.length > 0 && /* @__PURE__ */ jsx9("div", { className: "story-details-tags", children: /* @__PURE__ */ jsx9("div", { className: "tags-list", children: currentStory.tags.map((tag) => /* @__PURE__ */ jsx9("button", { onClick: () => onTagSelect(tag), className: "tag-item", children: t(tag) }, tag)) }) })
  ] });
};

// components/ContentRenderer.tsx
import * as React6 from "react";

// components/CustomAudioPlayer.tsx
import * as React4 from "react";

// utils/helpers.ts
var formatTime = (seconds) => {
  if (isNaN(seconds)) return "00:00";
  const floorSeconds = Math.floor(seconds);
  const min = Math.floor(floorSeconds / 60);
  const sec = floorSeconds % 60;
  return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
};

// components/CustomAudioPlayer.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var { useRef: useRef2, useState: useState4 } = React4;
var CustomAudioPlayer = ({ src, title, caption }) => {
  const audioRef = useRef2(null);
  const [isPlaying, setIsPlaying] = useState4(false);
  const [duration, setDuration] = useState4(0);
  const [currentTime, setCurrentTime] = useState4(0);
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
  const playerElement = /* @__PURE__ */ jsxs8("div", { className: "custom-audio-player-container", children: [
    /* @__PURE__ */ jsx10(
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
    /* @__PURE__ */ jsx10("button", { onClick: togglePlayPause, className: "play-pause-button", "aria-label": isPlaying ? t("pause") : t("play"), children: isPlaying ? "\u275A\u275A" : "\u25B6" }),
    /* @__PURE__ */ jsxs8("div", { className: "audio-timeline", children: [
      /* @__PURE__ */ jsx10("div", { className: "progress-bar-container", onClick: handleSeek, children: /* @__PURE__ */ jsx10("div", { className: "progress-bar", style: { width: `${progress}%` } }) }),
      /* @__PURE__ */ jsxs8("div", { className: "time-display", children: [
        /* @__PURE__ */ jsx10("span", { children: formatTime(currentTime) }),
        " / ",
        /* @__PURE__ */ jsx10("span", { children: formatTime(duration) })
      ] })
    ] })
  ] });
  return /* @__PURE__ */ jsxs8("figure", { className: "content-figure audio-figure", "aria-label": `${t("audioPlayerFor")} ${title}`, children: [
    playerElement,
    caption && /* @__PURE__ */ jsx10("figcaption", { children: caption })
  ] });
};

// components/LinkPreview.tsx
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var LinkPreview = ({ url, title, description, image }) => {
  const domain = new URL(url).hostname;
  return /* @__PURE__ */ jsxs9("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "link-preview-card", children: [
    image && /* @__PURE__ */ jsx11("div", { className: "link-preview-image", children: /* @__PURE__ */ jsx11("img", { src: image, alt: title, loading: "lazy" }) }),
    /* @__PURE__ */ jsxs9("div", { className: "link-preview-content", children: [
      /* @__PURE__ */ jsx11("p", { className: "link-preview-title", children: title }),
      /* @__PURE__ */ jsx11("p", { className: "link-preview-description", children: description }),
      /* @__PURE__ */ jsx11("p", { className: "link-preview-url", children: domain })
    ] })
  ] });
};

// components/Collapsible.tsx
import * as React5 from "react";
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
var { useState: useState5, useRef: useRef3, useEffect: useEffect4 } = React5;
var Collapsible = ({ title, initiallyOpen = false, content }) => {
  const [isOpen, setIsOpen] = useState5(initiallyOpen);
  const contentRef = useRef3(null);
  const [contentHeight, setContentHeight] = useState5(0);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect4(() => {
    if (isOpen && contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    } else {
      setContentHeight(0);
    }
  }, [isOpen, content]);
  useEffect4(() => {
    const handleResize = () => {
      if (isOpen && contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);
  return /* @__PURE__ */ jsxs10("div", { className: `collapsible-container ${isOpen ? "open" : ""}`, children: [
    /* @__PURE__ */ jsxs10("button", { className: "collapsible-trigger", onClick: toggleOpen, "aria-expanded": isOpen, children: [
      /* @__PURE__ */ jsx12("span", { className: "collapsible-title", children: title }),
      /* @__PURE__ */ jsx12("span", { className: "collapsible-icon", "aria-hidden": "true" })
    ] }),
    /* @__PURE__ */ jsx12(
      "div",
      {
        className: "collapsible-content-wrapper",
        style: { height: `${contentHeight}px` },
        children: /* @__PURE__ */ jsx12("div", { ref: contentRef, className: "collapsible-content", children: /* @__PURE__ */ jsx12(ContentRenderer, { content }) })
      }
    )
  ] });
};

// components/Timeline.tsx
import { jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
var Timeline = ({ events }) => {
  return /* @__PURE__ */ jsx13("div", { className: "timeline-container", children: events.map((event, index) => /* @__PURE__ */ jsxs11("div", { className: "timeline-item", children: [
    /* @__PURE__ */ jsx13("div", { className: "timeline-marker" }),
    /* @__PURE__ */ jsxs11("div", { className: "timeline-content", children: [
      /* @__PURE__ */ jsx13("p", { className: "timeline-date", children: event.date }),
      /* @__PURE__ */ jsx13("h4", { className: "timeline-title", dangerouslySetInnerHTML: { __html: event.title } }),
      /* @__PURE__ */ jsx13("p", { className: "timeline-description", dangerouslySetInnerHTML: { __html: event.description } })
    ] })
  ] }, index)) });
};

// components/ContentRenderer.tsx
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
var renderBlock = (block, index) => {
  switch (block.type) {
    case "paragraph":
      return /* @__PURE__ */ jsx14("p", { dangerouslySetInnerHTML: { __html: block.html } }, index);
    case "heading":
      return /* @__PURE__ */ jsx14("h2", { dangerouslySetInnerHTML: { __html: block.html } }, index);
    case "blockquote":
      return /* @__PURE__ */ jsx14("blockquote", { className: block.style || "", dangerouslySetInnerHTML: { __html: block.html } }, index);
    case "list":
      const items = block.items.map((item, i) => /* @__PURE__ */ jsx14("li", { dangerouslySetInnerHTML: { __html: item } }, i));
      return block.style === "ordered" ? /* @__PURE__ */ jsx14("ol", { children: items }, index) : /* @__PURE__ */ jsx14("ul", { children: items }, index);
    case "dialogue":
      return /* @__PURE__ */ jsxs12("div", { children: [
        /* @__PURE__ */ jsx14("p", { className: "dialogue", dangerouslySetInnerHTML: { __html: block.html } }),
        /* @__PURE__ */ jsx14("p", { className: "dialogue-attribution", children: block.attribution })
      ] }, index);
    case "image":
      return /* @__PURE__ */ jsxs12("figure", { className: "content-figure", children: [
        /* @__PURE__ */ jsx14("img", { src: block.src, alt: block.alt }),
        block.caption && /* @__PURE__ */ jsx14("figcaption", { children: block.caption })
      ] }, index);
    case "gallery":
      return /* @__PURE__ */ jsxs12("figure", { className: "content-figure", children: [
        /* @__PURE__ */ jsx14("div", { className: "image-gallery", children: block.images.map((img, i) => /* @__PURE__ */ jsx14("img", { src: img.src, alt: img.alt }, i)) }),
        block.caption && /* @__PURE__ */ jsx14("figcaption", { children: block.caption })
      ] }, index);
    case "video":
      const videoSrc = block.provider === "youtube" ? `https://www.youtube.com/embed/${block.src}` : block.src;
      return /* @__PURE__ */ jsxs12("figure", { className: "content-figure", children: [
        /* @__PURE__ */ jsx14("div", { className: "video-wrapper", children: block.provider === "youtube" ? /* @__PURE__ */ jsx14(
          "iframe",
          {
            src: videoSrc,
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true,
            title: "Embedded YouTube video"
          }
        ) : /* @__PURE__ */ jsx14("video", { controls: true, src: videoSrc }) }),
        block.caption && /* @__PURE__ */ jsx14("figcaption", { children: block.caption })
      ] }, index);
    case "audio":
      return /* @__PURE__ */ jsx14(CustomAudioPlayer, { src: block.src, title: block.title, caption: block.caption }, index);
    case "code":
      return /* @__PURE__ */ jsxs12("figure", { className: "content-figure code-figure", children: [
        /* @__PURE__ */ jsx14("pre", { children: /* @__PURE__ */ jsx14("code", { className: `language-${block.language}`, children: block.code.trim() }) }),
        block.caption && /* @__PURE__ */ jsx14("figcaption", { children: block.caption })
      ] }, index);
    case "table":
      return /* @__PURE__ */ jsxs12("figure", { className: "content-figure table-figure", children: [
        /* @__PURE__ */ jsx14("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxs12("table", { children: [
          /* @__PURE__ */ jsx14("thead", { children: /* @__PURE__ */ jsx14("tr", { children: block.headers.map((header, hIndex) => /* @__PURE__ */ jsx14("th", { dangerouslySetInnerHTML: { __html: header } }, hIndex)) }) }),
          /* @__PURE__ */ jsx14("tbody", { children: block.rows.map((row, rIndex) => /* @__PURE__ */ jsx14("tr", { children: row.map((cell, cIndex) => /* @__PURE__ */ jsx14("td", { dangerouslySetInnerHTML: { __html: cell } }, cIndex)) }, rIndex)) })
        ] }) }),
        block.caption && /* @__PURE__ */ jsx14("figcaption", { children: block.caption })
      ] }, index);
    case "sourcedQuote":
      return /* @__PURE__ */ jsxs12("figure", { className: "sourced-quote", children: [
        /* @__PURE__ */ jsx14("blockquote", { dangerouslySetInnerHTML: { __html: block.html } }),
        /* @__PURE__ */ jsxs12("figcaption", { children: [
          "\u2014 ",
          block.sourceUrl ? /* @__PURE__ */ jsx14("a", { href: block.sourceUrl, target: "_blank", rel: "noopener noreferrer", children: block.source }) : block.source
        ] })
      ] }, index);
    case "ornament": {
      const { variant = "default", value, caption } = block;
      const renderOrnamentContent = () => {
        switch (variant) {
          case "character":
            return /* @__PURE__ */ jsx14("span", { children: value });
          case "svg":
            return /* @__PURE__ */ jsx14("span", { className: "ornament-svg", dangerouslySetInnerHTML: { __html: value || "" } });
          case "default":
          default:
            return /* @__PURE__ */ jsx14("span", {});
        }
      };
      const ornamentDiv = /* @__PURE__ */ jsx14("div", { className: "cul-de-lampe", children: renderOrnamentContent() });
      if (caption) {
        return /* @__PURE__ */ jsxs12("figure", { className: "content-figure ornament-figure", children: [
          ornamentDiv,
          /* @__PURE__ */ jsx14("figcaption", { children: caption })
        ] }, index);
      }
      return React6.cloneElement(ornamentDiv, { key: index });
    }
    case "linkPreview":
      return /* @__PURE__ */ jsx14(LinkPreview, { ...block }, index);
    case "pullQuote":
      return /* @__PURE__ */ jsx14(
        "blockquote",
        {
          className: `pull-quote align-${block.alignment || "full"}`,
          dangerouslySetInnerHTML: { __html: block.html }
        },
        index
      );
    case "sidenote":
      return /* @__PURE__ */ jsx14("aside", { className: "sidenote", dangerouslySetInnerHTML: { __html: block.html } }, index);
    case "collapsible":
      return /* @__PURE__ */ jsx14(Collapsible, { ...block }, index);
    case "timeline":
      return /* @__PURE__ */ jsx14(Timeline, { ...block }, index);
    default:
      return null;
  }
};
var ContentRenderer = ({ content }) => {
  return /* @__PURE__ */ jsx14("div", { className: "story-content", children: content.map(renderBlock) });
};

// components/ShareButtons.tsx
import { jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
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
  const twitterIcon = /* @__PURE__ */ jsx15("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "currentColor", children: /* @__PURE__ */ jsx15("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
  const facebookIcon = /* @__PURE__ */ jsx15("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "currentColor", children: /* @__PURE__ */ jsx15("path", { d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" }) });
  const linkIcon = /* @__PURE__ */ jsxs13("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx15("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" }),
    /* @__PURE__ */ jsx15("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" })
  ] });
  return /* @__PURE__ */ jsxs13("div", { className: "share-buttons", children: [
    /* @__PURE__ */ jsx15("a", { href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, target: "_blank", rel: "noopener noreferrer", "aria-label": t("shareOnTwitter"), className: "share-button twitter", children: twitterIcon }),
    /* @__PURE__ */ jsx15("a", { href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, target: "_blank", rel: "noopener noreferrer", "aria-label": t("shareOnFacebook"), className: "share-button facebook", children: facebookIcon }),
    /* @__PURE__ */ jsx15("button", { onClick: copyLink, "aria-label": t("copyLink"), className: "share-button copy-link", children: linkIcon })
  ] });
};

// components/RelatedStoriesMobile.tsx
import * as React7 from "react";
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var { useMemo: useMemo3 } = React7;
var RelatedStoriesMobile = ({ currentStory, allStories, onSelectStory }) => {
  const { t } = useLanguage();
  const relatedStories = useMemo3(() => {
    return allStories.filter((s) => s.id !== currentStory.id).slice(0, 3);
  }, [currentStory, allStories]);
  if (relatedStories.length === 0) return null;
  return /* @__PURE__ */ jsxs14("section", { className: "related-stories-mobile", children: [
    /* @__PURE__ */ jsx16("h3", { children: t("relatedStoriesTitle") }),
    /* @__PURE__ */ jsx16("ul", { children: relatedStories.map((story) => /* @__PURE__ */ jsx16("li", { children: /* @__PURE__ */ jsxs14("button", { onClick: () => onSelectStory(story), className: "related-story-button", children: [
      /* @__PURE__ */ jsx16("span", { className: "related-story-title", children: story.title }),
      /* @__PURE__ */ jsx16("span", { className: "related-story-category", children: t(story.category) })
    ] }) }, story.id)) })
  ] });
};

// components/Giscus.tsx
import * as React8 from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var { useEffect: useEffect5, useRef: useRef4 } = React8;
var GISCUS_CONFIG = {
  repo: "joaquingalasso/antilogia",
  repoId: "R_kgDOPSlhsQ",
  category: "Announcements",
  categoryId: "DIC_kwDOPSlhsc4CtZy7"
};
var Giscus = ({ storyId, theme, lang }) => {
  const ref = useRef4(null);
  useEffect5(() => {
    if (!ref.current) return;
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
    script.setAttribute("data-term", storyId);
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-lang", lang);
    script.setAttribute("data-loading", "lazy");
    const themeUrl = `${window.location.origin}${theme === "dark" ? "/giscus-theme-dark.json" : "/giscus-theme-light.json"}`;
    script.setAttribute("data-theme", themeUrl);
    ref.current.appendChild(script);
  }, [storyId, lang]);
  useEffect5(() => {
    const sendThemeToGiscus = (newTheme) => {
      const iframe2 = ref.current?.querySelector("iframe.giscus-frame");
      if (iframe2) {
        const themeUrl = `${window.location.origin}${newTheme === "dark" ? "/giscus-theme-dark.json" : "/giscus-theme-light.json"}`;
        const postTheme = () => {
          iframe2.contentWindow?.postMessage(
            { giscus: { setConfig: { theme: themeUrl } } },
            "https://giscus.app"
          );
        };
        if (iframe2.contentWindow) {
          iframe2.addEventListener("load", postTheme, { once: true });
        } else {
          postTheme();
        }
      }
    };
    const iframe = ref.current?.querySelector("iframe.giscus-frame");
    if (iframe) {
      sendThemeToGiscus(theme);
    } else {
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of Array.from(mutation.addedNodes)) {
            if (node instanceof HTMLIFrameElement && node.classList.contains("giscus-frame")) {
              sendThemeToGiscus(theme);
              observer.disconnect();
              return;
            }
          }
        }
      });
      if (ref.current) {
        observer.observe(ref.current, { childList: true });
      }
      return () => observer.disconnect();
    }
  }, [theme]);
  return /* @__PURE__ */ jsx17("div", { ref, className: "giscus" });
};

// components/StoryView.tsx
import { jsx as jsx18, jsxs as jsxs15 } from "react/jsx-runtime";
var StoryView = ({ story, onBack, isVisible, allStories, onSelectStory, onTagSelect, theme }) => {
  const { t, language } = useLanguage();
  if (!story) return null;
  const storyUrl = `${window.location.origin}${window.location.pathname}#/story/${story.id}`;
  const headerStyle = {
    "--story-icon-url": `url("${story.backgrounds.storyHeader}")`
  };
  const sharingStyle = {
    "--sharing-area-bg-url": `url("${story.backgrounds.sharingArea}")`
  };
  const date = new Date(story.date);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const formattedDate = `${day}-${month}-${year}`;
  return /* @__PURE__ */ jsxs15("article", { className: `view story-view ${!isVisible ? "hidden" : ""}`, "aria-hidden": !isVisible, children: [
    /* @__PURE__ */ jsx18("div", { className: "story-view-top-bar", children: /* @__PURE__ */ jsxs15("button", { onClick: onBack, className: "back-button", children: [
      "\u2190 ",
      t("backToAnthology")
    ] }) }),
    /* @__PURE__ */ jsxs15("header", { className: "story-header", style: headerStyle, children: [
      /* @__PURE__ */ jsx18("p", { className: "date", children: formattedDate }),
      /* @__PURE__ */ jsx18("h1", { children: story.title }),
      /* @__PURE__ */ jsx18("p", { className: "tagline", children: story.tagline }),
      /* @__PURE__ */ jsx18(StoryDetailsMobile, { currentStory: story, onTagSelect })
    ] }),
    /* @__PURE__ */ jsx18(ContentRenderer, { content: story.content }),
    /* @__PURE__ */ jsxs15("div", { className: "story-sharing-area", style: sharingStyle, children: [
      /* @__PURE__ */ jsx18(ShareButtons, { storyUrl, title: story.title }),
      /* @__PURE__ */ jsx18(RelatedStoriesMobile, { currentStory: story, allStories, onSelectStory })
    ] }),
    /* @__PURE__ */ jsxs15("section", { className: "comments-section", children: [
      /* @__PURE__ */ jsx18("h2", { children: t("comments") }),
      /* @__PURE__ */ jsx18(Giscus, { storyId: story.id, theme, lang: language })
    ] })
  ] });
};

// components/FilterAside.tsx
import { jsx as jsx19, jsxs as jsxs16 } from "react/jsx-runtime";
var FilterAside = ({
  activeFilter,
  onFilterChange,
  categories,
  activeTag,
  onTagChange,
  tags,
  archives,
  activeArchive,
  onArchiveChange,
  selectedArchiveYear,
  availableArchiveYears,
  onArchiveYearChange
}) => {
  const { t } = useLanguage();
  const currentYearIndex = selectedArchiveYear ? availableArchiveYears.indexOf(selectedArchiveYear) : -1;
  const canGoToNextYear = currentYearIndex > 0;
  const canGoToPrevYear = currentYearIndex < availableArchiveYears.length - 1;
  return /* @__PURE__ */ jsxs16("aside", { className: "filter-aside", "aria-label": "Filtros y b\xFAsqueda", children: [
    /* @__PURE__ */ jsxs16("div", { className: "filter-group", children: [
      /* @__PURE__ */ jsx19("h3", { children: t("categories") }),
      /* @__PURE__ */ jsx19("button", { onClick: () => onFilterChange("All"), className: activeFilter === "All" ? "active" : "", children: t("allCategories") }),
      categories.map((category) => /* @__PURE__ */ jsx19("button", { onClick: () => onFilterChange(category), className: activeFilter === category ? "active" : "", children: t(category) }, category))
    ] }),
    /* @__PURE__ */ jsxs16("div", { className: "filter-group", children: [
      /* @__PURE__ */ jsx19("h3", { children: t("tags") }),
      /* @__PURE__ */ jsx19("div", { className: "tags-list-filter", children: tags.map(({ tag, count }) => /* @__PURE__ */ jsxs16("button", { onClick: () => onTagChange(tag), className: `tag-filter-item ${activeTag === tag ? "active" : ""}`, children: [
        /* @__PURE__ */ jsx19("span", { className: "tag-count", children: count }),
        /* @__PURE__ */ jsx19("span", { className: "tag-name", children: t(tag) })
      ] }, tag)) })
    ] }),
    /* @__PURE__ */ jsxs16("div", { className: "filter-group", children: [
      /* @__PURE__ */ jsx19("h3", { children: t("archive") }),
      selectedArchiveYear && availableArchiveYears.length > 0 && /* @__PURE__ */ jsxs16("div", { className: "archive-year-selector", children: [
        /* @__PURE__ */ jsx19(
          "button",
          {
            className: "year-nav-button",
            onClick: () => onArchiveYearChange("prev"),
            disabled: !canGoToPrevYear,
            "aria-label": "A\xF1o anterior",
            children: "\u25C0"
          }
        ),
        /* @__PURE__ */ jsx19("span", { className: "current-year", children: selectedArchiveYear }),
        /* @__PURE__ */ jsx19(
          "button",
          {
            className: "year-nav-button",
            onClick: () => onArchiveYearChange("next"),
            disabled: !canGoToNextYear,
            "aria-label": "A\xF1o siguiente",
            children: "\u25B6"
          }
        )
      ] }),
      /* @__PURE__ */ jsx19("div", { className: "archive-list", children: archives.map(({ key, month, count }) => /* @__PURE__ */ jsxs16(
        "button",
        {
          onClick: () => onArchiveChange(key),
          className: `archive-item ${activeArchive === key ? "active" : ""}`,
          children: [
            /* @__PURE__ */ jsx19("span", { className: "archive-date", children: month }),
            /* @__PURE__ */ jsx19("span", { className: "archive-count", children: count })
          ]
        },
        key
      )) })
    ] })
  ] });
};

// components/StoryAside.tsx
import * as React9 from "react";
import { jsx as jsx20, jsxs as jsxs17 } from "react/jsx-runtime";
var { useMemo: useMemo4 } = React9;
var StoryAside = ({ currentStory, allStories, onSelectStory, onTagSelect }) => {
  const { t, language } = useLanguage();
  const locale = language === "es" ? "es-ES" : "en-US";
  const relatedStories = useMemo4(() => {
    return allStories.filter((s) => s.id !== currentStory.id).slice(0, 3);
  }, [currentStory, allStories]);
  return /* @__PURE__ */ jsxs17("aside", { className: "story-aside", "aria-label": "Informaci\xF3n del relato y sugerencias", children: [
    /* @__PURE__ */ jsxs17("div", { className: "story-details-group", children: [
      /* @__PURE__ */ jsx20("h3", { children: t("storyDetails") }),
      /* @__PURE__ */ jsxs17("p", { children: [
        /* @__PURE__ */ jsxs17("strong", { children: [
          t("category"),
          ":"
        ] }),
        " ",
        t(currentStory.category)
      ] }),
      /* @__PURE__ */ jsxs17("p", { children: [
        /* @__PURE__ */ jsxs17("strong", { children: [
          t("author"),
          ":"
        ] }),
        /* @__PURE__ */ jsxs17("a", { href: "https://joaquingalasso.com", target: "_blank", rel: "noopener noreferrer", children: [
          " ",
          t("authorName")
        ] })
      ] }),
      /* @__PURE__ */ jsxs17("p", { children: [
        /* @__PURE__ */ jsxs17("strong", { children: [
          t("published"),
          ":"
        ] }),
        " ",
        new Date(currentStory.date).toLocaleDateString(locale, { year: "numeric", month: "short", day: "numeric" })
      ] }),
      currentStory.tags.length > 0 && /* @__PURE__ */ jsx20("div", { className: "story-details-tags", children: /* @__PURE__ */ jsx20("div", { className: "tags-list", children: currentStory.tags.map((tag) => /* @__PURE__ */ jsx20("button", { onClick: () => onTagSelect(tag), className: "tag-item", children: t(tag) }, tag)) }) })
    ] }),
    relatedStories.length > 0 && /* @__PURE__ */ jsxs17("div", { className: "related-stories-group", children: [
      /* @__PURE__ */ jsx20("h3", { children: t("relatedStoriesTitle") }),
      /* @__PURE__ */ jsx20("ul", { children: relatedStories.map((story) => /* @__PURE__ */ jsx20("li", { children: /* @__PURE__ */ jsxs17("button", { onClick: () => onSelectStory(story), className: "related-story-button", children: [
        /* @__PURE__ */ jsx20("span", { className: "related-story-title", children: story.title }),
        /* @__PURE__ */ jsx20("span", { className: "related-story-category", children: t(story.category) })
      ] }) }, story.id)) })
    ] })
  ] });
};

// components/MobileFilterPanel.tsx
import { jsx as jsx21, jsxs as jsxs18 } from "react/jsx-runtime";
var MobileFilterPanel = ({
  isOpen,
  onClose,
  ...props
}) => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx21("div", { className: `mobile-filter-overlay ${isOpen ? "open" : ""}`, onClick: onClose, role: "dialog", "aria-modal": "true", "aria-hidden": !isOpen, children: /* @__PURE__ */ jsxs18("aside", { className: "mobile-filter-panel", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxs18("header", { className: "mobile-filter-header", children: [
      /* @__PURE__ */ jsx21("h3", { children: t("filter") }),
      /* @__PURE__ */ jsx21("button", { onClick: onClose, className: "close-button", "aria-label": t("close"), children: "\xD7" })
    ] }),
    /* @__PURE__ */ jsx21("div", { className: "mobile-filter-content", children: /* @__PURE__ */ jsx21(FilterAside, { ...props }) })
  ] }) });
};

// components/Icons.tsx
import { jsx as jsx22, jsxs as jsxs19 } from "react/jsx-runtime";
var RssIcon = ({ width = 18, height = 18 }) => /* @__PURE__ */ jsx22(
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
    children: /* @__PURE__ */ jsxs19("g", { children: [
      /* @__PURE__ */ jsx22("path", { d: "M-271,360v48.9c31.9,0,62.1,12.6,84.7,35.2c22.6,22.6,35.1,52.8,35.1,84.8v0.1h49.1c0-46.6-19-88.7-49.6-119.4\n		C-182.2,379-224.4,360.1-271,360z" }),
      /* @__PURE__ */ jsx22("path", { d: "M-237,460.9c-9.4,0-17.8,3.8-24,10s-10,14.6-10,24c0,9.3,3.8,17.7,10,23.9c6.2,6.1,14.6,9.9,24,9.9s17.8-3.7,24-9.9\n		s10-14.6,10-23.9c0-9.4-3.8-17.8-10-24C-219.2,464.7-227.6,460.9-237,460.9z" }),
      /* @__PURE__ */ jsx22("path", { d: "M-90.1,348.1c-46.3-46.4-110.2-75.1-180.8-75.1v48.9C-156.8,322-64.1,414.9-64,529h49C-15,458.4-43.7,394.5-90.1,348.1z" })
    ] })
  }
);
var LinkedInIcon = ({ width = 24, height = 24 }) => /* @__PURE__ */ jsx22("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx22("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) });
var GitHubIcon = ({ width = 24, height = 24 }) => /* @__PURE__ */ jsx22("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx22("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) });
var BehanceIcon = ({ width = 24, height = 24 }) => /* @__PURE__ */ jsx22("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx22("path", { d: "M19.999 5.688h-5.632c-.422 0-1.332.889-1.332 1.688v.255h6.082c.312 0 .584.269.584.594s-.273.594-.584.594h-6.082v1.938h5.36c.312 0 .583.281.583.594s-.272.594-.583.594h-5.36v3.281c0 1.281-1.047 2.312-2.327 2.312h-3.341c-.938 0-1.688-.812-1.688-1.781v-7.156c0-2.812 2.312-5.031 5.031-5.031h4.282c1.406 0 2.625.938 2.625 2.281 0 1-.5 1.656-.968 1.938.657.156 1.282-.281 1.282-.968 0-1.125-.906-2.031-2.031-2.031zm-6.281 2.531h-1.688v1.875h1.688c.625 0 1.125-.5 1.125-1s-.5-1-1.125-1zm-1.688 3.094h1.938c.75 0 1.344.594 1.344 1.344s-.594 1.344-1.344 1.344h-1.938v-2.688zm10.281-2.25h3v-1.188h-3v1.188z" }) });
var OpenProcessingIcon = ({ width = 24, height = 24 }) => /* @__PURE__ */ jsx22("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx22("path", { d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.332 4.025c1.492.115 2.699.231 4.542.34l-.001.002c-1.393.301-2.316.489-3.923.754-1.163.195-2.247.38-2.923.486v-1.574c.945-.003 1.821-.012 2.305-.008zm-2.668.012v1.545c-2.392.36-4 1.043-4 1.832 0 .782 1.583 1.464 3.947 1.824v1.546c-3.172-.42-5.947-1.393-5.947-2.582 0-1.178 2.748-2.149 5.869-2.579l.131-.014zm11.77.365c1.782.102 3.23.189 3.23.189l.001-.001s-2.049.273-3.669.57c-2.015.373-3.834.697-3.834 1.488 0 .54.671.95 1.968 1.32v1.528s-3.033-.679-3.033-2.053c0-1.42 2.924-2.222 5.337-2.601zm-5.77 13.598c-1.492-.115-2.699-.231-4.542-.34l.001-.002c1.393-.301 2.316-.489 3.923-.754 1.163-.195 2.247-.38 2.923-.486v1.574c-.945.003-1.821.012-2.305.008zm2.668-.012v-1.545c2.392-.36 4-1.043 4-1.832 0-.782-1.583-1.464-3.947-1.824v-1.546c3.172.42 5.947 1.393 5.947-2.582 0-1.178-2.748-2.149-5.869-2.579l-.131.014v7.884z" }) });
var YouTubeIcon = ({ width = 24, height = 24 }) => /* @__PURE__ */ jsx22("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx22("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }) });
var MailIcon = ({ width = 24, height = 24 }) => /* @__PURE__ */ jsxs19("svg", { xmlns: "http://www.w3.org/2000/svg", width, height, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx22("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
  /* @__PURE__ */ jsx22("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
] });

// components/Footer.tsx
import { jsx as jsx23, jsxs as jsxs20 } from "react/jsx-runtime";
var authorPhoto = {
  light: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 275.05 275.06'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23ffefe1; %7D .cls-2 %7B fill: %232b2b2b; %7D .cls-3 %7B fill: %23565656; %7D .cls-4 %7B fill: %23e43c00; %7D %3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M275.05,137.53c0,75.95-61.57,137.53-137.53,137.53S0,213.48,0,137.53,61.57,0,137.53,0s137.53,61.57,137.53,137.53Z'/%3E%3Cg%3E%3Cpath class='cls-2' d='M145.05,27.17c-13.1,2.79-25.1,10.11-34.58,21.31-10.75,12.68-17.11,29.04-18.22,46.55h0c2.22-25.29,19.64-45.04,40.73-45.04,4.11,0,8.17.77,12.05,2.25,4.24,1.63,8.25,4.09,11.87,7.31,2.27,2.02,5.13,3.07,7.99,3.07,2.41,0,4.83-.74,6.9-2.27l.52-.38c1.6-1.18,2.8-2.67,3.6-4.32,2.19-4.53,1.33-10.23-2.73-13.88-8.22-7.39-17.86-12.4-28.14-14.6h0Z'/%3E%3Cpath class='cls-3' d='M144.99,173.85c-3.89.86-7.91,1.3-12,1.3-17.77,0-34.35-8.03-46.69-22.6-11.86-13.99-18.39-32.47-18.39-52.04s6.53-38.04,18.39-52.04c12.34-14.56,28.92-22.59,46.69-22.59,4.08,0,8.11.43,12.06,1.28-13.1,2.79-25.1,10.11-34.57,21.31-10.75,12.68-17.11,29.04-18.21,46.55v.02c-.17,1.8-.24,3.62-.24,5.47s.08,3.67.24,5.47h0c1.09,17.53,7.47,33.89,18.21,46.57,9.47,11.18,21.44,18.51,34.52,21.3Z'/%3E%3Cpath class='cls-2' d='M194.64,213.78c-3.2,18.85-17.11,34.33-35.5,39.13-2.85.74-5.79,1.21-8.83,1.42-1.1.08-2.18.12-3.26.12-15.36,0-29.47-7.28-38.45-19.04-1.61-2.1-2.35-4.54-2.35-6.92s.68-4.55,1.97-6.46c1.32-1.99,3.27-3.57,5.76-4.44,1.43-.5,2.91-.75,4.37-.75,3.79,0,7.48,1.61,9.95,4.64.86,1.04,1.82,2.04,2.85,2.93,4.31,3.74,9.91,5.93,15.88,5.93.27,0,.55,0,.83-.01.27,0,.54-.03.81-.04.54-.03,1.08-.06,1.62-.12h.01c4.04-.25,8.01-.79,11.89-1.59,11.75-2.42,22.64-7.31,31.85-14.35h0c.19-.15.39-.3.58-.45Z'/%3E%3Cpath class='cls-3' d='M195.35,116.7v88.78c0,1.55-.08,3.07-.22,4.58-.23,1.43-.59,2.82-1.07,4.16h0c-9.21,7.05-20.1,11.94-31.85,14.36-3.88.8-7.85,1.34-11.89,1.59h-.01c-.54.05-1.08.09-1.62.12,1.62-.12,3.21-.37,4.73-.79,2.02-.55,3.95-1.37,5.72-2.4,7.26-4.19,12.15-12.03,12.15-20.99v-46.04l-.04.04v-41.39l.04-.21v-1.82h24.06Z'/%3E%3Cpath class='cls-4' d='M195.13,210.06c-.12,1.25-.28,2.5-.49,3.73-.19.15-.39.3-.58.44.48-1.34.84-2.73,1.07-4.16Z'/%3E%3Cpath class='cls-2' d='M171.19,92.59h-33.75c-3.33,0-6.34,1.35-8.52,3.53-2.18,2.19-3.52,5.19-3.52,8.52,0,2.5.75,4.81,2.06,6.74,2.16,3.21,5.83,5.32,9.99,5.32h57.9-24.16v-24.11'/%3E%3Cpath class='cls-2' d='M183.3,92.59h-12.11v24.11h24.16v-12.19c0-.28,0-.58-.03-.85,0-.1-.02-.18-.02-.26-.23-2.29-1.11-4.39-2.46-6.12-1.72-2.22-4.21-3.84-7.08-4.43-.13-.02-.24-.05-.37-.07-.67-.12-1.38-.19-2.09-.19'/%3E%3Cpath class='cls-2' d='M171.25,118.72v41.39c-.37.34-.74.67-1.12,1-.28.24-.57.49-.86.72l-.07.06c-.14.11-.27.21-.4.33-.17.13-.32.26-.48.39-1.02.81-2.04,1.59-3.09,2.32-.39.27-.79.54-1.19.8-.14.09-.26.19-.4.27-.08.05-.15.09-.22.14-.13.09-.26.17-.39.25-.29.2-.59.38-.89.56-.23.15-.48.29-.72.43-.34.2-.69.41-1.04.61-.56.31-1.11.61-1.67.9-.67.35-1.36.69-2.04,1.01-.46.21-.92.42-1.39.62-.08.04-.17.08-.25.11-.39.18-.79.34-1.19.5-.57.23-1.14.46-1.73.66-.58.21-1.15.41-1.74.61h0c-.59.2-1.17.37-1.77.55-.6.18-1.19.33-1.79.49-.6.16-1.2.29-1.81.43-13.08-2.79-25.05-10.12-34.52-21.3-10.75-12.68-17.12-29.04-18.21-46.56,2.22,25.29,19.64,45.06,40.73,45.06,3.21,0,6.35-.2,9.39-.73,1.31-.21,2.58-.51,3.84-.85.14-.04.28-.07.43-.11,11.08-3.16,20.22-11.5,24.6-30.64Z'/%3E%3C/g%3E%3C/svg%3E",
  dark: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 275.05 275.06'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23c6bcb5; %7D .cls-2 %7B fill: %230cafef; %7D .cls-3 %7B fill: %23ffefe1; %7D .cls-4 %7B fill: %232b2b2b; %7D %3C/style%3E%3C/defs%3E%3Cpath class='cls-4' d='M275.05,137.53c0,75.95-61.57,137.53-137.53,137.53S0,213.48,0,137.53,61.57,0,137.53,0s137.53,61.57,137.53,137.53Z'/%3E%3Cg%3E%3Cpath class='cls-3' d='M145.05,27.17c-13.1,2.79-25.1,10.11-34.58,21.31-10.75,12.68-17.11,29.04-18.22,46.55h0c2.22-25.29,19.64-45.04,40.73-45.04,4.11,0,8.17.77,12.05,2.25,4.24,1.63,8.25,4.09,11.87,7.31,2.27,2.02,5.13,3.07,7.99,3.07,2.41,0,4.83-.74,6.9-2.27l.52-.38c1.6-1.18,2.8-2.67,3.6-4.32,2.19-4.53,1.33-10.23-2.73-13.88-8.22-7.39-17.86-12.4-28.14-14.6h0Z'/%3E%3Cpath class='cls-1' d='M144.99,173.85c-3.89.86-7.91,1.3-12,1.3-17.77,0-34.35-8.03-46.69-22.6-11.86-13.99-18.39-32.47-18.39-52.04s6.53-38.04,18.39-52.04c12.34-14.56,28.92-22.59,46.69-22.59,4.08,0,8.11.43,12.06,1.28-13.1,2.79-25.1,10.11-34.57,21.31-10.75,12.68-17.11,29.04-18.21,46.55v.02c-.17,1.8-.24,3.62-.24,5.47s.08,3.67.24,5.47h0c1.09,17.53,7.47,33.89,18.21,46.57,9.47,11.18,21.44,18.51,34.52,21.3Z'/%3E%3Cpath class='cls-3' d='M194.64,213.78c-3.2,18.85-17.11,34.33-35.5,39.13-2.85.74-5.79,1.21-8.83,1.42-1.1.08-2.18.12-3.26.12-15.36,0-29.47-7.28-38.45-19.04-1.61-2.1-2.35-4.54-2.35-6.92s.68-4.55,1.97-6.46c1.32-1.99,3.27-3.57,5.76-4.44,1.43-.5,2.91-.75,4.37-.75,3.79,0,7.48,1.61,9.95,4.64.86,1.04,1.82,2.04,2.85,2.93,4.31,3.74,9.91,5.93,15.88,5.93.27,0,.55,0,.83-.01.27,0,.54-.03.81-.04.54-.03,1.08-.06,1.62-.12h.01c4.04-.25,8.01-.79,11.89-1.59,11.75-2.42,22.64-7.31,31.85-14.35h0c.19-.15.39-.3.58-.45Z'/%3E%3Cpath class='cls-1' d='M195.35,116.7v88.78c0,1.55-.08,3.07-.22,4.58-.23,1.43-.59,2.82-1.07,4.16h0c-9.21,7.05-20.1,11.94-31.85,14.36-3.88.8-7.85,1.34-11.89,1.59h-.01c-.54.05-1.08.09-1.62.12,1.62-.12,3.21-.37,4.73-.79,2.02-.55,3.95-1.37,5.72-2.4,7.26-4.19,12.15-12.03,12.15-20.99v-46.04l-.04.04v-41.39l.04-.21v-1.82h24.06Z'/%3E%3Cpath class='cls-2' d='M195.13,210.06c-.12,1.25-.28,2.5-.49,3.73-.19.15-.39.3-.58.44.48-1.34.84-2.73,1.07-4.16Z'/%3E%3Cpath class='cls-3' d='M171.19,92.59h-33.75c-3.33,0-6.34,1.35-8.52,3.53-2.18,2.19-3.52,5.19-3.52,8.52,0,2.5.75,4.81,2.06,6.74,2.16,3.21,5.83,5.32,9.99,5.32h57.9-24.16v-24.11'/%3E%3Cpath class='cls-3' d='M183.3,92.59h-12.11v24.11h24.16v-12.19c0-.28,0-.58-.03-.85,0-.1-.02-.18-.02-.26-.23-2.29-1.11-4.39-2.46-6.12-1.72-2.22-4.21-3.84-7.08-4.43-.13-.02-.24-.05-.37-.07-.67-.12-1.38-.19-2.09-.19'/%3E%3Cpath class='cls-3' d='M171.25,118.72v41.39c-.37.34-.74.67-1.12,1-.28.24-.57.49-.86.72l-.07.06c-.14.11-.27.21-.4.33-.17.13-.32.26-.48.39-1.02.81-2.04,1.59-3.09,2.32-.39.27-.79.54-1.19.8-.14.09-.26.19-.4.27-.08.05-.15.09-.22.14-.13.09-.26.17-.39.25-.29.2-.59.38-.89.56-.23.15-.48.29-.72.43-.34.2-.69.41-1.04.61-.56.31-1.11.61-1.67.9-.67.35-1.36.69-2.04,1.01-.46.21-.92.42-1.39.62-.08.04-.17.08-.25.11-.39.18-.79.34-1.19.5-.57.23-1.14.46-1.73.66-.58.21-1.15.41-1.74.61h0c-.59.2-1.17.37-1.77.55-.6.18-1.19.33-1.79.49-.6.16-1.2.29-1.81.43-13.08-2.79-25.05-10.12-34.52-21.3-10.75-12.68-17.12-29.04-18.21-46.56,2.22,25.29,19.64,45.06,40.73,45.06,3.21,0,6.35-.2,9.39-.73,1.31-.21,2.58-.51,3.84-.85.14-.04.28-.07.43-.11,11.08-3.16,20.22-11.5,24.6-30.64Z'/%3E%3C/g%3E%3C/svg%3E"
};
var Footer = ({ theme }) => {
  const { t } = useLanguage();
  return /* @__PURE__ */ jsx23("footer", { className: "site-footer", children: /* @__PURE__ */ jsxs20("div", { className: "footer-content", children: [
    /* @__PURE__ */ jsxs20("div", { className: "footer-bio", children: [
      /* @__PURE__ */ jsx23("img", { src: authorPhoto[theme], alt: t("authorName"), className: "author-photo-footer" }),
      /* @__PURE__ */ jsxs20("div", { className: "author-info-footer", children: [
        /* @__PURE__ */ jsx23("h4", { children: /* @__PURE__ */ jsx23("a", { href: "https://joaquingalasso.com", target: "_blank", rel: "noopener noreferrer", children: t("authorName") }) }),
        /* @__PURE__ */ jsx23("p", { children: t("authorBio") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs20("div", { className: "footer-right", children: [
      /* @__PURE__ */ jsx23("div", { className: "footer-copyright", children: /* @__PURE__ */ jsxs20("p", { children: [
        "\xA9 ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        t("copyright")
      ] }) }),
      /* @__PURE__ */ jsxs20("a", { href: "/rss.xml", target: "_blank", rel: "noopener noreferrer", className: "rss-button-footer", children: [
        /* @__PURE__ */ jsx23(RssIcon, { width: 16, height: 16 }),
        /* @__PURE__ */ jsx23("span", { children: t("subscribeToFeed") })
      ] })
    ] })
  ] }) });
};

// components/ScrollProgress.tsx
import * as React10 from "react";
import { Fragment as Fragment3, jsx as jsx24, jsxs as jsxs21 } from "react/jsx-runtime";
var { useState: useState6, useEffect: useEffect6, useCallback } = React10;
var BUTTON_VISIBILITY_THRESHOLD = 25;
var ScrollProgress = () => {
  const [scrollPercentage, setScrollPercentage] = useState6(0);
  const [isButtonVisible, setIsButtonVisible] = useState6(false);
  const { t } = useLanguage();
  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollHeight <= clientHeight) {
      setScrollPercentage(0);
      setIsButtonVisible(false);
      return;
    }
    const percentage = scrollTop / (scrollHeight - clientHeight) * 100;
    setScrollPercentage(percentage);
    setIsButtonVisible(percentage > BUTTON_VISIBILITY_THRESHOLD);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect6(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  const upArrowIcon = /* @__PURE__ */ jsxs21("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx24("path", { d: "M12 19V5" }),
    /* @__PURE__ */ jsx24("polyline", { points: "5 12 12 5 19 12" })
  ] });
  return /* @__PURE__ */ jsxs21(Fragment3, { children: [
    /* @__PURE__ */ jsx24("div", { className: "scroll-progress-bar", style: { width: `${scrollPercentage}%` } }),
    /* @__PURE__ */ jsx24(
      "button",
      {
        className: `back-to-top-button ${isButtonVisible ? "visible" : ""}`,
        onClick: scrollToTop,
        title: t("backToTop"),
        "aria-label": t("backToTop"),
        children: upArrowIcon
      }
    )
  ] });
};

// components/LanguageToggle.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  return /* @__PURE__ */ jsx25(
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

// components/ThemeToggle.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
var ThemeToggle = ({ theme, toggleTheme }) => {
  const { t } = useLanguage();
  const label = t(theme === "light" ? "changeToDarkMode" : "changeToLightMode");
  return /* @__PURE__ */ jsx26(
    "button",
    {
      className: "theme-toggle",
      onClick: toggleTheme,
      "aria-label": label,
      title: label,
      children: /* @__PURE__ */ jsx26("span", { className: `theme-toggle-icon ${theme}` })
    }
  );
};

// components/Navbar.tsx
import { jsx as jsx27, jsxs as jsxs22 } from "react/jsx-runtime";
var LogoLight = () => /* @__PURE__ */ jsxs22("svg", { width: "40", height: "40", viewBox: "0 0 130 230", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx27("defs", { children: /* @__PURE__ */ jsx27("style", { dangerouslySetInnerHTML: { __html: `
              .cls-1 {
                fill: #f17c0a;
              }
        
              .cls-2 {
                fill: #e43c00;
              }
            ` } }) }),
  /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M77.13,1.28c-13.1,2.79-25.1,10.11-34.58,21.31-10.75,12.68-17.11,29.04-18.22,46.55h0c2.22-25.29,19.64-45.04,40.73-45.04,4.11,0,8.17.77,12.05,2.25,4.24,1.63,8.25,4.09,11.87,7.31,2.27,2.02,5.13,3.07,7.99,3.07,2.41,0,4.83-.74,6.9-2.27l.52-.38c1.6-1.18,2.8-2.67,3.6-4.32,2.19-4.53,1.33-10.23-2.73-13.88-8.22-7.39-17.86-12.4-28.14-14.6h0Z" }),
  /* @__PURE__ */ jsx27("path", { className: "cls-1", d: "M77.08,147.96c-3.89.86-7.91,1.3-12,1.3-17.77,0-34.35-8.03-46.69-22.6C6.53,112.68,0,94.2,0,74.63S6.53,36.59,18.39,22.59C30.73,8.02,47.31,0,65.08,0c4.08,0,8.11.43,12.06,1.28-13.1,2.79-25.1,10.11-34.57,21.31-10.75,12.68-17.11,29.04-18.21,46.55v.02c-.17,1.8-.24,3.62-.24,5.47s.08,3.67.24,5.47h0c1.09,17.53,7.47,33.89,18.21,46.57,9.47,11.18,21.44,18.51,34.52,21.3Z" }),
  /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M126.73,187.89c-3.2,18.85-17.11,34.33-35.5,39.13-2.85.74-5.79,1.21-8.83,1.42-1.1.08-2.18.12-3.26.12-15.36,0-29.47-7.28-38.45-19.04-1.61-2.1-2.35-4.54-2.35-6.92s.68-4.55,1.97-6.46c1.32-1.99,3.27-3.57,5.76-4.44,1.43-.5,2.91-.75,4.37-.75,3.79,0,7.48,1.61,9.95,4.64.86,1.04,1.82,2.04,2.85,2.93,4.31,3.74,9.91,5.93,15.88,5.93.27,0,.55,0,.83-.01.27,0,.54-.03.81-.04.54-.03,1.08-.06,1.62-.12h.01c4.04-.25,8.01-.79,11.89-1.59,11.75-2.42,22.64-7.31,31.85-14.35h0c.19-.15.39-.3.58-.45Z" }),
  /* @__PURE__ */ jsx27("path", { className: "cls-1", d: "M127.44,90.81v88.78c0,1.55-.08,3.07-.22,4.58-.23,1.43-.59,2.82-1.07,4.16h0c-9.21,7.05-20.1,11.94-31.85,14.36-3.88.8-7.85,1.34-11.89,1.59h-.01c-.54.05-1.08.09-1.62.12,1.62-.12,3.21-.37,4.73-.79,2.02-.55,3.95-1.37,5.72-2.4,7.26-4.19,12.15-12.03,12.15-20.99v-46.04l-.04.04v-41.39l.04-.21v-1.82h24.06Z" }),
  /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M127.22,184.17c-.12,1.25-.28,2.5-.49,3.73-.19.15-.39.3-.58.44.48-1.34.84-2.73,1.07-4.16Z" }),
  /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M103.28,66.7h-33.75c-3.33,0-6.34,1.35-8.52,3.53-2.18,2.19-3.52,5.19-3.52,8.52,0,2.5.75,4.81,2.06,6.74,2.16,3.21,5.83,5.32,9.99,5.32h57.9-24.16v-24.11" }),
  /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M115.39,66.7h-12.11v24.11h24.16v-12.19c0-.28,0-.58-.03-.85,0-.1-.02-.18-.02-.26-.23-2.29-1.11-4.39-2.46-6.12-1.72-2.22-4.21-3.84-7.08-4.43-.13-.02-.24-.05-.37-.07-.67-.12-1.38-.19-2.09-.19" }),
  /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M103.33,92.83v41.39c-.37.34-.74.67-1.12,1-.28.24-.57.49-.86.72l-.07.06c-.14.11-.27.21-.4.33-.17.13-.32.26-.48.39-1.02.81-2.04,1.59-3.09,2.32-.39.27-.79.54-1.19.8-.14.09-.26.19-.4.27-.08.05-.15.09-.22.14-.13.09-.26.17-.39.25-.29.2-.59.38-.89.56-.23.15-.48.29-.72.43-.34.2-.69.41-1.04.61-.56.31-1.11.61-1.67.9-.67.35-1.36.69-2.04,1.01-.46.21-.92.42-1.39.62-.08.04-.17.08-.25.11-.39.18-.79.34-1.19.5-.57.23-1.14.46-1.73.66-.58.21-1.15.41-1.74.61h0c-.59.2-1.17.37-1.77.55-.6.18-1.19.33-1.79.49-.6.16-1.2.29-1.81.43-13.08-2.79-25.05-10.12-34.52-21.3-10.75-12.68-17.12-29.04-18.21-46.56,2.22,25.29,19.64,45.06,40.73,45.06,3.21,0,6.35-.2,9.39-.73,1.31-.21,2.58-.51,3.84-.85.14-.04.28-.07.43-.11,11.08-3.16,20.22-11.5,24.6-30.64Z" })
] });
var LogoDark = () => /* @__PURE__ */ jsxs22("svg", { width: "40", height: "40", viewBox: "0 0 130 230", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsxs22("defs", { children: [
    /* @__PURE__ */ jsx27("style", { dangerouslySetInnerHTML: { __html: `
              .cls-1 {
                fill: #0178e0;
              }
              .cls-2 {
                fill: #0cafef;
              }
            ` } }),
    /* @__PURE__ */ jsxs22("filter", { id: "logo-glow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
      /* @__PURE__ */ jsx27("feGaussianBlur", { stdDeviation: "3.5", result: "coloredBlur" }),
      /* @__PURE__ */ jsxs22("feMerge", { children: [
        /* @__PURE__ */ jsx27("feMergeNode", { in: "coloredBlur" }),
        /* @__PURE__ */ jsx27("feMergeNode", { in: "SourceGraphic" })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxs22("g", { filter: "url(#logo-glow)", children: [
    /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M77.13,1.28c-13.1,2.79-25.1,10.11-34.58,21.31-10.75,12.68-17.11,29.04-18.22,46.55h0c2.22-25.29,19.64-45.04,40.73-45.04,4.11,0,8.17.77,12.05,2.25,4.24,1.63,8.25,4.09,11.87,7.31,2.27,2.02,5.13,3.07,7.99,3.07,2.41,0,4.83-.74,6.9-2.27l.52-.38c1.6-1.18,2.8-2.67,3.6-4.32,2.19-4.53,1.33-10.23-2.73-13.88-8.22-7.39-17.86-12.4-28.14-14.6h0Z" }),
    /* @__PURE__ */ jsx27("path", { className: "cls-1", d: "M77.08,147.96c-3.89.86-7.91,1.3-12,1.3-17.77,0-34.35-8.03-46.69-22.6C6.53,112.68,0,94.2,0,74.63S6.53,36.59,18.39,22.59C30.73,8.02,47.31,0,65.08,0c4.08,0,8.11.43,12.06,1.28-13.1,2.79-25.1,10.11-34.57,21.31-10.75,12.68-17.11,29.04-18.21,46.55v.02c-.17,1.8-.24,3.62-.24,5.47s.08,3.67.24,5.47h0c1.09,17.53,7.47,33.89,18.21,46.57,9.47,11.18,21.44,18.51,34.52,21.3Z" }),
    /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M126.73,187.89c-3.2,18.85-17.11,34.33-35.5,39.13-2.85.74-5.79,1.21-8.83,1.42-1.1.08-2.18.12-3.26.12-15.36,0-29.47-7.28-38.45-19.04-1.61-2.1-2.35-4.54-2.35-6.92s.68-4.55,1.97-6.46c1.32-1.99,3.27-3.57,5.76-4.44,1.43-.5,2.91-.75,4.37-.75,3.79,0,7.48,1.61,9.95,4.64.86,1.04,1.82,2.04,2.85,2.93,4.31,3.74,9.91,5.93,15.88,5.93.27,0,.55,0,.83-.01.27,0,.54-.03.81-.04.54-.03,1.08-.06,1.62-.12h.01c4.04-.25,8.01-.79,11.89-1.59,11.75-2.42,22.64-7.31,31.85-14.35h0c.19-.15.39-.3.58-.45Z" }),
    /* @__PURE__ */ jsx27("path", { className: "cls-1", d: "M127.44,90.81v88.78c0,1.55-.08,3.07-.22,4.58-.23,1.43-.59,2.82-1.07,4.16h0c-9.21,7.05-20.1,11.94-31.85,14.36-3.88.8-7.85,1.34-11.89,1.59h-.01c-.54.05-1.08.09-1.62.12,1.62-.12,3.21-.37,4.73-.79,2.02-.55,3.95-1.37,5.72-2.4,7.26-4.19,12.15-12.03,12.15-20.99v-46.04l-.04.04v-41.39l.04-.21v-1.82h24.06Z" }),
    /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M127.22,184.17c-.12,1.25-.28,2.5-.49,3.73-.19.15-.39.3-.58.44.48-1.34.84-2.73,1.07-4.16Z" }),
    /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M103.28,66.7h-33.75c-3.33,0-6.34,1.35-8.52,3.53-2.18,2.19-3.52,5.19-3.52,8.52,0,2.5.75,4.81,2.06,6.74,2.16,3.21,5.83,5.32,9.99,5.32h57.9-24.16v-24.11" }),
    /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M115.39,66.7h-12.11v24.11h24.16v-12.19c0-.28,0-.58-.03-.85,0-.1-.02-.18-.02-.26-.23-2.29-1.11-4.39-2.46-6.12-1.72-2.22-4.21-3.84-7.08-4.43-.13-.02-.24-.05-.37-.07-.67-.12-1.38-.19-2.09-.19" }),
    /* @__PURE__ */ jsx27("path", { className: "cls-2", d: "M103.33,92.83v41.39c-.37.34-.74.67-1.12,1-.28.24-.57.49-.86.72l-.07.06c-.14.11-.27.21-.4.33-.17.13-.32.26-.48.39-1.02.81-2.04,1.59-3.09,2.32-.39.27-.79.54-1.19.8-.14.09-.26.19-.4.27-.08.05-.15.09-.22.14-.13.09-.26.17-.39.25-.29.2-.59.38-.89.56-.23.15-.48.29-.72.43-.34.2-.69.41-1.04.61-.56.31-1.11.61-1.67.9-.67.35-1.36.69-2.04,1.01-.46.21-.92.42-1.39.62-.08.04-.17.08-.25.11-.39.18-.79.34-1.19.5-.57.23-1.14.46-1.73.66-.58.21-1.15.41-1.74.61h0c-.59.2-1.17.37-1.77.55-.6.18-1.19.33-1.79.49-.6.16-1.2.29-1.81.43-13.08-2.79-25.05-10.12-34.52-21.3-10.75-12.68-17.12-29.04-18.21-46.56,2.22,25.29,19.64,45.06,40.73,45.06,3.21,0,6.35-.2,9.39-.73,1.31-.21,2.58-.51,3.84-.85.14-.04.28-.07.43-.11,11.08-3.16,20.22-11.5,24.6-30.64Z" })
  ] })
] });
var Logo = ({ theme }) => {
  return theme === "light" ? /* @__PURE__ */ jsx27(LogoLight, {}) : /* @__PURE__ */ jsx27(LogoDark, {});
};
var WhoIcon = () => /* @__PURE__ */ jsxs22("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx27("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ jsx27("circle", { cx: "12", cy: "7", r: "4" })
] });
var WhatIcon = () => /* @__PURE__ */ jsxs22("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx27("rect", { x: "3", y: "3", width: "7", height: "7" }),
  /* @__PURE__ */ jsx27("rect", { x: "14", y: "3", width: "7", height: "7" }),
  /* @__PURE__ */ jsx27("rect", { x: "14", y: "14", width: "7", height: "7" }),
  /* @__PURE__ */ jsx27("rect", { x: "3", y: "14", width: "7", height: "7" })
] });
var HowIcon = () => /* @__PURE__ */ jsxs22("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ jsx27("path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }),
  /* @__PURE__ */ jsx27("line", { x1: "16", y1: "8", x2: "2", y2: "22" }),
  /* @__PURE__ */ jsx27("line", { x1: "17.5", y1: "15", x2: "9", y2: "15" })
] });
var Navbar = ({ theme, toggleTheme, currentView }) => {
  const { t } = useLanguage();
  const isGallery = currentView === "gallery" || currentView === "story";
  const handleNavClick = (e, hash) => {
    e.preventDefault();
    window.location.hash = hash;
  };
  return /* @__PURE__ */ jsxs22("nav", { className: "site-navbar", children: [
    /* @__PURE__ */ jsx27("div", { className: "navbar-logo", children: /* @__PURE__ */ jsx27("a", { href: "#/", "aria-label": "Homepage", onClick: (e) => handleNavClick(e, "#/"), children: /* @__PURE__ */ jsx27(Logo, { theme }) }) }),
    /* @__PURE__ */ jsxs22("div", { className: "navbar-links", children: [
      /* @__PURE__ */ jsxs22("a", { href: "#/about", className: `navbar-link ${currentView === "about" ? "active" : ""}`, onClick: (e) => handleNavClick(e, "#/about"), children: [
        /* @__PURE__ */ jsx27("span", { className: "navbar-icon-wrapper", children: /* @__PURE__ */ jsx27(WhoIcon, {}) }),
        /* @__PURE__ */ jsx27("span", { className: "navbar-link-text", children: t("navWho") })
      ] }),
      /* @__PURE__ */ jsxs22("a", { href: "https://joaquingalasso.com", target: "_blank", rel: "noopener noreferrer", className: "navbar-link", children: [
        /* @__PURE__ */ jsx27("span", { className: "navbar-icon-wrapper", children: /* @__PURE__ */ jsx27(WhatIcon, {}) }),
        /* @__PURE__ */ jsx27("span", { className: "navbar-link-text", children: t("navWhat") })
      ] }),
      /* @__PURE__ */ jsxs22("a", { href: "#/", className: `navbar-link ${isGallery ? "active" : ""}`, "aria-current": isGallery ? "page" : void 0, onClick: (e) => handleNavClick(e, "#/"), children: [
        /* @__PURE__ */ jsx27("span", { className: "navbar-icon-wrapper", children: /* @__PURE__ */ jsx27(HowIcon, {}) }),
        /* @__PURE__ */ jsx27("span", { className: "navbar-link-text", children: t("navHow") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs22("div", { className: "navbar-controls", children: [
      /* @__PURE__ */ jsx27(ThemeToggle, { theme, toggleTheme }),
      /* @__PURE__ */ jsx27(LanguageToggle, {})
    ] })
  ] });
};

// data/about.ts
var aboutData = {
  name: "Joaqu\xEDn Galasso",
  dob: "2003-07-20",
  email: "mail@joaquingalasso.com",
  avatar: {
    light: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 275.05 275.06'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23ffefe1; %7D .cls-2 %7B fill: %232b2b2b; %7D .cls-3 %7B fill: %23565656; %7D .cls-4 %7B fill: %23e43c00; %7D %3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M275.05,137.53c0,75.95-61.57,137.53-137.53,137.53S0,213.48,0,137.53,61.57,0,137.53,0s137.53,61.57,137.53,137.53Z'/%3E%3Cg%3E%3Cpath class='cls-2' d='M145.05,27.17c-13.1,2.79-25.1,10.11-34.58,21.31-10.75,12.68-17.11,29.04-18.22,46.55h0c2.22-25.29,19.64-45.04,40.73-45.04,4.11,0,8.17.77,12.05,2.25,4.24,1.63,8.25,4.09,11.87,7.31,2.27,2.02,5.13,3.07,7.99,3.07,2.41,0,4.83-.74,6.9-2.27l.52-.38c1.6-1.18,2.8-2.67,3.6-4.32,2.19-4.53,1.33-10.23-2.73-13.88-8.22-7.39-17.86-12.4-28.14-14.6h0Z'/%3E%3Cpath class='cls-3' d='M144.99,173.85c-3.89.86-7.91,1.3-12,1.3-17.77,0-34.35-8.03-46.69-22.6-11.86-13.99-18.39-32.47-18.39-52.04s6.53-38.04,18.39-52.04c12.34-14.56,28.92-22.59,46.69-22.59,4.08,0,8.11.43,12.06,1.28-13.1,2.79-25.1,10.11-34.57,21.31-10.75,12.68-17.11,29.04-18.21,46.55v.02c-.17,1.8-.24,3.62-.24,5.47s.08,3.67.24,5.47h0c1.09,17.53,7.47,33.89,18.21,46.57,9.47,11.18,21.44,18.51,34.52,21.3Z'/%3E%3Cpath class='cls-2' d='M194.64,213.78c-3.2,18.85-17.11,34.33-35.5,39.13-2.85.74-5.79,1.21-8.83,1.42-1.1.08-2.18.12-3.26.12-15.36,0-29.47-7.28-38.45-19.04-1.61-2.1-2.35-4.54-2.35-6.92s.68-4.55,1.97-6.46c1.32-1.99,3.27-3.57,5.76-4.44,1.43-.5,2.91-.75,4.37-.75,3.79,0,7.48,1.61,9.95,4.64.86,1.04,1.82,2.04,2.85,2.93,4.31,3.74,9.91,5.93,15.88,5.93.27,0,.55,0,.83-.01.27,0,.54-.03.81-.04.54-.03,1.08-.06,1.62-.12h.01c4.04-.25,8.01-.79,11.89-1.59,11.75-2.42,22.64-7.31,31.85-14.35h0c.19-.15.39-.3.58-.45Z'/%3E%3Cpath class='cls-3' d='M195.35,116.7v88.78c0,1.55-.08,3.07-.22,4.58-.23,1.43-.59,2.82-1.07,4.16h0c-9.21,7.05-20.1,11.94-31.85,14.36-3.88.8-7.85,1.34-11.89,1.59h-.01c-.54.05-1.08.09-1.62.12,1.62-.12,3.21-.37,4.73-.79,2.02-.55,3.95-1.37,5.72-2.4,7.26-4.19,12.15-12.03,12.15-20.99v-46.04l-.04.04v-41.39l.04-.21v-1.82h24.06Z'/%3E%3Cpath class='cls-4' d='M195.13,210.06c-.12,1.25-.28,2.5-.49,3.73-.19.15-.39.3-.58.44.48-1.34.84-2.73,1.07-4.16Z'/%3E%3Cpath class='cls-2' d='M171.19,92.59h-33.75c-3.33,0-6.34,1.35-8.52,3.53-2.18,2.19-3.52,5.19-3.52,8.52,0,2.5.75,4.81,2.06,6.74,2.16,3.21,5.83,5.32,9.99,5.32h57.9-24.16v-24.11'/%3E%3Cpath class='cls-2' d='M183.3,92.59h-12.11v24.11h24.16v-12.19c0-.28,0-.58-.03-.85,0-.1-.02-.18-.02-.26-.23-2.29-1.11-4.39-2.46-6.12-1.72-2.22-4.21-3.84-7.08-4.43-.13-.02-.24-.05-.37-.07-.67-.12-1.38-.19-2.09-.19'/%3E%3Cpath class='cls-2' d='M171.25,118.72v41.39c-.37.34-.74.67-1.12,1-.28.24-.57.49-.86.72l-.07.06c-.14.11-.27.21-.4.33-.17.13-.32.26-.48.39-1.02.81-2.04,1.59-3.09,2.32-.39.27-.79.54-1.19.8-.14.09-.26.19-.4.27-.08.05-.15.09-.22.14-.13.09-.26.17-.39.25-.29.2-.59.38-.89.56-.23.15-.48.29-.72.43-.34.2-.69.41-1.04.61-.56.31-1.11.61-1.67.9-.67.35-1.36.69-2.04,1.01-.46.21-.92.42-1.39.62-.08.04-.17.08-.25.11-.39.18-.79.34-1.19.5-.57.23-1.14.46-1.73.66-.58.21-1.15.41-1.74.61h0c-.59.2-1.17.37-1.77.55-.6.18-1.19.33-1.79.49-.6.16-1.2.29-1.81.43-13.08-2.79-25.05-10.12-34.52-21.3-10.75-12.68-17.12-29.04-18.21-46.56,2.22,25.29,19.64,45.06,40.73,45.06,3.21,0,6.35-.2,9.39-.73,1.31-.21,2.58-.51,3.84-.85.14-.04.28-.07.43-.11,11.08-3.16,20.22-11.5,24.6-30.64Z'/%3E%3C/g%3E%3C/svg%3E",
    dark: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 275.05 275.06'%3E%3Cdefs%3E%3Cstyle%3E .cls-1 %7B fill: %23c6bcb5; %7D .cls-2 %7B fill: %230cafef; %7D .cls-3 %7B fill: %23ffefe1; %7D .cls-4 %7B fill: %232b2b2b; %7D %3C/style%3E%3C/defs%3E%3Cpath class='cls-4' d='M275.05,137.53c0,75.95-61.57,137.53-137.53,137.53S0,213.48,0,137.53,61.57,0,137.53,0s137.53,61.57,137.53,137.53Z'/%3E%3Cg%3E%3Cpath class='cls-3' d='M145.05,27.17c-13.1,2.79-25.1,10.11-34.58,21.31-10.75,12.68-17.11,29.04-18.22,46.55h0c2.22-25.29,19.64-45.04,40.73-45.04,4.11,0,8.17.77,12.05,2.25,4.24,1.63,8.25,4.09,11.87,7.31,2.27,2.02,5.13,3.07,7.99,3.07,2.41,0,4.83-.74,6.9-2.27l.52-.38c1.6-1.18,2.8-2.67,3.6-4.32,2.19-4.53,1.33-10.23-2.73-13.88-8.22-7.39-17.86-12.4-28.14-14.6h0Z'/%3E%3Cpath class='cls-1' d='M144.99,173.85c-3.89.86-7.91,1.3-12,1.3-17.77,0-34.35-8.03-46.69-22.6-11.86-13.99-18.39-32.47-18.39-52.04s6.53-38.04,18.39-52.04c12.34-14.56,28.92-22.59,46.69-22.59,4.08,0,8.11.43,12.06,1.28-13.1,2.79-25.1,10.11-34.57,21.31-10.75,12.68-17.11,29.04-18.21,46.55v.02c-.17,1.8-.24,3.62-.24,5.47s.08,3.67.24,5.47h0c1.09,17.53,7.47,33.89,18.21,46.57,9.47,11.18,21.44,18.51,34.52,21.3Z'/%3E%3Cpath class='cls-3' d='M194.64,213.78c-3.2,18.85-17.11,34.33-35.5,39.13-2.85.74-5.79,1.21-8.83,1.42-1.1.08-2.18.12-3.26.12-15.36,0-29.47-7.28-38.45-19.04-1.61-2.1-2.35-4.54-2.35-6.92s.68-4.55,1.97-6.46c1.32-1.99,3.27-3.57,5.76-4.44,1.43-.5,2.91-.75,4.37-.75,3.79,0,7.48,1.61,9.95,4.64.86,1.04,1.82,2.04,2.85,2.93,4.31,3.74,9.91,5.93,15.88,5.93.27,0,.55,0,.83-.01.27,0,.54-.03.81-.04.54-.03,1.08-.06,1.62-.12h.01c4.04-.25,8.01-.79,11.89-1.59,11.75-2.42,22.64-7.31,31.85-14.35h0c.19-.15.39-.3.58-.45Z'/%3E%3Cpath class='cls-1' d='M195.35,116.7v88.78c0,1.55-.08,3.07-.22,4.58-.23,1.43-.59,2.82-1.07,4.16h0c-9.21,7.05-20.1,11.94-31.85,14.36-3.88.8-7.85,1.34-11.89,1.59h-.01c-.54.05-1.08.09-1.62.12,1.62-.12,3.21-.37,4.73-.79,2.02-.55,3.95-1.37,5.72-2.4,7.26-4.19,12.15-12.03,12.15-20.99v-46.04l-.04.04v-41.39l.04-.21v-1.82h24.06Z'/%3E%3Cpath class='cls-2' d='M195.13,210.06c-.12,1.25-.28,2.5-.49,3.73-.19.15-.39.3-.58.44.48-1.34.84-2.73,1.07-4.16Z'/%3E%3Cpath class='cls-3' d='M171.19,92.59h-33.75c-3.33,0-6.34,1.35-8.52,3.53-2.18,2.19-3.52,5.19-3.52,8.52,0,2.5.75,4.81,2.06,6.74,2.16,3.21,5.83,5.32,9.99,5.32h57.9-24.16v-24.11'/%3E%3Cpath class='cls-3' d='M183.3,92.59h-12.11v24.11h24.16v-12.19c0-.28,0-.58-.03-.85,0-.1-.02-.18-.02-.26-.23-2.29-1.11-4.39-2.46-6.12-1.72-2.22-4.21-3.84-7.08-4.43-.13-.02-.24-.05-.37-.07-.67-.12-1.38-.19-2.09-.19'/%3E%3Cpath class='cls-3' d='M171.25,118.72v41.39c-.37.34-.74.67-1.12,1-.28.24-.57.49-.86.72l-.07.06c-.14.11-.27.21-.4.33-.17.13-.32.26-.48.39-1.02.81-2.04,1.59-3.09,2.32-.39.27-.79.54-1.19.8-.14.09-.26.19-.4.27-.08.05-.15.09-.22.14-.13.09-.26.17-.39.25-.29.2-.59.38-.89.56-.23.15-.48.29-.72.43-.34.2-.69.41-1.04.61-.56.31-1.11.61-1.67.9-.67.35-1.36.69-2.04,1.01-.46.21-.92.42-1.39.62-.08.04-.17.08-.25.11-.39.18-.79.34-1.19.5-.57.23-1.14.46-1.73.66-.58.21-1.15.41-1.74.61h0c-.59.2-1.17.37-1.77.55-.6.18-1.19.33-1.79.49-.6.16-1.2.29-1.81.43-13.08-2.79-25.05-10.12-34.52-21.3-10.75-12.68-17.12-29.04-18.21-46.56,2.22,25.29,19.64,45.06,40.73,45.06,3.21,0,6.35-.2,9.39-.73,1.31-.21,2.58-.51,3.84-.85.14-.04.28-.07.43-.11,11.08-3.16,20.22-11.5,24.6-30.64Z'/%3E%3C/g%3E%3C/svg%3E"
  }
};
var timelineEvents = [
  { date: "Presente", title: "Ayudante de C\xE1tedra, UNLP", description: "Colaboro en el Taller de Experiencias Interactivas, guiando a estudiantes en la conceptualizaci\xF3n y desarrollo de proyectos que fusionan arte y tecnolog\xEDa." },
  { date: "2023", title: "Dise\xF1ador Multimedia, Agencia Wolf", description: "Creaci\xF3n de sistemas de identidad visual y desarrollo de soluciones web para clientes, equilibrando creatividad con objetivos de negocio." },
  { date: "2022", title: "Inicio, Lic. en Dise\xF1o Multimedial", description: "Comienzo mis estudios en la Universidad Nacional de La Plata, sentando las bases te\xF3ricas y pr\xE1cticas de mi carrera." },
  { date: "2021", title: "T\xE9cnico Inform\xE1tico, Aurelio Impresiones", description: "Mantenimiento de equipos y optimizaci\xF3n de flujos de trabajo en un entorno de producci\xF3n gr\xE1fica. Mi primer contacto con la tecnolog\xEDa en un \xE1mbito profesional." },
  { date: "2020", title: "Primeros Pasos en Freelance", description: "Realizaci\xF3n de proyectos de branding y desarrollo web, aprendiendo sobre la gesti\xF3n de clientes y la autodisciplina." },
  { date: "2019", title: "Formaci\xF3n en Cocina Profesional", description: "Una etapa que, aunque distinta, me ense\xF1\xF3 sobre procesos, creatividad bajo presi\xF3n y la importancia del detalle. Habilidades que aplico hoy en el dise\xF1o." }
];
var skills = {
  design: ["Branding", "UI/UX", "Dise\xF1o de Interacci\xF3n", "Figma", "Adobe Suite", "Fotograf\xEDa"],
  development: ["HTML & CSS", "JavaScript", "TypeScript", "React", "Processing", "Arduino", "Git & GitHub"],
  other: ["Ingl\xE9s (C2)", "Comunicaci\xF3n", "Gesti\xF3n de Proyectos", "Educaci\xF3n", "Gamificaci\xF3n"]
};
var socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/joaquingalasso", icon: LinkedInIcon },
  { name: "GitHub", url: "https://github.com/joaquingalasso", icon: GitHubIcon },
  { name: "Behance", url: "https://www.behance.net/joaquingalasso", icon: BehanceIcon },
  { name: "OpenProcessing", url: "https://openprocessing.org/user/235899", icon: OpenProcessingIcon },
  { name: "YouTube", url: "https://www.youtube.com/@joacogalasso", icon: YouTubeIcon }
];

// components/AboutPage.tsx
import { jsx as jsx28, jsxs as jsxs23 } from "react/jsx-runtime";
var Section = ({ children, className = "" }) => /* @__PURE__ */ jsx28("section", { className: `about-section ${className}`, children });
var SectionTitle = ({ children }) => /* @__PURE__ */ jsx28("h2", { className: "about-section-title", children });
var AboutPage = ({ theme }) => {
  const { t } = useLanguage();
  const avatarSrc = aboutData.avatar[theme];
  return /* @__PURE__ */ jsxs23("article", { className: "view about-page-container", children: [
    /* @__PURE__ */ jsxs23("header", { className: "about-hero", children: [
      /* @__PURE__ */ jsx28("img", { src: avatarSrc, alt: t("authorName"), className: "about-avatar" }),
      /* @__PURE__ */ jsx28("h1", { className: "about-title", children: t("aboutTitle") }),
      /* @__PURE__ */ jsx28("p", { className: "about-subtitle", children: t("aboutSubtitle") })
    ] }),
    /* @__PURE__ */ jsxs23(Section, { children: [
      /* @__PURE__ */ jsx28(SectionTitle, { children: t("aboutIntroTitle") }),
      /* @__PURE__ */ jsxs23("div", { className: "about-intro-text", children: [
        /* @__PURE__ */ jsx28("p", { children: t("aboutIntroP1") }),
        /* @__PURE__ */ jsx28("p", { children: t("aboutIntroP2") })
      ] })
    ] }),
    /* @__PURE__ */ jsxs23(Section, { children: [
      /* @__PURE__ */ jsx28(SectionTitle, { children: t("aboutTimelineTitle") }),
      /* @__PURE__ */ jsx28(Timeline, { type: "timeline", events: timelineEvents })
    ] }),
    /* @__PURE__ */ jsxs23(Section, { children: [
      /* @__PURE__ */ jsx28(SectionTitle, { children: t("aboutSkillsTitle") }),
      /* @__PURE__ */ jsxs23("div", { className: "skills-grid", children: [
        /* @__PURE__ */ jsxs23("div", { className: "skill-category", children: [
          /* @__PURE__ */ jsx28("h3", { children: t("aboutSkillsDesign") }),
          /* @__PURE__ */ jsx28("div", { className: "skill-tags", children: skills.design.map((skill) => /* @__PURE__ */ jsx28("span", { className: "skill-tag", children: skill }, skill)) })
        ] }),
        /* @__PURE__ */ jsxs23("div", { className: "skill-category", children: [
          /* @__PURE__ */ jsx28("h3", { children: t("aboutSkillsDev") }),
          /* @__PURE__ */ jsx28("div", { className: "skill-tags", children: skills.development.map((skill) => /* @__PURE__ */ jsx28("span", { className: "skill-tag", children: skill }, skill)) })
        ] }),
        /* @__PURE__ */ jsxs23("div", { className: "skill-category", children: [
          /* @__PURE__ */ jsx28("h3", { children: t("aboutSkillsOther") }),
          /* @__PURE__ */ jsx28("div", { className: "skill-tags", children: skills.other.map((skill) => /* @__PURE__ */ jsx28("span", { className: "skill-tag", children: t(skill) }, skill)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs23(Section, { children: [
      /* @__PURE__ */ jsx28(SectionTitle, { children: t("aboutProjectsTitle") }),
      /* @__PURE__ */ jsx28("div", { className: "about-intro-text", children: /* @__PURE__ */ jsx28("p", { children: t("aboutProjectsP1") }) }),
      /* @__PURE__ */ jsx28("div", { className: "social-links-grid", children: socialLinks.map(({ name, url, icon: Icon }) => /* @__PURE__ */ jsxs23("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "social-link-button", children: [
        /* @__PURE__ */ jsx28(Icon, {}),
        /* @__PURE__ */ jsx28("span", { children: name })
      ] }, name)) })
    ] }),
    /* @__PURE__ */ jsxs23(Section, { className: "cta-section", children: [
      /* @__PURE__ */ jsx28(SectionTitle, { children: t("aboutContactTitle") }),
      /* @__PURE__ */ jsx28("p", { children: t("aboutContactP1") }),
      /* @__PURE__ */ jsxs23("a", { href: `mailto:${aboutData.email}`, className: "cta-button", children: [
        /* @__PURE__ */ jsx28(MailIcon, { width: 20, height: 20 }),
        /* @__PURE__ */ jsx28("span", { children: t("contactButton") })
      ] })
    ] })
  ] });
};

// components/App.tsx
import { jsx as jsx29, jsxs as jsxs24 } from "react/jsx-runtime";
var { useState: useState7, useEffect: useEffect7, useMemo: useMemo5 } = React11;
var App = () => {
  const [theme, setTheme] = useState7("light");
  const [currentView, setCurrentView] = useState7("gallery");
  const [selectedStory, setSelectedStory] = useState7(null);
  const [searchQuery, setSearchQuery] = useState7("");
  const [activeFilter, setActiveFilter] = useState7("All");
  const [galleryView, setGalleryView] = useState7("list");
  const [sortOrder, setSortOrder] = useState7("newest");
  const [activeTag, setActiveTag] = useState7("");
  const [activeArchive, setActiveArchive] = useState7("");
  const [selectedArchiveYear, setSelectedArchiveYear] = useState7(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState7(false);
  const { language } = useLanguage();
  useEffect7(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  useEffect7(() => {
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
  useEffect7(() => {
    const rootEl = document.getElementById("root");
    if (rootEl) {
      if (selectedStory) {
        rootEl.classList.add("story-active");
      } else {
        rootEl.classList.remove("story-active");
      }
    }
  }, [selectedStory]);
  useEffect7(() => {
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
  useEffect7(() => {
    const handleHashChange = () => {
      window.scrollTo(0, 0);
      const hash = window.location.hash;
      if (hash.startsWith("#/story/")) {
        const storyId = hash.substring("#/story/".length);
        const storyToSelect = stories.find((s) => s.id === storyId);
        if (storyToSelect) {
          setSelectedStory(storyToSelect);
          setCurrentView("story");
        } else {
          window.location.hash = "";
        }
      } else if (hash === "#/about") {
        setSelectedStory(null);
        setCurrentView("about");
      } else {
        setSelectedStory(null);
        setCurrentView("gallery");
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };
  const handleSelectStory = (story) => {
    window.location.hash = `#/story/${story.id}`;
  };
  const handleBackToGallery = () => {
    window.location.hash = "";
  };
  const handleTagChange = (tag) => {
    setActiveTag((currentTag) => currentTag === tag ? "" : tag);
    setIsMobileMenuOpen(false);
  };
  const handleTagSelectFromStory = (tag) => {
    setActiveTag(tag);
    setActiveFilter("All");
    window.location.hash = "";
  };
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setIsMobileMenuOpen(false);
  };
  const handleArchiveChange = (archiveKey) => {
    setActiveArchive((current) => current === archiveKey ? "" : archiveKey);
    setIsMobileMenuOpen(false);
  };
  const uniqueCategories = useMemo5(() => [...new Set(stories.map((s) => s.category))], []);
  const tagsWithCounts = useMemo5(() => {
    const allTags = stories.flatMap((s) => s.tags);
    const counts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts).map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count);
  }, [stories]);
  const archivesWithCounts = useMemo5(() => {
    const counts = {};
    const locale = language === "es" ? "es-ES" : "en-US";
    stories.forEach((story) => {
      const date = new Date(story.date);
      const year = date.getFullYear();
      const monthIndex = date.getMonth();
      const key = `${year}-${String(monthIndex + 1).padStart(2, "0")}`;
      if (!counts[key]) {
        const monthName = date.toLocaleString(locale, { month: "short" }).replace(".", "");
        counts[key] = {
          year,
          monthIndex,
          month: monthName.charAt(0).toUpperCase() + monthName.slice(1),
          count: 0
        };
      }
      counts[key].count++;
    });
    return Object.entries(counts).map(([key, data]) => ({ key, ...data })).sort((a, b) => b.year - a.year || b.monthIndex - a.monthIndex);
  }, [stories, language]);
  const availableArchiveYears = useMemo5(() => [...new Set(archivesWithCounts.map((a) => a.year))], [archivesWithCounts]);
  useEffect7(() => {
    if (availableArchiveYears.length > 0 && !selectedArchiveYear) {
      setSelectedArchiveYear(availableArchiveYears[0]);
    }
  }, [availableArchiveYears, selectedArchiveYear]);
  const handleArchiveYearChange = (direction) => {
    if (!selectedArchiveYear) return;
    const currentIndex = availableArchiveYears.indexOf(selectedArchiveYear);
    let newIndex = currentIndex;
    if (direction === "prev" && currentIndex < availableArchiveYears.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === "next" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }
    setSelectedArchiveYear(availableArchiveYears[newIndex]);
    setActiveArchive("");
  };
  const monthsForSelectedYear = useMemo5(() => {
    return archivesWithCounts.filter((a) => a.year === selectedArchiveYear);
  }, [archivesWithCounts, selectedArchiveYear]);
  const filterProps = {
    activeFilter,
    onFilterChange: handleFilterChange,
    categories: uniqueCategories,
    activeTag,
    onTagChange: handleTagChange,
    tags: tagsWithCounts,
    archives: monthsForSelectedYear,
    activeArchive,
    onArchiveChange: handleArchiveChange,
    selectedArchiveYear,
    availableArchiveYears,
    onArchiveYearChange: handleArchiveYearChange
  };
  return /* @__PURE__ */ jsxs24("div", { className: "app-container", children: [
    /* @__PURE__ */ jsx29(ScrollProgress, {}),
    /* @__PURE__ */ jsx29(Navbar, { theme, toggleTheme, currentView }),
    /* @__PURE__ */ jsxs24("div", { className: `main-layout-grid view-${currentView}`, children: [
      /* @__PURE__ */ jsxs24("main", { className: "content-area", children: [
        currentView === "gallery" && /* @__PURE__ */ jsx29(
          StoryGallery,
          {
            onSelectStory: handleSelectStory,
            isVisible: true,
            searchQuery,
            onSearchChange: setSearchQuery,
            activeFilter,
            categories: uniqueCategories,
            galleryView,
            onViewChange: setGalleryView,
            sortOrder,
            onSortChange: setSortOrder,
            activeTag,
            activeArchive,
            onToggleMobileMenu: () => setIsMobileMenuOpen(true),
            onFilterChange: handleFilterChange,
            theme
          }
        ),
        currentView === "story" && /* @__PURE__ */ jsx29(
          StoryView,
          {
            story: selectedStory,
            onBack: handleBackToGallery,
            isVisible: true,
            allStories: stories,
            onSelectStory: handleSelectStory,
            onTagSelect: handleTagSelectFromStory,
            theme
          }
        ),
        currentView === "about" && /* @__PURE__ */ jsx29(AboutPage, { theme })
      ] }),
      currentView === "story" && selectedStory && /* @__PURE__ */ jsx29(
        StoryAside,
        {
          currentStory: selectedStory,
          allStories: stories,
          onSelectStory: handleSelectStory,
          onTagSelect: handleTagSelectFromStory
        }
      ),
      currentView === "gallery" && /* @__PURE__ */ jsx29(FilterAside, { ...filterProps })
    ] }),
    currentView === "gallery" && /* @__PURE__ */ jsx29(
      MobileFilterPanel,
      {
        isOpen: isMobileMenuOpen,
        onClose: () => setIsMobileMenuOpen(false),
        ...filterProps
      }
    ),
    /* @__PURE__ */ jsx29(Footer, { theme })
  ] });
};

// index.tsx
import { jsx as jsx30 } from "react/jsx-runtime";
var rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    /* @__PURE__ */ jsx30(React12.StrictMode, { children: /* @__PURE__ */ jsx30(LanguageProvider, { children: /* @__PURE__ */ jsx30(App, {}) }) })
  );
}
