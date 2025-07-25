import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Story, Theme, OrnamentBlock } from '../types';

interface StoryCardProps {
  story: Story;
  onSelect: (story: Story) => void;
  theme: Theme;
}

const GalleryOrnament = ({ ornament }: { ornament: OrnamentBlock }) => {
    const { variant = 'default', value } = ornament;

    switch (variant) {
        case 'character':
            return <>{value}</>;
        case 'svg':
            if (value?.endsWith('.svg')) {
                // It's a file path, use it as a mask
                return <span className="ornament-svg-wrapper" style={{ maskImage: `url(${value})`, WebkitMaskImage: `url(${value})` }}></span>;
            }
            // It's inline SVG markup
            return <span className="ornament-svg-wrapper" dangerouslySetInnerHTML={{ __html: value || '' }} />;
        case 'default':
        default:
            return <>{'✾'}</>;
    }
};

export const StoryCard = ({ story, onSelect, theme }: StoryCardProps) => {
    const { t } = useLanguage();
    const storyColor = story.color[theme];
    const ornamentStyleForList = { color: storyColor };
    const cardStyle = {
      '--story-accent-color': storyColor,
      '--story-icon-url': `url("${story.icon}")`,
    } as React.CSSProperties;
    
    const date = new Date(story.date);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const formattedDate = `${day}-${month}-${year}`;

    return (
      <article className="story-card" onClick={() => onSelect(story)} style={cardStyle}>
        <div className="story-card-grid-ornament" aria-hidden="true">
          <GalleryOrnament ornament={story.ornament} />
        </div>
        <div className="story-card-icon" aria-hidden="true"></div>
        <div className="story-card-content">
          <div className="story-card-text-wrapper">
            <div className="story-card-tags">
                {story.tags.slice(0, 3).map(tag => <span key={tag} className="story-card-tag">{t(tag)}</span>)}
            </div>
            <div className="story-card-title-wrapper">
              <span className="story-card-ornament-list" style={ornamentStyleForList} aria-hidden="true">
                <GalleryOrnament ornament={story.ornament} />
              </span>
              <h3 className="story-card-title">{story.title}</h3>
            </div>
            <p className="story-card-tagline">{story.tagline}</p>
          </div>
          <p className="story-card-date">{formattedDate}</p>
        </div>
      </article>
    );
};