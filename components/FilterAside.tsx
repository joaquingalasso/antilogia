import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FilterAsideProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    categories: string[];
    activeTag: string;
    onTagChange: (tag: string) => void;
    tags: { tag: string; count: number }[];
    archives: { key: string; year: number; month: string; count: number }[];
    activeArchive: string;
    onArchiveChange: (key: string) => void;
    selectedArchiveYear: number | null;
    availableArchiveYears: number[];
    onArchiveYearChange: (direction: 'next' | 'prev') => void;
}

export const FilterAside = ({ 
    activeFilter, onFilterChange, categories, 
    activeTag, onTagChange, tags, 
    archives, activeArchive, onArchiveChange,
    selectedArchiveYear, availableArchiveYears, onArchiveYearChange
}: FilterAsideProps) => {
    const { t } = useLanguage();

    const currentYearIndex = selectedArchiveYear ? availableArchiveYears.indexOf(selectedArchiveYear) : -1;
    const canGoToNextYear = currentYearIndex > 0;
    const canGoToPrevYear = currentYearIndex < availableArchiveYears.length - 1;

    return (
        <aside className="filter-aside" aria-label="Filtros y búsqueda">
            <div className="filter-group">
                <h3>{t('categories')}</h3>
                <button onClick={() => onFilterChange('All')} className={activeFilter === 'All' ? 'active' : ''}>{t('allCategories')}</button>
                {categories.map(category => (
                    <button key={category} onClick={() => onFilterChange(category)} className={activeFilter === category ? 'active' : ''}>{t(category)}</button>
                ))}
            </div>
            <div className="filter-group">
                <h3>{t('tags')}</h3>
                <div className="tags-list-filter">
                    {tags.map(({ tag, count }) => (
                        <button key={tag} onClick={() => onTagChange(tag)} className={`tag-filter-item ${activeTag === tag ? 'active' : ''}`}>
                            <span className="tag-count">{count}</span>
                            <span className="tag-name">{t(tag)}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div className="filter-group">
                <h3>{t('archive')}</h3>
                {selectedArchiveYear && availableArchiveYears.length > 0 && (
                     <div className="archive-year-selector">
                        <button 
                            className="year-nav-button" 
                            onClick={() => onArchiveYearChange('prev')}
                            disabled={!canGoToPrevYear}
                            aria-label="Año anterior"
                        >
                            &#9664;
                        </button>
                        <span className="current-year">{selectedArchiveYear}</span>
                        <button 
                            className="year-nav-button" 
                            onClick={() => onArchiveYearChange('next')}
                            disabled={!canGoToNextYear}
                            aria-label="Año siguiente"
                        >
                            &#9654;
                        </button>
                    </div>
                )}
                <div className="archive-list">
                    {archives.map(({ key, month, count }) => (
                        <button 
                            key={key} 
                            onClick={() => onArchiveChange(key)}
                            className={`archive-item ${activeArchive === key ? 'active' : ''}`}
                        >
                            <span className="archive-date">{month}</span>
                            <span className="archive-count">{count}</span>
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
};