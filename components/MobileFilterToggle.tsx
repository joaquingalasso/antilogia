import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const MobileFilterToggle = ({ onClick }: { onClick: () => void }) => {
    const { t } = useLanguage();
    const filterIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>;

    return (
        <button onClick={onClick} className="mobile-filter-toggle" aria-label={t('openFilters')} title={t('openFilters')}>
            {filterIcon}
        </button>
    );
};
