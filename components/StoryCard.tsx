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
            return <span className="ornament-svg-wrapper" dangerouslySetInnerHTML={{ __html: value || '' }} />;
        case 'default':
        default:
            return <>{'✾'}</>;
    }
};

export const StoryCard = ({ story, onSelect, theme }: StoryCardProps) => {
    const { t } = useLanguage();
    const storyColor = story.color[theme];
    const cardStyle = {
      '--story-accent-color': storyColor,
      '--story-icon-url': `url("${story.backgrounds.cardIcon}")`,
    } as React.CSSProperties;
    
    const date = new Date(story.date);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const formattedDate = `${day}-${month}-${year}`;
    const category = t(story.category);

    return (
      <article className="story-card" onClick={() => onSelect(story)} style={cardStyle}>
        
        {/* These elements are styled for Grid View specifically */}
        <div className="story-card-grid-header">
            <span className="story-card-category">{category}</span>
            <span className="story-card-date">{formattedDate}</span>
        </div>

        <div className="story-card-grid-ornament" aria-hidden="true">
          <GalleryOrnament ornament={story.ornament} />
        </div>
        <div className="story-card-icon" aria-hidden="true"></div>
        
        {/* This content container is used by both views, but its children are rearranged */}
        <div className="story-card-content">
          <div className="story-card-text-wrapper">
            
            {/* New container for the top row in list view (Icon+Title vs Date) */}
            <div className="story-card-list-top-row">
              <div className="story-card-title-wrapper">
                <span className="story-card-ornament-list" style={{ color: storyColor }} aria-hidden="true">
                  <GalleryOrnament ornament={story.ornament} />
                </span>
                <h3 className="story-card-title">{story.title}</h3>
              </div>
              <p className="story-card-date-list">{formattedDate}</p>
            </div>

            {/* Tagline is now a direct child, for full width */}
            <p className="story-card-tagline">{story.tagline}</p>
            
            {/* Bottom row now contains tags and category */}
            <div className="story-card-bottom-row">
              <div className="story-card-tags">
                  {story.tags.slice(0, 3).map(tag => <span key={tag} className="story-card-tag">{t(tag)}</span>)}
              </div>
              <span className="story-card-category-list">{category}</span>
            </div>
          </div>
        </div>
      </article>
    );
};