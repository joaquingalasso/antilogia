import * as React from 'react';

interface StoryGroupHeaderProps {
    month: string;
    year: number;
}

export const StoryGroupHeader = ({ month, year }: StoryGroupHeaderProps) => {
    return (
        <div className="story-group-header">
            <h4>{month} {year}</h4>
        </div>
    );
};
