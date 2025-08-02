import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Story } from '../types';

const { useMemo } = React;

interface RelatedStoriesMobileProps {
    currentStory: Story;
    allStories: Story[];
    onSelectStory: (story: Story) => void;
}

export const RelatedStoriesMobile = ({ currentStory, allStories, onSelectStory }: RelatedStoriesMobileProps) => {
    const { t } = useLanguage();
    const relatedStories = useMemo(() => {
        return allStories.filter(s => s.id !== currentStory.id).slice(0, 3);
    }, [currentStory, allStories]);

    if (relatedStories.length === 0) return null;

    return (
        <section className="related-stories-mobile">
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
        </section>
    );
};
