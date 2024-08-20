import React from 'react';
import Button from './Button';

const SectionOne = () => {
    return (
        <div className='MainTitle'>
            <div className='lamp-image image-effect' ></div>
            <h1>Transforme suas <b>ideias</b> em realidade com a <b>nossa voz</b></h1>
            <div className='sound-image image-effect'></div>
            <Button text='Conheça Nosso Trabalho' />
            <p>Locução profissional para eventos, rádio, televisão e muito mais...</p>
            
        </div>
    );
};

export default SectionOne;