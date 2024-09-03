import React from "react";
import TitleSubtitle from "./titleSubtitle";
import "../styles/sectionCustomer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./button";
import quotesLogo from "../assets/images/sectionCostumer/double-quotes.png";
import { Navigation, Autoplay } from "swiper/modules";  // Adicione o módulo Autoplay
import tesimonaljson from "../jsons/testimonials.json";

const TestimonialCard = ({ name, testimonial, logo }) => {
  return (
    <div className="testimonial-card">
      <img src={quotesLogo} alt="quotes" className="testimonial-quote" />
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
    <section className="sectionImage sectionCustomer" id="sectionCustomer">
      <TitleSubtitle
        title="Depoimentos"
        subtitle="Saiba quem são nossos parceiros, e o que têm a dizer sobre nós"
      />
      <div className="swiperContainer">
        <Swiper
          className="mySwiper"
          spaceBetween={35}
          slidesPerView={4}
          navigation={{}}
          modules={[Navigation, Autoplay]}  // Inclua o módulo Autoplay
          style={{ padding: '0px 35px' }}
          loop={true}
          autoplay={{
            delay: 1500, 
            disableOnInteraction: false,
          }}
        >
          {tesimonaljson.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button text="Estou Interessado" nextSection=".faqSection" />
    </section>
  );
};

export default Customer;
