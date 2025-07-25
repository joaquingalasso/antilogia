import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FilterAsideProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    categories: string[];
    activeTag: string;
    onTagChange: (tag: string) => void;
    tags: { tag: string; count: number }[];
}

export const FilterAside = ({ activeFilter, onFilterChange, categories, activeTag, onTagChange, tags }: FilterAsideProps) => {
    const { t } = useLanguage();
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
        </aside>
    );
};
