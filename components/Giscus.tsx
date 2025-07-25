import * as React from 'react';
import type { Theme } from '../types';

const { useEffect, useRef } = React;

interface GiscusProps {
    storyId: string;
    theme: Theme;
    lang: string;
}

const GISCUS_CONFIG = {
    repo: "joaquingalasso/antilogia",
    repoId: "R_kgDOPSlhsQ",
    category: "Announcements",
    categoryId: "DIC_kwDOPSlhsc4CtZy7",
};

// CSS content is now stored directly in the component.
// This avoids all CORS issues by embedding the styles as a data URI.
const customGiscusThemeCss = `
/* --- Giscus Custom Theme for Antilogía --- */
:root {
  --font-header-main: 'Asap', sans-serif;
  --font-tagline: 'Chivo Mono', monospace;
  --font-details: 'Oswald', sans-serif;
  --font-header-sub: 'Asap', sans-serif;
  --font-body: 'Chivo Mono', monospace;
  --bg-color-light: #ffefe1;
  --text-color-light: #2b2b2b;
  --gray-details-light: #828282;
  --dominant-color-light: #f17c0a;
  --accent-color-light: #e43c00;
  --outline-color-light: #a5a5a5;
  --hover-bg-color-light: rgba(0,0,0,0.04);
  --footer-text-light: #ffefe1;
  --gsc-main-bg: transparent;
  --gsc-main-text: var(--text-color-light);
  --gsc-secondary-text: var(--gray-details-light);
  --gsc-accent-text: var(--dominant-color-light);
  --gsc-border-color: var(--outline-color-light);
  --gsc-hover-bg: var(--hover-bg-color-light);
  --gsc-input-bg: var(--bg-color-light);
  --gsc-button-primary-bg: var(--dominant-color-light);
  --gsc-button-primary-text: var(--footer-text-light);
  --gsc-button-primary-hover-bg: var(--accent-color-light);
}
[data-theme="dark"] {
  --bg-color-dark: #2b2b2b;
  --text-color-dark: #ffefe1;
  --gray-details-dark: #a5a5a5;
  --dominant-color-dark: #0178e0;
  --accent-color-dark: #0cafef;
  --outline-color-dark: #5a5a5a;
  --hover-bg-color-dark: rgba(255,255,255,0.08);
  --footer-text-dark: #ffefe1;
  --gsc-main-bg: transparent;
  --gsc-main-text: var(--text-color-dark);
  --gsc-secondary-text: var(--gray-details-dark);
  --gsc-accent-text: var(--dominant-color-dark);
  --gsc-border-color: var(--outline-color-dark);
  --gsc-hover-bg: var(--hover-bg-color-dark);
  --gsc-input-bg: var(--bg-color-dark);
  --gsc-button-primary-bg: var(--dominant-color-dark);
  --gsc-button-primary-text: var(--footer-text-dark);
  --gsc-button-primary-hover-bg: var(--accent-color-dark);
}
.giscus-frame { color-scheme: light dark; }
main {
  font-family: var(--font-body);
  --color-fg-default: var(--gsc-main-text);
  --color-fg-muted: var(--gsc-secondary-text);
  --color-fg-subtle: var(--gsc-secondary-text);
  --color-canvas-default: var(--gsc-main-bg);
  --color-canvas-subtle: var(--gsc-hover-bg);
  --color-canvas-inset: var(--gsc-hover-bg);
  --color-border-default: var(--gsc-border-color);
  --color-border-muted: var(--gsc-border-color);
  --color-accent-fg: var(--gsc-accent-text);
  --color-accent-emphasis: var(--gsc-accent-text);
  --color-accent-muted: var(--gsc-hover-bg);
  --color-accent-subtle: var(--gsc-hover-bg);
  --color-btn-text: var(--gsc-main-text);
  --color-btn-bg: transparent;
  --color-btn-border: var(--gsc-border-color);
  --color-btn-hover-bg: var(--gsc-hover-bg);
  --color-btn-hover-border: var(--gsc-accent-text);
  --color-btn-primary-text: var(--gsc-button-primary-text);
  --color-btn-primary-bg: var(--gsc-button-primary-bg);
  --color-btn-primary-border: var(--gsc-button-primary-bg);
  --color-btn-primary-hover-bg: var(--gsc-button-primary-hover-bg);
  --color-btn-primary-hover-border: var(--gsc-button-primary-hover-bg);
  --color-input-bg: var(--gsc-input-bg);
  --color-input-border: var(--gsc-border-color);
  --color-input-focus-border: var(--gsc-accent-text);
  --color-input-shadow: 0 0 0 3px var(--gsc-accent-text);
  --color-social-reaction-bg-hover: var(--gsc-hover-bg);
  --color-social-reaction-bg-reacted-hover: var(--gsc-hover-bg);
  --color-neutral-muted: var(--gsc-hover-bg);
}
.gsc-comment-box, .gsc-timeline-item-group { border-radius: 12px; border: 1px dotted var(--gsc-border-color); padding: 1rem 1.5rem; background-color: transparent; }
.gsc-comment-box { margin-bottom: 2rem; }
.gsc-comment-box-tabs { background-color: transparent; border-bottom: 1px dotted var(--gsc-border-color); padding-bottom: 0.5rem; }
.gsc-tab-button { border-radius: 8px !important; font-family: var(--font-details); font-size: 0.9rem !important; text-transform: uppercase; color: var(--gsc-secondary-text); }
.gsc-tab-button[aria-selected="true"] { background-color: var(--gsc-hover-bg) !important; color: var(--gsc-accent-text) !important; border: none !important; }
.gsc-comment-box-textarea { font-family: var(--font-body); border-radius: 8px; background-color: var(--gsc-hover-bg); border: 1px solid var(--gsc-border-color); }
.gsc-comment-box-textarea:focus { background-color: var(--gsc-input-bg); box-shadow: 0 0 0 2px var(--gsc-accent-text) !important; }
.gsc-comment-box-buttons { border-top: 1px dotted var(--gsc-border-color) !important; background-color: transparent !important; }
.btn { border-radius: 20px !important; padding: 0.5rem 1.25rem !important; font-family: var(--font-details) !important; text-transform: uppercase !important; font-size: 0.9rem !important; letter-spacing: 0.05em !important; transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important; box-shadow: none !important; border-width: 1px !important; }
.btn:hover:not(:disabled) { transform: translateY(-2px); color: var(--gsc-accent-text) !important; }
.btn-primary { color: var(--gsc-button-primary-text) !important; }
.btn-primary:hover:not(:disabled) { color: var(--gsc-button-primary-text) !important; transform: translateY(-2px); }
.gsc-pagination-button { background-color: var(--gsc-hover-bg); border: 1px solid var(--gsc-border-color); }
.gsc-pagination-button:hover { background-color: var(--gsc-hover-bg); border-color: var(--gsc-accent-text); }
.gsc-comment-content { background-color: transparent; }
.gsc-comment-header { background-color: transparent; padding: 0.5rem 0; }
.gsc-comment-body, .Box.gsc-comment-box-md-preview { border: none; padding: 1rem 0; background-color: transparent; color: var(--gsc-main-text); }
.markdown-body { font-family: var(--font-body); font-size: 1.05rem; line-height: 1.7; color: var(--gsc-main-text); }
.markdown-body a { color: var(--gsc-accent-text); text-decoration: none; border-bottom: 1px solid currentColor; transition: all 0.2s ease; }
.markdown-body a:hover { background-color: var(--gsc-accent-text); color: var(--gsc-button-primary-text); border-bottom-color: transparent; }
.markdown-body pre { background-color: var(--gsc-hover-bg) !important; border-radius: 8px; border: 1px dotted var(--gsc-border-color); }
.markdown-body blockquote { border-left: 3px solid var(--gsc-accent-text); color: var(--gsc-secondary-text); }
.gsc-reactions-button { border-radius: 16px !important; font-size: 1rem; padding: 0.25rem 0.75rem !important; border-color: var(--gsc-border-color) !important; }
.gsc-reactions-button:hover { border-color: var(--gsc-accent-text) !important; }
.gsc-social-reaction-summary-item { border-radius: 16px; padding: 0.25rem 0.75rem; background-color: transparent; color: var(--gsc-secondary-text); border: 1px solid var(--gsc-border-color); transition: all 0.3s ease; }
.gsc-social-reaction-summary-item:hover:enabled { border-color: var(--gsc-accent-text); color: var(--gsc-accent-text); background-color: var(--gsc-hover-bg); }
.gsc-social-reaction-summary-item[aria-pressed="true"] { border-color: var(--gsc-accent-text) !important; background: var(--gsc-hover-bg) !important; color: var(--gsc-accent-text) !important; }
.gsc-timeline { padding: 0; margin-top: 2rem; }
.gsc-timeline::before { display: none; }
.gsc-tl-line { background-color: transparent; width: 1px; border-left: 1px dotted var(--gsc-border-color); }
.gsc-loading-image { display: none; }
.gsc-loading::before { content: '...'; display: block; font-family: var(--font-header-main); font-size: 3rem; color: var(--gsc-accent-text); text-align: center; animation: gsc-loading-pulse 1.5s infinite ease-in-out; }
@keyframes gsc-loading-pulse { 0% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.2); opacity: 1; } 100% { transform: scale(1); opacity: 0.7; } }
.gsc-loading-text { font-family: var(--font-tagline); color: var(--gsc-secondary-text); }
`;

