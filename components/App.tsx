import * as React from 'react';
import { stories } from '../data/stories';
import { useLanguage } from '../contexts/LanguageContext';
import { StoryGallery } from './StoryGallery';
import { StoryView } from './StoryView';
import { FilterAside } from './FilterAside';
import { StoryAside } from './StoryAside';
import { MobileFilterPanel } from './MobileFilterPanel';
import { Footer } from './Footer';
import type { Story, Theme, GalleryViewType, SortOrder } from '../types';

const { useState, useEffect, useMemo } = React;

export const App = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [galleryView, setGalleryView] = useState<GalleryViewType>('grid');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [activeTag, setActiveTag] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  useEffect(() => {
    const root = document.documentElement;
    if (selectedStory) {
        const storyColor = theme === 'light' ? selectedStory.color.light : selectedStory.color.dark;
        root.style.setProperty('--dominant-color', storyColor);
    } else {
        root.style.removeProperty('--dominant-color');
    }
    // Cleanup function
    return () => {
        root.style.removeProperty('--dominant-color');
    };
  }, [selectedStory, theme]);

  useEffect(() => {
    const rootEl = document.getElementById('root');
    if (rootEl) {
        if (selectedStory) {
            rootEl.classList.add('story-active');
        } else {
            rootEl.classList.remove('story-active');
        }
    }
  }, [selectedStory]);

  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
    return () => {
        body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash.startsWith('#/story/')) {
            const storyId = hash.substring('#/story/'.length);
            const storyToSelect = stories.find(s => s.id === storyId);
            if (storyToSelect) {
                setSelectedStory(storyToSelect);
            }
        } else {
            setSelectedStory(null);
        }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSelectStory = (story: Story) => {
    window.scrollTo(0, 0);
    // setSelectedStory is now handled by the hashchange event listener
    window.location.hash = `#/story/${story.id}`;
  };
  
  const handleBackToGallery = () => {
    // setSelectedStory is now handled by the hashchange event listener
    window.location.hash = '';
  };

  const handleTagChange = (tag: string) => {
    setActiveTag(currentTag => (currentTag === tag ? '' : tag));
    setIsMobileMenuOpen(false);
  };
  
  const handleTagSelectFromStory = (tag: string) => {
    window.scrollTo(0, 0);
    setActiveTag(tag);
    setActiveFilter('All');
    // setSelectedStory is now handled by the hashchange event listener
    window.location.hash = '';
  };
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIsMobileMenuOpen(false);
  }

  const uniqueCategories = useMemo(() => [...new Set(stories.map(s => s.category))], []);
  const isStoryView = !!selectedStory;

  const tagsWithCounts = useMemo(() => {
    const allTags = stories.flatMap(s => s.tags);
    const counts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return Object.entries(counts)
      .map(([tag, count]) => ({ tag, count }))
      .sort((a, b) => b.count - a.count);
  }, [stories]);
  
  const filterProps = {
      activeFilter,
      onFilterChange: handleFilterChange,
      categories: uniqueCategories,
      activeTag,
      onTagChange: handleTagChange,
      tags: tagsWithCounts,
  };

  return (
    <div className="app-container">
      <main className="content-area">
        <StoryGallery 
            onSelectStory={handleSelectStory} 
            isVisible={!isStoryView}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeFilter={activeFilter}
            categories={uniqueCategories}
            galleryView={galleryView}
            onViewChange={setGalleryView}
            sortOrder={sortOrder}
            onSortChange={setSortOrder}
            activeTag={activeTag}
            onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
            onFilterChange={handleFilterChange}
            theme={theme}
        />
        <StoryView 
            story={selectedStory} 
            onBack={handleBackToGallery} 
            isVisible={isStoryView}
            allStories={stories}
            onSelectStory={handleSelectStory}
            onTagSelect={handleTagSelectFromStory}
            theme={theme}
        />
      </main>
      
      {isStoryView ? (
        <StoryAside
          currentStory={selectedStory!}
          allStories={stories}
          onSelectStory={handleSelectStory}
          onTagSelect={handleTagSelectFromStory}
        />
      ) : (
        <FilterAside {...filterProps} />
      )}
      
      <MobileFilterPanel 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        {...filterProps}
      />

      <Footer theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
};