import * as React from 'react';
import type { CollapsibleBlock } from '../types';
import { ContentRenderer } from './ContentRenderer';

const { useState, useRef, useEffect } = React;

export const Collapsible = ({ title, initiallyOpen = false, content }: CollapsibleBlock) => {
    const [isOpen, setIsOpen] = useState(initiallyOpen);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen && contentRef.current) {
            const height = contentRef.current.scrollHeight;
            setContentHeight(height);
        } else {
            setContentHeight(0);
        }
    }, [isOpen, content]); // Re-calculate on content change too

    // A simple re-calculation on window resize
    useEffect(() => {
        const handleResize = () => {
            if (isOpen && contentRef.current) {
                setContentHeight(contentRef.current.scrollHeight);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isOpen]);

    return (
        <div className={`collapsible-container ${isOpen ? 'open' : ''}`}>
            <button className="collapsible-trigger" onClick={toggleOpen} aria-expanded={isOpen}>
                <span className="collapsible-title">{title}</span>
                <span className="collapsible-icon" aria-hidden="true" />
            </button>
            <div 
                className="collapsible-content-wrapper" 
                style={{ height: `${contentHeight}px` }}
            >
                <div ref={contentRef} className="collapsible-content">
                    {/* The nested ContentRenderer is what allows any block type to be inside a collapsible */}
                    <ContentRenderer content={content} />
                </div>
            </div>
        </div>
    );
};
