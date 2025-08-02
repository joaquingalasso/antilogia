import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { GalleryViewType } from '../types';

interface ViewToggleProps {
    currentView: GalleryViewType;
    onViewChange: (view: GalleryViewType) => void;
}

export const ViewToggle = ({ currentView, onViewChange }: ViewToggleProps) => {
    const { t } = useLanguage();
    const isGrid = currentView === 'grid';
    const toggleView = () => onViewChange(isGrid ? 'list' : 'grid');
    const title = t(isGrid ? 'switchToListView' : 'switchToGridView');

    const gridIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>;
    const listIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>;

    return (
        <button onClick={toggleView} className="control-toggle" aria-label={title} title={title}>
            {isGrid ? listIcon : gridIcon}
        </button>
    );
};
