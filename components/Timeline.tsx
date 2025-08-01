import * as React from 'react';
import type { TimelineBlock } from '../types';

export const Timeline = ({ events }: TimelineBlock) => {
    return (
        <div className="timeline-container">
            {events.map((event, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <p className="timeline-date">{event.date}</p>
                        <h4 className="timeline-title" dangerouslySetInnerHTML={{ __html: event.title }}></h4>
                        <p className="timeline-description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
                    </div>
                </div>
            ))}
        </div>
    );
};
