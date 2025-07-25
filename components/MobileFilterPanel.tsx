import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FilterAside } from './FilterAside';

interface FilterAsideProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    categories: string[];
    activeTag: string;
    onTagChange: (tag: string) => void;
    tags: { tag: string; count: number }[];
}

interface MobileFilterPanelProps extends FilterAsideProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MobileFilterPanel = ({
    isOpen,
    onClose,
    ...props
}: MobileFilterPanelProps) => {
    const { t } = useLanguage();
    return (
        <div className={`mobile-filter-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} role="dialog" aria-modal="true" aria-hidden={!isOpen}>
            <aside className="mobile-filter-panel" onClick={(e) => e.stopPropagation()}>
                <header className="mobile-filter-header">
                    <h3>{t('filter')}</h3>
                    <button onClick={onClose} className="close-button" aria-label={t('close')}>&times;</button>
                </header>
                <div className="mobile-filter-content">
                    <FilterAside {...props} />
                </div>
            </aside>
        </div>
    );
};
