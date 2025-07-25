import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();
    return (
        <button
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label="Change language"
            title="Change language"
        >
            {language === 'es' ? 'EN' : 'ES'}
        </button>
    );
};
