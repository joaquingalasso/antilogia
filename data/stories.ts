import type { Story, ContentBlock, OrnamentBlock } from '../types';

const boaContent: ContentBlock[] = [
  {
    type: 'paragraph',
    html: 'El siseo era una canción de cuna de escamas y noche. La sentía enroscarse, un músculo infinito y paciente que me medía el sueño.'
  },
  {
    type: 'blockquote',
    style: 'thought',
    html: 'No era miedo, era una certeza helada: <strong>su abrazo era el último hogar</strong>, la última frontera antes del silencio.'
  },
   {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1588196749339-39572415f339?q=80&w=800',
    alt: 'Una serpiente verde enrollada en una rama, mirando a la cámara.',
    caption: 'Sus ojos, dos pozos de obsidiana, reflejaban una calma milenaria. No había maldad en ellos, solo un propósito puro.'
  },
  {
    type: 'paragraph',
    html: 'No había maldad en ellos, solo un propósito puro, una ley natural tan antigua como las estrellas. Era el calor de mi cuerpo lo que la llamaba, una promesa de vida que ella venía a reclamar con la delicadeza de un verdugo enamorado.'
  },
  {
    type: 'heading',
    level: 2,
    html: 'El pacto silencioso'
  },
  {
    type: 'paragraph',
    html: 'Nunca hablamos, pero lo entendíamos todo. Nuestro acuerdo era tácito, una simbiosis mortal. Se basaba en dos principios:'
  },
  {
    type: 'list',
    style: 'ordered',
    items: [
      'Yo le daba mi calor, mi respiración pausada, el latido de un corazón que pronto se detendría.',
      'Ella me ofrecía el fin del desvelo, la disolución de las angustias en un apretón final.'
    ]
  },
  {
    type: 'paragraph',
    html: 'Era un intercambio justo, <em>poético y brutal</em>.'
  },
    {
    type: 'paragraph',
    html: 'A veces, en mitad de la noche, despertaba y la veía mirarme. El patrón de su piel era un mapa de secretos ancestrales. Trazaba sus rombos con el dedo, sintiendo la vida fría que contenía la mía.'
  },
  {
    type: 'dialogue',
    html: '"Pronto"',
    attribution: '...parecía decir su quietud. Y yo asentía, cerrando los ojos, volviendo a ese sueño del que sabía que, una noche, no despertaría.'
  },
  {
    type: 'ornament',
    variant: 'svg',
    value: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448.99 418.66"><path d="M280.78,361.79c"/></svg>',
  }
];

