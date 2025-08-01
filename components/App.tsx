
import * as React from 'react';
import { stories } from '../data/stories';
import { useLanguage } from '../contexts/LanguageContext';
import { StoryGallery } from './StoryGallery';
import { StoryView } from './StoryView';
import { FilterAside } from './FilterAside';
import { StoryAside } from './StoryAside';
import { MobileFilterPanel } from './MobileFilterPanel';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { Navbar } from './Navbar';
import { AboutPage } from './AboutPage';
import type { Story, Theme, GalleryViewType, SortOrder } from '../types';

const { useState, useEffect, useMemo } = React;

type View = 'gallery' | 'story' | 'about';

export const App = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [currentView, setCurrentView] = useState<View>('gallery');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [galleryView, setGalleryView] = useState<GalleryViewType>('list');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [activeTag, setActiveTag] = useState('');
  const [activeArchive, setActiveArchive] = useState('');
  const [selectedArchiveYear, setSelectedArchiveYear] = useState<number | null>(null);
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
        window.scrollTo(0, 0);
        const hash = window.location.hash;
        if (hash.startsWith('#/story/')) {
            const storyId = hash.substring('#/story/'.length);
            const storyToSelect = stories.find(s => s.id === storyId);
            if (storyToSelect) {
                setSelectedStory(storyToSelect);
                setCurrentView('story');
            } else {
                window.location.hash = ''; // Story not found, go to gallery
            }
        } else if (hash === '#/about') {
            setSelectedStory(null);
            setCurrentView('about');
        } else {
            setSelectedStory(null);
            setCurrentView('gallery');
        }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);


  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSelectStory = (story: Story) => {
    window.location.hash = `#/story/${story.id}`;
  };
  
  const handleBackToGallery = () => {
    window.location.hash = '';
  };

  const handleTagChange = (tag: string) => {
    setActiveTag(currentTag => (currentTag === tag ? '' : tag));
    setIsMobileMenuOpen(false);
  };
  
  const handleTagSelectFromStory = (tag: string) => {
    setActiveTag(tag);
    setActiveFilter('All');
    window.location.hash = '';
  };
  
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIsMobileMenuOpen(false);
  }

  const handleArchiveChange = (archiveKey: string) => {
    setActiveArchive(current => (current === archiveKey ? '' : archiveKey));
    setIsMobileMenuOpen(false);
  };

  const uniqueCategories = useMemo(() => [...new Set(stories.map(s => s.category))], []);
  
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

  const archivesWithCounts = useMemo(() => {
    const counts: Record<string, { year: number; monthIndex: number; month: string; count: number }> = {};
    const locale = language === 'es' ? 'es-ES' : 'en-US';

    stories.forEach(story => {
      const date = new Date(story.date);
      const year = date.getFullYear();
      const monthIndex = date.getMonth();
      const key = `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
      
      if (!counts[key]) {
        const monthName = date.toLocaleString(locale, { month: 'short' }).replace('.', '');
        counts[key] = {
          year,
          monthIndex,
          month: monthName.charAt(0).toUpperCase() + monthName.slice(1),
          count: 0
        };
      }
      counts[key].count++;
    });

    return Object.entries(counts)
      .map(([key, data]) => ({ key, ...data }))
      .sort((a, b) => b.year - a.year || b.monthIndex - a.monthIndex);
  }, [stories, language]);
  
  const availableArchiveYears = useMemo(() => [...new Set(archivesWithCounts.map(a => a.year))], [archivesWithCounts]);

  useEffect(() => {
    if (availableArchiveYears.length > 0 && !selectedArchiveYear) {
      setSelectedArchiveYear(availableArchiveYears[0]);
    }
  }, [availableArchiveYears, selectedArchiveYear]);

  const handleArchiveYearChange = (direction: 'next' | 'prev') => {
    if (!selectedArchiveYear) return;
    const currentIndex = availableArchiveYears.indexOf(selectedArchiveYear);
    let newIndex = currentIndex;
    if (direction === 'prev' && currentIndex < availableArchiveYears.length - 1) {
        newIndex = currentIndex + 1;
    } else if (direction === 'next' && currentIndex > 0) {
        newIndex = currentIndex - 1;
    }
    setSelectedArchiveYear(availableArchiveYears[newIndex]);
    setActiveArchive(''); // Reset month selection when year changes
  };

  const monthsForSelectedYear = useMemo(() => {
    return archivesWithCounts.filter(a => a.year === selectedArchiveYear);
  }, [archivesWithCounts, selectedArchiveYear]);

  const filterProps = {
      activeFilter,
      onFilterChange: handleFilterChange,
      categories: uniqueCategories,
      activeTag,
      onTagChange: handleTagChange,
      tags: tagsWithCounts,
      archives: monthsForSelectedYear,
      activeArchive,
      onArchiveChange: handleArchiveChange,
      selectedArchiveYear,
      availableArchiveYears,
      onArchiveYearChange: handleArchiveYearChange,
  };

  return (
    <div className="app-container">
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} currentView={currentView} />
      <div className={`main-layout-grid view-${currentView}`}>
        <main className="content-area">
          {currentView === 'gallery' && (
            <StoryGallery 
                onSelectStory={handleSelectStory} 
                isVisible={true}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                activeFilter={activeFilter}
                categories={uniqueCategories}
                galleryView={galleryView}
                onViewChange={setGalleryView}
                sortOrder={sortOrder}
                onSortChange={setSortOrder}
                activeTag={activeTag}
                activeArchive={activeArchive}
                onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
                onFilterChange={handleFilterChange}
                theme={theme}
            />
          )}
          {currentView === 'story' && (
             <StoryView 
                story={selectedStory} 
                onBack={handleBackToGallery} 
                isVisible={true}
                allStories={stories}
                onSelectStory={handleSelectStory}
                onTagSelect={handleTagSelectFromStory}
                theme={theme}
            />
          )}
          {currentView === 'about' && <AboutPage theme={theme} />}
        </main>
        
        {currentView === 'story' && selectedStory && (
          <StoryAside
            currentStory={selectedStory}
            allStories={stories}
            onSelectStory={handleSelectStory}
            onTagSelect={handleTagSelectFromStory}
          />
        )}
        {currentView === 'gallery' && (
          <FilterAside {...filterProps} />
        )}
      </div>
      
      {currentView === 'gallery' && (
        <MobileFilterPanel 
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          {...filterProps}
        />
      )}

      <Footer theme={theme} />
    </div>
  );
};