import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { RssIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';
import type { Theme } from '../types';

interface FooterProps {
    theme: Theme;
    toggleTheme: () => void;
}

const authorPhoto = {
    light: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop',
    dark: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop',
};

export const Footer = ({ theme, toggleTheme }: FooterProps) => {
    const { t } = useLanguage();
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-bio">
                    <img src={authorPhoto[theme]} alt={t('authorName')} className="author-photo-footer" />
                    <div className="author-info-footer">
                        <h4>
                            <a href="https://joaquingalasso.com" target="_blank" rel="noopener noreferrer">
                                {t('authorName')}
                            </a>
                        </h4>
                        <p>{t('authorBio')}</p>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-copyright">
                        <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
                    </div>
                    <a href="/rss.xml" target="_blank" rel="noopener noreferrer" className="rss-button-footer">
                        <RssIcon width={16} height={16} />
                        <span>{t('subscribeToFeed')}</span>
                    </a>
                </div>
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </footer>
    );
};