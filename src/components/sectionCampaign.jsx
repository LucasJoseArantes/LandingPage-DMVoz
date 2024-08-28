import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from './button';
import '../styles/sectionCampaign.css';

const SectionCampaign = () => {
    const settings = {
        dots: true,
        infinite: false,
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
                <div className='sectionCampaign_div'>
                    <div className='sectionCampaign__content'>
                        <div className='sectionCampaign__video'>
                            <iframe 
                                src="https://www.youtube.com/embed/your-video-id" 
                                title="Liquida Tudo AnaShopping"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className='sectionCampaign__text'>
                            <h2>Campanhas</h2>
                            <p>
                                Trouxemos uma voz poderosa e envolvente para a campanha <b>"Liquida Tudo AnaShopping"</b>.
                            </p>
                            <p>
                                Com a expertise em locução e produção vocal, nossa voz destacou as ofertas
                                com clareza e entusiasmo, capturando a atenção dos consumidores e impulsionando as vendas.
                            </p>
                        </div>
                    </div>
                </div>
            </Slider>
            <Button text="Estou Interessado" nextSection=".sectionCustomer"/>
        </section>
    );
};

export default SectionCampaign;
