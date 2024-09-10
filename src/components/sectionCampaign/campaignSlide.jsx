import React from 'react';
import '../../styles/sectionCampaign.css';

const CampaignSlide = ({ videoId, title, firstDescription, secondDescription }) => (
    <div className="sectionCampaign__content">
        <div className="sectionCampaign__video">
            <iframe 
                src={`https://www.youtube.com/embed/${videoId}`} 
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="sectionCampaign__iframe"
            />
        </div>
        <div className="sectionCampaign__text">
            <h2 className='sectionTitle'>{title}</h2>
            <p>{firstDescription}</p>
            <p>{secondDescription}</p>
        </div>
    </div>
);

export default CampaignSlide;
