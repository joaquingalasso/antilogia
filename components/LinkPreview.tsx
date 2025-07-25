import * as React from 'react';
import { GoogleGenAI } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';

const { useState, useEffect } = React;

// Initialize the AI client outside of the component to prevent re-initialization on re-renders.
// This assumes process.env.API_KEY is available in the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface LinkPreviewProps {
    url: string;
}

interface PreviewData {
    title: string;
    description: string;
    image: string;
    error?: string;
}

const LinkPreviewSkeleton = () => (
    <div className="link-preview-card skeleton">
        <div className="link-preview-image-skeleton" />
        <div className="link-preview-content">
            <div className="link-preview-text-skeleton title" />
            <div className="link-preview-text-skeleton" />
            <div className="link-preview-text-skeleton short" />
            <div className="link-preview-url-skeleton" />
        </div>
    </div>
);

export const LinkPreview = ({ url }: LinkPreviewProps) => {
    const [data, setData] = useState<PreviewData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { t } = useLanguage();

    useEffect(() => {
        const fetchPreview = async () => {
            setIsLoading(true);
            setData(null);

            const prompt = `Analyze the content at the URL: ${url}. Provide a concise title, a brief description (1-2 sentences), and the most representative image URL. Respond ONLY with a JSON object containing "title", "description", and "image" keys. If you cannot generate a preview, respond with a JSON object containing an "error" key explaining the issue.`;

            try {
                const response = await ai.models.generateContent({
                    model: "gemini-2.5-flash",
                    contents: prompt,
                    config: {
                        tools: [{ googleSearch: {} }],
                    },
                });

                const text = response.text.trim();
                // Find the start and end of the JSON object
                const startIndex = text.indexOf('{');
                const endIndex = text.lastIndexOf('}') + 1;
                const jsonString = text.substring(startIndex, endIndex);

                const parsedData = JSON.parse(jsonString) as PreviewData;
                setData(parsedData);
            } catch (error) {
                console.error("Error fetching link preview:", error);
                setData({
                    title: "Error",
                    description: t('linkPreviewError'),
                    image: '',
                    error: (error as Error).message,
                });
            } finally {
                setIsLoading(false);
            }
        };

        fetchPreview();
    }, [url, t]);

    if (isLoading) {
        return <LinkPreviewSkeleton />;
    }

    if (!data || data.error) {
        return (
            <div className="link-preview-card error">
                <div className="link-preview-content">
                    <p className="link-preview-title">{t('linkPreviewErrorTitle')}</p>
                    <p className="link-preview-description">
                        {t('linkPreviewErrorDesc')}
                    </p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="link-preview-url">
                        {url}
                    </a>
                </div>
            </div>
        );
    }
    
    const domain = new URL(url).hostname;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="link-preview-card">
            {data.image && (
                 <div className="link-preview-image">
                    <img src={data.image} alt={data.title} loading="lazy"/>
                </div>
            )}
            <div className="link-preview-content">
                <p className="link-preview-title">{data.title}</p>
                <p className="link-preview-description">{data.description}</p>
                <p className="link-preview-url">{domain}</p>
            </div>
        </a>
    );
};