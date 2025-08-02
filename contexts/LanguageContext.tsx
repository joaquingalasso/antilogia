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

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es');
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
