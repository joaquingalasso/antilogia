import * as React from 'react';
import type { ContentBlock, OrnamentBlock } from '../types';
import { CustomAudioPlayer } from './CustomAudioPlayer';
import { LinkPreview } from './LinkPreview';

const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
        case 'paragraph':
            return <p key={index} dangerouslySetInnerHTML={{ __html: block.html }} />;
        
        case 'heading':
            // Only using h2 for story subheadings for now
            return <h2 key={index} dangerouslySetInnerHTML={{ __html: block.html }} />;

        case 'blockquote':
            return <blockquote key={index} className={block.style || ''} dangerouslySetInnerHTML={{ __html: block.html }} />;

        case 'list':
            const items = block.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />);
            return block.style === 'ordered' ? <ol key={index}>{items}</ol> : <ul key={index}>{items}</ul>;

        case 'dialogue':
             return (<div key={index}>
                <p className="dialogue" dangerouslySetInnerHTML={{ __html: block.html }} />
                <p className="dialogue-attribution">{block.attribution}</p>
            </div>);

        case 'image':
            return (
                <figure key={index} className="content-figure">
                    <img src={block.src} alt={block.alt} />
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
            );
        
        case 'gallery':
            return (
                 <figure key={index} className="content-figure">
                    <div className="image-gallery">
                        {block.images.map((img, i) => <img key={i} src={img.src} alt={img.alt} />)}
                    </div>
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
            );

        case 'video':
            const videoSrc = block.provider === 'youtube'
                ? `https://www.youtube.com/embed/${block.src}`
                : block.src;
            return (
                <figure key={index} className="content-figure">
                    <div className="video-wrapper">
                        {block.provider === 'youtube' ? (
                            <iframe 
                                src={videoSrc} 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen 
                                title="Embedded YouTube video"
                            />
                        ) : (
                            <video controls src={videoSrc} />
                        )}
                    </div>
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
            );

        case 'audio':
            return <CustomAudioPlayer key={index} src={block.src} title={block.title} caption={block.caption} />;
        
        case 'code':
            return (
                <figure key={index} className="content-figure code-figure">
                    <pre><code className={`language-${block.language}`}>{block.code.trim()}</code></pre>
                    {block.caption && <figcaption>{block.caption}</figcaption>}
                </figure>
            );
        
        case 'ornament': {
            const { variant = 'default', value, caption } = block as OrnamentBlock;

            const renderOrnamentContent = () => {
                switch (variant) {
                    case 'character':
                        return <span>{value}</span>;
                    case 'svg':
                        return <span className="ornament-svg" dangerouslySetInnerHTML={{ __html: value || '' }} />;
                    case 'default':
                    default:
                        return <span />;
                }
            };
            
            const ornamentDiv = (
                <div className="cul-de-lampe">
                    {renderOrnamentContent()}
                </div>
            );

            if (caption) {
                return (
                    <figure key={index} className="content-figure ornament-figure">
                        {ornamentDiv}
                        <figcaption>{caption}</figcaption>
                    </figure>
                );
            }
            
            return React.cloneElement(ornamentDiv, { key: index });
        }
        
        case 'linkPreview':
            return <LinkPreview key={index} {...block} />;

        default:
            return null;
    }
};

export const ContentRenderer = ({ content }: { content: ContentBlock[] }) => {
    return (
        <div className="story-content">
            {content.map(renderBlock)}
        </div>
    );
};