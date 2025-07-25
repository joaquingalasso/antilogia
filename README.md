# ☙ Antilogía Digital

Esta es una aplicación web de una antología digital de cuentos, diseñada para ofrecer una experiencia de lectura inmersiva y visualmente atractiva. La plataforma cuenta con un diseño adaptable, temas claro y oscuro, y capacidades de filtrado y búsqueda.

## Características Principales

- **Diseño Responsive**: Se adapta a cualquier tamaño de pantalla, desde móviles hasta ordenadores de escritorio.
- **Temas Personalizables**: Cambia entre un tema claro y uno oscuro para una lectura cómoda en cualquier entorno.
- **Galería de Historias Interactiva**: Visualiza las historias en una vista de mosaico o de lista.
- **Navegación Avanzada**: Filtra historias por categoría o etiqueta, ordénalas por fecha o busca por texto.
- **Contenido Multimedia Enriquecido**: Las entradas pueden incluir audio, video (YouTube o local), imágenes, galerías y fragmentos de código.
- **Contenido Interactivo**: Soporte para hipervínculos, tooltips y previsualización de enlaces generada por IA.
- **Internacionalización**: Soporte para múltiples idiomas (actualmente español e inglés).

## Cómo Añadir Contenido

Las historias se gestionan en el archivo `data/stories.ts`. Para añadir o modificar contenido, es necesario entender la estructura de bloques. Cada historia tiene una propiedad `content` que es un array de `ContentBlock`.

### Estructura de Bloques de Contenido

A continuación se describen los tipos de bloques disponibles y cómo usarlos.

---

### Párrafo

Para texto estándar. Puedes usar etiquetas HTML como `<strong>`, `<em>`, `<a>` o `<span>` dentro del string.

```javascript
{
  type: 'paragraph',
  html: 'El siseo era una canción de cuna de escamas y noche. Sentía cómo se enroscaba, un músculo infinito y paciente que <strong>medía mi sueño</strong>.'
}
```

---

### Hipervínculos

Simplemente usa una etiqueta `<a>` estándar dentro de cualquier bloque `html`. Se le aplicarán estilos automáticamente.

```javascript
{
  type: 'paragraph',
  html: 'Para más información, visita la <a href="https://example.com" target="_blank" rel="noopener noreferrer">página de ejemplo</a>.'
}
```

---

### Tooltips (Información Emergente)

Añade un atributo `data-tooltip` a cualquier `<span>` para crear un tooltip que aparece al pasar el cursor.

```javascript
{
  type: 'paragraph',
  html: 'Este es un texto con <span data-tooltip="Esta es la información que aparecerá.">información adicional</span>.'
}
```

---

### Encabezado

Para los subtítulos dentro de la historia.

```javascript
{
  type: 'heading',
  level: 2, // Actualmente solo se usa el nivel 2
  html: 'El pacto silencioso'
}
```

---

### Cita (Blockquote)

Para resaltar un fragmento de texto. Puede tener diferentes estilos.

```javascript
{
  type: 'blockquote',
  style: 'thought', // O 'centered-quote' o sin estilo
  html: 'No era miedo, era una certeza helada: <strong>su abrazo era el último hogar</strong>.'
}
```

---

### Lista

Para listas ordenadas o desordenadas. Los `items` pueden contener HTML.

```javascript
{
  type: 'list',
  style: 'ordered', // o 'unordered'
  items: [
    'Yo le daba mi calor, mi respiración pausada.',
    'Ella me ofrecía el fin del desvelo.'
  ]
}
```

---

### Imagen

Para mostrar una sola imagen. Opcionalmente, puede tener un epígrafe.

```javascript
{
  type: 'image',
  src: 'https://images.unsplash.com/photo-1588196749339-39572415f339',
  alt: 'Una serpiente verde sobre una rama.',
  caption: 'El patrón de su piel era un mapa de secretos ancestrales.'
}
```

---

### Galería de Imágenes

Para mostrar una serie de imágenes en un mosaico.

```javascript
{
  type: 'gallery',
  images: [
    { src: '/images/gallery/1.jpg', alt: 'Imagen 1' },
    { src: '/images/gallery/2.jpg', alt: 'Imagen 2' },
    { src: '/images/gallery/3.jpg', alt: 'Imagen 3' }
  ],
  caption: 'Una colección de momentos capturados.'
}
```

---

### Video

Soporta videos locales (dentro de la carpeta `/public`) y de YouTube.

**Video Local:**

```javascript
{
  type: 'video',
  provider: 'local',
  src: '/videos/storm.mp4', // Ruta al video en /public/videos
  caption: 'El mar embravecido contra el acantilado.'
}
```

**Video de YouTube:**

Usa el ID del video de la URL de YouTube (`https://www.youtube.com/watch?v=VIDEO_ID`).

```javascript
{
  type: 'video',
  provider: 'youtube',
  src: 'eX3u0IlBBO4', // ID del video de YouTube
  caption: 'El sonido incesante de las olas.'
}
```

---

### Previsualización de Enlace (AI)

Genera una tarjeta de previsualización para cualquier URL, similar a las que se ven en redes sociales. Utiliza la API de Gemini y la búsqueda de Google para obtener el título, la descripción y la imagen de la página.

```javascript
{
  type: 'linkPreview',
  url: 'https://es.wikipedia.org/wiki/Faro'
}
```

---

### Audio

Inserta un reproductor de audio en cualquier parte del contenido.

```javascript
{
  type: 'audio',
  src: '/audios/faro.mp3', // Ruta al audio en /public/audios
  title: 'Sonidos del Faro',
  caption: 'Los lamentos que solo el farero podía escuchar.'
}
```

---

### Código

Muestra un fragmento de código con resaltado de sintaxis básico.

```javascript
{
  type: 'code',
  language: 'javascript',
  code: `
function listenToTheSea() {
  const whispers = ocean.listen();
  if (whispers.length > 0) {
    librarian.archive(whispers);
  }
}
  `,
  caption: 'El código que rige la biblioteca del mar.'
}
```

---

### Ornamento

Un separador decorativo. Ahora puedes elegir entre el estilo por defecto, un carácter personalizado o un SVG.

**Ornamento por Defecto:**

Usa el carácter `✾` predefinido.

```javascript
{
  type: 'ornament'
}
```

**Ornamento de Carácter:**

Usa cualquier carácter de texto como separador.

```javascript
{
  type: 'ornament',
  variant: 'character',
  value: '§',
  caption: 'Un epígrafe opcional para el ornamento.'
}
```

**Ornamento SVG:**

Usa un SVG en línea como separador. El SVG heredará el color dominante del tema.

```javascript
{
  type: 'ornament',
  variant: 'svg',
  value: '<svg width="24" height="24" viewBox="0 0 24 24" ...>...</svg>',
  caption: 'Un epígrafe opcional para el ornamento.'
}
```
