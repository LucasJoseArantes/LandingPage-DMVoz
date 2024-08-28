import React from 'react';
import '../../styles/sectionCampaign.css';

const CampaignSlide = ({ videoId, title, firstDescription, secondDescription }) => {
    return (
        <div className='sectionCampaign_div'>
            <div className='sectionCampaign__content'>
                <div className='sectionCampaign__video'>
                    <iframe 
                        src={`https://www.youtube.com/embed/${videoId}`} 
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='sectionCampaign__text'>
                    <h2>{title}</h2>
                    <p>{firstDescription}</p>
                    <p>{secondDescription}</p>
                </div>
            </div>
        </div>
    );
};

export default CampaignSlide;
