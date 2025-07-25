import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { StoryDetailsMobile } from './StoryDetailsMobile';
import { ContentRenderer } from './ContentRenderer';
import { ShareButtons } from './ShareButtons';
import { RelatedStoriesMobile } from './RelatedStoriesMobile';
import { Giscus } from './Giscus';
import type { Story, Theme } from '../types';

interface StoryViewProps {
  story: Story | null;
  onBack: () => void;
  isVisible: boolean;
  allStories: Story[];
  onSelectStory: (story: Story) => void;
  onTagSelect: (tag: string) => void;
  theme: Theme;
}

export const StoryView = ({ story, onBack, isVisible, allStories, onSelectStory, onTagSelect, theme }: StoryViewProps) => {
  const { t, language } = useLanguage();
  if (!story) return null;
  
  const storyUrl = `${window.location.origin}${window.location.pathname}#/story/${story.id}`;
  const headerStyle = {
    '--story-icon-url': `url("${story.icon}")`
  } as React.CSSProperties;

  const date = new Date(story.date);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  const formattedDate = `${day}-${month}-${year}`;

  return (
    <article className={`view story-view ${!isVisible ? 'hidden' : ''}`} aria-hidden={!isVisible}>
      <div className="story-view-top-bar">
          <button onClick={onBack} className="back-button">
            ← {t('backToAnthology')}
          </button>
          <LanguageToggle />
      </div>

      <header className="story-header" style={headerStyle}>
        <p className="date">{formattedDate}</p>
        <h1>{story.title}</h1>
        <p className="tagline">{story.tagline}</p>
        <StoryDetailsMobile currentStory={story} onTagSelect={onTagSelect} />
      </header>
      
      <ContentRenderer content={story.content} />

      <div className="story-sharing-area" style={headerStyle}>
        <ShareButtons storyUrl={storyUrl} title={story.title} />
        <RelatedStoriesMobile currentStory={story} allStories={allStories} onSelectStory={onSelectStory} />
      </div>

      <section className="comments-section">
        <h2>{t('comments')}</h2>
        <Giscus storyId={story.id} theme={theme} lang={language} />
      </section>
    </article>
  );
};