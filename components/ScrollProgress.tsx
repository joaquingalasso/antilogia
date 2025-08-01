import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const { useState, useEffect, useCallback } = React;

const BUTTON_VISIBILITY_THRESHOLD = 25; // Show button after 25% scroll

export const ScrollProgress = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const { t } = useLanguage();

    const handleScroll = useCallback(() => {
        // Use document.documentElement as the primary source, but fallback to document.body
        // This provides better cross-browser compatibility.
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight <= clientHeight) {
            setScrollPercentage(0);
            setIsButtonVisible(false);
            return;
        }

        const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollPercentage(percentage);
        setIsButtonVisible(percentage > BUTTON_VISIBILITY_THRESHOLD);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check in case the page loads scrolled down
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const upArrowIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5"/><polyline points="5 12 12 5 19 12"/>
        </svg>
    );

    return (
        <>
            <div className="scroll-progress-bar" style={{ width: `${scrollPercentage}%` }} />
            <button
                className={`back-to-top-button ${isButtonVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
                title={t('backToTop')}
                aria-label={t('backToTop')}
            >
                {upArrowIcon}
            </button>
        </>
    );
};