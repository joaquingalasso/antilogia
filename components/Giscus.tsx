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

        // Point to the custom theme CSS file. The theme (light/dark) inside
        // the CSS will be controlled by a postMessage event.
        const themeUrl = `${window.location.origin}/giscus-theme.css`;
        script.setAttribute('data-theme', themeUrl);

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
            iframe.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
        }
    }, [theme]); // Send message whenever the theme changes

    return <div ref={ref} className="giscus" />;
};
