import * as React from 'react';

interface LinkPreviewProps {
    url: string;
}

export const LinkPreview = ({ url }: LinkPreviewProps) => {
    let domain: string;
    try {
        domain = new URL(url).hostname;
    } catch (e) {
        domain = url;
    }

    const linkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
        </svg>
    );

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="link-preview-card">
            <div className="link-preview-icon">
                {linkIcon}
            </div>
            <div className="link-preview-content">
                <p className="link-preview-title">{domain}</p>
                <p className="link-preview-url">{url}</p>
            </div>
        </a>
    );
};