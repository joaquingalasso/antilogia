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
    value: '/assets/ornament-boa.svg'
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
    type: 'audio',
    src: '/audios/faro.mp3',
    title: 'Susurros del Océano',
    caption: 'Un lamento recogido en una noche de tormenta.'
  },
  {
    type: 'blockquote',
    style: 'centered-quote',
    html: 'Una noche, el mar guardó silencio.'
  },
  {
    type: 'paragraph',
    html: 'El farero esperó, pero solo el sonido de su propia respiración rompía la calma. Comprendió que su labor había terminado. Escribió su propia historia en la última página del último cuaderno, cerró la puerta del faro y caminó hacia las olas, para convertirse en un susurro más en la colección.'
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
    value: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    caption: 'Un ornamento SVG, como un ojo que todo lo ve.'
  }
];


export const stories: Story[] = [
  {
    id: "boa",
    title: "Dormir con la boa",
    date: "2025-07-23",
    tagline: "Un abrazo tibio y asfixiante. ¡Qué tierna!",
    color: { light: "#0b6d4f", dark: "#10a375" },
    icon: "/assets/icon-boa.svg",
    ornament: { type: 'ornament' , variant: 'svg', value: "/assets/ornament-boa.svg" },
    category: "Relato Corto",
    tags: ["Suspenso", "Psicológico", "Animales"],
    content: boaContent
  },
  {
    id: "faro",
    title: "El faro de los susurros",
    date: "2024-11-12",
    tagline: "La luz que guía es también la que escucha.",
    color: { light: "#015c7e", dark: "#0090c8" },
    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q1vb3IiPjxwYXRoIGQ9Ik0xMDQsMjE2aDQ4YTgsOCwwLDAsMSwwLDE2aC00OGE4LDgsMCwwLDEsMC0xNlptMTItNDBMg4OC4yLDQ4LjU2QTgsOCwwLDAsMSw5NiwzMmg2NGE4LDgsMCwwLDEsNy44LDE2LjU2TDE0MCwxNzZoLTI0Zm05OS41NC01Ny4yNi00OC0yNGE4LDgsMCwxLDAtNy4wOCwxNC41MkwyMDQuMjUsMTI4bC00NS43OSwyMi43NGE4LDgsMCwwLDAsNy4wOCwxNC41Mmw0OC0yNGE4LDgsMCwwLDAsMC0xNC41MlpNNDAuNDYsMTEwLjc0YTgsOCwwLDAsMC03LjA4LTEuMjZsLTQ4LDI0YTgsOCwwLDAsMCwwLDE0LjUybDQ4LDI0YTgsOCwwLDEsMCw3LjA4LTE0LjUyTDUxLjc1LDEyOGw0NS43OS0yMi43NEExOCw4LDAsMCwwLDQwLjQ2LDExMC43NFoiLz48L3N2Zz4=",
    ornament: { type: 'ornament', variant: 'svg', value: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' },
    category: "Fábula",
    tags: ["Misterio", "Soledad", "Mar"],
    content: faroContent
  }
];