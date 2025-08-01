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

    // Montar el script sólo cuando cambia el storyId o lang
    useEffect(() => {
        if (!ref.current) return;

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

        // Usar el JSON de tema personalizado desde tu dominio local o producción
        const themeUrl = `${window.location.origin}${theme === 'dark'
            ? '/giscus-theme-dark.json'
            : '/giscus-theme-light.json'
        }`;
        script.setAttribute('data-theme', themeUrl);

        ref.current.appendChild(script);
    }, [storyId, lang]); // theme se maneja aparte con postMessage

    // Sincronizar theme dinámicamente usando postMessage
    useEffect(() => {
        const sendThemeToGiscus = (newTheme: Theme) => {
            const iframe = ref.current?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
            if (iframe) {
                const themeUrl = `${window.location.origin}${newTheme === 'dark'
                    ? '/giscus-theme-dark.json'
                    : '/giscus-theme-light.json'
                }`;

                const postTheme = () => {
                    iframe.contentWindow?.postMessage(
                        { giscus: { setConfig: { theme: themeUrl } } },
                        'https://giscus.app'
                    );
                };

                // Esperar a que el iframe cargue antes de enviar el mensaje
                if (iframe.contentWindow) {
                    iframe.addEventListener('load', postTheme, { once: true });
                } else {
                    postTheme();
                }
            }
        };

        const iframe = ref.current?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
        if (iframe) {
            sendThemeToGiscus(theme);
        } else {
            // Si el iframe aún no se ha cargado, observar el contenedor.
            const observer = new MutationObserver((mutations) => {
                for (const mutation of mutations) {
                    for (const node of Array.from(mutation.addedNodes)) {
                        if (node instanceof HTMLIFrameElement && node.classList.contains('giscus-frame')) {
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

    return <div ref={ref} className="giscus" />;
};
