import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Timeline } from './Timeline';
import { aboutData, timelineEvents, skills, socialLinks } from '../data/about';
import { MailIcon } from './Icons';
import type { Theme } from '../types';

interface AboutPageProps {
    theme: Theme;
}

const Section = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <section className={`about-section ${className}`}>{children}</section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="about-section-title">{children}</h2>
);


export const AboutPage = ({ theme }: AboutPageProps) => {
    const { t } = useLanguage();
    
    const avatarSrc = aboutData.avatar[theme];

    return (
        <article className="view about-page-container">
            <header className="about-hero">
                <img src={avatarSrc} alt={t('authorName')} className="about-avatar" />
                <h1 className="about-title">{t('aboutTitle')}</h1>
                <p className="about-subtitle">{t('aboutSubtitle')}</p>
            </header>

            <Section>
                <SectionTitle>{t('aboutIntroTitle')}</SectionTitle>
                <div className="about-intro-text">
                    <p>{t('aboutIntroP1')}</p>
                    <p>{t('aboutIntroP2')}</p>
                </div>
            </Section>

            <Section>
                <SectionTitle>{t('aboutTimelineTitle')}</SectionTitle>
                <Timeline type="timeline" events={timelineEvents} />
            </Section>

            <Section>
                <SectionTitle>{t('aboutSkillsTitle')}</SectionTitle>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3>{t('aboutSkillsDesign')}</h3>
                        <div className="skill-tags">
                            {skills.design.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3>{t('aboutSkillsDev')}</h3>
                        <div className="skill-tags">
                            {skills.development.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                        </div>
                    </div>
                     <div className="skill-category">
                        <h3>{t('aboutSkillsOther')}</h3>
                        <div className="skill-tags">
                            {skills.other.map(skill => <span key={skill} className="skill-tag">{t(skill)}</span>)}
                        </div>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionTitle>{t('aboutProjectsTitle')}</SectionTitle>
                 <div className="about-intro-text">
                    <p>{t('aboutProjectsP1')}</p>
                </div>
                <div className="social-links-grid">
                    {socialLinks.map(({ name, url, icon: Icon }) => (
                        <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="social-link-button">
                            <Icon />
                            <span>{name}</span>
                        </a>
                    ))}
                </div>
            </Section>

            <Section className="cta-section">
                <SectionTitle>{t('aboutContactTitle')}</SectionTitle>
                <p>{t('aboutContactP1')}</p>
                <a href={`mailto:${aboutData.email}`} className="cta-button">
                    <MailIcon width={20} height={20}/>
                    <span>{t('contactButton')}</span>
                </a>
            </Section>

        </article>
    );
};