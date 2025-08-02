
import * as React from 'react';
import type { Theme } from '../types';

const { useEffect, useRef, useState } = React;

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

// Base URL del repositorio donde se alojan los temas
const GISCUS_THEME_BASE_URL = "https://cdn.jsdelivr.net/gh/joaquingalasso/antilogia@main/";

export const Giscus = ({ storyId, theme, lang }: GiscusProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isGiscusLoaded, setIsGiscusLoaded] = useState(false);

    // Determina la URL del archivo de tema correcto según el tema de la aplicación.
    const themeFile = theme === 'dark' ? 'public/giscus-theme-dark.css' : 'public/giscus-theme.css';
    const giscusThemeUrl = `${GISCUS_THEME_BASE_URL}${themeFile}`;

    // Montar el script inicialmente o cuando cambian las props de identidad
    useEffect(() => {
        if (!ref.current) return;

        ref.current.innerHTML = ''; // Limpiar instancias previas

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
        
        // Establecer la URL del tema inicial
        script.setAttribute('data-theme', giscusThemeUrl);
        
        script.onload = () => setIsGiscusLoaded(true);

        ref.current.appendChild(script);

        // Limpieza al desmontar
        return () => {
            if(ref.current) ref.current.innerHTML = '';
            setIsGiscusLoaded(false);
        }
    }, [storyId, lang]); // Volver a montar solo si la historia o el idioma cambian

    // Enviar un postMessage para actualizar el tema cuando cambie
    useEffect(() => {
        if (!isGiscusLoaded || !ref.current) return;

        const iframe = ref.current.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
        if (iframe && iframe.contentWindow) {
            iframe.contentWindow.postMessage(
                { giscus: { setConfig: { theme: giscusThemeUrl } } },
                'https://giscus.app'
            );
        }
    }, [theme, isGiscusLoaded, giscusThemeUrl]); // Este efecto ahora maneja los cambios de tema

    return <div ref={ref} className="giscus" />;
};
