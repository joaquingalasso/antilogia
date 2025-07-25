import * as React from 'react';
import { translations } from '../data/i18n';
import type { Language, LanguageContextType } from '../types';

const { createContext, useState, useContext, useEffect } = React;

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('es');

    // Sync language state with the URL hash
    useEffect(() => {
        const getLangFromHash = () => {
            const langMatch = window.location.hash.match(/#\/(es|en)/);
            return (langMatch ? langMatch[1] : 'es') as Language;
        };
        
        const handleHashChange = () => {
            setLanguage(getLangFromHash());
        };

        // Set initial language
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const toggleLanguage = () => {
        const newLang = language === 'es' ? 'en' : 'es';
        const storyMatch = window.location.hash.match(/story\/([^/]+)/);
        const storyId = storyMatch ? storyMatch[1] : null;

        let newHash = `#/${newLang}/`;
        if (storyId) {
            newHash += `story/${storyId}`;
        }
        
        // This will trigger the hashchange event listener, which updates the state
        window.location.hash = newHash;
    };

    const t = (key: string): string => {
        const translation = translations[key as keyof typeof translations];
        if (translation) {
            return translation[language] || key;
        }
        return key;
    };

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    const value = { language, toggleLanguage, t };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};