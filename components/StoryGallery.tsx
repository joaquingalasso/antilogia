import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { stories } from '../data/stories';
import { StoryCard } from './StoryCard';
import { LanguageToggle } from './LanguageToggle';
import { MobileFilterToggle } from './MobileFilterToggle';
import { SortToggle } from './SortToggle';
import { ViewToggle } from './ViewToggle';
import type { Story, GalleryViewType, SortOrder, Theme } from '../types';

const { useState, useEffect, useMemo } = React;

const useTypewriter = (phrases: string[], { typingDelay = 100, deletingDelay = 50, pauseDelay = 2000 } = {}) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        if (subIndex === phrases[index].length + 1 && !isDeleting) {
            const timeout = setTimeout(() => setIsDeleting(true), pauseDelay);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prevSubIndex) => prevSubIndex + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingDelay : typingDelay);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, index, phrases, typingDelay, deletingDelay, pauseDelay]);

    // Reset on language change
     useEffect(() => {
        setIndex(0);
        setSubIndex(0);
        setIsDeleting(false);
    }, [phrases]);


    return phrases[index].substring(0, subIndex);
};


interface StoryGalleryProps {
  onSelectStory: (story: Story) => void;
  isVisible: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  categories: string[];
  galleryView: GalleryViewType;
  onViewChange: (view: GalleryViewType) => void;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
  activeTag: string;
  onToggleMobileMenu: () => void;
  theme: Theme;
}

export const StoryGallery = ({ onSelectStory, isVisible, searchQuery, onSearchChange, activeFilter, galleryView, onViewChange, sortOrder, onSortChange, activeTag, onToggleMobileMenu, theme }: StoryGalleryProps) => {
    const { t, language } = useLanguage();
    
    const subtitles = useMemo(() => [
        t('subtitle_1'),
        t('subtitle_2'),
        t('subtitle_3'),
        t('subtitle_4'),
    ], [language, t]);

    const displayedSubtitle = useTypewriter(subtitles);

    const processedStories = useMemo(() => {
        let filteredStories = stories;

        // Filter by search query
        if (searchQuery) {
            const lowercasedQuery = searchQuery.toLowerCase();
            filteredStories = filteredStories.filter(story =>
                story.title.toLowerCase().includes(lowercasedQuery) ||
                story.tagline.toLowerCase().includes(lowercasedQuery) ||
                story.tags.some(tag => t(tag).toLowerCase().includes(lowercasedQuery))
            );
        }

        // Filter by category
        if (activeFilter !== 'All') {
            filteredStories = filteredStories.filter(story => story.category === activeFilter);
        }

        // Filter by tag
        if (activeTag) {
            filteredStories = filteredStories.filter(story => story.tags.includes(activeTag));
        }

        // Sort stories
        const sortedStories = [...filteredStories].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });

        return sortedStories;
    }, [searchQuery, activeFilter, activeTag, sortOrder, t]);

    return (
        <section className={`view story-gallery ${!isVisible ? 'hidden' : ''}`} aria-hidden={!isVisible}>
            <header className="gallery-header">
                <div className="gallery-header-top">
                    <h1>{t('anthologyTitle')}</h1>
                    <LanguageToggle />
                </div>
                <p className="typewriter-subtitle-container">
                    <span className="typewriter-subtitle">{displayedSubtitle}</span>
                </p>
            </header>
            
            <div className="gallery-actions-bar">
                <div className="search-bar-gallery">
                     <input
                        type="search"
                        placeholder={t('searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        aria-label="Buscar historias"
                    />
                </div>
                <div className="gallery-controls">
                    <MobileFilterToggle onClick={onToggleMobileMenu} />
                    <SortToggle currentOrder={sortOrder} onOrderChange={onSortChange} />
                    <ViewToggle currentView={galleryView} onViewChange={onViewChange} />
                </div>
            </div>

            <div className={`story-gallery-grid view-${galleryView}`}>
                {processedStories.length > 0 ? (
                    processedStories.map(story => (
                        <StoryCard key={story.id} story={story} onSelect={onSelectStory} theme={theme} />
                    ))
                ) : (
                    <p className="no-results">{t('noResults')}</p>
                )}
            </div>
        </section>
    );
};