
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { LanguageProvider } from './contexts/LanguageContext';

// Import stylesheets directly for bundler processing
import './styles/global.css';
import './styles/navbar.css';
import './styles/layout.css';
import './styles/scroll-progress.css';
import './styles/story-gallery.css';
import './styles/featured-stories.css';
import './styles/story-view.css';
import './styles/content-elements.css';
import './styles/asides.css';
import './styles/about-page.css';
import './styles/mobile.css';


const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </React.StrictMode>
    );
}