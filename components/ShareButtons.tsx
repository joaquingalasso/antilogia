import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const ShareButtons = ({ storyUrl, title }: { storyUrl: string; title: string }) => {
    const { t } = useLanguage();
    const encodedUrl = encodeURIComponent(storyUrl);
    const encodedTitle = encodeURIComponent(`${t('shareMessage')}"${title}"`);

    const copyLink = () => {
        navigator.clipboard.writeText(storyUrl).then(() => {
            alert(t('linkCopied'));
        }, () => {
            alert(t('copyLinkError'));
        });
    };

    const twitterIcon = <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
    const facebookIcon = <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>;
    const linkIcon = <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>;

    return (
        <div className="share-buttons">
            <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noopener noreferrer" aria-label={t('shareOnTwitter')} className="share-button twitter">
                {twitterIcon}
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label={t('shareOnFacebook')} className="share-button facebook">
                {facebookIcon}
            </a>
            <button onClick={copyLink} aria-label={t('copyLink')} className="share-button copy-link">
                {linkIcon}
            </button>
        </div>
    );
};