const faroContent: ContentBlock[] = [
  {
    type: 'paragraph',
    html: 'En el acantilado más solitario, donde el viento hablaba en lenguas de sal y espuma, se erigía el faro. No era de piedra y luz, sino de <strong>ecos y memorias</strong>. Cada noche, su haz de luz no cortaba la oscuridad, sino que recogía los secretos que el océano susurraba a la costa.'
  },
  {
    type: 'video',
    provider: 'youtube',
    src: 'eX3u0IlBBO4',
    caption: 'El sonido incesante de las olas contra las rocas.'
  },
  {
    type: 'paragraph',
    html: 'El farero, un hombre sin nombre y con la mirada perdida en el horizonte, no mantenía la lámpara encendida. Su trabajo era escuchar. Anotaba en un cuaderno gastado los lamentos del mar:'
  },
  {
    type: 'list',
    style: 'unordered',
    items: [
      'Las confesiones de los marineros ahogados.',
      'Los anhelos de las sirenas tristes.',
      'Las promesas rotas que las olas arrastraban hasta la orilla.'
    ]
  },
  {
    type: 'heading',
    level: 2,
    html: 'La biblioteca del mar'
  },
  {
    type: 'paragraph',
    html: 'Las paredes del faro estaban llenas de estos cuadernos. Eran la <a href="https://es.wikipedia.org/wiki/Biblioteca" target="_blank" rel="noopener noreferrer">biblioteca del mar</a>, un archivo de tristezas y <span data-tooltip="Sentimientos de anhelo por un futuro mejor.">esperanzas</span>.'
  },
  {
    type: 'code',
    language: 'javascript',
    code: `
function listenToTheSea(librarian) {
  const whispers = ocean.listen();
  if (whispers.length > 0) {
    librarian.archive(whispers);
  }
}
setInterval(() => listenToTheSea(farero), 1000 * 60 * 60);
    `,
    caption: 'El código que regía la biblioteca del mar.'
  },
  {
    type: 'table',
    caption: 'Clasificación de los susurros marinos.',
    headers: ['Tipo de Susurro', 'Origen', 'Frecuencia'],
    rows: [
        ['Confesiones de marineros', 'Almas en pena', 'Noches de luna llena'],
        ['Anhelos de sirenas', 'Corazones rotos', 'Al amanecer'],
        ['Promesas rotas', 'Amantes distantes', 'Durante la marea baja'],
        ['Historias olvidadas', 'Barcos hundidos', 'Solo en tormentas']
    ]
  },
  {
    type: 'paragraph',
    html: 'Para quien quiera saber más sobre la historia de estas estructuras, este recurso es invaluable:'
  },
  {
    type: 'linkPreview',
    url: 'https://es.wikipedia.org/wiki/Faro',
    title: 'Faro - Wikipedia, la enciclopedia libre',
    description: 'Un faro es una torre de señalización luminosa situada en la costa, en las entradas de los puertos, en las islas, en los arrecifes o en los bancos de arena para guiar a las embarcaciones durante la noche.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/BCN_-_Far_del_Llobregat_1.jpg/1280px-BCN_-_Far_del_Llobregat_1.jpg'
  },
  {
    type: 'sourcedQuote',
    html: 'La soledad es al espíritu lo que la dieta al cuerpo.',
    source: 'Vauvenargues',
    sourceUrl: 'https://es.wikipedia.org/wiki/Luc_de_Clapiers'
  },
  {
    type: 'audio',
    src: '/audios/faro.mp3',
    title: 'Susurros del Océano',
    caption: 'Un lamento recogido en una noche de tormenta.'
  },
  {
    type: 'pullQuote',
    alignment: 'right',
    html: 'Una noche, el mar guardó silencio.'
  },
  {
    type: 'paragraph',
    html: 'El farero esperó, pero solo el sonido de su propia respiración rompía la calma. Comprendió que su labor había terminado. '
  },
  {
    type: 'sidenote',
    html: 'Algunos dicen que se convirtió en una constelación, una nueva guía para los perdidos en el mar. Otros, que su fantasma aún anota historias en cuadernos de espuma.'
  },
  {
    type: 'paragraph',
    html: 'Escribió su propia historia en la última página del último cuaderno, cerró la puerta del faro y caminó hacia las olas, para convertirse en un susurro más en la colección.'
  },
  {
    type: 'collapsible',
    title: 'Notas del autor sobre el final',
    initiallyOpen: false,
    content: [
      {
        type: 'paragraph',
        html: 'El final deliberadamente ambiguo busca reflejar la naturaleza inescrutable del océano y del destino. No importa si el farero murió o trascendió; lo importante es que se unió a las historias que tanto amaba.'
      },
      {
        type: 'blockquote',
        html: 'Cada final es un comienzo disfrazado.'
      }
    ]
  },
  {
    type: 'heading',
    level: 2,
    html: 'Cronología del Faro'
  },
  {
    type: 'timeline',
    events: [
      { date: '1888', title: 'Construcción del Faro', description: 'Se erige la torre en el acantilado conocido como "El Fin del Mundo".' },
      { date: '1923', title: 'El Primer Farero', description: 'Un hombre sin nombre llega para hacerse cargo de la luz.' },
      { date: '1950', title: 'El Cambio', description: 'El farero deja de encender la lámpara y comienza su labor de escucha.' },
      { date: '1978', title: 'El Silencio', description: 'El mar deja de susurrar por primera vez.' },
      { date: 'Presente', title: 'La Leyenda', description: 'El faro permanece, ahora una atracción para turistas y buscadores de mitos.' },
    ]
  },
  {
    type: 'ornament'
  },
  {
    type: 'paragraph',
    html: 'Cada final es también un comienzo, marcado por un símbolo.'
  },
  {
    type: 'ornament',
    variant: 'character',
    value: '☙',
    caption: 'Un separador de texto simple.'
  },
  {
    type: 'paragraph',
    html: 'Y a veces, el símbolo es una imagen, una forma con su propio significado.'
  },
  {
    type: 'ornament',
    variant: 'svg',
    value: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    caption: 'Un ornamento SVG, como un ojo que todo lo ve.'
  }
];

const boaShared = {
    color: { light: "#0b6d4f", dark: "#10a375" },
    backgrounds: {
        cardIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNOSAxOHEtMiAwLTMuNS0xLjVUNCAxNlY5cTAtMiAxLjUtMy41VDEwIDRsNiA2cTIgMiAwIDRsLTYgNiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=",
        storyHeader: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWRhc2hhcnJheT0iOCAxMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgZHVyPSIyMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPjwvY2lyY2xlPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtZGFzaGFycmF5PSI2IDEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIzNjAgNTAgNTAiIHRvPSIwIDUwIDUwIiBkdXI9IjE1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+PC9jaXJjbGU+PC9zdmc+",
        sharingArea: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0icC1ib2EiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNSBMMTAgMTAgTCAwIDE1IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBmcm9tPSIyMCIgdG89IjAiIGR1cj0iMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwLWJvYSkiIHN0cm9rZS1kYXNoYXJyYXk9IjIwIi8+PC9zdmc+"
    },
    ornament: { type: 'ornament' } as OrnamentBlock,
    category: "Relato Corto" as "Relato Corto",
    tags: ["Suspenso", "Psicológico", "Animales"],
    content: boaContent,
};

