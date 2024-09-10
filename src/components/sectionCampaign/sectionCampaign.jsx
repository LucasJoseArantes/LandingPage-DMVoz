import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Button from '../button';
import CampaignSlide from './campaignSlide';
import campaigns from '../../jsons/campaigns.json';

const SectionCampaign = () => (
    <section className="sectionCampaign" id="sectionCampaign">
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation]}
            style={{ width: '100%'}}
        >
            {campaigns.map((campaign, index) => (
                <SwiperSlide key={index}>
                    <CampaignSlide 
                        videoId={campaign.videoId} 
                        title={campaign.title}
                        firstDescription={campaign.firstDescription}
                        secondDescription={campaign.secondDescription}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
        <div className="sectionCampaign__button">
            <Button text="Estou Interessado" nextSection=".sectionAudio" />
        </div>
    </section>
);

export default SectionCampaign;
