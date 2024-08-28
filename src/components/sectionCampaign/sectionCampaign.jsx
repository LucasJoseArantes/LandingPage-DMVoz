import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '../button';
import CampaignSlide from './campaignSlide';


const SectionCampaign = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true
    };

    return (
        <section className='sectionCampaign'>
            <Slider {...settings}>
                {/* Primeira Sessão */}
                <CampaignSlide 
                    videoId="your-video-id" 
                    title="Campanha"
                    firstDescription={`
                        Trouxemos uma voz poderosa e envolvente para a campanha "Liquida Tudo AnaShopping".
                    `}
                    secondDescription={`
                        Com a expertise em locução e produção vocal, nossa voz destacou as ofertas com clareza e 
                        entusiasmo, capturando a atenção dos consumidores e impulsionando as vendas.
                    `}
                />

                {/* Adicione mais slides conforme necessário */}
            </Slider>
            <Button text="Estou Interessado" nextSection=".sectionCustomer"/>
        </section>
    );
};

export default SectionCampaign;
