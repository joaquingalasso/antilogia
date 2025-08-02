

import * as React from 'react';
import { stories } from '../data/stories';
import { useLanguage } from '../contexts/LanguageContext';
import type { Story, Theme } from '../types';

const { useState, useMemo, useEffect, useRef } = React;

const FEATURED_STORY_IDS = ["boa", "faro", "boa-3", "faro-4", "boa-6", "faro-6"];
const AUTOPLAY_INTERVAL = 4000;
const TRANSITION_DURATION = 600;

interface FeaturedStoriesProps {
    onSelectStory: (story: Story) => void;
    theme: Theme;
}

export const FeaturedStories = ({ onSelectStory, theme }: FeaturedStoriesProps) => {
    const { t } = useLanguage();

    const featuredStories = useMemo(() =>
        stories.filter(s => FEATURED_STORY_IDS.includes(s.id))
               .sort((a, b) => FEATURED_STORY_IDS.indexOf(a.id) - FEATURED_STORY_IDS.indexOf(b.id))
    , []);

    const PADDING_SIZE = featuredStories.length;

    const paddedStories = useMemo(() => {
        if (PADDING_SIZE === 0) return [];
        const start = featuredStories.slice(-PADDING_SIZE);
        const end = featuredStories.slice(0, PADDING_SIZE);
        return [...start, ...featuredStories, ...end];
    }, [featuredStories, PADDING_SIZE]);

    const [activeIndex, setActiveIndex] = useState(PADDING_SIZE);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<number | null>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const restartAutoplay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            handleNav('next');
        }, AUTOPLAY_INTERVAL);
    };

    const handleNav = (direction: 'prev' | 'next') => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTransitionEnabled(true);
        setActiveIndex(prev => prev + (direction === 'next' ? 1 : -1));
        restartAutoplay();
    };

    // Autoplay effect
    useEffect(() => {
        if (!isHovered && featuredStories.length > 1 && !isTransitioning) {
            restartAutoplay();
        } else if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered, isTransitioning, featuredStories.length]);

    // Effect to handle state after an instantaneous jump
    useEffect(() => {
        if (!transitionEnabled) {
            // A jump has just occurred. Unlock the UI and re-enable transitions for the next slide.
            const timer = setTimeout(() => {
                setTransitionEnabled(true);
                setIsTransitioning(false);
            }, 50); // A small delay is crucial
            return () => clearTimeout(timer);
        }
    }, [transitionEnabled]);

    const handleTransitionEnd = (e: React.TransitionEvent) => {
        if (e.target !== listRef.current) return;

        const atEnd = activeIndex >= PADDING_SIZE + featuredStories.length;
        const atStart = activeIndex < PADDING_SIZE;

        if (atEnd || atStart) {
            // Disable animations for the instantaneous jump
            setTransitionEnabled(false);
            // Set the index to the correct "real" slide
            setActiveIndex(atEnd ? (activeIndex - featuredStories.length) : (activeIndex + featuredStories.length));
        } else {
            // A normal transition ended, so we can unlock the UI.
            setIsTransitioning(false);
        }
    };

    if (featuredStories.length === 0) return null;

    const realIndex = (activeIndex - PADDING_SIZE + featuredStories.length) % featuredStories.length;
    const currentStory = featuredStories[realIndex];
    const currentTitle = currentStory?.title || '';
    const currentCategory = currentStory ? t(currentStory.category) : '';

    const arrowIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
    );

    return (
        <div
            className="featured-stories-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="featured-carousel-container">
                <button
                    className="carousel-arrow prev-arrow"
                    onClick={() => handleNav('prev')}
                    aria-label={t('previousStory')}
                >
                    {arrowIcon}
                </button>
                <div className="carousel-viewport">
                    <ul
                        ref={listRef}
                        className={`featured-stories-list ${!transitionEnabled ? 'no-transition' : ''}`}
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            '--active-index': activeIndex,
                            transition: transitionEnabled ? `transform ${TRANSITION_DURATION / 1000}s var(--ease-out-quart)` : 'none',
                        } as React.CSSProperties}
                    >
                        {paddedStories.map((story, index) => {
                            const isThisStoryActive = index === activeIndex;
                            const key = `${story.id}-${index}`; // Unique key for clones
                            return (
                                <li key={key}>
                                    <button
                                        className={`featured-story-item ${isThisStoryActive ? 'active' : ''}`}
                                        onClick={() => {
                                            if (isTransitioning) return;
                                            
                                            if (isThisStoryActive) {
                                                // If it's already the active story, navigate to it.
                                                onSelectStory(story);
                                            } else {
                                                // If it's an inactive story, make it the active one.
                                                setIsTransitioning(true);
                                                setTransitionEnabled(true);
                                                setActiveIndex(index);
                                            }
                                    
                                            restartAutoplay();
                                        }}
                                        title={story.title}
                                        aria-label={story.title}
                                        style={{
                                            '--featured-color': story.color[theme],
                                            '--featured-icon-url': `url("${story.backgrounds.cardIcon}")`,
                                        } as React.CSSProperties}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <button
                    className="carousel-arrow next-arrow"
                    onClick={() => handleNav('next')}
                    aria-label={t('nextStory')}
                >
                    {arrowIcon}
                </button>
            </div>
            <div className="featured-story-title-container">
                <div className="featured-story-info" key={currentTitle}>
                    <h4 className="featured-story-title">
                        {currentTitle}
                    </h4>
                    {currentCategory && (
                        <p className="featured-story-category">
                            {currentCategory}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};