


import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { stories } from '../data/stories';
import { StoryCard } from './StoryCard';
import { MobileFilterToggle } from './MobileFilterToggle';
import { SortToggle } from './SortToggle';
import { ViewToggle } from './ViewToggle';
import { StoryGroupHeader } from './StoryGroupHeader';
import { FeaturedStories } from './FeaturedStories';
import type { Story, GalleryViewType, SortOrder, Theme } from '../types';

const { useState, useEffect, useMemo } = React;

const ITEMS_PER_PAGE = 6;

const useTypewriter = (phrases: string[], { typingDelay = 100, deletingDelay = 50, pauseDelay = 2000 } = {}) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        if (!phrases || phrases.length === 0 || !phrases[index]) return;
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

    if (!phrases || phrases.length === 0 || !phrases[index]) {
        return '';
    }
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
  activeArchive: string;
  onToggleMobileMenu: () => void;
  theme: Theme;
}

export const StoryGallery = ({ onSelectStory, isVisible, searchQuery, onSearchChange, activeFilter, galleryView, onViewChange, sortOrder, onSortChange, activeTag, activeArchive, onToggleMobileMenu, theme }: StoryGalleryProps) => {
    const { t, language } = useLanguage();
    const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
    
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

        // Filter by archive date
        if (activeArchive) {
            const [year, month] = activeArchive.split('-').map(Number);
            filteredStories = filteredStories.filter(story => {
                const storyDate = new Date(story.date);
                return storyDate.getFullYear() === year && (storyDate.getMonth() + 1) === month;
            });
        }

        // Sort stories
        const sortedStories = [...filteredStories].sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
        });

        return sortedStories;
    }, [searchQuery, activeFilter, activeTag, activeArchive, sortOrder, t]);

    // Reset visible items when filters change.
    useEffect(() => {
        setVisibleItems(ITEMS_PER_PAGE);
    }, [searchQuery, activeFilter, activeTag, sortOrder, activeArchive]);

    const storiesToDisplay = useMemo(() => {
        return processedStories.slice(0, visibleItems);
    }, [processedStories, visibleItems]);

    const handleLoadMore = () => {
        setVisibleItems(prev => prev + ITEMS_PER_PAGE);
    };
    
    const canLoadMore = visibleItems < processedStories.length;

    const renderGalleryContent = () => {
        if (storiesToDisplay.length === 0) {
            return (
                <div className="no-results-container">
                    <div className="no-results-icon" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 1.6-1.2 2.4-2.35 3.12"></path>
                            <path d="M12 17h.01"></path>
                        </svg>
                    </div>
                    <h3>{t('noResultsTitle')}</h3>
                    <p>{t('noResultsMessage')}</p>
                </div>
            );
        }
        
        const groupedStories: { [key: string]: Story[] } = {};
        const groupOrder: string[] = [];

        storiesToDisplay.forEach((story) => {
            const date = new Date(story.date);
            const monthName = date.toLocaleString(language === 'es' ? 'es-ES' : 'en-US', { month: 'long' });
            const year = date.getFullYear();
            const groupKey = `${year}-${monthName}`;

            if (!groupedStories[groupKey]) {
                groupedStories[groupKey] = [];
                groupOrder.push(groupKey);
            }
            groupedStories[groupKey].push(story);
        });

        return groupOrder.map(groupKey => {
            const storiesInGroup = groupedStories[groupKey];
            const firstStoryDate = new Date(storiesInGroup[0].date);
            const monthName = firstStoryDate.toLocaleString(language === 'es' ? 'es-ES' : 'en-US', { month: 'long' });
            const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
            const year = firstStoryDate.getFullYear();

            return (
                <React.Fragment key={groupKey}>
                    <StoryGroupHeader month={capitalizedMonth} year={year} />
                    <div className="story-card-group-wrapper">
                        {storiesInGroup.map(story => (
                            <StoryCard key={story.id} story={story} onSelect={onSelectStory} theme={theme} />
                        ))}
                    </div>
                </React.Fragment>
            );
        });
    };


    return (
        <section className={`view story-gallery ${!isVisible ? 'hidden' : ''}`} aria-hidden={!isVisible}>
            <div className="gallery-header-container">
                <header className="gallery-header">
                    <div className="gallery-header-top">
                        <h1>{t('anthologyTitle')}</h1>
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
            </div>

            <div className={`story-gallery-grid view-${galleryView}`}>
                <FeaturedStories onSelectStory={onSelectStory} theme={theme} />
                {renderGalleryContent()}
            </div>
            
            {canLoadMore && (
                <div className="load-more-container">
                    <button onClick={handleLoadMore} className="load-more-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        {t('loadMore')}
                    </button>
                </div>
            )}
        </section>
    );
};
