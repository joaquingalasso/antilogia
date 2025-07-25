import * as React from 'react';
import type { Theme } from '../types';

const { useEffect, useRef } = React;

interface GiscusProps {
    storyId: string;
    theme: Theme;
    lang: string;
}

// IMPORTANT: Replace these values with your repository's details from Giscus.app
// You can get these from https://giscus.app
const GISCUS_CONFIG = {
    repo: "joaquingalasso/antilogia",
    repoId: "R_kgDOPSlhsQ",
    category: "Announcements",
    categoryId: "DIC_kwDOPSlhsc4CtZy7",
};

export const Giscus = ({ storyId, theme, lang }: GiscusProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // This effect handles the Giscus script injection and re-creation
    // when the story or language changes. It also sets the initial theme.
    useEffect(() => {
        if (!ref.current || !storyId) {
            return;
        }

        // Clean up previous Giscus instance
        ref.current.innerHTML = '';

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
        
        // Use the built-in themes which will be styled by the custom CSS file
        script.setAttribute('data-theme', theme);

        ref.current.appendChild(script);

    }, [storyId, lang, theme]); // Re-create script if essential props change

    return <div ref={ref} className="giscus" />;
};
