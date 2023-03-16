import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams()
    return (
        <>
            <h1>This is EventDetailPage</h1>
            <p>Event ID: {params.event_id}</p>
        </>
    );
};

export default EventDetailPage;