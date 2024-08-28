import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import Button from '../button';
import CampaignSlide from './campaignSlide';

const campaigns = [
    {
        videoId: 'your-video-id-1',
        title: 'Campanha 1',
        firstDescription: "Trouxemos uma voz poderosa e envolvente para a campanha 'Liquida Tudo AnaShopping'.",
        secondDescription: "Com a expertise em locução e produção vocal, nossa voz destacou as ofertas com clareza e entusiasmo, capturando a atenção dos consumidores e impulsionando as vendas."
    },
    {
        videoId: 'your-video-id-2',
        title: 'Campanha 2',
        firstDescription: "Trouxemos uma voz poderosa e envolvente para a campanha 'Liquida Tudo AnaShopping'.",
        secondDescription: "Com a expertise em locução e produção vocal, nossa voz destacou as ofertas com clareza e entusiasmo, capturando a atenção dos consumidores e impulsionando as vendas."
    },
];

const SectionCampaign = () => (
    <section className="sectionCampaign">
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation]}
            style={{ maxWidth: '1200px'}}
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
            <Button text="Estou Interessado" nextSection=".sectionCustomer" />
        </div>
    </section>
);

export default SectionCampaign;
