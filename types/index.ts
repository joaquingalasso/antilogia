// Base block with optional caption
interface BaseBlock {
  caption?: string;
}

// Content block types
export interface ParagraphBlock { type: 'paragraph'; html: string; }
export interface HeadingBlock { type: 'heading'; level: 2; html: string; }
export interface BlockquoteBlock { type: 'blockquote'; html: string; style?: 'thought' | 'centered-quote'; }
export interface ListBlock { type: 'list'; style: 'ordered' | 'unordered'; items: string[]; }
export interface DialogueBlock { type: 'dialogue'; html: string; attribution: string; }

// Media block types
export interface ImageBlock extends BaseBlock { type: 'image'; src: string; alt: string; }
export interface ImageGalleryBlock extends BaseBlock { type: 'gallery'; images: { src: string; alt: string; }[]; }
export interface VideoBlock extends BaseBlock { type: 'video'; provider: 'youtube' | 'local'; src: string; }
export interface AudioBlock extends BaseBlock { type: 'audio'; src: string; title: string; }
export interface CodeBlock extends BaseBlock { type: 'code'; language: string; code: string; }
export interface TableBlock extends BaseBlock { type: 'table'; headers: string[]; rows: string[][]; }

// Interactive block types
export interface LinkPreviewBlock {
  type: 'linkPreview';
  url: string;
  title: string;
  description: string;
  image: string;
}

export interface SourcedQuoteBlock extends BaseBlock {
  type: 'sourcedQuote';
  html: string;
  source: string;
  sourceUrl?: string;
}

// New feature block types
export interface PullQuoteBlock {
  type: 'pullQuote';
  html: string;
  alignment?: 'left' | 'right' | 'full';
}

export interface SidenoteBlock {
  type: 'sidenote';
  html: string;
}

export interface CollapsibleBlock {
  type: 'collapsible';
  title: string;
  initiallyOpen?: boolean;
  content: ContentBlock[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}
export interface TimelineBlock {
  type: 'timeline';
  events: TimelineEvent[];
}

// Decorative block type
export interface OrnamentBlock extends BaseBlock {
  type: 'ornament';
  variant?: 'default' | 'character' | 'svg';
  value?: string; // Holds the character for 'character' or the SVG string for 'svg'
}

// Union type for all possible content blocks
export type ContentBlock = 
  | ParagraphBlock
  | HeadingBlock
  | BlockquoteBlock
  | ListBlock
  | DialogueBlock
  | ImageBlock
  | ImageGalleryBlock
  | VideoBlock
  | AudioBlock
  | CodeBlock
  | TableBlock
  | SourcedQuoteBlock
  | OrnamentBlock
  | LinkPreviewBlock
  | PullQuoteBlock
  | SidenoteBlock
  | CollapsibleBlock
  | TimelineBlock;

// Main Story interface
export interface Story {
  id: string;
  title: string;
  date: string;
  tagline: string;
  color: {
    light: string;
    dark: string;
  };
  backgrounds: {
    cardIcon: string;
    storyHeader: string;
    sharingArea: string;
  };
  ornament: OrnamentBlock;
  content: ContentBlock[]; // Changed from string to ContentBlock[]
  category: string;
  tags: string[];
}

// Other types
export type Theme = 'light' | 'dark';
export type GalleryViewType = 'grid' | 'list';
export type SortOrder = 'newest' | 'oldest';
export type Language = 'es' | 'en';

export interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (key: string) => string;
}