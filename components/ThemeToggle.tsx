import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => {
    const { t } = useLanguage();
    const label = t(theme === 'light' ? 'changeToDarkMode' : 'changeToLightMode');
    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={label}
            title={label}
        >
            <span className={`theme-toggle-icon ${theme}`}></span>
        </button>
    );
};
