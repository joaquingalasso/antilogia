import * as React from 'react';

interface LinkPreviewProps {
    url: string;
    title: string;
    description: string;
    image: string;
}

export const LinkPreview = ({ url, title, description, image }: LinkPreviewProps) => {
    const domain = new URL(url).hostname;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="link-preview-card">
            {image && (
                 <div className="link-preview-image">
                    <img src={image} alt={title} loading="lazy"/>
                </div>
            )}
            <div className="link-preview-content">
                <p className="link-preview-title">{title}</p>
                <p className="link-preview-description">{description}</p>
                <p className="link-preview-url">{domain}</p>
            </div>
        </a>
    );
};