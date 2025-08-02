import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Story } from '../types';

interface StoryDetailsMobileProps {
    currentStory: Story;
    onTagSelect: (tag: string) => void;
}

export const StoryDetailsMobile = ({ currentStory, onTagSelect }: StoryDetailsMobileProps) => {
    const { t, language } = useLanguage();
    const locale = language === 'es' ? 'es-ES' : 'en-US';
    return (
        <div className="story-details-mobile">
            <div className="story-details-mobile-meta">
                <div className="meta-item"><strong>{t('category')}:</strong> {t(currentStory.category)}</div>
                <div className="meta-item">
                    <strong>{t('author')}:</strong>
                    <a href="https://joaquingalasso.com" target="_blank" rel="noopener noreferrer">{t('authorName')}</a>
                </div>
                <div className="meta-item"><strong>{t('published')}:</strong> {new Date(currentStory.date).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })}</div>
            </div>
            {currentStory.tags.length > 0 && (
                <div className="story-details-tags">
                    <div className="tags-list">
                        {currentStory.tags.map(tag => (
                            <button key={tag} onClick={() => onTagSelect(tag)} className="tag-item">
                                {t(tag)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};