const faroShared = {
    color: { light: "#015c7e", dark: "#0090c8" },
    backgrounds: {
        cardIcon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q2sb3IiPjxwYXRoIGQ9Ik0xMDQsMjE2aDQ4YTgsOCwwLDAsMSwwLDE2aC00OGE4LDgsMCwwLDEsMC0xNlptMTItNDBMg4OC4yLDQ4LjU2QTgsOCwwLDAsMSw5NiwzMmg2NGE4LDgsMCwwLDEsNy44LDE2LjU2TDE0MCwxNzZoLTI0Zm05OS41NC01Ny4yNi00OC0yNGE4LDgsMCwxLDAtNy4wOCwxNC41MkwyMDQuMjUsMTI4bC00NS43OSwyMi43NGE4LDgsMCwwLDAsNy4wOCwxNC41Mmw0OC0yNGE4LDgsMCwwLDAsMC0xNC41MlpNNDAuNDYsMTEwLjc0YTgsOCwwLDAsMC03LjA4LTEuMjZsLTQ4LDI0YTgsOCwwLDAsMCwwLDE0LjUybDQ4LDI0YTgsOCwwLDEsMCw3LjA4LTE0LjUyTDUxLjc1LDEyOGw0NS43OS0yMi43NEExOCw4LDAsMCwwLDQwLjQ2LDExMC43NFoiLz48L3N2Zz4=",
        storyHeader: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0aCBkPSJNMCA1MCBMMTAwIDUwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI4Ij48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZnJvbT0iMCIgdG89IjEwMCIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaGFycmF5IiB2YWx1ZXM9IjUwIDUwOzEwIDQwOzUwIDUwIiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcGF0aD48cGF0aCBkPSJNMCA3MCBMMTAwIDcwIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSI0IiBvcGFjaXR5PSIwLjUiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBmcm9tPSIxMDAiIHRvPSIwIiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNoYXJyYXkiIHZhbHVlcz0iMzAgNzA7MTAgOTA7MzAgNzAiIGR1cj0iM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvc3ZnPg==",
        sharingArea: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0icC1mYXJvIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0wIDIwIFExMCAxMCAyMCAyMCBUNDAgMjAiIHN0cm9rZT0iY3VycmVudENvbG9yIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjEiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImQiIHZhbHVlcz0iTTAgMjAgUTEwIDEwIDIwIDIwIFQ0MCAyMDtNCAyMCBRMTAgMzAgMjAgMjAgVDQwIDIwO00wIDIwIFExMCAxMCAyMCAyMCBUNDAgMjAiIGR1cj0iM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwLWZhcm8pIi8+PC9zdmc+"
    },
    ornament: { type: 'ornament' } as OrnamentBlock,
    category: "Fábula" as "Fábula",
    tags: ["Misterio", "Soledad", "Mar"],
    content: faroContent,
};


export const stories: Story[] = [
  {
    id: "boa",
    title: "Dormir con la boa",
    date: "2025-07-23",
    tagline: "Un abrazo tibio y asfixiante. ¡Qué tierna!",
    ...boaShared,
  },
  {
    id: "faro",
    title: "El faro de los susurros",
    date: "2024-11-12",
    tagline: "La luz que guía es también la que escucha.",
    ...faroShared,
  },
  {
    id: "boa-2",
    title: "El regreso de la Boa",
    date: "2025-07-13",
    tagline: "El siseo que nunca se fue.",
    ...boaShared,
  },
  {
    id: "faro-2",
    title: "La niebla del Faro",
    date: "2024-10-28",
    tagline: "Algunos secretos es mejor que permanezcan ocultos.",
    ...faroShared,
  },
  {
    id: "boa-3",
    title: "El sueño de la Boa",
    date: "2025-07-03",
    tagline: "En sus sueños, ella es la reina.",
    ...boaShared,
  },
  {
    id: "faro-3",
    title: "El silencio del Faro",
    date: "2024-10-13",
    tagline: "Cuando el mar calla, la tierra tiembla.",
    ...faroShared,
  },
  {
    id: "boa-4",
    title: "La piel de la Boa",
    date: "2025-06-23",
    tagline: "Una muda que lo cambia todo.",
    ...boaShared,
  },
  {
    id: "faro-4",
    title: "La tormenta en el Faro",
    date: "2024-09-28",
    tagline: "La furia del océano contra la soledad.",
    ...faroShared,
  },
  {
    id: "boa-5",
    title: "El hambre de la Boa",
    date: "2025-06-13",
    tagline: "El apetito no siempre es por comida.",
    ...boaShared,
  },
  {
    id: "faro-5",
    title: "El guardián del Faro",
    date: "2024-09-13",
    tagline: "Hay un nuevo farero en la costa.",
    ...faroShared,
  },
  {
    id: "boa-6",
    title: "El último abrazo",
    date: "2025-06-03",
    tagline: "El final que siempre estuvo escrito.",
    ...boaShared,
  },
  {
    id: "faro-6",
    title: "La luz eterna",
    date: "2024-08-29",
    tagline: "Hay luces que nunca se apagan.",
    ...faroShared,
  }
];