import React from 'react';
import Button from './button';
import '../styles/sectionOne.css';

const SectionOne = () => {
    return (
        <section className='sectionImage sectionOne'>
            <div className='mainTitle'>
                <div className='lamp-image image-effect' ></div>
                <h1>Transforme suas <b>ideias</b> em realidade com a <b>nossa voz</b></h1>
                <div className='sound-image image-effect'></div>
            </div>
            <p>Locução profissional para eventos, rádio, televisão e muito mais....</p>
            <Button text='Conheça Nosso Trabalho' nextSection=".sectionCampaign" />
        </section>
    );
};

export default SectionOne;