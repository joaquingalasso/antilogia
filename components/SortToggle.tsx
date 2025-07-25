import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { SortOrder } from '../types';

interface SortToggleProps {
    currentOrder: SortOrder;
    onOrderChange: (order: SortOrder) => void;
}

export const SortToggle = ({ currentOrder, onOrderChange }: SortToggleProps) => {
    const { t } = useLanguage();
    const isNewest = currentOrder === 'newest';
    const toggleOrder = () => onOrderChange(isNewest ? 'oldest' : 'newest');
    const title = t(isNewest ? 'sortNewest' : 'sortOldest');

    const newestIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5h4" /><path d="M11 9h7" /><path d="M11 13h10" /><path d="m3 17 3 3 3-3" /><path d="M6 20V4" />
        </svg>
    );

    const oldestIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5h10" /><path d="M11 9h7" /><path d="M11 13h4" /><path d="m3 7 3-3 3 3" /><path d="M6 4v16" />
        </svg>
    );

    return (
        <button onClick={toggleOrder} className="control-toggle" aria-label={title} title={title}>
            {isNewest ? oldestIcon : newestIcon}
        </button>
    );
};
