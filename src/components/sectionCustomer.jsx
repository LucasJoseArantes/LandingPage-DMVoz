import React from 'react';
import TitleSubtitle from './titleSubtitle';
import '../styles/sectionCustomer.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from './button';
import vasconcelosLogo from '../assets/images/sectionCostumer/vasconcelos.png';
import culturaFmlogo from '../assets/images/sectionCostumer/cultura_fm.png';
import startLogo from '../assets/images/sectionCostumer/start.png';
import unicredLogo from '../assets/images/sectionCostumer/unicred.png';
import { Navigation } from 'swiper/modules';

const testimonials = [
    {
        name: 'Arroz Vasconcelos',
        testimonial: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
        logo: vasconcelosLogo,
    },
    {
        name: 'Rádio Cultura FM',
        testimonial: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
        logo: culturaFmlogo,
    },
    {
        name: 'Unicred',
        testimonial: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
        logo: startLogo,
    },
    {
        name: 'Start Química',
        testimonial: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
        logo: unicredLogo,
    },
    {
        name: 'Cliente restante 1',
        testimonial: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
        logo: unicredLogo,
    },
    {
        name: 'Cliente restante 2',
        testimonial: 'Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.',
        logo: unicredLogo,
    },
];

const TestimonialCard = ({ name, testimonial, logo }) => {
    return (
        <div className="testimonial-card">
            <p className="testimonial-text">"{testimonial}"</p>
            <div className="testimonial-footer">
                <img src={logo} alt={name} className="testimonial-logo" />
                <h3 className="testimonial-name">{name}</h3>
            </div>
        </div>
    );
};

const Customer = () => {
    return (
        <section className='sectionImage sectionCustomer'>
            <TitleSubtitle title="Depoimentos" subtitle="Saiba quem são nossos parceiros, e o que têm a dizer sobre nós" />
            <Swiper
                className="mySwiper"
                spaceBetween={30}
                slidesPerView={4}
                navigation={{
                }}
                modules={[Navigation]}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard {...testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Button text="Estou Interessado" />
        </section>
    );
};

export default Customer;
