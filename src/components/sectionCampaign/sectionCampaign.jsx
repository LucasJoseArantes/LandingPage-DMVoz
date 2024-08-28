import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '../button';
import CampaignSlide from './campaignSlide';

const SectionCampaign = () => (
    <section className="sectionCampaign">
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ maxWidth: '1200px'}}
        >
            <SwiperSlide>
                <CampaignSlide 
                    videoId="your-video-id" 
                    title="Campanha 1"
                    firstDescription="Trouxemos uma voz poderosa e envolvente para a campanha 'Liquida Tudo AnaShopping'."
                    secondDescription="Com a expertise em locução e produção vocal, nossa voz destacou as ofertas com clareza e entusiasmo, capturando a atenção dos consumidores e impulsionando as vendas."
                />
            </SwiperSlide>
            <SwiperSlide>
                <CampaignSlide 
                    videoId="your-video-id" 
                    title="Campanha 2"
                    firstDescription="Trouxemos uma voz poderosa e envolvente para a campanha 'Liquida Tudo AnaShopping'."
                    secondDescription="Com a expertise em locução e produção vocal, nossa voz destacou as ofertas com clareza e entusiasmo, capturando a atenção dos consumidores e impulsionando as vendas."
                />
            </SwiperSlide>
        </Swiper>
        <div className="sectionCampaign__button">
            <Button text="Estou Interessado" nextSection=".sectionCustomer" />
        </div>
    </section>
);

export default SectionCampaign;