export const Giscus = ({ storyId, theme, lang }: GiscusProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // Effect for initializing the Giscus script
    useEffect(() => {
        if (!ref.current || !storyId) return;

        // Clean up previous Giscus instance
        while (ref.current.firstChild) {
            ref.current.removeChild(ref.current.firstChild);
        }

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.async = true;
        script.crossOrigin = 'anonymous';
        
        script.setAttribute('data-repo', GISCUS_CONFIG.repo);
        script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
        script.setAttribute('data-category', GISCUS_CONFIG.category);
        script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
        script.setAttribute('data-mapping', 'specific');
        script.setAttribute('data-term', storyId);
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '0');
        script.setAttribute('data-input-position', 'top');
        script.setAttribute('data-lang', lang);
        script.setAttribute('data-loading', 'lazy');

        // Encode the CSS string into Base64 and create a Data URI
        const encodedCss = btoa(customGiscusThemeCss);
        const themeDataUri = `data:text/css;base64,${encodedCss}`;
        script.setAttribute('data-theme', themeDataUri);

        ref.current.appendChild(script);

        // When the component unmounts, clean up the container
        return () => {
            if(ref.current) {
                while (ref.current.firstChild) {
                    ref.current.removeChild(ref.current.firstChild);
                }
            }
        };
    }, [storyId, lang]); // Re-create script if story or language changes

    // Effect for sending theme updates to the Giscus iframe
    useEffect(() => {
        const iframe = ref.current?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
        if (iframe) {
            // The theme (light/dark) is controlled by this postMessage.
            // Giscus listens for this and applies the corresponding data-theme attribute
            // inside the iframe, which activates the correct part of our embedded CSS.
            iframe.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
        }
    }, [theme]); // Send message whenever the theme changes

    return <div ref={ref} className="giscus" />;
};
