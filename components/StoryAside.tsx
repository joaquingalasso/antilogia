import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Story } from '../types';

const { useMemo } = React;

interface StoryAsideProps {
    currentStory: Story;
    allStories: Story[];
    onSelectStory: (story: Story) => void;
    onTagSelect: (tag: string) => void;
}

export const StoryAside = ({ currentStory, allStories, onSelectStory, onTagSelect }: StoryAsideProps) => {
    const { t, language } = useLanguage();
    const locale = language === 'es' ? 'es-ES' : 'en-US';
    const relatedStories = useMemo(() => {
        return allStories.filter(s => s.id !== currentStory.id).slice(0, 3);
    }, [currentStory, allStories]);

    return (
        <aside className="story-aside" aria-label="Información del relato y sugerencias">
            <div className="story-details-group">
                <h3>{t('storyDetails')}</h3>
                <p><strong>{t('category')}:</strong> {t(currentStory.category)}</p>
                <p>
                    <strong>{t('author')}:</strong>
                    <a href="https://joaquingalasso.com" target="_blank" rel="noopener noreferrer"> {t('authorName')}</a>
                </p>
                <p><strong>{t('published')}:</strong> {new Date(currentStory.date).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                
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
            
            {relatedStories.length > 0 && (
                <div className="related-stories-group">
                    <h3>{t('relatedStoriesTitle')}</h3>
                    <ul>
                        {relatedStories.map(story => (
                            <li key={story.id}>
                                <button onClick={() => onSelectStory(story)} className="related-story-button">
                                    <span className="related-story-title">{story.title}</span>
                                    <span className="related-story-category">{t(story.category)}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </aside>
    );
};